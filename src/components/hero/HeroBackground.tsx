import { motion, useScroll, useTransform } from "framer-motion";

type HeroBackgroundProps = {
  enableParallax?: boolean;
};

export function HeroBackground({ enableParallax = true }: HeroBackgroundProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, enableParallax ? -80 : 0]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        style={{ y }}
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        // @ts-ignore: CSS var string assignment
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, hsl(var(--secondary) / 0.20) 0%, transparent 50%), radial-gradient(circle at 90% 10%, hsl(var(--primary) / 0.20) 0%, transparent 55%), radial-gradient(circle at 50% 80%, hsl(var(--accent) / 0.20) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background/30 to-accent/10" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute block h-1.5 w-1.5 rounded-full bg-primary/25"
            style={{
              left: `${(i * 41) % 100}%`,
              top: `${(i * 73) % 100}%`,
              filter: "blur(0.5px)",
            }}
            animate={{ y: [-14, 10, -14], opacity: [0.25, 0.6, 0.25], scale: [0.9, 1.08, 0.9] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: (i % 7) * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}



