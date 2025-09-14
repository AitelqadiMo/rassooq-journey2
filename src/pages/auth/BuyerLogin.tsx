import { SimpleAuthenticator } from '@/components/auth/SimpleAuthenticator';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Customer Account</h1>
              <p className="text-muted-foreground">Sign in or create a new account</p>
            </div>
            <SimpleAuthenticator onAuthSuccess={() => window.location.reload()} initialMode="signup" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyerLogin;

