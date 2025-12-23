import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Moment Nepal',
    description:
      'A comprehensive WordPress website showcasing photography and moments from Nepal with custom galleries and interactive features.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/ca9cbd27-8e25-4a96-be18-61d65af21617.jpg',
    tags: ['WordPress', 'Custom Theme', 'Gallery'],
    link: 'https://momentnepal.com/',
  },
  {
    title: 'Webin Nepal',
    description:
      'Modern web development agency website built with WordPress, featuring portfolio showcase and service offerings.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/e6ad1e74-6153-43af-af30-a723b5bb4da9.jpg',
    tags: ['WordPress', 'Business', 'Responsive'],
    link: 'https://webinnepal.com/',
  },
  {
    title: 'Family Portal',
    description:
      'Custom family management portal with member profiles, event planning, and photo sharing capabilities.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/9bf535be-d878-4afe-9b20-ed4afd6439db.jpg',
    tags: ['WordPress', 'Custom Plugin', 'Dashboard'],
    link: '#',
  },
  {
    title: 'Hashboard',
    description:
      'Analytics dashboard built with React and modern frontend technologies for data visualization and insights.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/8f7335c6-0bab-4933-8096-54ffc207d6c2.jpg',
    tags: ['React', 'TypeScript', 'Dashboard'],
    link: 'https://hashboard-one.vercel.app/',
  },
  {
    title: 'Designing Nepal',
    description:
      'Creative design agency portfolio showcasing design work, case studies, and client testimonials.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/ef321352-e151-41a5-8c0e-da4172889e80.jpg',
    tags: ['WordPress', 'Portfolio', 'Creative'],
    link: 'https://designingnepal.com/',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-featured WooCommerce store with custom checkout, payment integration, and inventory management.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/ca9cbd27-8e25-4a96-be18-61d65af21617.jpg',
    tags: ['WooCommerce', 'Payment', 'Custom'],
    link: '#',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-4xl xl:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass rounded-2xl overflow-hidden hover:glass-strong hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary-glow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  {project.link !== '#' && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass flex-1"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
