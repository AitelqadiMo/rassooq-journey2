import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated, role } = useAuth();

  useEffect(() => {
    if (isAuthenticated && role) {
      // Redirect based on role
      switch (role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'seller':
          navigate('/seller/dashboard');
          break;
        case 'buyer':
        default:
          navigate('/');
          break;
      }
    }
  }, [isAuthenticated, role, navigate]);

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-20 md:pt-24">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome to Rassooq</h1>
            <p className="text-muted-foreground">Sign in to your account or create a new one</p>
          </div>
          
          <div className="bg-card rounded-lg shadow-lg p-6">
            <Authenticator
              signUpAttributes={['email']}
              socialProviders={[]}
              variation="modal"
              components={{
                Header() {
                  return (
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-semibold">Sign In</h2>
                    </div>
                  );
                },
              }}
            >
              {({ signOut, user }) => (
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-4">Welcome back!</h2>
                  <p className="text-muted-foreground mb-4">
                    You are signed in as {user?.signInDetails?.loginId}
                  </p>
                  <button
                    onClick={signOut}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </Authenticator>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;