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
  Zap,
  Layout,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    icon: Code2,
    title: 'WordPress Development',
    description: 'Theme & Plugin Customization, Elementor / Gutenberg',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Backend Technologies',
    description: 'PHP, MySQL, JavaScript, jQuery',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'Frontend Design',
    description: 'Tailwind CSS, HTML, CSS, Responsive UI/UX',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'WooCommerce Setup & Customization',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    description: 'Speed Optimization, Debugging & Problem-Solving',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Server,
    title: 'Hosting & Deployment',
    description: 'cPanel, Hosting, DNS, SSL Configuration',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Git, GitHub, Vercel',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Layout,
    title: 'Design Tools',
    description: 'Figma, Responsive Design Principles',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Full Stack',
    description: 'Complete project delivery from start to finish',
    color: 'from-violet-500 to-purple-500',
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
                className="group glass-strong p-6 xl:p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer border border-border hover:border-primary/50"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-20 blur-xl rounded-full`}
                  />
                  <div className="relative glass p-4 rounded-2xl w-fit">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-glow transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
