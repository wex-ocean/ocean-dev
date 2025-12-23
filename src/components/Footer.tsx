import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-muted-foreground text-center xl:text-left">
            © 2025 Ganesh Bahadur Thapa. All rights reserved.
          </p>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="icon"
            className="glass hover:glass-strong"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
