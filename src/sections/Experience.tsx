import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'WordPress Developer',
    company: 'JoogleTech Pvt. Ltd',
    period: 'July 2025 - Present',
    description: [
      'Designed custom themes and plugins for more than 20 client sites, optimized site speed to 90+%, and reduced loading times by more than 40%.',
      'Integrate WooCommerce and payment gateway services to increase ecommerce sales.',
      'Provided optimized databases and introduced caching to enhance performance on heavy-traffic sites.',
      'Completed projects and maintenance work with actual clients. Contributed to optimizing workflows with my team.',
    ],
    current: true,
  },
  {
    title: 'Graphic Designer',
    company: 'Freelance',
    period: '2024',
    description: [
      'Designed branding materials, menus, banners, and social media graphics.',
      'Ensured visual consistency across platforms using Figma and design principles.',
    ],
    current: false,
  },
  {
    title: 'Data Entry Assistant',
    company: 'Softech Company',
    period: '2023',
    description: [
      'Managed high-volume data entry with accuracy and timely reporting.',
      'Collaborated to optimize workflows and update records efficiently.',
    ],
    current: false,
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line
      gsap.from(timelineRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power2.out',
      });

      // Animate timeline items
      itemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 xl:py-32 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and contributions to various organizations
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary transform -translate-x-1/2 hidden lg:block"
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className={`relative flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="glass-strong p-6 xl:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block relative z-10">
                  <div className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50" />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Education</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-strong p-6 rounded-2xl border border-border">
              <h4 className="text-xl font-bold mb-2">Bachelor in Information Technology (BIT)</h4>
              <p className="text-primary font-semibold mb-2">Padmashree College</p>
              <p className="text-sm text-muted-foreground mb-3">Affiliated to Nilai University</p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="w-4 h-4" />
                <span>Jan 2023 - Jan 2027</span>
              </div>
            </div>

            <div className="glass-strong p-6 rounded-2xl border border-border">
              <h4 className="text-xl font-bold mb-2">Secondary Education</h4>
              <p className="text-primary font-semibold mb-2">Nepal Don Bosco School</p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mt-6">
                <Calendar className="w-4 h-4" />
                <span>2020 - 2022</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">Certifications</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass px-6 py-3 rounded-full border border-primary/30">
              <span className="font-semibold">WordPress Development (Diploma)</span>
            </div>
            <div className="glass px-6 py-3 rounded-full border border-primary/30">
              <span className="font-semibold">Core Java Programming (Diploma)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
