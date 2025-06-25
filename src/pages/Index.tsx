
import { Mail, Globe, Phone, Twitter, Github, Linkedin, Instagram, Youtube, CheckCircle, MapPin, Calendar, Briefcase, GraduationCap, User, FolderOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-80 bg-gray-900 min-h-screen p-8 fixed left-0 top-0 overflow-y-auto">
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

        {/* Right Content */}
        <div className="ml-80 flex-1 p-8 max-w-4xl">
          {/* Intro Section */}
          <section className="mb-12">
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
          <section className="mb-12">
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
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{project.role}</span>
                      </div>
                      <Badge variant="outline" className="border-gray-700 text-gray-400">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-12">
            <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-6">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className={`w-12 h-12 ${exp.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span>{exp.company}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">{exp.period}</div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-6">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className={`w-12 h-12 ${edu.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span>{edu.school}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">{edu.period}</div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
