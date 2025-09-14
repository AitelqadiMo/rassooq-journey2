import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Store, CheckCircle, DollarSign, Users, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SellRequest = () => {
  const { isAuthenticated, role } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    contactEmail: '',
    contactPhone: '',
    businessDescription: '',
    estimatedMonthlyVolume: '',
    productCategories: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real app, this would submit to your backend
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      toast({
        title: "Application Submitted!",
        description: "We'll review your seller application and get back to you within 24-48 hours.",
      });
      
      // Reset form
      setFormData({
        businessName: '',
        businessType: '',
        contactEmail: '',
        contactPhone: '',
        businessDescription: '',
        estimatedMonthlyVolume: '',
        productCategories: '',
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (role === 'seller') {
    return (
      <div className="min-h-screen bg-background pt-16 sm:pt-20 md:pt-24">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">You're Already a Seller!</h1>
            <p className="text-muted-foreground mb-8">
              You already have seller access. Go to your seller dashboard to manage your products and orders.
            </p>
            <Button onClick={() => navigate('/seller/dashboard')} size="lg">
              Go to Seller Dashboard
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-20 md:pt-24">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Store className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Start Selling on Rassooq</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of sellers and reach millions of customers. 
            Turn your business into a success story with Rassooq.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <DollarSign className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Low Fees</CardTitle>
              <CardDescription>
                Competitive commission rates with no hidden costs
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Huge Audience</CardTitle>
              <CardDescription>
                Reach millions of active shoppers across the region
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Growth Tools</CardTitle>
              <CardDescription>
                Analytics, marketing tools, and dedicated support
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Application Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Seller Application</CardTitle>
            <CardDescription>
              {isAuthenticated 
                ? "Fill out the form below to request seller access."
                : "Please sign in first to submit a seller application."
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {!isAuthenticated ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  You need to be signed in to submit a seller application.
                </p>
                <Button onClick={() => navigate('/login')} size="lg">
                  Sign In to Continue
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your Business Name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Input
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Retail, Wholesale, Manufacturing"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactEmail">Contact Email *</Label>
                    <Input
                      id="contactEmail"
                      name="contactEmail"
                      type="email"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      required
                      placeholder="business@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contactPhone">Contact Phone</Label>
                    <Input
                      id="contactPhone"
                      name="contactPhone"
                      type="tel"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="businessDescription">Business Description *</Label>
                  <Textarea
                    id="businessDescription"
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your business, what you sell, and your experience..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="productCategories">Product Categories *</Label>
                  <Input
                    id="productCategories"
                    name="productCategories"
                    value={formData.productCategories}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Electronics, Fashion, Home & Garden"
                  />
                </div>

                <div>
                  <Label htmlFor="estimatedMonthlyVolume">Estimated Monthly Sales Volume</Label>
                  <Input
                    id="estimatedMonthlyVolume"
                    name="estimatedMonthlyVolume"
                    value={formData.estimatedMonthlyVolume}
                    onChange={handleInputChange}
                    placeholder="e.g., $10,000 - $50,000"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Seller Application"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default SellRequest;

