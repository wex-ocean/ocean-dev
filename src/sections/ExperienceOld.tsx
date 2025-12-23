import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'JoogleTech',
    position: 'Senior WordPress Developer',
    period: '2021 - Present',
    description:
      'Leading WordPress development projects, creating custom themes and plugins, and mentoring junior developers. Specialized in WooCommerce solutions and performance optimization.',
    achievements: [
      'Developed 20+ custom WordPress themes',
      'Improved site performance by 60%',
      'Led a team of 5 developers',
    ],
  },
  {
    company: 'Freelance',
    position: 'Full Stack Developer',
    period: '2019 - 2021',
    description:
      'Worked with various clients worldwide, delivering custom web solutions using WordPress, React, and modern frontend technologies. Built strong client relationships and delivered projects on time.',
    achievements: [
      'Completed 30+ client projects',
      'Maintained 100% client satisfaction',
      'Built diverse portfolio of work',
    ],
  },
  {
    company: 'Softech',
    position: 'Frontend Developer',
    period: '2018 - 2019',
    description:
      'Developed responsive web applications using HTML, CSS, JavaScript, and React. Collaborated with designers and backend developers to create seamless user experiences.',
    achievements: [
      'Implemented responsive designs',
      'Optimized frontend performance',
      'Contributed to UI/UX improvements',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

      // Animate timeline line
      gsap.from('.timeline-line', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: 'top',
      });

      // Animate timeline items
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
        },
        x: -100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-4xl xl:text-5xl font-bold text-center mb-16"
        >
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line absolute left-8 xl:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item relative flex flex-col xl:flex-row gap-8 ${
                  index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 xl:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-glow glow-primary" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'xl:pr-12' : 'xl:pl-12'} pl-16 xl:pl-0`}>
                  <div className="glass-strong rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary-glow" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{exp.position}</h3>
                        <p className="text-primary-glow font-semibold">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-glow mt-2 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden xl:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
