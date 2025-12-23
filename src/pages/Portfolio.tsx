import { Helmet } from 'react-helmet-async';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import useSmoothScroll from '@/hooks/useSmoothScroll';

export default function Portfolio() {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>Ganesh Bahadur Thapa - WordPress Developer & Frontend Specialist</title>
        <meta
          name="description"
          content="Immersive portfolio showcasing WordPress development expertise, React applications, and modern frontend solutions by Ganesh Bahadur Thapa."
        />
      </Helmet>

      <CustomCursor />
      <Header />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
