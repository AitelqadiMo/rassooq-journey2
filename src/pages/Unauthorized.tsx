import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ShieldX, Home } from 'lucide-react';

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-20 md:pt-24">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <ShieldX className="h-24 w-24 text-red-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-8">
            You don't have permission to access this page. 
            Please contact an administrator if you believe this is an error.
          </p>
          <Button onClick={() => navigate('/')} className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Unauthorized;


