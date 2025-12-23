import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Globe, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 xl:py-32 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-glow/30 rounded-3xl blur-3xl" />
              
              {/* Image Container */}
              <div className="relative glass-strong p-2 rounded-3xl">
                <img
                  src="/images/profile.jpg"
                  alt="Ganesh Bahadur Thapa"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 glass-strong p-6 rounded-2xl border border-primary/20">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <div>
              <h2 className="text-4xl xl:text-5xl font-bold mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-glow rounded-full mb-6" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert WordPress developer with considerable hands-on experience developing, optimizing, and
              accelerating various WordPress sites. Expert at debugging, optimizing SEO and loading speed, as
              well as covering hosting, DNS, SSL, and complete projects from start to finish.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm capable of developing any site, ranging from business and e-commerce sites to custom projects
              and doing it all with efficiency and speed.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3 glass p-4 rounded-xl">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">Imadol, Lalitpur</div>
                </div>
              </div>

              <div className="flex items-center gap-3 glass p-4 rounded-xl">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-medium">9742391729</div>
                </div>
              </div>

              <div className="flex items-center gap-3 glass p-4 rounded-xl">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium text-sm">oceanney5555@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 glass p-4 rounded-xl">
                <Globe className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Website</div>
                  <a
                    href="https://ocean-pi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:text-primary-glow transition-colors text-sm"
                  >
                    ocean-pi.vercel.app
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://instagram.com/wex-ocean"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-xl hover:glass-strong transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
