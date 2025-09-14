import { AppProvider } from "@/contexts/AppContext";
import { AdminProvider } from "@/contexts/AdminContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@/components/routing/ProtectedRoute";
import { AppShell } from "@/components/layout/app-shell";

// Buyer Routes
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NotAuthorized from "./pages/NotAuthorized";
import ProductDetails from "./pages/ProductDetails";
import CategoryResults from "./pages/CategoryResults";
import SearchResults from "./pages/SearchResults";
import Cart from "./pages/Cart";

// Checkout Flow
import Checkout from "./pages/Checkout";
import CheckoutAddress from "./pages/CheckoutAddress";
import CheckoutDelivery from "./pages/CheckoutDelivery";
import CheckoutPayment from "./pages/CheckoutPayment";
import CheckoutReview from "./pages/CheckoutReview";
import OrderConfirmation from "./pages/OrderConfirmation";

// User Account
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import AddressBook from "./pages/AddressBook";
import Returns from "./pages/Returns";
import ReturnRequest from "./pages/ReturnRequest";
import ReturnStatus from "./pages/ReturnStatus";
import SouqPlus from "./pages/SouqPlus";
import Wishlist from "./pages/Wishlist";

// Seller Portal
import SellerOnboarding from "./pages/SellerOnboarding";
import SellerDashboard from "./pages/SellerDashboard";
import SellerCatalog from "./pages/SellerCatalog";
import SellerProducts from "./pages/SellerProducts";
import SellerProductForm from "./pages/SellerProductForm";
import SellerOrders from "./pages/SellerOrders";
import SellerOrderDetails from "./pages/SellerOrderDetails";
import SellerReturns from "./pages/SellerReturns";
import SellerInventory from "./pages/SellerInventory";
import SellerPromotions from "./pages/SellerPromotions";
import SellerPayouts from "./pages/SellerPayouts";
import SellerStaff from "./pages/SellerStaff";
import SellerMarketing from "./pages/SellerMarketing";
import SellerSettings from "./pages/SellerSettings";
import SellerHelp from "./pages/SellerHelp";
import SellerShop from "./pages/SellerShop";

// Admin Backoffice
import AdminOverview from "./pages/AdminOverview";
import AdminCatalog from "./pages/AdminCatalog";
import AdminOrders from "./pages/AdminOrders";
import AdminReturns from "./pages/AdminReturns";
import AdminSellers from "./pages/AdminSellers";
import AdminUsers from "./pages/AdminUsers";
import AdminFinance from "./pages/AdminFinance";
import AdminCMS from "./pages/AdminCMS";
import AdminSystem from "./pages/AdminSystem";
import DocsHub from "./pages/DocsHub";

// Static Pages
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Help from "./pages/Help";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

