import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      if (scrolled) {
        gsap.to(header, {
          height: '70px',
          width: '92%',
          borderRadius: '50px',
          marginTop: '12px',
          backdropFilter: 'blur(20px)',
          background: 'rgba(5, 49, 131, 0.15)',
          border: '1px solid rgba(168, 85, 247, 0.2)',
          boxShadow: '0 8px 32px rgba(168, 85, 247, 0.15)',
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        gsap.to(header, {
          height: '85px',
          width: '100%',
          borderRadius: '0px',
          marginTop: '0px',
          backdropFilter: 'blur(12px)',
          background: 'rgba(0, 0, 0, 0.6)',
          border: '1px solid rgba(168, 85, 247, 0.1)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[85px] z-50 flex items-center justify-between px-6 xl:px-12 transition-all"
        style={{
          backdropFilter: 'blur(12px)',
          background: 'rgba(0, 0, 0, 0.6)',
          border: '1px solid rgba(168, 85, 247, 0.1)',
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <img src="/images/logo.png" alt="Ocean Logo" className="h-10 xl:h-12 w-auto object-contain" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contact
          </button>
        </nav>

        {/* Hire Me Button */}
        <button
          onClick={() => scrollToSection('contact')}
          className="hidden lg:block px-6 xl:px-8 py-2.5 xl:py-3 bg-gradient-to-r from-primary to-primary-glow text-white rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all font-semibold"
        >
          Hire Me
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-[85px] left-0 right-0 glass-strong border-t border-border p-6 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/5"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/5"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/5"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/5"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/5"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/5"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary-glow text-white rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all font-semibold mt-4"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </>
  );
}
