import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mic, Search } from "lucide-react";

export type Suggestion = { label: string; value: string; type: "product" | "category" | "brand" };

type HeroSearchProps = {
  onSearch: (q: string) => void;
  fetchSuggestions?: (q: string) => Promise<Suggestion[]>;
  trending?: string[];
};

export function HeroSearch({ onSearch, fetchSuggestions, trending = [] }: HeroSearchProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (query.trim().length < 2) {
        setSuggestions([]);
        return;
      }
      if (fetchSuggestions) {
        const res = await fetchSuggestions(query);
        if (!cancelled) setSuggestions(res.slice(0, 8));
      } else {
        const base: Suggestion[] = [
          { label: `Search “${query}”`, value: query, type: "product" },
          ...trending.slice(0, 5).map((t) => ({ label: t, value: t, type: "category" as const })),
        ];
        setSuggestions(base);
      }
      setOpen(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [query, trending, fetchSuggestions]);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const q = suggestions[activeIdx]?.value || query.trim();
    if (!q) return;
    onSearch(q);
    setOpen(false);
  };

  return (
    <motion.form
      onSubmit={(e) => submit(e)}
      className="relative max-w-3xl"
      role="search"
      aria-label="Smart search"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/50" />
      <input
        ref={inputRef}
        aria-label="Search products, categories, or brands"
        placeholder="Search products, categories, or brands…"
        className="w-full h-14 pl-12 pr-12 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-white/30 shadow-card focus:outline-none focus:ring-2 focus:ring-primary/30 transition-smooth"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setOpen(query.trim().length > 1)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        onKeyDown={(e) => {
          if (!open) return;
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIdx((i) => Math.min(i + 1, Math.max(suggestions.length - 1, 0)));
          }
          if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIdx((i) => Math.max(i - 1, 0));
          }
          if (e.key === "Enter") {
            e.preventDefault();
            submit();
          }
        }}
      />
      <button
        type="button"
        aria-label="Voice search"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-primary transition-smooth"
      >
        <Mic className="h-5 w-5" />
      </button>

      {open && suggestions.length > 0 && (
        <div
          role="listbox"
          className="absolute z-40 mt-2 w-full rounded-2xl border border-white/40 bg-card/90 backdrop-blur-xl shadow-floating overflow-hidden"
        >
          {suggestions.map((s, idx) => (
            <button
              key={`${s.type}-${s.value}-${idx}`}
              role="option"
              aria-selected={activeIdx === idx}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-muted/50 transition-smooth ${
                activeIdx === idx ? "bg-muted/60" : ""
              }`}
              onMouseDown={(e) => {
                e.preventDefault();
                onSearch(s.value);
                setOpen(false);
              }}
            >
              <span className="font-medium">{s.label}</span>
              <span className="ml-2 text-xs uppercase text-foreground/50">{s.type}</span>
            </button>
          ))}
        </div>
      )}
    </motion.form>
  );
}