// New Auth Pages
import SellRequest from "./pages/SellRequest";
import Unauthorized from "./pages/Unauthorized";
import BuyerLogin from "./pages/auth/BuyerLogin";
import SellerLogin from "./pages/auth/SellerLogin";
import AdminLogin from "./pages/auth/AdminLogin";
import { SimpleAuthenticator } from "./components/auth/SimpleAuthenticator";
import { useAuth } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const AppContent = () => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading Rassooq...</p>
        </div>
      </div>
    );
  }

  // Don't force authentication - allow guest browsing
  // Authentication will be handled by protected routes

  return (
    <BrowserRouter>
      <Routes>
            {/* Buyer Storefront Routes */}
            <Route path="/" element={<AppShell><Index /></AppShell>} />
            
            {/* Product & Category Routes */}
            <Route path="/product/:id" element={<AppShell><ProductDetails /></AppShell>} />
            <Route path="/p/:slug" element={<AppShell><ProductDetails /></AppShell>} />
            <Route path="/category/:category" element={<AppShell><CategoryResults /></AppShell>} />
            <Route path="/c/:slug" element={<AppShell><CategoryResults /></AppShell>} />
            <Route path="/search" element={<AppShell><SearchResults /></AppShell>} />
            
            {/* Cart & Checkout Flow */}
            <Route path="/cart" element={<AppShell><Cart /></AppShell>} />
            <Route path="/checkout" element={<AppShell><Checkout /></AppShell>} />
            <Route path="/checkout/address" element={<AppShell><CheckoutAddress /></AppShell>} />
            <Route path="/checkout/delivery" element={<AppShell><CheckoutDelivery /></AppShell>} />
            <Route path="/checkout/payment" element={<AppShell><CheckoutPayment /></AppShell>} />
            <Route path="/checkout/review" element={<AppShell><CheckoutReview /></AppShell>} />
            <Route path="/order/:orderId" element={<AppShell><OrderConfirmation /></AppShell>} />
            <Route path="/order-confirmation/:orderId" element={<AppShell><OrderConfirmation /></AppShell>} />
            
            {/* Authentication Routes */}
            <Route path="/login" element={<BuyerLogin />} />
            <Route path="/login/buyer" element={<BuyerLogin />} />
            <Route path="/login/seller" element={<SellerLogin />} />
            <Route path="/login/admin" element={<AdminLogin />} />
            <Route path="/account/login" element={<BuyerLogin />} />
            <Route path="/register" element={<BuyerLogin />} />
            <Route path="/account/register" element={<BuyerLogin />} />
            
            {/* Seller Request Route */}
            <Route path="/sell" element={<SellRequest />} />
            
            {/* Unauthorized Route */}
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/profile" element={<AppShell><Profile /></AppShell>} />
            <Route path="/account" element={<AppShell><Profile /></AppShell>} />
            <Route path="/orders" element={<AppShell><Orders /></AppShell>} />
            <Route path="/account/orders" element={<AppShell><Orders /></AppShell>} />
            <Route path="/account/wishlist" element={<AppShell><Wishlist /></AppShell>} />
            <Route path="/orders/:orderId" element={<AppShell><OrderDetails /></AppShell>} />
            <Route path="/account/orders/:orderId" element={<AppShell><OrderDetails /></AppShell>} />
            <Route path="/addresses" element={<AppShell><AddressBook /></AppShell>} />
            <Route path="/account/addresses" element={<AppShell><AddressBook /></AppShell>} />
            <Route path="/returns" element={<AppShell><Returns /></AppShell>} />
            <Route path="/account/returns" element={<AppShell><Returns /></AppShell>} />
            <Route path="/returns/request/:orderId" element={<AppShell><ReturnRequest /></AppShell>} />
            <Route path="/account/returns/new" element={<AppShell><ReturnRequest /></AppShell>} />
            <Route path="/returns/:returnId" element={<AppShell><ReturnStatus /></AppShell>} />
            <Route path="/account/returns/:returnId" element={<AppShell><ReturnStatus /></AppShell>} />
            <Route path="/plus" element={<AppShell><SouqPlus /></AppShell>} />
            <Route path="/rassooq-plus" element={<AppShell><SouqPlus /></AppShell>} />
            <Route path="/souq-plus" element={<AppShell><SouqPlus /></AppShell>} />
            <Route path="/seller/store/:id" element={<AppShell><SellerShop /></AppShell>} />
            
            {/* Seller Portal Routes (guarded) */}
            <Route path="/seller/dashboard" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerDashboard /></AppShell></ProtectedRoute>} />
            <Route path="/seller/catalog" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerCatalog /></AppShell></ProtectedRoute>} />
            <Route path="/seller/catalog/products" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerProducts /></AppShell></ProtectedRoute>} />
            <Route path="/seller/catalog/products/new" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerProductForm /></AppShell></ProtectedRoute>} />
            <Route path="/seller/catalog/products/:id" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerProductForm /></AppShell></ProtectedRoute>} />
            <Route path="/seller/orders" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerOrders /></AppShell></ProtectedRoute>} />
            <Route path="/seller/orders/:id" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerOrderDetails /></AppShell></ProtectedRoute>} />
            <Route path="/seller/returns" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerReturns /></AppShell></ProtectedRoute>} />
            <Route path="/seller/inventory" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerInventory /></AppShell></ProtectedRoute>} />
            <Route path="/seller/promotions" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerPromotions /></AppShell></ProtectedRoute>} />
            <Route path="/seller/payouts" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerPayouts /></AppShell></ProtectedRoute>} />
            <Route path="/seller/settings" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerSettings /></AppShell></ProtectedRoute>} />
            <Route path="/seller/staff" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerStaff /></AppShell></ProtectedRoute>} />
            <Route path="/seller/marketing" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerMarketing /></AppShell></ProtectedRoute>} />
            <Route path="/seller/messages" element={<ProtectedRoute requiredRole="seller"><AppShell><SellerHelp /></AppShell></ProtectedRoute>} />
            {/* Public seller help and onboarding */}
            <Route path="/seller/onboarding" element={<SellerOnboarding />} />
            <Route path="/seller/help" element={<SellerHelp />} />
            
            {/* Admin Backoffice Routes (guarded) */}
            <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AppShell><AdminOverview /></AppShell></ProtectedRoute>} />
            <Route path="/admin/overview" element={<ProtectedRoute requiredRole="admin"><AppShell><AdminOverview /></AppShell></ProtectedRoute>} />
            <Route path="/admin/catalog" element={<ProtectedRoute requiredRole="admin"><AppShell><AdminCatalog /></AppShell></ProtectedRoute>} />
            <Route path="/admin/orders" element={<ProtectedRoute requiredRole="admin"><AppShell><AdminOrders /></AppShell></ProtectedRoute>} />
            <Route path="/admin/returns" element={<ProtectedRoute requiredRole="admin"><AppShell><AdminReturns /></AppShell></ProtectedRoute>} />
            <Route path="/admin/sellers" element={<ProtectedRoute requiredRole="admin"><AppShell><AdminSellers /></AppShell></ProtectedRoute>} />
            <Route path="/admin/users" element={<ProtectedRoute requiredRole="admin"><AppShell><AdminUsers /></AppShell></ProtectedRoute>} />
            <Route path="/admin/finance" element={<ProtectedRoute requiredRole="admin"><AppShell><AdminFinance /></AppShell></ProtectedRoute>} />
            <Route path="/admin/cms" element={<ProtectedRoute requiredRole="admin"><AppShell><AdminCMS /></AppShell></ProtectedRoute>} />
            <Route path="/admin/system" element={<ProtectedRoute requiredRole="admin"><AppShell><AdminSystem /></AppShell></ProtectedRoute>} />
            
            {/* Static Pages */}
            <Route path="/about" element={<AppShell><About /></AppShell>} />
            <Route path="/faq" element={<AppShell><FAQ /></AppShell>} />
            <Route path="/help" element={<AppShell><Help /></AppShell>} />
            <Route path="/terms" element={<AppShell><Terms /></AppShell>} />
            <Route path="/privacy" element={<AppShell><Privacy /></AppShell>} />
            <Route path="/docs" element={<AppShell><DocsHub /></AppShell>} />
            
            {/* 403 and Catch-all */}
            <Route path="/403" element={<NotAuthorized />} />
            <Route path="*" element={<AppShell><NotFound /></AppShell>} />
          </Routes>
        </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AppProvider>
        <AdminProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <AppContent />
          </TooltipProvider>
        </AdminProvider>
      </AppProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
