import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  Database,
  Palette,
  Search,
  Server,
  GitBranch,
  ShoppingCart,
  Figma,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    icon: Code2,
    title: 'WordPress Theme & Plugin',
    description: 'Elementor/Gutenberg',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Backend Technologies',
    description: 'PHP, MySQL, Tailwind CSS, jQuery, JavaScript',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'Frontend Technologies',
    description: 'HTML, CSS, Responsive UI/UX',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: ShoppingCart,
    title: 'WooCommerce',
    description: 'Setup & Customization',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Speed, Debugging, Problem-Solving',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Server,
    title: 'Hosting & Server',
    description: 'cPanel, DNS, SSL',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Git, GitHub, Vercel',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Figma,
    title: 'Design Tools',
    description: 'Figma, Responsive UI/UX',
    color: 'from-teal-500 to-cyan-500',
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 xl:py-32 overflow-hidden bg-muted/20"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in modern web development technologies and tools
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative glass-strong p-6 xl:p-8 rounded-2xl transition-all duration-500 cursor-pointer border border-border hover:border-primary/50 hover:scale-[1.05] hover:shadow-2xl hover:shadow-primary/20"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Animated Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 blur-2xl rounded-2xl transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative mb-6 z-10">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-20 group-hover:opacity-40 blur-xl rounded-full transition-opacity duration-500`}
                  />
                  <div className="relative glass p-4 rounded-2xl w-fit group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow duration-500">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-glow group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="relative z-10 text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {skill.description}
                </p>

                {/* Animated Bottom Border */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full transition-all duration-700 ease-out" />
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
