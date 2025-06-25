
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
      const offset = window.innerWidth < 1024 ? 100 : 50; // Account for mobile header
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
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-sm sm:max-w-none sm:w-auto">
      <div className="bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-full px-3 sm:px-6 py-2 sm:py-3 overflow-x-auto">
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
                    ? 'bg-blue-500 text-white shadow-lg scale-105' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
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
