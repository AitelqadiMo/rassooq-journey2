import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeroCTAsProps = {
  onPrimary?: () => void;
  onSecondary?: () => void;
  primaryText?: string;
  secondaryText?: string;
};

export function HeroCTAs({
  onPrimary,
  onSecondary,
  primaryText = "Shop Now",
  secondaryText = "Shop New Arrivals",
}: HeroCTAsProps) {
  return (
    <motion.div
      className="mt-8 flex flex-col sm:flex-row gap-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
    >
      <Button
        aria-label={primaryText}
        onClick={onPrimary}
        className="h-12 px-8 rounded-2xl bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-glow transition-spring hover:scale-[1.02]"
      >
        {primaryText}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <Button
        aria-label={secondaryText}
        variant="outline"
        onClick={onSecondary}
        className="h-12 px-8 rounded-2xl glass-card hover:glass-premium text-foreground"
      >
        {secondaryText}
      </Button>
    </motion.div>
  );
}


