import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';

interface AuthContextType {
  user: any | null;
  userGroups: string[];
  isLoading: boolean;
  isAuthenticated: boolean;
  role: 'buyer' | 'seller' | 'admin' | null;
  signOutUser: () => Promise<void>;
  refreshUser: () => Promise<void>;
  setUser: (user: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [userGroups, setUserGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUserGroups = (user: any): string[] => {
    if (!user) return [];
    
    try {
      // Try multiple ways to get groups
      const groups = user?.signInUserSession?.idToken?.payload?.['cognito:groups'] || 
                    user?.attributes?.['custom:groups'] ||
                    [];
      return Array.isArray(groups) ? groups : [];
    } catch (error) {
      console.error('Error extracting user groups:', error);
      return [];
    }
  };

  const refreshUser = async () => {
    try {
      setIsLoading(true);
      const currentUser = await getCurrentUser();
      console.log('Current user:', currentUser);
      setUser(currentUser);
      const groups = getUserGroups(currentUser);
      console.log('User groups:', groups);
      setUserGroups(groups);
    } catch (error) {
      console.log('No authenticated user:', error);
      setUser(null);
      setUserGroups([]);
    } finally {
      setIsLoading(false);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut();
      setUser(null);
      setUserGroups([]);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Determine user role based on groups or email
  const role = userGroups.includes('admin') ? 'admin' 
    : userGroups.includes('seller') ? 'seller' 
    : userGroups.includes('buyer') ? 'buyer'
    : user?.signInDetails?.loginId?.includes('admin') ? 'admin'
    : user?.signInDetails?.loginId?.includes('seller') ? 'seller'
    : user ? 'buyer'
    : null;

  useEffect(() => {
    // Initial user check
    refreshUser();

    // Listen for auth events
    const hubListenerCancel = Hub.listen('auth', ({ payload }) => {
      console.log('Auth event:', payload.event);
      switch (payload.event) {
        case 'signedIn':
          refreshUser();
          break;
        case 'signedOut':
          setUser(null);
          setUserGroups([]);
          break;
        case 'tokenRefresh':
          refreshUser();
          break;
      }
    });

    return () => hubListenerCancel();
  }, []);

  const value: AuthContextType = {
    user,
    userGroups,
    isLoading,
    isAuthenticated: !!user,
    role,
    signOutUser,
    refreshUser,
    setUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
