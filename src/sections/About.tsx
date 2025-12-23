import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
        x: -100,
        opacity: 0,
      });

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
        x: 100,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="glass-strong rounded-3xl p-8 hover:scale-105 transition-transform duration-500">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/4ea83f1a-2a48-4e10-a0ae-7918dce67941.jpg"
                  alt="Ganesh Bahadur Thapa - WordPress Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl xl:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I'm a passionate WordPress Developer and Frontend Specialist with a
                keen eye for design and a love for creating immersive digital
                experiences. My expertise lies in building high-performance,
                aesthetically pleasing websites that not only look stunning but also
                deliver exceptional user experiences.
              </p>

              <p>
                With years of experience in WordPress development, React, and modern
                frontend technologies, I specialize in transforming complex ideas into
                elegant, functional solutions. I believe in the power of clean code,
                thoughtful design, and continuous innovation.
              </p>

              <p>
                When I'm not coding, you'll find me exploring the latest web
                technologies, contributing to open-source projects, or sharing my
                knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="glass rounded-2xl p-6 text-center hover:glass-strong transition-all">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Years Experience
                </div>
              </div>
              <div className="glass rounded-2xl p-6 text-center hover:glass-strong transition-all">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Projects Completed
                </div>
              </div>
              <div className="glass rounded-2xl p-6 text-center hover:glass-strong transition-all">
                <div className="text-3xl font-bold gradient-text">30+</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
