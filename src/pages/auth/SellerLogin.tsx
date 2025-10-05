import { SimpleAuthenticator } from '@/components/auth/SimpleAuthenticator';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Store, ArrowRight } from 'lucide-react';

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
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center mb-8">
              <Store className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">Seller Portal</h1>
              <p className="text-muted-foreground">Sign in to manage your products and orders</p>
            </div>

            <Card>
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

            <SimpleAuthenticator onAuthSuccess={() => window.location.reload()} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerLogin;


