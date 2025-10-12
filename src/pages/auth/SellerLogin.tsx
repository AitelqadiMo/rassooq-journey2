import { SimpleAuthenticator } from '@/components/auth/SimpleAuthenticator';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Store, ArrowRight, ArrowLeft } from 'lucide-react';

const SellerLogin = () => {
  const { user, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && role) {
      if (role === 'seller' || role === 'admin') {
        navigate('/seller/dashboard');
      } else {
        // If not seller/admin, redirect to seller request page
        navigate('/sell');
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

      <div className="w-full max-w-md space-y-6">
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

        {/* Header */}
        <div className="text-center">
          <Store className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Seller Portal</h2>
          <p className="text-muted-foreground">Sign in to manage your products and orders</p>
        </div>

        {/* Not a Seller Card */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Not a seller yet?</CardTitle>
            <CardDescription>
              Join thousands of sellers on Rassooq and start your e-commerce journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate('/sell')}
            >
              Apply to Become a Seller
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Login Card */}
        <div className="glass-premium rounded-2xl p-8 shadow-floating">
          <SimpleAuthenticator onAuthSuccess={() => window.location.reload()} />
        </div>

        {/* Footer Links */}
        <div className="text-center text-sm text-muted-foreground">
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

export default SellerLogin;


