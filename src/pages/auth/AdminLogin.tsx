import { SimpleAuthenticator } from '@/components/auth/SimpleAuthenticator';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Shield, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const AdminLogin = () => {
  const { user, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && role) {
      if (role === 'admin') {
        navigate('/admin');
      } else {
        // Non-admin users shouldn't be here
        navigate('/unauthorized');
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
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">Admin Portal</h1>
              <p className="text-muted-foreground">Administrative access to Rassooq platform</p>
            </div>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                This is a restricted area. Only authorized administrators can access this portal.
              </AlertDescription>
            </Alert>

            <SimpleAuthenticator onAuthSuccess={() => window.location.reload()} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLogin;


