import { Home, FolderOpen, Briefcase, GraduationCap, User, Award, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState("intro");

  const navItems = [
    { id: "intro", label: "Intro", icon: Home },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "contact", label: "Contact", icon: Phone }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = window.innerWidth < 1024 ? 100 : 50;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const offset = window.innerWidth < 1024 ? 120 : 100;
      let currentSection = sections[0];
      
      // Find the section closest to the top of the viewport
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset) {
            currentSection = sectionId;
          }
        }
      }

      // Special handling for contact section when near bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-sm sm:max-w-none sm:w-auto">
      <div className="bg-stone-900/30 backdrop-blur-md border border-gray-800/50 rounded-full px-3 sm:px-6 py-2 sm:py-3 overflow-x-auto shadow-xl">
        <div className="flex items-center gap-1 sm:gap-2 min-w-max">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                  isActive 
                    ? 'bg-zinc-800/80 text-white shadow-lg scale-105' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className={`text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0 sm:opacity-100 hidden sm:inline'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
