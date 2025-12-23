import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import ParticleField from '@/three/ParticleField';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <ParticleField />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className="text-5xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Ganesh Bahadur Thapa</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl xl:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            WordPress Developer & Frontend Specialist crafting immersive digital
            experiences with cutting-edge technologies
          </p>

          <div ref={ctaRef} className="flex flex-col xl:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="glass-strong glow-primary px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 text-primary-glow" />
      </button>
    </section>
  );
}
