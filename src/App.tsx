import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Volunteer from './components/Volunteer';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'what-i-do',
      'skills',
      'projects',
      'experience',
      'education',
      'volunteer',
      'references',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-zinc-900 font-sans selection:bg-zinc-800 selection:text-zinc-50 flex flex-col justify-between">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onResumeClick={() => setIsResumeOpen(true)} />
        <About />
        <WhatIDo />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Volunteer />
        <References />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
