import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'buyer' | 'seller' | 'admin';
  requireAuth?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole, 
  requireAuth = true 
}) => {
  const { isAuthenticated, role, isLoading } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // If authentication is required but user is not authenticated
  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If specific role is required but user doesn't have it
  if (requiredRole && role !== requiredRole) {
    // Admin can access everything
    if (role === 'admin') {
      return <>{children}</>;
    }
    
    // Redirect based on what they tried to access
    if (requiredRole === 'seller') {
      return <Navigate to="/sell" replace />;
    }
    
    if (requiredRole === 'admin') {
      return <Navigate to="/unauthorized" replace />;
    }
    
    // Default redirect for buyers or unauthenticated users
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};