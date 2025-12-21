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
  Menu,
  X,
  Link,
} from "lucide-react";
import avatar from "../assets/Anh_CV.jpg";

// SkillBox component để tránh lặp code
const SkillBox = ({ title, icon, color, items }) => (
  <div
    className={`p-6 bg-gradient-to-br from-${color}-500/10 to-${color}-500/20 rounded-xl border border-${color}-500/20 hover:shadow-xl hover:shadow-${color}-500/10 transition-all duration-300`}
  >
    <div className="flex items-center gap-3 mb-6">
      {icon}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="space-y-3">
      {items.map((skill, index) => (
        <div key={index} className="flex items-center gap-3">
          <CheckCircle size={16} className={`text-${color}-400`} />
          <span className="text-gray-300">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

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
      "Test Case Design & Execution",
      "Bug Reporting",
      "Regression & Functional Testing",
      "UI/UX Testing",
      "API Testing (Postman)",
    ],
    automation: ["Selenium WebDriver", "TestNG", "Page Object Model (POM)"],
    process: ["STLC", "Agile/Scrum (basic)", "Jira", "Git/GitHub"],
    tech: ["SQL (MySQL)", "Java (for test automation)", "HTML/CSS"],
    other: ["Teamwork", "Continuous learning", "Problem-solving"],
  };

  const projects = [
    {
      title: "E-Commerce Testing Project",
      period: "06/2025 - 08/2025",
      role: "Manual & Automation Tester",
      tasks: [
        "Designed & executed 250+ test cases using Equivalence Partitioning, Boundary Value Analysis, State Transition.",
        "Performed manual testing on core flows: login, registration, cart, checkout,...",
        "Conducted UI/UX & responsive testing across devices and browsers.",
        "Categorized & tracked defects by severity, executed retesting & regression.",
        "Automated core scenarios with Selenium WebDriver + TestNG, applying Page Object Model (POM).",
        "Managed test suites, generated reports via ExtentReports, executed cross-browser testing (Chrome, Firefox).",
      ],
      achievements: [
        "Detected and reported 25 bugs (6 Critical, 16 High, 3 Medium/Low)",
        "Covered most main business flows with comprehensive test cases",
        "Significantly reduced regression testing time by applying automation",
      ],
      technologies: ["Selenium WebDriver", "Java", "TestNG", "ExtentReports"],
      links: {
        demo: "https://ecommerce-electronics-zeta.vercel.app",
        code: "https://github.com/VTH0907012/Ecomerce-AutoTest",
        testcase: "https://surl.li/jdgsfq",
      },
    },
  ];

  const workExperiences = [
    {
      company: "CREQA VIETNAM LTD",
      period: "09/2025 - Present",
      role: "QC Engineer",
      contributions: [
        "Conducted manual testing on Web and Mobile applications.",
        "Logged and tracked bugs; performed regression testing.",
        "Created and executed test cases following project test plans.",
        "Performed functional, performance, stability, and compatibility testing.",
        "Reported progress to Team Leader and ensured deadlines were met.",
      ],
      projects: ["Web App", "Mobile App", "Game Testing"],
    },
    {
      company: "VASD CO.,LTD",
      period: "02/2024 - 02/2025",
      role: "Front-end Developer",
      projects: [
        "DMS (Medical Equipment Management)",
        "c.HIS (Patient Records)",
        "EMR v2 (Electronic Medical Records)",
      ],
      contributions: [
        "Perform Frontend Testing and UI/UX Validation for 3 medical projects",
        "API Integration Testing with backend systems",
        "Responsive Testing on multiple devices",
      ],
    },
  ];

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
          <div className="relative mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full animate-bounce flex items-center justify-center">
              <CheckCircle size={20} className="text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Võ Thanh Hiếu
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
            Tester
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
              <span>Ninh Kiều, Cần Thơ City</span>
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Career Objectives
              </h3>
              <p className="text-gray-300">
                Detail-oriented QA/Tester Fresher with strong knowledge of STLC
                and hands-on project experience in manual & automation testing
                (Selenium, TestNG). Eager to apply testing skills to improve
                product quality and grow into a full-stack QA Engineer
                proficient in both manual and automation testing.
              </p>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-blue-400 font-semibold mb-2">
                  Short-term Goal
                </h4>
                <p className="text-gray-300">
                  Looking for a QA/QC position to apply manual testing skills
                  and gradually move to automation testing with Selenium and
                  Java.
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-purple-400 font-semibold mb-2">
                  Long-term Goal
                </h4>
                <p className="text-gray-300">
                  Become a full-stack QA Engineer, proficient in both manual and
                  automation testing.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Education & Certification
              </h3>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-blue-400" size={20} />
                  <h4 className="font-semibold text-white">
                    Can Tho University
                  </h4>
                </div>
                <p className="text-gray-300">
                  Information Technology (2019 - 2024)
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
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-green-400" size={20} />
                  <h4 className="font-semibold text-white">English</h4>
                </div>
                <p className="text-gray-300">
                  Basic reading skill for technical documents, improving daily
                </p>
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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SkillBox
              title="Manual Testing"
              icon={<TestTube className="text-blue-400" size={24} />}
              color="blue"
              items={skills.testing}
            />
            <SkillBox
              title="Test Automation"
              icon={<Zap className="text-purple-400" size={24} />}
              color="purple"
              items={skills.automation}
            />
            <SkillBox
              title="Process & Tools"
              icon={<Code className="text-green-400" size={24} />}
              color="green"
              items={skills.process}
            />
            <SkillBox
              title="Database & Programming"
              icon={<Code className="text-yellow-400" size={24} />}
              color="yellow"
              items={skills.tech}
            />
            <SkillBox
              title="Other"
              icon={<Code className="text-pink-400" size={24} />}
              color="pink"
              items={skills.other}
            />
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
          <div className="grid gap-8 sm:grid-cols-2">
            {workExperiences.map((exp, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 rounded-xl border border-white/10 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-blue-400 font-medium">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 mt-2 md:mt-0">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Contributions:
                    </h4>
                    <ul className="space-y-2">
                      {exp.contributions.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle
                            size={16}
                            className="text-green-400 mt-1"
                          />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Projects:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
          <div className="grid gap-8">
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

                <h4 className="text-lg font-semibold text-white mb-3">
                  Tasks Performed:
                </h4>
                <ul className="space-y-2 mb-6">
                  {project.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-blue-400 mt-1" />
                      <span className="text-gray-300">{task}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-lg font-semibold text-white mb-3">
                  Achievements:
                </h4>
                <ul className="space-y-2 mb-6">
                  {project.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Award size={16} className="text-yellow-400 mt-1" />
                      <span className="text-gray-300">{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a
                    href={project.links.testcase}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Link size={16} /> Test Cases
                  </a>
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <Github size={16} /> Automation Code
                  </a>
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
            <div className="flex justify-center">
              <div className="px-6 py-2 bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                Currently seeking QA/QC opportunities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Võ Thanh Hiếu. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
