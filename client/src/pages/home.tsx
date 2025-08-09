import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Education from "@/components/sections/education";
import Contact from "@/components/sections/contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const section = document.querySelector(target.getAttribute('href') || '');
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    // Update active navigation on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    const updateActiveNav = () => {
      const scrollPos = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.getBoundingClientRect().height;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('text-blue-600');
            link.classList.add('text-slate-600');
            
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.remove('text-slate-600');
              link.classList.add('text-blue-600');
            }
          });
        }
      });
    };
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
      window.removeEventListener('scroll', updateActiveNav);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Ibrahim Alderini. All rights reserved.</p>
          <p className="text-sm mt-2">Crafted with ❤️ and lots of ☕</p>
        </div>
      </footer>
    </div>
  );
}
