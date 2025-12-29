import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Phone, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '9742391729',
    href: 'tel:9742391729',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'oceanney5555@gmail.com',
    href: 'mailto:oceanney5555@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Imadol, Lalitpur',
    href: '#',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

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

      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      });

      gsap.from(infoRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-4xl xl:text-5xl font-bold text-center mb-16"
        >
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div ref={formRef} className="glass-strong rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="glass border-border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="glass border-border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          className="glass border-border min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full glass-strong glow-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-6">
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out to me through any of the following channels.
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-4 p-4 glass rounded-xl hover:glass-strong transition-all group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                        <Icon className="w-6 h-6 text-primary-glow" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-semibold">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="glass-strong rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-4">Let's Work Together</h4>
              <p className="text-muted-foreground">
                I'm currently available for freelance work and exciting projects.
                If you have a project in mind or just want to chat about web
                development, feel free to get in touch!
              </p>
            </div>
          </div>
        </div>

        {/* Resume Download Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative group">
            {/* Animated Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-700" />
            
            {/* Card Container */}
            <div className="relative glass-strong rounded-3xl p-8 xl:p-12 border border-primary/20 group-hover:border-primary/40 transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left Content */}
                <div className="flex items-center gap-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow opacity-20 blur-2xl rounded-full" />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <FileText className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl xl:text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-500">
                      Download My Resume
                    </h3>
                    <p className="text-muted-foreground">
                      Get a detailed overview of my skills, experience, and projects
                    </p>
                  </div>
                </div>

                {/* Right Button */}
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-500 text-white font-semibold px-8 py-6 text-lg group/btn"
                  asChild
                >
                  <a href="/resume.pdf" download="Ganesh_Thapa_Resume.pdf">
                    <Download className="w-5 h-5 mr-2 group-hover/btn:animate-bounce" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Animated Bottom Border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary via-primary-glow to-primary transition-all duration-700 ease-out rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
