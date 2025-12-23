import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  Palette,
  Database,
  Smartphone,
  Zap,
  Globe,
  Layout,
  GitBranch,
  Rocket,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    icon: Code2,
    title: 'WordPress Development',
    description: 'Custom themes, plugins, and WooCommerce solutions',
  },
  {
    icon: Layout,
    title: 'React & Frontend',
    description: 'Modern React applications with TypeScript',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive user interfaces',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'RESTful APIs and database management',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first, cross-device compatibility',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Fast loading times and smooth animations',
  },
  {
    icon: Globe,
    title: 'SEO & Accessibility',
    description: 'Search engine optimization and WCAG compliance',
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Git workflows and collaborative development',
  },
  {
    icon: Rocket,
    title: 'Deployment & DevOps',
    description: 'CI/CD pipelines and cloud hosting',
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from('.skill-card', {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-4xl xl:text-5xl font-bold text-center mb-16"
        >
          My <span className="gradient-text">Skills</span>
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="skill-card glass rounded-2xl p-8 hover:glass-strong hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-8 h-8 text-primary-glow" />
                  </div>
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
