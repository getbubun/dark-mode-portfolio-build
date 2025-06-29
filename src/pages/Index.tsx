import { Mail, Globe, MessageCircle, Phone, Linkedin, MapPin, Calendar, Briefcase, GraduationCap, FolderOpen, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BottomNavigation from "@/components/BottomNavigation";
import AuroraBackground from "@/components/AuroraBackground";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const profileElement = document.getElementById('profile-image');
      if (profileElement) {
        const profileRect = profileElement.getBoundingClientRect();
        // Show header only when profile section is completely scrolled out of viewport
        setIsHeaderVisible(profileRect.bottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    "JavaScript", "React", "Angular", "NextJS", "TypeScript", "Python", "Git", "Webpack", "Redux",
    "Node.js", "Docker", "MongoDB", "MySQL",  "AWS", "Agile", "CI/CD", "GraphQL",
    "WebSockets", "PWA", "Tailwind CSS",
  ];

  const languages = [
    { name: "English", flag: "🇬🇧" },
    { name: "German", flag: "🇩🇪" },
    { name: "French", flag: "🇫🇷" },
    { name: "Chinese", flag: "🇨🇳" }
  ];

  const projects = [
    {
      title: "Interactive Data Dashboard",
      role: "Frontend Lead",
      date: "Jan 24, 2024",
      category: "Internal Tools",
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Personal Finance Tracker", 
      role: "Frontend Developer",
      date: "Mar 15, 2024",
      category: "Finance",
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "E-commerce Platform", 
      role: "Full Stack Developer",
      date: "Jun 20, 2024",
      category: "E-commerce",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "AI-Powered Task Manager",
      role: "Full Stack Developer",
      date: "May 15, 2025",
      category: "Productivity",
      color: "from-green-400 to-green-600",
    },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "McKinsey & Company",
      location: "Bengaluru, India",
      period: "Oct 22 - Present",
      description: "Played a pivotal role in engineering innovative solutions for clients. My responsibilities included leading the Frontend workstream for a cloud storage dashboard and collaborating with Data Engineering on a GenAI document review app. I also developed a mobile threat prevention app, significantly enhancing performance and user experience.",
      color: "bg-blue-800"
    },
    {
      title: "Frontend Engineer", 
      company: "Easy Eat PTE Ltd",
      location: "Gurgaon, India",
      period: "Apr 20 - Sep 22",
      description: "Focused on enhancing the user experience of the Partner portal. I implemented a mobile-first design that significantly increased mobile traffic and developed various feature modules to meet business needs. My collaboration with cross-functional teams ensured seamless integration and performance monitoring, leading to improved client retention and satisfaction.",
      color: "bg-red-800"
    },
    {
      title: "Frontend Engineer Intern",
      company: "Brain Pundits Technologies", 
      location: "Gurgaon, India",
      period: "Sep 19 - Mar 22",
      description: "Enhanced user interfaces for BrainPundits assessment dashboard using Angular and NgRX, achieving a 25% increase in user engagement.",
      color: "bg-green-800"
    }
  ];

  const education = [
    {
      degree: "Specialized Diploma in Full Stack Development",
      school: "Scaler Academy",
      location: "Bengaluru, India",
      period: "Sep 21 - Sep 22", 
      description: "Specialized in Fullstack Engineering, completed project on \"Scalable Architectures for Real-Time Web Applications\" and completed curriculum with distinction.",
      color: "bg-orange-500"
    },
    {
      degree: "Bachelor of Technology in Electrical Engineering",
      school: "Orissa Engineering College",
      location: "Bhubaneswar, Odisha", 
      period: "Aug 13 - July 17",
      description: "Specialized in Electrical Engineering, completed thesis on \"Transformer Architectures\" and graduated with distinction.",
      color: "bg-yellow-500"
    },
    
  ];

  const certifications = [
    {
      title: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      issued: "2024",
      color: "bg-green-500"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      issued: "2024",
      color: "bg-blue-500"
    },
    {
      title: "MongoDB for Node.js Developers",
      issuer: "MongoDB University",
      issued: "2018",
      color: "bg-orange-500"
    }
  ];

  const contactInfo = [
    {
      label: "Email",
      value: "getmanabdas@gmail.com",
      icon: Mail,
      href: "mailto:getmanabdas@gmail.com"
    },
    {
      label: "Phone",
      value: "+918018214708",
      icon: Phone,
      href: "tel:+918018214708"
    },
    {
      label: "Website",
      value: "manabdas.online",
      icon: Globe,
      href: "https://manabdas.online"
    },
    {
      label: "LinkedIn",
      value: "/in/manabdas",
      icon: Linkedin,
      href: "https://linkedin.com/in/manabdas"
    },
    {
      label: "WhatsApp",
      value: "Let's chat",
      icon: MessageCircle,
      href: "https://api.whatsapp.com/send?phone=918018214708&text=Hey%20Manab"
    },
  ];

  const ProfileSidebar = () => (
    <div className="h-full overflow-y-auto px-4 md:px-8 lg:p-8 max-w-4xl mx-auto lg:mx-0">
      {/* Profile Section */}
      <div id="profile-image" className="mb-6 md:mb-8">
        <div className="w-20 h-20 md:w-24 md:h-24 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mb-4 flex items-center justify-center  lg:mx-0">
          <img src="manab-profile.jpg" alt="user" className="rounded-full w-full h-full object-cover"/>
        </div>
        <div className="flex items-center gap-2 mb-2 lg:justify-start">
          <h1 className="text-2xl font-bold">Manab Das</h1>
          <img src="verified-icon.svg" alt="verified"  className="w-5 h-5 text-gray-100" />
        </div>
        <p className="text-zinc-500 text-base lg:text-left">he/him</p>
      </div>

      {/* About Section */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-zinc-500 text-xs uppercase tracking-wider mb-3">About</h2>
        <p className="text-sm text-gray-300 leading-relaxed lg:text-left">
          Bengaluru, India 🇮🇳 based full-stack software engineer with 5+ years of experience in building web and mobile apps.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-zinc-500 text-xs uppercase tracking-wider mb-3">Contact</h2>
        <div className="space-y-3">
          {contactInfo.map((contact, index) => {
             const Icon = contact.icon;
                  return (
                    <a 
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm lg:justify-start"
                    >
                      <Icon className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                      <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{contact.value}</span>
                    </a>
                  );
            })}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-zinc-500 text-xs uppercase tracking-wider mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2  lg:justify-start">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="bg-zinc-900 text-gray-300 hover:bg-zinc-700 transition-colors duration-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white relative">
      <AuroraBackground />
      
      {/* Mobile Header - Now with transition */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-800 p-4 transition-all duration-300 ${
        isHeaderVisible 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <img src="manab-profile.jpg" alt="user" className="rounded-full w-full h-full object-cover"/>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold">Manab Das</h1>
                <img src="verified-icon.svg" alt="verified" className="w-4 h-4"/>
              </div>
              <p className="text-sm text-gray-400">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - Now responsive */}
        <div id="profile" className="w-full lg:w-[25%] lg:min-h-screen lg:fixed lg:left-0 lg:top-0 lg:overflow-y-auto lg:border-r border-gray-800/40 pt-10 lg:pt-0">
          <ProfileSidebar />
        </div>

        {/* Content Area */}
        <div className="w-full lg:w-[75%] lg:ml-[25%]">
          <div className="px-4 md:px-8 lg:px-8 py-6 lg:py-8 max-w-4xl mx-auto lg:mx-0">
            {/* Intro Section */}
            <section id="intro" className="mb-12 pt-8 text-sm">
              <h2 className="text-zinc-500 uppercase tracking-wider mb-6">Intro</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm Manab, a frontend/full-stack engineer from Bengaluru, India. My expertise lies in building scalable, high-performance web applications using React, Angular, Node.js, and TypeScript.
                </p>
                <p>
                  Skilled in translating Figma designs into clean, responsive UIs, building reusable component libraries, handling data-heavy rendering, and optimizing performance.
                  Experienced in collaborating with cross-functional teams in agile environments to deliver user-focused, production-ready software.
                </p>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-12 pt-8">
              <h2 className="text-zinc-500 text-xs uppercase tracking-wider mb-6">Projects</h2>
              
              {/* Show grid layout below 1200px */}
              <div className="block md:hidden">
                <div className="grid grid-cols-1 gap-4">
                  {projects.map((project, index) => (
                    <Card key={index} className="bg-zinc-900 border-gray-800 overflow-hidden group hover:border-gray-700 transition-all duration-300">
                      <div className={`h-36 sm:h-48 bg-gradient-to-br ${project.color} relative`}>
                        <div className="absolute bottom-3 left-3 z-10">
                          <FolderOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white/80" />
                        </div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg  mb-3">{project.title}</h3>
                        <div className="flex flex-wrap items-start gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>{project.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>{project.role}</span>
                          </div>
                          <Badge variant="outline" className="border-stone-700 w-fit text-neutral-500 text-xs">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Show carousel layout above 1200px */}
              <div className="hidden md:block relative">
                {/* Left gradient blur */}
                {/* <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" /> */}
                
                <Carousel className="w-full overflow-visible">
                  <CarouselContent className="-ml-2 md:-ml-4 overflow-visible">
                    {projects.map((project, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-3/4 overflow-visible">
                        <Card className="bg-zinc-900 border-gray-800 overflow-hidden group cursor-pointer">
                          <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                            <div className="absolute bottom-4 left-4 z-10">
                              <FolderOpen className="w-8 h-8 text-white/80" />
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-lg  mb-2">{project.title}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-neutral-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{project.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                <span>{project.role}</span>
                              </div>
                              <Badge variant="outline" className="border-stone-700 w-fit text-neutral-500">
                                {project.category}
                              </Badge>
                            </div>
                          </div>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="h-[50px] w-12 -left-6 absolute bg-stone-900/30 backdrop-blur-md border border-gray-800/50 rounded-full hover:bg-zinc-800/50 transition-all duration-300 data-[disabled=true]:opacity-0 data-[disabled=true]:pointer-events-none z-20" />
                  <CarouselNext className="h-[50px] w-12 -right-6 absolute bg-stone-900/30 backdrop-blur-md border border-gray-800/50 rounded-full hover:bg-zinc-800/50 transition-all duration-300 data-[disabled=true]:opacity-0 data-[disabled=true]:pointer-events-none z-20" />
                </Carousel>

                {/* Right gradient blur */}
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-12 pt-8">
              <h2 className="text-zinc-500 text-xs uppercase tracking-wider mb-6">Experience</h2>
              <div className="space-y-4 sm:space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="p-3 sm:p-4 flex gap-3 sm:gap-4 bg-zinc-900 border-gray-800 overflow-hidden group hover:border-gray-700 transition-all duration-300">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${exp.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base sm:text-lg ">{exp.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-neutral-500">
                            <span>{exp.company}</span>
                            <span className="hidden sm:inline">•</span>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-neutral-500 mt-1 sm:mt-0">{exp.period}</div>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">{exp.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="mb-12 pt-8">
              <h2 className="text-zinc-500 text-xs uppercase tracking-wider mb-6">Education</h2>
              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="p-3 sm:p-4 flex gap-3 sm:gap-4 bg-zinc-900 border-gray-800 overflow-hidden group hover:border-gray-700 transition-all duration-300">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${edu.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base sm:text-lg  mb-1 sm:mb-2">{edu.degree}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-neutral-500">
                            <span>{edu.school}</span>
                            <span className="hidden sm:inline">•</span>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-neutral-500 mt-1 sm:mt-0">{edu.period}</div>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">{edu.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="mb-12 pt-8">
              <h2 className="text-zinc-500 text-xs uppercase tracking-wider mb-6">Certifications</h2>
              <div className="space-y-4 sm:space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="p-3 sm:p-4 flex gap-3 sm:gap-4 bg-zinc-900 border-gray-800 overflow-hidden group hover:border-gray-700 transition-all duration-300">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${cert.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base sm:text-lg ">{cert.title}</h3>
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500">
                            <span>{cert.issuer}</span>
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-neutral-500 mt-1 sm:mt-0">Issued {cert.issued}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-12 pt-8 pb-24">
              <h2 className="text-zinc-500 text-xs uppercase tracking-wider mb-6">Contact</h2>
              <div className="space-y-0 group/list">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index}>
                      <a 
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-4 transition-all duration-300 group/item hover:bg-zinc-900/30 hover:scale-[1.02] origin-left"
                      >
                        <span className="text-sm text-zinc-400 w-20 group-hover:item:text-white transition-colors">{contact.label}</span>
                        <span className="text-sm text-zinc-400 group-hover:item:text-white transition-all duration-300 group-hover:item:translate-x-2 transform">{contact.value}</span>
                      </a>
                      {index < contactInfo.length - 1 && (
                        <div className="h-px bg-zinc-800/50" />
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Gradient Blur Effect */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 via-[#0D0D0D]/40 to-transparent pointer-events-none" style={{ zIndex: 40 }} />

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
