import { motion } from "framer-motion";
import { Sparkles, MessageSquareText } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { HeroSearch, Suggestion } from "./HeroSearch";
import { HeroCTAs } from "./HeroCTAs";
import { HeroTrending } from "./HeroTrending";

type RassooqHeroProps = {
  userName?: string;
  trending?: string[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onSearch?: (q: string) => void;
  fetchSuggestions?: (q: string) => Promise<Suggestion[]>;
  enableParallax?: boolean;
  seasonalCta?: string;
  showAssistant?: boolean;
  onAssistantClick?: () => void;
};

export function RassooqHero({
  userName,
  trending = ["Headphones", "Smartphones", "Fragrances", "Home Decor"],
  onPrimaryClick,
  onSecondaryClick,
  onSearch,
  fetchSuggestions,
  enableParallax = true,
  seasonalCta,
  showAssistant = true,
  onAssistantClick,
}: RassooqHeroProps) {
  const title = userName ? `Welcome back, ${userName}` : "RASSOOQ";

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden" role="region" aria-labelledby="rassooq-hero-title">
      <HeroBackground enableParallax={enableParallax} />

      <div className="absolute top-0 left-0 right-0 h-16 md:h-20 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-nav pointer-events-none" />

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-[1100px]">
            <motion.div
              className="inline-flex items-center gap-2 glass-premium px-5 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              Premium Marketplace Experience
            </motion.div>

            <motion.h1
              id="rassooq-hero-title"
              className="font-display font-bold leading-[0.95] text-[clamp(2.4rem,8vw,6rem)] mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                {title}
              </span>
            </motion.h1>

            <motion.p
              className="text-[clamp(1.1rem,2.4vw,1.75rem)] text-foreground/90 font-medium mb-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Where Innovation meets Commerce
            </motion.p>

            <motion.p
              className="text-foreground/70 text-[clamp(0.95rem,1.8vw,1.15rem)] mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Discover authentic products and artisan stories with an immersive, AI‑powered marketplace.
            </motion.p>

            <HeroSearch onSearch={(q) => onSearch?.(q)} fetchSuggestions={fetchSuggestions} trending={trending} />

            <HeroCTAs
              onPrimary={onPrimaryClick}
              onSecondary={onSecondaryClick}
              primaryText="Shop Now"
              secondaryText={seasonalCta || "Shop New Arrivals"}
            />

            <HeroTrending items={trending} onPick={(q) => onSearch?.(q)} />

            {showAssistant && (
              <button
                aria-label="Open AI assistant"
                onClick={onAssistantClick}
                className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-floating hover:shadow-glow transition-spring hover:scale-[1.05] flex items-center justify-center"
              >
                <MessageSquareText className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}



