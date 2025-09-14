import React from "react";
import { RassooqLogo } from "@/components/ui/souq-logo";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Heart, Search, User, Mic } from "lucide-react";
import { useCart, useAppContext } from "@/contexts/AppContext";
import { useAuth as useAmplifyAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { RoleSwitcher } from "@/components/ui/role-switcher";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAmplifySearch } from "@/hooks/use-amplify-search";

export function TopBar() {
  const { user, isAuthenticated, signOutUser } = useAmplifyAuth();
  const { state, dispatch } = useAppContext();
  const { itemCount } = useCart();
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("all");
  const [suggestionsOpen, setSuggestionsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const navigate = useNavigate();
  const { results: productResults } = useAmplifySearch(query, 5);

  const submit = (e: React.FormEvent) => { e.preventDefault(); const q = query ? `?q=${encodeURIComponent(query)}`:''; setSuggestionsOpen(false); navigate(`/search${q}`)};

  const openMiniCart = () => {
    window.dispatchEvent(new Event('rassooq:open-mini-cart'));
  };

  return (
    <div className="sticky top-0 z-50 bg-card/70 backdrop-blur border-b will-change-transform" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 py-2 flex items-center gap-3">
        <button className="md:hidden" onClick={()=>document.querySelector('[data-sidebar=trigger]')?.dispatchEvent(new Event('click', { bubbles: true }))}>
          <span className="sr-only">Menu</span>
        </button>
        <RassooqLogo size="md" />

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 bg-card/95 backdrop-blur border rounded-lg shadow-card">
                  <div className="grid grid-cols-4 gap-6 min-w-[720px]">
                    <div>
                      <div className="font-semibold mb-2">Fashion</div>
                      <ul className="space-y-1 text-sm">
                        <li><button onClick={()=>navigate('/c/fashion')} className="hover:underline">Men</button></li>
                        <li><button onClick={()=>navigate('/c/fashion')} className="hover:underline">Women</button></li>
                        <li><button onClick={()=>navigate('/c/fashion')} className="hover:underline">Kids</button></li>
                        <li><button onClick={()=>navigate('/c/fashion')} className="hover:underline">Accessories</button></li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Electronics</div>
                      <ul className="space-y-1 text-sm">
                        <li><button onClick={()=>navigate('/c/electronics')} className="hover:underline">Mobiles</button></li>
                        <li><button onClick={()=>navigate('/c/electronics')} className="hover:underline">Laptops</button></li>
                        <li><button onClick={()=>navigate('/c/electronics')} className="hover:underline">Audio</button></li>
                        <li><button onClick={()=>navigate('/c/electronics')} className="hover:underline">Cameras</button></li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Home</div>
                      <ul className="space-y-1 text-sm">
                        <li><button onClick={()=>navigate('/c/home')} className="hover:underline">Living</button></li>
                        <li><button onClick={()=>navigate('/c/home')} className="hover:underline">Kitchen</button></li>
                        <li><button onClick={()=>navigate('/c/home')} className="hover:underline">Decor</button></li>
                        <li><button onClick={()=>navigate('/c/home')} className="hover:underline">Garden</button></li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Wellness & Crafts</div>
                      <ul className="space-y-1 text-sm">
                        <li><button onClick={()=>navigate('/c/beauty')} className="hover:underline">Beauty</button></li>
                        <li><button onClick={()=>navigate('/c/sports')} className="hover:underline">Sports</button></li>
                        <li><button onClick={()=>navigate('/c/handcrafts')} className="hover:underline">Handcrafts</button></li>
                        <li><button onClick={()=>navigate('/c/grocery')} className="hover:underline">Grocery</button></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuIndicator />
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <form onSubmit={submit} className="hidden md:flex flex-1 items-center gap-2 max-w-4xl mx-auto relative">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-40"><SelectValue placeholder="All"/></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="beauty">Beauty</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search for products, categories, or brands…" 
              value={query} 
              onChange={(e)=>{ setQuery(e.target.value); setSuggestionsOpen(e.target.value.length>1); }} 
              onFocus={()=> setSuggestionsOpen(query.length>1)}
              onBlur={()=> setTimeout(()=> setSuggestionsOpen(false), 150)}
              onKeyDown={(e)=>{
                if (!suggestionsOpen) return;
                if (e.key==='ArrowDown') { e.preventDefault(); setActiveIndex(i=>Math.min(i+1, 4)); }
                if (e.key==='ArrowUp') { e.preventDefault(); setActiveIndex(i=>Math.max(i-1, 0)); }
                if (e.key==='Enter') { e.preventDefault(); submit(e); }
              }}
              className="pl-9 pr-9"
            />
            <button type="button" aria-label="Voice search" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors">
              <Mic className="h-4 w-4" />
            </button>
            {suggestionsOpen && (
              <div role="listbox" className="absolute z-40 mt-2 w-full bg-card/95 backdrop-blur border rounded-xl shadow-floating overflow-hidden">
                <div className="px-3 py-2 text-xs uppercase text-muted-foreground">Products</div>
                {productResults.slice(0,5).map((p, idx)=> (
                  <button 
                    key={p.id}
                    role="option"
                    aria-selected={activeIndex===idx}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-muted ${activeIndex===idx?'bg-muted':''}`}
                    onMouseDown={(e)=>{ e.preventDefault(); navigate(`/product/${p.id}`) }}
                  >{p.title}</button>
                ))}
                <div className="px-3 py-2 text-xs uppercase text-muted-foreground border-t">Categories</div>
                {[ 'Electronics', 'Fashion', 'Home', 'Beauty' ].map((s)=> (
                  <button 
                    key={s}
                    role="option"
                    className="w-full text-left px-3 py-2 text-sm hover:bg-muted"
                    onMouseDown={(e)=>{ e.preventDefault(); navigate(`/search?q=${encodeURIComponent(s.toLowerCase())}`) }}
                  >{s}</button>
                ))}
                <div className="px-3 py-2 text-xs uppercase text-muted-foreground border-t">Brands</div>
                {[ 'Apple', 'Samsung', 'Nike' ].map((s)=> (
                  <button 
                    key={s}
                    role="option"
                    className="w-full text-left px-3 py-2 text-sm hover:bg-muted"
                    onMouseDown={(e)=>{ e.preventDefault(); navigate(`/search?q=${encodeURIComponent(s)}`) }}
                  >{s}</button>
                ))}
              </div>
            )}
          </div>
          <Button type="submit">Search</Button>
        </form>

        {/* Mobile search entry */}
        <form onSubmit={submit} className="md:hidden flex-1 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products…" value={query} onChange={(e)=>setQuery(e.target.value)} className="pl-9" />
          </div>
          <Button type="submit" size="sm">Go</Button>
        </form>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:block">
            <RoleSwitcher />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" aria-haspopup="menu" aria-label="Language">
                {state.language==='ar' ? 'عربي' : state.language==='fr' ? 'FR' : 'EN'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Language</DropdownMenuLabel>
              <DropdownMenuItem onClick={()=>dispatch({ type:'SET_LANGUAGE', payload: 'en' })}>🇬🇧 English</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>dispatch({ type:'SET_LANGUAGE', payload: 'ar' })}>🇸🇦 العربية</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>dispatch({ type:'SET_LANGUAGE', payload: 'fr' })}>🇫🇷 Français</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="sm" onClick={()=>navigate('/account/wishlist')} className="relative">
            <Heart className="h-5 w-5" />
          </Button>
          {/* Cart button removed to avoid duplication with floating cart */}
          {!isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Button size="sm" className="px-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-medium hover:shadow-glow" onClick={()=>navigate('/login')} data-testid="nav-login">Login</Button>
              <Button size="sm" className="px-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-medium hover:shadow-glow" onClick={()=>navigate('/register')} data-testid="nav-signup">Sign Up</Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="ghost">For Business</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={()=>navigate('/login/seller')}>Seller Login</DropdownMenuItem>
                  <DropdownMenuItem onClick={()=>navigate('/login/admin')}>Admin Login</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="relative flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={()=>navigate('/account')}><User className="h-4 w-4 mr-1"/> Account</Button>
              <Button variant="ghost" size="sm" onClick={()=>navigate('/account/orders')}>Orders</Button>
              <Button variant="ghost" size="sm" onClick={signOutUser}>Logout</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


