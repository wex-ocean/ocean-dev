import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Coffee, ArrowUp } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/wex-ocean',
    color: 'hover:text-[#333]',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/ganesh-thapa',
    color: 'hover:text-[#0077b5]',
  },
  {
    name: 'X (Twitter)',
    icon: Twitter,
    href: 'https://twitter.com/wex_ocean',
    color: 'hover:text-[#1DA1F2]',
  },
  {
    name: 'Medium',
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
    href: 'https://medium.com/@oceanney5555',
    color: 'hover:text-[#00ab6c]',
  },
  {
    name: 'Buy Me a Coffee',
    icon: Coffee,
    href: 'https://buymeacoffee.com/ganeshthapa',
    color: 'hover:text-[#FFDD00]',
  },
];

const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative z-20 bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt="Ganesh Thapa Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              WordPress Developer specializing in custom themes, plugins, and
              high-performance web solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>📍</span>
              <span>Imadol, Lalitpur, Nepal</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Follow me on social media and stay updated with my latest work and
              insights.
            </p>
            
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 rounded-xl glass flex items-center justify-center transition-all duration-500 hover:glass-strong hover:scale-110 hover:-translate-y-1 ${social.color}`}
                    aria-label={social.name}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/20 to-transparent transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <Icon className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:rotate-12" />
                    
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:oceanney5555@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  oceanney5555@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span>
                <a
                  href="tel:9742391729"
                  className="hover:text-primary transition-colors"
                >
                  9742391729
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-foreground">Ganesh Thapa</span>.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-white shadow-2xl shadow-primary/50 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12 group ${
          showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-primary-glow opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
        
        {/* Icon */}
        <ArrowUp className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
        
        {/* Tooltip */}
        <span className="absolute -left-24 top-1/2 -translate-y-1/2 px-3 py-1 bg-foreground text-background text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Back to Top
        </span>
      </button>
    </footer>
  );
}
