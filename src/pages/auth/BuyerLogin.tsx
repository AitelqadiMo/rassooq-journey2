import { SimpleAuthenticator } from '@/components/auth/SimpleAuthenticator';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BuyerLogin = () => {
  const { user, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && role) {
      // Redirect based on role after login
      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'seller') {
        navigate('/seller/dashboard');
      } else {
        navigate('/'); // buyer goes to homepage
      }
    }
  }, [user, role, navigate]);

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 flex items-center justify-center p-4">
      {/* Back to Home Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Button>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              RASSOOQ
            </h1>
          </button>
        </div>

        {/* Login Card */}
        <div className="glass-premium rounded-2xl p-8 shadow-floating">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Customer Account</h2>
            <p className="text-muted-foreground">Sign in or create a new account</p>
          </div>
          <SimpleAuthenticator onAuthSuccess={() => window.location.reload()} initialMode="signup" />
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <button onClick={() => navigate('/terms')} className="hover:text-primary transition-colors">Terms</button>
          <span className="mx-2">•</span>
          <button onClick={() => navigate('/privacy')} className="hover:text-primary transition-colors">Privacy</button>
          <span className="mx-2">•</span>
          <button onClick={() => navigate('/help')} className="hover:text-primary transition-colors">Help</button>
        </div>
      </div>
    </div>
  );
};

export default BuyerLogin;

