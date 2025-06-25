import { Mail, Globe, Phone, Twitter, Github, Linkedin, Instagram, Youtube, CheckCircle, MapPin, Calendar, Briefcase, GraduationCap, User, FolderOpen, Award, ExternalLink, Menu, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import BottomNavigation from "@/components/BottomNavigation";
import { useState } from "react";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const skills = [
    "JavaScript", "React", "Python", "Git", "Agile", "CI/CD", 
    "Node.js", "Docker", "MongoDB", "TypeScript", "AWS"
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
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Personal Finance Tracker", 
      role: "Frontend Developer",
      date: "Mar 15, 2024",
      category: "Finance",
      color: "from-purple-400 to-purple-600"
    }
  ];

  const experiences = [
    {
      title: "Frontend Lead",
      company: "Alpha",
      location: "Cupertino, CA",
      period: "Jan 24 - Present",
      description: "Spearheaded the development of a suite of progressive web applications using React and Swift, and GraphQL.",
      color: "bg-red-500"
    },
    {
      title: "Frontend Engineer", 
      company: "Sigma",
      location: "New York, NY",
      period: "Sep 22 - Dec 23",
      description: "Enhanced user interfaces for the Sigma Web Player using React and Redux, achieving a 25% increase in user engagement.",
      color: "bg-green-500"
    },
    {
      title: "Junior Software Engineer",
      company: "Omega", 
      location: "Menlo Park, CA",
      period: "Feb 20 - Dec 23",
      description: "Involved in the lifecycle of feature development from conception to deployment, emphasizing responsive design and accessibility standards.",
      color: "bg-blue-500"
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Astra University",
      location: "Stanford, CA", 
      period: "Sep 18 - Jun 20",
      description: "Specialized in Software Engineering. Completed thesis on \"Scalable Architectures for Real-Time Web Applications\" and graduated with distinction.",
      color: "bg-yellow-500"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "Nova University",
      location: "Providence, RI",
      period: "Sep 15 - Sep 18", 
      description: "Graduated with honors. Relevant coursework included Advanced Web Development, User Interface Design, and Software Systems.",
      color: "bg-orange-500"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      issued: "2023",
      color: "bg-orange-500"
    },
    {
      title: "React Professional Developer",
      issuer: "Meta",
      issued: "2022",
      color: "bg-blue-500"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google",
      issued: "2021",
      color: "bg-green-500"
    }
  ];

  const contactInfo = [
    {
      label: "Email",
      value: "hey@henrywalker.com",
      icon: Mail,
      href: "mailto:hey@henrywalker.com"
    },
    {
      label: "Phone",
      value: "+555 123 4567",
      icon: Phone,
      href: "tel:+5551234567"
    },
    {
      label: "Website",
      value: "henrywalker.com",
      icon: Globe,
      href: "https://henrywalker.com"
    },
    {
      label: "LinkedIn",
      value: "/henrywalker",
      icon: Linkedin,
      href: "https://linkedin.com/in/henrywalker"
    }
  ];

  const ProfileSidebar = () => (
    <div className="p-6 md:p-8">
      {/* Profile Section */}
      <div className="mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mb-4 flex items-center justify-center">
          <User className="w-8 h-8 text-white" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-xl font-bold">Henry Walker</h1>
          <CheckCircle className="w-5 h-5 text-blue-400" />
        </div>
        <p className="text-gray-400 text-sm">he/him</p>
      </div>

      {/* About Section */}
      <div className="mb-8">
        <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-3">About</h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          Brooklyn based full-stack software engineer with 7+ years of experience in building web and mobile apps.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mb-8">
        <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-3">Contact</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 text-gray-400" />
            <span>hey@henrywalker.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Globe className="w-4 h-4 text-gray-400" />
            <span>henrywalker.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 text-gray-400" />
            <span>555-1234-5678</span>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors duration-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Languages Section */}
      <div className="mb-8">
        <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-3">Languages</h2>
        <div className="space-y-2">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-2 text-sm">
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-3">
        <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
        <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
        <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-500 transition-colors cursor-pointer" />
        <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 transition-colors cursor-pointer" />
        <Youtube className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Henry Walker</h1>
              <p className="text-sm text-gray-400">Software Engineer</p>
            </div>
          </div>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-gray-900 border-gray-800 p-0 overflow-y-auto">
              <ProfileSidebar />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div id="profile" className="hidden lg:block w-80 bg-gray-900 min-h-screen fixed left-0 top-0 overflow-y-auto">
          <ProfileSidebar />
        </div>

        {/* Content Area */}
        <div className="w-full lg:ml-80 pt-20 lg:pt-0">
          <div className="px-4 md:px-6 lg:px-8 py-6 lg:py-8 max-w-4xl mx-auto lg:mx-0">
            {/* Intro Section */}
            <section id="intro" className="mb-12 pt-8">
              <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-6">Intro</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm Henry Walker, a product engineer from Brooklyn, New York City. My expertise lies in developing innovative and user-focused products for both web and mobile platforms, where I emphasize intuitive design and robust functionality.
                </p>
                <p>
                  Holding a Master's degree in Computer Science from the Nova University of Science and Technology, my journey began in a dynamic startup, progressing to lead positions in established tech firms.
                </p>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-12 pt-8">
              <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-6">Projects</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-gray-700 transition-all duration-300 hover:scale-[1.02]">
                    <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-4">
                        <FolderOpen className="w-8 h-8 text-white/80" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{project.role}</span>
                        </div>
                        <Badge variant="outline" className="border-gray-700 text-gray-400 w-fit">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-12 pt-8">
              <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-6">Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className={`w-12 h-12 ${exp.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-semibold">{exp.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-gray-400">
                            <span>{exp.company}</span>
                            <span className="hidden sm:inline">•</span>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-400 mt-1 lg:mt-0">{exp.period}</div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="mb-12 pt-8">
              <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-6">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className={`w-12 h-12 ${edu.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-semibold">{edu.degree}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-gray-400">
                            <span>{edu.school}</span>
                            <span className="hidden sm:inline">•</span>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-400 mt-1 lg:mt-0">{edu.period}</div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="mb-12 pt-8">
              <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-6">Certifications</h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-semibold">{cert.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>{cert.issuer}</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-400 mt-1 lg:mt-0">Issued {cert.issued}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-12 pt-8 pb-24">
              <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-6">Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a 
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-gray-400">{contact.label}</div>
                        <div className="text-white font-medium truncate">{contact.value}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
