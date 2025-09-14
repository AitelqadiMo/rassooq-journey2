import { motion } from "framer-motion";

type HeroTrendingProps = {
  items: string[];
  onPick: (q: string) => void;
  label?: string;
};

export function HeroTrending({ items, onPick, label = "Trending now" }: HeroTrendingProps) {
  if (!items?.length) return null;
  return (
    <motion.div
      className="mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      aria-label={label}
    >
      <div className="mb-2 text-sm text-foreground/60">{label}</div>
      <div className="flex flex-wrap gap-2">
        {items.slice(0, 8).map((t) => (
          <button
            key={t}
            className="px-3 py-1.5 text-xs rounded-full bg-muted/60 hover:bg-muted transition-smooth hover:shadow-subtle"
            onClick={() => onPick(t)}
          >
            {t}
          </button>
        ))}
      </div>
    </motion.div>
  );
}


