import React, { useState, useEffect } from 'react';
import { signIn, signUp, signOut, getCurrentUser, confirmSignUp } from 'aws-amplify/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface SimpleAuthenticatorProps {
  onAuthSuccess: (user: any) => void;
  initialMode?: 'signin' | 'signup' | 'confirm';
}

export const SimpleAuthenticator: React.FC<SimpleAuthenticatorProps> = ({ onAuthSuccess, initialMode = 'signin' }) => {
  const [mode, setMode] = useState<'signin' | 'signup' | 'confirm'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const user = await getCurrentUser();
      if (user) {
        onAuthSuccess(user);
      }
    } catch (error) {
      console.log('No authenticated user');
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signIn({ username: email, password });
      if (result.isSignedIn) {
        const user = await getCurrentUser();
        onAuthSuccess(user);
        toast({ title: 'Success', description: 'Signed in successfully!' });
      }
    } catch (error: any) {
      toast({ 
        title: 'Error', 
        description: error.message || 'Failed to sign in',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
          }
        }
      });
      setMode('confirm');
      toast({ title: 'Success', description: 'Please check your email for confirmation code' });
    } catch (error: any) {
      toast({ 
        title: 'Error', 
        description: error.message || 'Failed to sign up',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await confirmSignUp({
        username: email,
        confirmationCode
      });
      setMode('signin');
      toast({ title: 'Success', description: 'Account confirmed! Please sign in.' });
    } catch (error: any) {
      toast({ 
        title: 'Error', 
        description: error.message || 'Failed to confirm account',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleQuickLogin = async (testEmail: string, testPassword: string) => {
    setLoading(true);
    try {
      const result = await signIn({ username: testEmail, password: testPassword });
      if (result.isSignedIn) {
        const user = await getCurrentUser();
        onAuthSuccess(user);
        toast({ title: 'Success', description: 'Signed in successfully!' });
      }
    } catch (error: any) {
      toast({ 
        title: 'Error', 
        description: error.message || 'Failed to sign in',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-secondary/10 to-background p-4">
      <Card className="login-card w-full max-w-md p-2 rounded-2xl shadow-subtle">
        <CardHeader className="text-center">
          <CardTitle className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold">Welcome to Rassooq</CardTitle>
          <CardDescription className="font-light">
            {mode === 'signin' && 'Sign in to your account'}
            {mode === 'signup' && 'Create a new account'}
            {mode === 'confirm' && 'Confirm your account'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {mode === 'signin' && (
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-12"
                />
              </div>
              <Button type="submit" className="w-full h-12 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-glow" disabled={loading}>
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full h-12"
                onClick={() => setMode('signup')}
              >
                Create Account
              </Button>
            </form>
          )}

          {mode === 'signup' && (
            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  className="w-full h-12"
                />
              </div>
              <Button type="submit" className="w-full h-12 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-glow" disabled={loading}>
                {loading ? 'Creating Account...' : 'Sign Up'}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full h-12"
                onClick={() => setMode('signin')}
              >
                Back to Sign In
              </Button>
            </form>
          )}

          {mode === 'confirm' && (
            <form onSubmit={handleConfirm} className="space-y-4">
              <div>
                <Label htmlFor="code">Confirmation Code</Label>
                <Input
                  id="code"
                  type="text"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  required
                  className="w-full h-12"
                />
              </div>
              <Button type="submit" className="w-full h-12 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-glow" disabled={loading}>
                {loading ? 'Confirming...' : 'Confirm Account'}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full h-12"
                onClick={() => setMode('signin')}
              >
                Back to Sign In
              </Button>
            </form>
          )}

          {mode === 'signin' && (
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-muted-foreground mb-4 text-center">Quick Login (Test Users):</p>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs"
                  onClick={() => handleQuickLogin('admin@rassooq.com', 'AdminPass123!')}
                  disabled={loading}
                >
                  🛡️ Admin Login
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs"
                  onClick={() => handleQuickLogin('seller@rassooq.com', 'SellerPass123!')}
                  disabled={loading}
                >
                  🏪 Seller Login
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs"
                  onClick={() => handleQuickLogin('buyer@rassooq.com', 'BuyerPass123!')}
                  disabled={loading}
                >
                  🛒 Buyer Login
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

