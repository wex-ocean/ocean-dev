import { useRef } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A digital agency providing web design, development, and graphic design services.',
    image: '/images/webin.png',
    link: 'https://webinnepal.com/',
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.5)',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A photography service specializing in wedding, portrait and corporate.',
    image: '/images/Moment.png',
    link: 'https://momentnepal.com/',
    gradient: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(168, 85, 247, 0.5)',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'An e-commerce website selling groceries and household products.',
    image: '/images/family.png',
    link: '#',
    gradient: 'from-green-500 to-emerald-500',
    glowColor: 'rgba(34, 197, 94, 0.5)',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'HashBoard is a lightweight, serverless sticky note dashboard. It allows you to create, organize, and customize thoughts on an infinite canvas.',
    image: '/images/hashboard.png',
    link: 'https://hashboard-one.vercel.app/',
    gradient: 'from-orange-500 to-red-500',
    glowColor: 'rgba(249, 115, 22, 0.5)',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'Designing Nepal is a creative agency specializing in design, web & app development, branding, and marketing solutions.',
    image: '/images/Designing.png',
    link: 'https://designingnepal.com/',
    gradient: 'from-indigo-500 to-purple-500',
    glowColor: 'rgba(99, 102, 241, 0.5)',
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'SEWA Nepal is a non-profit empowering underprivileged communities through education, healthcare, and sustainable development.',
    image: '/images/sewanepal.png',
    link: '#',
    gradient: 'from-pink-500 to-rose-500',
    glowColor: 'rgba(236, 72, 153, 0.5)',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 xl:py-32 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my best work in web development, design, and digital solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative glass-strong rounded-3xl overflow-hidden border border-border transition-all duration-700 hover:border-primary/50 hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-2"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Animated Glow Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`}
                  style={{
                    filter: 'blur(40px)',
                  }}
                />

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-muted/30">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />
                  
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    loading="lazy"
                  />

                  {/* Hover Icon Reveal */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <div className={`glass p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Animated Corner Accent */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-full" />
                </div>

                {/* Content Container */}
                <div className="relative p-6 xl:p-8 z-10">
                  {/* Title with Gradient Shift */}
                  <h3 className="text-2xl font-bold mb-3 transition-all duration-500 group-hover:text-primary">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 group-hover:text-foreground/90 transition-colors duration-500">
                    {project.description}
                  </p>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-white font-semibold transition-all duration-500 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 group/btn"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>

                  {/* Animated Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary via-primary-glow to-primary transition-all duration-700 ease-out" />
                </div>

                {/* Layered Shadow Effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    boxShadow: `0 20px 60px ${project.glowColor}, 0 0 40px ${project.glowColor}`,
                  }}
                />

                {/* Corner Glow Accent */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full" />
              </div>

              {/* External Floating Glow */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700 -z-10"
                style={{
                  background: `linear-gradient(135deg, ${project.glowColor}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
