import React, { useState } from 'react';
import parkingImg from "./assets/parking.png";
import hospitalImg from "./assets/hospital.png";
import skypulseImg from "./assets/skypulse.png";
import placementImg from "./assets/placement.png";
import certInamigosImg from "./assets/certificate_inamigos.jpg";
import certTenImg from "./assets/certificate_ten.jpg";

import PetalCanvas from "./components/PetalCanvas";
import CertificateModal from "./components/CertificateModal";

import { Github, Linkedin } from "./components/Icons";
import {
  Mail,
  ExternalLink,
  Calendar,
  Sparkles,
  Award,
  Code,
  CheckCircle,
  Eye,
  Copy,
  Check,
  Terminal,
  Layers,
  Cpu,
  Database,
  Globe,
  Flower2,
  ArrowUpRight,
  Menu,
  X,
  FileCheck2,
  TrendingUp,
  Zap,
  Briefcase,
  FolderGit2
} from "lucide-react";

export default function Portfolio() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectImage, setSelectedProjectImage] = useState(null);
  const [petalsEnabled, setPetalsEnabled] = useState(true);
  const [activeProjectFilter, setActiveProjectFilter] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("zaira.izhar.1@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const openCertificate = (cert) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  const certificatesData = {
    ten: {
      title: "Software Engineering Intern Certificate",
      issuer: "The Entrepreneurship Network (Limitless Technologies)",
      dates: "Aug 29, 2026 – Sep 29, 2026",
      role: "Software Engineering Intern",
      docDetails: "Doc No: TEN/CT/11821 • Employee ID: TEN/MQ/130522 • Issue Date: 10/2/2026",
      image: certTenImg
    },
    inamigos: {
      title: "Web Developer Internship Certificate",
      issuer: "InAmigos Foundation (IAF)",
      dates: "17 June 2026 – 1 July 2026",
      role: "Web Developer Intern",
      docDetails: "Regd no: U85300CT2020NPL010641 • CSR-1 Registered • Issue Date: 29/07/2026",
      image: certInamigosImg
    }
  };

  const experiences = [
    {
      id: "jarvis",
      role: "Design and Content Team Member",
      company: "JARVIS – Joint Applied Research, Virtual & Interactive Systems Society",
      period: "Aug 2026 – Present",
      type: "Student Technical Society",
      accent: "from-pink-500 to-rose-500",
      borderGlow: "group-hover:border-pink-500/40",
      description: "Driving visual design language, technical publication pipeline, and university-wide tech community outreach.",
      bullets: [
        "Designed 15+ visual assets, posters, social media creatives, and event banners reaching an audience of 200+ followers across university and online platforms.",
        "Authored and published 5+ articles, technical blog posts, and newsletter releases, driving a 20 percent increase in member engagement.",
        "Support project documentation and presentation materials for organizational projects, symposiums, and tech events."
      ],
      skills: ["Visual Design", "Technical Writing", "Creative Direction", "Community Outreach", "Event Branding"],
      hasCertificate: false
    },
    {
      id: "ten",
      role: "Software Engineer Intern",
      company: "The Entrepreneurship Network (TEN)",
      period: "Aug 2026 – Sep 2026",
      type: "Internship • Limitless Technologies",
      accent: "from-purple-500 to-pink-500",
      borderGlow: "group-hover:border-purple-500/40",
      description: "Engineered high-performance web applications, reusable UI design systems, and frontend optimizations.",
      bullets: [
        "Architected 2 end-to-end web applications integrating REST APIs, reducing load times to under 1.5s.",
        "Developed 10+ modular, reusable UI components ensuring 100 percent responsiveness across desktop, tablet, and mobile devices.",
        "Resolved 15+ frontend and backend bugs, optimizing rendering performance and achieving a 80+ Google Lighthouse score."
      ],
      skills: ["React", "REST APIs", "Performance Tuning", "Lighthouse 80+", "Component Architecture", "Full-Stack Debugging"],
      hasCertificate: true,
      certKey: "ten",
      certLabel: "View TEN Certificate"
    },
    {
      id: "inamigos",
      role: "Web Developer Intern",
      company: "InAmigos Foundation (IAF)",
      period: "Jun 2026 – Jul 2026",
      type: "Internship • Registered NGO / NPO",
      accent: "from-cyan-400 to-rose-400",
      borderGlow: "group-hover:border-cyan-400/40",
      description: "Rapidly built and deployed interactive UI modules and integrated third-party RESTful services with clean code standards.",
      bullets: [
        "Built and deployed 34 core web pages and interactive UI modules using HTML5/CSS3/JavaScript/React, enhancing mobile usability by 25 percent.",
        "Integrated 4+ third-party RESTful APIs and backend endpoints, reducing data fetch latency by 20 percent.",
        "Collaborated on interactive web solutions while following clean coding practices, modular architecture, and version control."
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "React", "RESTful APIs", "Mobile Usability +25%", "Clean Architecture"],
      hasCertificate: true,
      certKey: "inamigos",
      certLabel: "View IAF Certificate"
    }
  ];

  const projects = [
    {
      id: "skypulse",
      title: "SkyPulse – Real-Time Weather & Atmospheric Forecasting System",
      category: "weather",
      tagline: "Live atmospheric telemetry & forecast platform with glassmorphic visuals",
      desc: "An intelligent, high-precision atmospheric forecasting system with interactive telemetry graphs, animated canvas weather effects, and debounced global search.",
      tech: ["Python", "Flask", "Open-Meteo REST API", "JavaScript", "Chart.js", "HTML5", "CSS3", "Canvas API"],
      github: "https://github.com/zairaizha10/SkyPulse",
      image: skypulseImg,
      featured: true,
      badge: "Atmospheric Telemetry",
      bullets: [
        "Built a weather application for global locations using the Open-Meteo API and browser geolocation, with current conditions and a seven-day forecast.",
        "Created interactive hourly charts for temperature and humidity, plus forecast displays for precipitation probability and minimum/maximum temperatures.",
        "Implemented dew-point estimation, a wind compass, animated weather effects, and debounced city search with caching.",
        "Designed a responsive glassmorphism interface with day/night themes and support for Flask deployment or static hosting."
      ]
    },
    {
      id: "placement",
      title: "Placement Portal Application",
      category: "fullstack",
      tagline: "Centralized campus recruitment, drive tracking & JWT role-based portal",
      desc: "A scalable campus recruitment management system connecting university students, recruiters, and placement officers through a multi-tier workflow.",
      tech: ["Python", "Flask", "Vue.js", "SQLite", "SQLAlchemy", "Redis", "Celery", "JWT"],
      github: "https://github.com/zairaizha10/Placement-Portal-App.git",
      image: placementImg,
      featured: true,
      badge: "Campus Recruitment SaaS",
      bullets: [
        "Developed a campus recruitment platform connecting students, recruiters, and administrators through a centralized placement workflow.",
        "Implemented placement-drive management, student applications, application-status tracking, and role-based access using JWT authentication.",
        "Designed relational models with SQLAlchemy and used Vue.js dashboards with Flask REST APIs; retain Redis/Celery only if implemented and tested."
      ]
    },
    {
      id: "parking",
      title: "Smart Car Parking System",
      category: "systems",
      tagline: "Real-time parking bay allocation and telemetry dashboard",
      desc: "A responsive parking management system engineered with slot tracking, real-time availability indicator, and an intuitive dashboard UI.",
      tech: ["Python", "HTML5", "CSS3", "JavaScript", "Local Storage", "State Machine"],
      github: "https://github.com/zairaizha10/Car-Parking-System.git",
      image: parkingImg,
      featured: false,
      badge: "IoT & Systems",
      bullets: [
        "Constructed a dynamic parking slot allocation interface providing live capacity tracking and bay occupancy visualization.",
        "Streamlined reservation flow and checkout calculations with interactive state management and visual slot maps.",
        "Engineered fully responsive layouts ensuring seamless operational usability across desktop terminals and mobile devices."
      ]
    },
    {
      id: "hospital",
      title: "Hospital Management System",
      category: "fullstack",
      tagline: "Comprehensive clinical records, patient workflow & database platform",
      desc: "A management platform for handling patient records, appointments, doctor rosters, and hospital operations with robust database integrity.",
      tech: ["Python", "SQL", "Relational Database", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/23f3001132/hospital-management-system",
      image: hospitalImg,
      featured: false,
      badge: "Healthcare Database",
      bullets: [
        "Architected relational schema to safely store and query patient records, clinical histories, and physician appointments.",
        "Created an intuitive administration console for admissions, billing summaries, and department-wise staff schedules.",
        "Applied strict input sanitation and validation queries ensuring high data fidelity and zero record collisions."
      ]
    }
  ];

  const skillCategories = [
    {
      category: "Core Languages",
      icon: Code,
      accent: "text-rose-400",
      skills: ["Python", "Java", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"]
    },
    {
      category: "Frameworks & UI",
      icon: Layers,
      accent: "text-pink-400",
      skills: ["Flask", "Vue.js", "React.js", "Chart.js", "Tailwind CSS", "Canvas API"]
    },
    {
      category: "Databases & Backend",
      icon: Database,
      accent: "text-purple-400",
      skills: ["SQLite", "SQLAlchemy ORM", "Redis", "Celery", "RESTful APIs", "JWT Auth"]
    },
    {
      category: "DevOps & Tools",
      icon: Terminal,
      accent: "text-cyan-400",
      skills: ["Git & GitHub", "Linux CLI", "Vite", "Postman", "Responsive Design", "VS Code"]
    },
    {
      category: "Core Domains",
      icon: Cpu,
      accent: "text-emerald-400",
      skills: ["Data Science (IIT Madras)", "Machine Learning", "System Optimization", "UI/UX & Content"]
    }
  ];

  const filteredProjects = activeProjectFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeProjectFilter);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 overflow-x-hidden">
      {/* Falling Blossom Petals Canvas (Interactive Floral Theme) */}
      <PetalCanvas enabled={petalsEnabled} />

      {/* Atmospheric Floral Glow Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Sakura Rose Glow Top Right */}
        <div className="floral-ambient-glow top-[-10%] right-[-5%] w-[650px] h-[650px] bg-pink-600/15 animate-pulse-glow" />
        {/* Violet Nebula Center Left */}
        <div className="floral-ambient-glow top-[35%] left-[-10%] w-[600px] h-[600px] bg-purple-700/15" />
        {/* Cyber Cyan Flower Glow Bottom */}
        <div className="floral-ambient-glow bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-cyan-600/10" />
      </div>

      {/* Floating Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Project Screenshot Lightbox Modal */}
      {selectedProjectImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProjectImage(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0f111a] border border-pink-500/30 rounded-3xl shadow-[0_0_50px_rgba(244,63,94,0.3)] overflow-hidden z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-pink-500/15 bg-[#141824]/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <Flower2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-pink-400">{selectedProjectImage.badge || "Project Preview"}</span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">{selectedProjectImage.title}</h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedProjectImage.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-pink-300 hover:text-white bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/20 rounded-xl transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Full Resolution
                </a>
                <button
                  onClick={() => setSelectedProjectImage(null)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition cursor-pointer"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#07080e] max-h-[76vh]">
              <img
                src={selectedProjectImage.image}
                alt={selectedProjectImage.title}
                className="max-w-full max-h-[72vh] object-contain rounded-xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-[#090b12]/80 border-b border-pink-500/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo with Blooming Flower motif */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-500 to-purple-600 p-[1.5px] shadow-[0_0_20px_rgba(244,63,94,0.4)] group-hover:shadow-[0_0_28px_rgba(244,63,94,0.7)] transition-all duration-300">
              <div className="w-full h-full bg-[#0d0f18] rounded-[14px] flex items-center justify-center">
                <Flower2 className="w-5 h-5 text-pink-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-wider text-white font-heading">
                  ZAIRA
                </span>
                <span className="text-pink-400 font-extrabold text-xl font-heading">
                  IZHAR
                </span>
              </div>
              <p className="text-[10px] font-mono tracking-widest text-pink-400/80 -mt-1 uppercase">
                IIT Madras BS • Dev
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#121522]/90 border border-white/5 px-4 py-1.5 rounded-full shadow-inner">
            <a href="#about" className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-pink-300 hover:bg-pink-500/10 rounded-full transition">
              About
            </a>
            <a href="#experience" className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-pink-300 hover:bg-pink-500/10 rounded-full transition flex items-center gap-1.5">
              <span>Experience</span>
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping"></span>
            </a>
            <a href="#projects" className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-pink-300 hover:bg-pink-500/10 rounded-full transition">
              Projects
            </a>
            <a href="#skills" className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-pink-300 hover:bg-pink-500/10 rounded-full transition">
              Skills
            </a>
            <a href="#contact" className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-pink-300 hover:bg-pink-500/10 rounded-full transition">
              Contact
            </a>
          </nav>

          {/* Right Action Controls: Petal Toggle & Contact */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Petals Toggle */}
            <button
              onClick={() => setPetalsEnabled(!petalsEnabled)}
              title={petalsEnabled ? "Pause Falling Petals" : "Enable Falling Petals"}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition cursor-pointer ${
                petalsEnabled
                  ? "bg-pink-500/15 border-pink-500/40 text-pink-300 shadow-[0_0_12px_rgba(244,63,94,0.3)]"
                  : "bg-white/5 border-white/10 text-gray-400 hover:text-gray-200"
              }`}
            >
              <Flower2 className={`w-3.5 h-3.5 ${petalsEnabled ? "animate-spin" : ""}`} style={{ animationDuration: '8s' }} />
              <span>Petals {petalsEnabled ? "On" : "Off"}</span>
            </button>

            <a
              href="https://github.com/zairaizha10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-white hover:bg-pink-500/10 border border-white/10 hover:border-pink-500/30 rounded-xl transition"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/zaira-izhar-a57198347"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-white hover:bg-pink-500/10 border border-white/10 hover:border-pink-500/30 rounded-xl transition"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-4 py-2 text-xs font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white rounded-xl shadow-[0_0_20px_rgba(244,63,94,0.4)] transition hover:shadow-[0_0_28px_rgba(244,63,94,0.6)] cursor-pointer"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setPetalsEnabled(!petalsEnabled)}
              className="p-2 text-pink-400 bg-pink-500/10 border border-pink-500/30 rounded-xl"
              title="Toggle Petals"
            >
              <Flower2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white bg-white/5 border border-white/10 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-4 bg-[#0d0f18]/95 border-b border-pink-500/20 backdrop-blur-2xl flex flex-col gap-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium text-gray-200 hover:text-pink-400"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium text-gray-200 hover:text-pink-400 flex items-center justify-between"
            >
              <span>Experience & Certificates</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300">Updated</span>
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium text-gray-200 hover:text-pink-400"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium text-gray-200 hover:text-pink-400"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium text-gray-200 hover:text-pink-400"
            >
              Contact
            </a>
            <div className="pt-2 flex gap-3 border-t border-white/10">
              <a
                href="https://github.com/zairaizha10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center text-xs font-semibold bg-white/5 border border-white/10 rounded-xl text-gray-200"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/zaira-izhar-a57198347"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center text-xs font-semibold bg-white/5 border border-white/10 rounded-xl text-gray-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="relative z-20">
        
        {/* Hero Section */}
        <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center text-center px-6">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Tech Floral Blooming Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 border border-pink-500/30 text-pink-300 text-xs sm:text-sm font-medium mb-8 shadow-[0_0_20px_rgba(244,63,94,0.2)] backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <span>🌸 Available for Software & Data Science Opportunities</span>
              <span className="hidden sm:inline text-pink-500/50">•</span>
              <span className="hidden sm:inline text-gray-300">IIT Madras BS Student</span>
            </div>

            {/* Glowing Floral Monogram Badge */}
            <div className="relative mb-8 group cursor-pointer">
              {/* Outer petal ring rotation */}
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition duration-700"></div>
              
              <div className="relative w-36 h-36 rounded-full bg-[#0d0f18] border-2 border-pink-500/40 flex items-center justify-center p-1 shadow-[0_0_40px_rgba(244,63,94,0.35)]">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-900/30 to-rose-500/20 flex flex-col items-center justify-center">
                  <Flower2 className="w-6 h-6 text-pink-400 mb-1 opacity-80 animate-pulse" />
                  <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-pink-400 font-heading">
                    ZI
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-pink-300 uppercase mt-0.5">
                    TECH · CODE
                  </span>
                </div>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 font-heading">
              Hi, I'm <br />
              <span className="text-gradient-sakura">Zaira Izhar</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed font-light mb-8">
              <strong className="font-semibold text-white">Student at IIT Madras BS in Data Science & Applications</strong> .
                Passionate about Web development, Machine learning, Data Science, 
              and building impactful digital experiences. 
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-semibold text-sm sm:text-base shadow-[0_0_30px_rgba(244,63,94,0.4)] hover:shadow-[0_0_40px_rgba(244,63,94,0.6)] transition duration-300 flex items-center gap-2"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Explore Projects</span>
              </a>

              <a
                href="#experience"
                className="px-7 py-3.5 rounded-2xl bg-[#121522]/90 hover:bg-[#181c2d] border border-pink-500/30 hover:border-pink-500/60 text-pink-200 font-semibold text-sm sm:text-base transition duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(0,0,0,0.4)]"
              >
                <Briefcase className="w-4 h-4 text-pink-400" />
                <span>View Experience & Certificates</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-medium text-sm transition flex items-center gap-2 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-24 px-6 md:px-12 relative">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Flower2 className="w-3.5 h-3.5" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white">
                About <span className="text-gradient-sakura">Me</span>
              </h2>
            </div>

            {/* About Card with Floral Tech Accent */}
            <div className="glass-card rounded-[32px] p-8 sm:p-12 border border-pink-500/20 shadow-[0_0_40px_rgba(244,63,94,0.08)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-pink-500/10 to-transparent rounded-bl-full pointer-events-none" />

              <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
                {/* Column 1 & 2: Narrative */}
                <div className="md:col-span-2 space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
                  <p>
                    I am currently pursuing the <span className="text-white font-semibold">BS Degree in Data Science and Applications from IIT Madras</span>.
                    I enjoy solving real-world problems using programming and exploring Web development, Machine Learning, Data Science, and building impactful web applications.
                  </p>
                  <p>
                    Beyond that, I contribute to the technical society <span className="text-white font-medium">JARVIS</span>, authoring technical publications and designing university-wide visual creatives to communicate engineering concepts with impact.
                  </p>
                  
                </div>

                {/* Column 3: Quick Highlights Card */}
                <div className="bg-[#121522]/90 border border-white/10 rounded-2xl p-6 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-pink-400 font-mono">
                    Snapshot
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="pb-2 border-b border-white/5">
                      <span className="text-gray-400 text-xs block">Education</span>
                      <span className="text-white font-medium">IIT Madras • BS Data Science</span>
                    </div>

                    <div className="pb-2 border-b border-white/5">
                      <span className="text-gray-400 text-xs block">Key Specialties</span>
                      <span className="text-white font-medium">Python, Flask, React, Vue, SQL, APIs</span>
                    </div>

                    <div className="pb-2 border-b border-white/5">
                      <span className="text-gray-400 text-xs block">Internships Completed</span>
                      <span className="text-white font-medium">InAmigos Foundation & TEN</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Experience Section (NEW & RICH) */}
        <section id="experience" className="py-24 px-6 md:px-12 relative bg-[#090b14]/60">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Professional Journey & Internships</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white">
                Work <span className="text-gradient-sakura">Experience</span>
              </h2>
              <p className="text-gray-400 max-w-xl text-center mt-3 text-sm sm:text-base">
                Hands-on engineering internships, campus tech societies, and production software contributions with verified certificates.
              </p>
            </div>

            {/* Floral Stem Timeline */}
            <div className="relative pl-6 md:pl-10 space-y-12 before:absolute before:left-2 md:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-pink-500 before:via-purple-500 before:to-rose-500">
              
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  
                  {/* Blooming Timeline Node Icon */}
                  <div className="absolute -left-[30px] md:-left-[38px] top-1 w-8 h-8 rounded-full bg-[#0d0f18] border-2 border-pink-500/60 flex items-center justify-center text-pink-400 shadow-[0_0_15px_rgba(244,63,94,0.5)] group-hover:scale-110 group-hover:border-pink-400 transition-all duration-300">
                    <Flower2 className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
                  </div>

                  {/* Experience Card */}
                  <div className={`glass-card glass-card-hover rounded-[28px] p-6 sm:p-8 border border-white/10 ${exp.borderGlow} transition-all duration-300`}>
                    
                    {/* Top Row: Role, Dates, Company */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-500/30">
                            {exp.type}
                          </span>
                          {exp.hasCertificate && (
                            <span className="inline-flex items-center text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                              <CheckCircle className="w-3 h-3 mr-1" /> Certificate Verified
                            </span>
                          )}
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                          {exp.role}
                        </h3>

                        <p className="text-lg font-medium text-pink-300/90 mt-0.5">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 self-start px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                        <Calendar className="w-3.5 h-3.5 text-pink-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Brief context */}
                    <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Accomplishment Bullets */}
                    <ul className="space-y-3 mb-6">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-200 text-sm sm:text-base leading-relaxed">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-pink-400/90 shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges & Certificate Action Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs px-3 py-1 rounded-lg bg-pink-500/5 hover:bg-pink-500/15 text-pink-300 border border-pink-500/15 transition"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* View Certificate Button if applicable */}
                      {exp.hasCertificate && (
                        <button
                          onClick={() => openCertificate(certificatesData[exp.certKey])}
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 text-white border border-pink-500/30 hover:border-pink-500/60 shadow-[0_0_15px_rgba(244,63,94,0.15)] transition duration-200 cursor-pointer self-start sm:self-auto shrink-0"
                        >
                          <Eye className="w-3.5 h-3.5 text-pink-400" />
                          <span>{exp.certLabel}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-pink-400" />
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-24 px-6 md:px-12 relative">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-14">
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white">
                Featured <span className="text-gradient-sakura">Projects</span>
              </h2>
              <p className="text-gray-400 max-w-2xl text-center mt-3 text-sm sm:text-base">
                Real-world web applications, atmospheric forecasting engines, and full-stack software built with Python, Flask, Vue, React, and modern APIs.
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-[#121522]/80 border border-white/5">
                {[
                  { key: "all", label: "All Projects" },
                  { key: "weather", label: "Weather & Telemetry" },
                  { key: "fullstack", label: "Full-Stack SaaS" },
                  { key: "systems", label: "Systems & IoT" }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveProjectFilter(tab.key)}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition cursor-pointer ${
                      activeProjectFilter === tab.key
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_15px_rgba(244,63,94,0.3)]"
                        : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass-card glass-card-hover rounded-[32px] overflow-hidden border border-white/10 hover:border-pink-500/40 flex flex-col transition duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)] group"
                >
                  {/* Project Image Preview Container */}
                  <div
                    onClick={() => setSelectedProjectImage({ title: project.title, image: project.image, badge: project.badge })}
                    className="relative overflow-hidden aspect-video bg-[#0b0c16] border-b border-white/10 cursor-pointer group/img"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-medium border border-white/20 flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-pink-400" /> Click to enlarge
                      </span>
                    </div>

                    {/* Badge Overlay */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#090b12]/90 backdrop-blur-md text-pink-300 border border-pink-500/30 shadow-lg">
                        {project.badge}
                      </span>
                    </div>

                    {/* GitHub Quick Link on Image */}
                    <div className="absolute top-4 right-4 z-10" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-[#090b12]/90 hover:bg-pink-500 text-gray-200 hover:text-white border border-white/10 hover:border-pink-400 backdrop-blur-md transition shadow-lg inline-flex"
                        title="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-7 sm:p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white group-hover:text-pink-300 transition duration-300 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-pink-400/90 mb-4 font-mono">
                      {project.tagline}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed mb-5">
                      {project.desc}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 mb-6 flex-grow">
                      {project.bullets.map((point, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-7 pt-4 border-t border-white/5">
                      {project.tech.map((item, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/5 font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between gap-3 pt-2 flex-wrap">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 hover:text-white border border-pink-500/30 hover:border-pink-500/60 font-semibold text-xs sm:text-sm transition duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>View on GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Skills & Technologies Section */}
        <section id="skills" className="py-24 px-6 md:px-12 relative bg-[#090b14]/70">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Code className="w-3.5 h-3.5" />
                <span>Technical Repertoire</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white">
                Skills & <span className="text-gradient-sakura">Capabilities</span>
              </h2>
              <p className="text-gray-400 max-w-xl text-center mt-3 text-sm sm:text-base">
                Tools and technologies I use to build scalable web applications, real-time telemetry systems, and data pipelines.
              </p>
            </div>

            {/* Categorized Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((cat, idx) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 hover:border-pink-500/30 transition duration-300 flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-lg font-heading text-white">
                        {cat.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="px-3.5 py-1.5 rounded-xl bg-[#121522] border border-white/5 hover:border-pink-500/30 text-gray-300 hover:text-white text-xs font-medium transition duration-200"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-28 px-6 md:px-12 relative text-center">
          <div className="max-w-4xl mx-auto">
            
            <div className="glass-card rounded-[36px] p-8 sm:p-14 border border-pink-500/30 shadow-[0_0_60px_rgba(244,63,94,0.15)] relative overflow-hidden">
              
              {/* Background blossom icon watermark */}
              <div className="absolute -top-10 -right-10 text-pink-500/5 pointer-events-none">
                <Flower2 className="w-64 h-64" />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-[0_0_25px_rgba(244,63,94,0.4)]">
                  <Mail className="w-7 h-7" />
                </div>

                <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
                  Let's Connect & <span className="text-gradient-sakura">Collaborate</span>
                </h2>

                <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
                  Interested in collaborating on software engineering, full-stack projects, or data science roles? My inbox is always open.
                </p>

                {/* Email Display & Copy Action */}
                <div className="flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-[#0b0d16] border border-pink-500/25 max-w-md w-full mb-8">
                  <span className="px-4 py-2 text-sm text-pink-300 font-mono select-all flex-grow text-center sm:text-left">
                    zaira.izhar.1@gmail.com
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-400 text-white font-semibold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(244,63,94,0.3)]"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="mailto:zaira.izhar.1@gmail.com"
                    className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-semibold text-sm shadow-[0_0_30px_rgba(244,63,94,0.35)] transition duration-300 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Direct Email</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/zaira-izhar-a57198347"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 rounded-2xl bg-[#121522] hover:bg-[#181d2f] border border-pink-500/30 hover:border-pink-500/60 text-white font-semibold text-sm transition duration-300 flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4 text-pink-400" />
                    <span>LinkedIn Message</span>
                  </a>

                  <a
                    href="https://github.com/zairaizha10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-200 font-semibold text-sm transition duration-300 flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-20 border-t border-pink-500/10 py-8 px-6 text-center text-xs text-gray-400 bg-[#06070a]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Flower2 className="w-4 h-4 text-pink-400" />
            <span className="font-semibold text-gray-300">Zaira Izhar</span>
            <span className="text-gray-600">•</span>
            <span>BS in Data Science & Applications, IIT Madras</span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <a href="https://github.com/zairaizha10" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/zaira-izhar-a57198347" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              LinkedIn
            </a>
            <a href="mailto:zaira.izhar.1@gmail.com" className="hover:text-pink-400 transition">
              Email
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}