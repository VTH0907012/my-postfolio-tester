import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Github,
  MapPin,
  Calendar,
  Code,
  TestTube,
  Bug,
  Zap,
  CheckCircle,
  Award,
  ExternalLink,
  Download,
  Menu,
  X,
  Link,
} from "lucide-react";
import avatar from "../assets/Anh_CV.jpg";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = {
    testing: [
      "Manual Testing",
      "Test Case Design",
      "Bug Reporting & Tracking",
      "Regression Testing",
      "Cross-browser Testing",
      "Responsive Testing",
      "API Testing",
      "UI/UX Validation",
    ],
    automation: [
      "Selenium WebDriver",
      "Java Programming",
      "TestNG Framework",
      "Page Object Model",
      "ExtentReports",
      "Cross-browser Automation",
      "Test Suite Organization",
    ],
    tech: [
      "HTML/CSS/JavaScript",
      "React.js/Next.js",
      "Node.js/Laravel",
      "MySQL/MongoDB",
      "Git/GitHub/GitLab",
      "Postman API Testing",
      "Jira/Excel Reporting",
    ],
  };

  const projects = [
    {
      title: "E-Commerce Testing Project",
      period: "06/2025 - 08/2025",
      role: "Manual & Automation Tester",
      tasks: [
        "Thiết kế & thực thi 30+ Test Cases áp dụng EP, BVA, State Transition",
        "Kiểm thử thủ công toàn bộ user journey và Responsive/Cross-browser Testing",
        "Tự động hóa 15+ test scenarios quan trọng với Selenium WebDriver + TestNG",
        "Áp dụng POM & ExtentReports để tối ưu maintainability và báo cáo chi tiết",
      ],
      achievements: [
        "Phát hiện 12 bugs (1 Critical, 9 High, 2 Medium/Low)",
        "Đạt 90% test coverage cho các test case chính",
        "Giảm 60% thời gian regression testing",
      ],
      technologies: ["Selenium WebDriver", "Java", "TestNG", "ExtentReports"],
      links: {
        demo: "https://ecommerce-electronics-zeta.vercel.app",
        code: "https://github.com/VTH0907012/Ecomerce-AutoTest",
        testcase: "https://docs.google.com/spreadsheets/d/1H-BwWDFfIhZ00KbmCB2jNJcoblQMU6bk/edit?rtpof=true&gid=1477023176#gid=1477023176",
      },
    },
  ];

  const workExperience = {
    company: "VASD CO.,LTD",
    period: "02/2024 - 02/2025",
    role: "Front-end Developer",
    projects: [
      "DMS (Medical Equipment Management)",
      "c.HIS (Patient Records)",
      "EMR v2 (Electronic Medical Records)",
    ],
    contributions: [
      "Frontend Testing và UI/UX Validation cho 3 dự án y tế",
      "API Integration Testing với backend systems",
      "Responsive Testing trên multiple devices",
    ],
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              VTH
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "hero",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                    activeSection === section ? "text-blue-400" : "text-white"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "hero",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-white hover:text-blue-400 capitalize w-full text-left"
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="relative mb-8">
            {/* Border gradient */}
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
              {/* Avatar image */}
              <img
                src={avatar} // import avatar từ assets hoặc dùng /avatar.jpg nếu trong public
                alt="Avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Check icon */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full animate-bounce flex items-center justify-center">
              <CheckCircle size={20} className="text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Võ Thanh Hiếu
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
            QA/QC Engineer & Test Automation Specialist
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              View Projects
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone size={18} />
              <span>0914549857</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail size={18} />
              <span>thanhhieu090701@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <MapPin size={18} />
              <span>Cần Thơ, Việt Nam</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-4 ${
          isVisible.about ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Career Objectives
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="text-blue-400 font-semibold mb-2">
                    Short-term Goal
                  </h4>
                  <p className="text-gray-300">
                    Tìm kiếm vị trí QA/QC để áp dụng kỹ năng kiểm thử thủ công
                    và dần chuyển sang kiểm thử tự động với Selenium và Java.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="text-purple-400 font-semibold mb-2">
                    Long-term Goal
                  </h4>
                  <p className="text-gray-300">
                    Trở thành Kỹ sư QA full-stack, thành thạo cả kiểm thử thủ
                    công và tự động.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Education & Certification
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="text-blue-400" size={20} />
                    <h4 className="font-semibold text-white">
                      Đại học Cần Thơ
                    </h4>
                  </div>
                  <p className="text-gray-300">
                    Công Nghệ Thông Tin (2019 - 2024)
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <TestTube className="text-purple-400" size={20} />
                    <h4 className="font-semibold text-white">VTI Academy</h4>
                  </div>
                  <p className="text-gray-300">
                    Manual Testing Course (06/2025 - 09/2025)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 px-4 bg-black/20 ${
          isVisible.skills ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Manual Testing Skills */}
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <TestTube className="text-blue-400" size={24} />
                <h3 className="text-xl font-semibold text-white">
                  Manual Testing
                </h3>
              </div>
              <div className="space-y-3">
                {skills.testing.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-blue-400" />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Automation Testing Skills */}
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold text-white">
                  Test Automation
                </h3>
              </div>
              <div className="space-y-3">
                {skills.automation.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-purple-400" />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="p-6 bg-gradient-to-br from-pink-500/10 to-blue-500/10 rounded-xl border border-pink-500/20 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-pink-400" size={24} />
                <h3 className="text-xl font-semibold text-white">
                  Technical Stack
                </h3>
              </div>
              <div className="space-y-3">
                {skills.tech.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-pink-400" />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 px-4 ${
          isVisible.experience ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-white/5 rounded-xl border border-white/10 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {workExperience.company}
                  </h3>
                  <p className="text-blue-400 font-medium">
                    {workExperience.role}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-300 mt-2 md:mt-0">
                  <Calendar size={18} />
                  <span>{workExperience.period}</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Quality-related Contributions:
                  </h4>
                  <ul className="space-y-2">
                    {workExperience.contributions.map((contribution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle
                          size={16}
                          className="text-green-400 mt-1 flex-shrink-0"
                        />
                        <span className="text-gray-300">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Projects Involved:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {workExperience.projects.map((project, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-4 bg-black/20 ${
          isVisible.projects ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Testing Projects
          </h2>

          <div className="max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl border border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 font-medium">{project.role}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 mt-2 md:mt-0">
                    <Calendar size={18} />
                    <span>{project.period}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={20} />
                    Công việc thực hiện:
                  </h4>
                  <ul className="space-y-2">
                    {project.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1">✔</span>
                        <span className="text-gray-300">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6 mt-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Bug className="text-red-400" size={20} />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle
                            size={16}
                            className="text-green-400 mt-1 flex-shrink-0"
                          />
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {/* Link dự án */}
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Link dự án
                    </a>

                    {/* Link Testcase */}
                    <a
                      href={project.links.testcase}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Link size={16} />
                      Link Testcase
                    </a>

                    {/* Source Code */}
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-500 text-gray-300 rounded-lg hover:bg-gray-500 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-4 ${
          isVisible.contact ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <p className="text-xl text-gray-300 mb-12">
            Ready to contribute to your testing team with quality assurance
            expertise
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <Phone className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">0914549857</p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <Mail className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300 break-all">
                thanhhieu090701@gmail.com
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300">
              <Github className="text-pink-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/VTH0907012"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors"
              >
                VTH0907012
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">
              TOEIC LR 400+ • Available for immediate start
            </p>
            <div className="flex justify-center">
              <div className="px-6 py-2 bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                Currently seeking QA/QC opportunities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 bg-black/40 border-t border-white/10">
        <div className="w-full max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Võ Thanh Hiếu. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
