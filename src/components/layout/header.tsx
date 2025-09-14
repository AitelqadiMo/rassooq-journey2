import { Search, User, Globe, Bell, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SouqLogo } from "@/components/ui/souq-logo";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "@/contexts/AppContext";
import { useAuth } from "@/contexts/AuthContext";
// import { products, categories } from "@/data/mock-data";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ShellContext } from "@/components/layout/app-shell";
import { RoleSwitcher } from "@/components/ui/role-switcher";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const Header = () => {
  const inShell = React.useContext(ShellContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch } = useAppContext();
  const { user, isAuthenticated, role, signOutUser } = useAuth();
  // Mini cart moved to AppShell for a single global cart entry point
  const [query, setQuery] = React.useState("");
  const [searchFocused, setSearchFocused] = React.useState(false);
  
  // Suggestions temporarily disabled - will implement with real data
  const suggestions = React.useMemo(() => {
    return [] as Array<{ label: string; href: string; type: 'product' | 'category' }>;
  }, [query]);

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setSearchFocused(false);
    }
  };

  if (inShell) return null;

  const isAuthRoute = location.pathname.startsWith('/login') || location.pathname.startsWith('/register');

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full"
    >
      {/* Ultra-thin glass backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-b border-border/10" />
      
      <div className="relative container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4 md:py-6 gap-4 sm:gap-6">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
          
          {/* Logo with enhanced hover effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => navigate('/')}
            className="cursor-pointer"
          >
            <SouqLogo 
              size="lg" 
              className="hidden md:block" 
            />
            <SouqLogo 
              size="md" 
              className="md:hidden" 
            />
          </motion.div>
          
          {/* Enhanced Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-3xl xl:max-w-4xl mx-4 lg:mx-12">
            <div className="relative w-full">
              <motion.form 
                onSubmit={onSearchSubmit} 
                className="relative"
                animate={{ 
                  scale: searchFocused ? 1.02 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 z-10" />
                <Input 
                  placeholder="Search for products, categories, or brands…"
                  className="pl-14 pr-6 py-4 glass-premium border-0 shadow-floating focus:shadow-glow focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-base font-medium rounded-2xl"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                />
              </motion.form>
              {/* Voice search (visual affordance only for now) */}
              <button aria-label="Voice search" className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors">
                <Mic className="h-4 w-4" />
              </button>
              
              {/* Enhanced Search Suggestions */}
              <AnimatePresence>
                {suggestions.length > 0 && searchFocused && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute z-50 mt-3 w-full glass-premium border-0 shadow-floating rounded-2xl overflow-hidden backdrop-blur-xl"
                  >
                    {suggestions.map((s, index) => (
                      <motion.div 
                        key={s.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-6 py-4 hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 flex items-center gap-4 group"
                        onMouseDown={() => navigate(s.href)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Search className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{s.label}</p>
                          <p className="text-xs text-muted-foreground capitalize">{s.type}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Right Actions - Enhanced */}
          <div className="flex items-center gap-5">
            {/* Desktop role switcher */}
            <div className="hidden lg:block">
              <RoleSwitcher />
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search - Mobile */}
              <Button 
                variant="ghost" 
                size="sm" 
                  className="md:hidden glass-card h-10 w-10 sm:h-12 sm:w-12 hover:shadow-medium hover:scale-105 transition-all duration-200 rounded-2xl"
              >
                <Search className="h-5 w-5" />
              </Button>
              
              {/* Language Toggle */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="glass-card h-10 w-10 sm:h-12 sm:w-12 hover:shadow-medium hover:bg-primary/10 transition-all duration-200 rounded-2xl" 
                  onClick={() => dispatch({ 
                    type: 'SET_LANGUAGE', 
                    payload: state.language === 'en' ? 'ar' : state.language === 'ar' ? 'fr' : 'en' 
                  })}
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </motion.div>

              {/* Notifications */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="glass-card h-12 w-12 hover:shadow-medium hover:bg-primary/10 transition-all duration-200 rounded-2xl relative" 
                >
                  <Bell className="h-5 w-5" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
                </Button>
              </motion.div>

              {/* Account */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {isAuthenticated ? (
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="glass-card h-10 px-3 sm:h-12 sm:px-4 hover:shadow-medium hover:bg-primary/10 transition-all duration-200 rounded-2xl flex items-center gap-2" 
                      onClick={signOutUser}
                      title="Sign Out"
                    >
                      <User className="h-5 w-5" />
                      <span className="hidden sm:inline text-sm">Account</span>
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">For Business</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Business</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigate('/login/seller')}>Seller Login</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/login/admin')}>Admin Login</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    {!isAuthRoute && (
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="h-10 sm:h-12 rounded-2xl px-4 bg-gradient-to-r from-orange-500/80 to-yellow-500/80 text-white hover:from-orange-500 hover:to-yellow-500 shadow-medium transition-all" 
                        onClick={() => navigate('/login')} 
                        data-testid="account-btn"
                      >
                        <User className="h-5 w-5 mr-2" />
                        <span className="text-sm font-medium">Login / Register</span>
                      </Button>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Mobile Search Bar - Enhanced */}
        <AnimatePresence>
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden pb-3 sm:pb-4"
          >
            <form onSubmit={onSearchSubmit} className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for products, categories, or brands…"
                className="pl-14 pr-4 py-4 glass-premium border-0 shadow-floating focus:shadow-glow transition-all duration-300 rounded-2xl"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button aria-label="Voice search" className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors">
                <Mic className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.header>
  );
};