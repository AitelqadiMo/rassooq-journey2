import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SimpleAuthenticator } from "@/components/auth/SimpleAuthenticator";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {
  const { user, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && role) {
      if (role === 'admin') navigate('/admin');
      else if (role === 'seller') navigate('/seller/dashboard');
      else navigate('/');
    }
  }, [user, role, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Create your account</h1>
            <p className="text-muted-foreground">Join Rassooq to shop and track orders</p>
          </div>
          <SimpleAuthenticator onAuthSuccess={() => window.location.reload()} initialMode="signup" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;