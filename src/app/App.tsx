import React, { useState, useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { toast, Toaster } from "sonner";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArticleIcon from "@mui/icons-material/Article";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Download, ArrowRight, Code2, Cpu, Globe, BookOpen } from "lucide-react";

import profileImage from "../imports/personalized_Image.jpeg";
import thushalPhoto from "../imports/thushal.jpeg";
import pintoPhoto from "../imports/pinto.jpeg";
import thushalPhoto1 from "../imports/thushal-1.jpeg";
import kishenPhoto1 from "../imports/kishen-1.jpeg";
import sujaniPhoto from "../imports/sujani.png";
import disniPhoto from "../imports/disni.jpeg";
import innomenteLogoImg from "../imports/Screenshot_2026-07-12_at_12.01.58_pm.png";
import sampleAssistLogoImg from "../imports/sampleassist.png";
import metatechnoLogoImg from "../imports/metatechno-1.jpeg";
import uowLogoImg from "../imports/uow.png";
import sliitLogoImg from "../imports/sliit.png";
import anandaLogoImg from "../imports/ananda.png";
import performanceEduLogoImg from "../imports/images__1_.jpeg";

import { CMSProjectSection, CMS_INDIGO, CMS_DARK } from "./CMSSection";
import { CaseStudiesSection } from "./CaseStudiesSection";
import { PDFProjectSection, PDF_BLUE, PDF_DARK, PDF_SLATE } from "./PDFSection";
import { RPAProjectSection, RPA_TEAL, RPA_DARK } from "./RPASection";
import { FunFactsSection } from "./FunFactsSection";
import metatechnoLogo from "../imports/metatechno.jpeg";
import sampleAssistCert from "../imports/1748063596284.png";
import ifsWinnerCard from "../imports/474657377_928817359340891_4787763857337460422_n.jpg";
import anandaCrest from "../imports/ananda-1.png";
import treasureHuntCert from "../imports/1749285025220.jpeg";
import meritAwardCert from "../imports/1749284637748.jpeg";
import membershipCert from "../imports/1759384945671-1.jpeg";
import awsCloudPractitionerCert from "../imports/1760602057223.jpeg";
import awsTechnicalEssentialsCert from "../imports/1770527238216.jpeg";
import awsSolutionsArchitectCert from "../imports/1761976049178.png";
import studyAustraliaCert from "../imports/1740824049062.jpeg";
import gitGithubCert from "../imports/1761478763315.jpeg";
import githubActionsCert from "../imports/1779170207263.jpeg";
import dockerKubernetesCert from "../imports/1780983776411.jpeg";

import { FadeUp, RevealLeft, BrowserChrome } from "./shared";
import coopersScreenshot  from "../imports/Screenshot_2026-07-07_at_12.24.16_pm.png";
import coopersAI1 from "../imports/Screenshot_2026-07-08_at_4.27.19_am.png";
import coopersAI2 from "../imports/Screenshot_2026-07-08_at_4.27.28_am.png";
import coopersAI3 from "../imports/Screenshot_2026-07-08_at_4.31.07_am.png";
import coopersSchedule1 from "../imports/Screenshot_2026-07-08_at_5.43.42_pm.png";
import coopersSchedule2 from "../imports/Screenshot_2026-07-08_at_5.43.52_pm.png";
import coopersSchedule3 from "../imports/Screenshot_2026-07-08_at_5.44.02_pm.png";
import coopersAdmin1 from "../imports/Screenshot_2026-07-08_at_6.09.41_pm.png";
import coopersAdmin2 from "../imports/Screenshot_2026-07-08_at_6.09.56_pm.png";
import coopersAdmin3 from "../imports/Screenshot_2026-07-08_at_6.10.25_pm.png";
import photoSydney from "../imports/Screenshot_2026-07-07_at_11.24.27_am.png";
import photoGraduation from "../imports/Screenshot_2026-07-07_at_11.25.04_am.png";
import photoStadium from "../imports/IMG_3625.JPG";
import photoFamily from "../imports/Screenshot_2026-07-07_at_11.26.07_am.png";
import photoConcert from "../imports/IMG_3651.JPG";
import photoConcert2 from "../imports/IMG_3651-1.JPG";
import sampleAssistLogo from "../imports/Lz4lUXSU9geUQ7Shteza2ORUg5l1709176912817_200x200-1.png";
import saDashboardSplit from "../imports/dashboardSplited.png";
import saSystemAnalysis from "../imports/Screenshot_2026-07-11_at_10.34.41_pm.png";
import saTeamSlide from "../imports/Screenshot_2026-07-11_at_10.35.23_pm.png";
import saDesktopScreen from "../imports/Screenshot_2026-07-11_at_10.50.50_pm.png";
import saClientADS from "../imports/logo.jpg";
import saClientCQR from "../imports/images__1_.png";
import evLogin from "../imports/login.png";
import evUserDashboard from "../imports/user-dashboard.png";
import evUserHistory from "../imports/user-history.png";
import evUserCheckoutHistory from "../imports/user-checkout-history.png";
import evChargingComplete from "../imports/charging-complete.png";
import evAdminDashboard from "../imports/admin-dashboard.png";
import evAdminMonitoring from "../imports/admin-monitoring.png";
import evLocationManagement from "../imports/location-management.png";
import saCollectionReports2 from "../imports/collectionReports2.png";
import saCollectionReports5 from "../imports/collectionReports5.png";
import saAccountingDash1 from "../imports/accountingDash1.png";
import saAccountingDash2 from "../imports/accountingDash2.png";
import saCollectorsCalendar from "../imports/collectorsA1.png";
import saFaq from "../imports/faq2.png";

// ── MUI Theme ─────────────────────────────────────────────────────────────────

const muiTheme = createTheme({
  palette: {
    primary: { main: "#5B4DFF", contrastText: "#fff" },
    secondary: { main: "#F59E0B", contrastText: "#0C0C0C" },
    background: { default: "#FFFFFF", paper: "#FFFFFF" },
    text: { primary: "#0C0C0C", secondary: "#6B7280" },
    divider: "rgba(0,0,0,0.07)",
  },
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    h1: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800 },
    h2: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 600, fontSize: "0.875rem", borderRadius: 10 },
        contained: { boxShadow: "none", "&:hover": { boxShadow: "0 6px 20px rgba(91,77,255,0.28)" } },
        outlined: { borderWidth: "1.5px", "&:hover": { borderWidth: "1.5px" } },
      },
    },
    MuiChip: {
      styleOverrides: { root: { fontWeight: 500, fontSize: "0.74rem", borderRadius: 8 } },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: { borderRadius: 4, height: 4, backgroundColor: "rgba(91,77,255,0.08)" },
        bar: { borderRadius: 4, background: "linear-gradient(90deg,#5B4DFF,#A78BFA)" },
      },
    },
  },
});

// ── Data ──────────────────────────────────────────���───────────────────────────

const RESUME_URL = "https://1drv.ms/b/c/7e124fed5ca65adc/IQBhM4oqgZjtT7ahjUbWDAJ0AXp8GT0BlwbjVYiUkwHtkRY?e=aT8wVR";

const ALL_SECTION_IDS = [
  "hero","about","projects","publications","techstack",
  "experience","education","casestudies","blog","honors",
  "memberships","certifications","funfacts","contact",
];

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const TYPEWRITER_ROLES = [
  "Software Engineer",
  "Flutter Developer",
  "Full-Stack Engineer",
  "Mobile App Developer",
  "React Developer",
  "NestJS Backend Engineer",
  "Technology Enthusiast",
  "House Music Producer",
];

const PROJECTS = [
  {
    title: "Cooper's Barber Shop Booking Platform",
    tag: "Full-Stack Web App", color: "#5B4DFF", status: "Active",
    description: "Full-stack booking platform with Claude-first AI consultation flow, JWT + Google OAuth auth, Redis caching, WebSockets for live scheduling, and fully Dockerised deployment on AWS ECS.",
    stack: ["NestJS", "PostgreSQL", "React", "TypeScript", "Ant Design", "Claude AI", "Redis", "Docker", "GitHub Actions"],
    github: "https://github.com/RusiraLiyanage", demo: null,
  },
  {
    title: "Collection Manager Mobile App",
    tag: "Mobile (Flutter)", color: "#10B981", status: "Completed",
    description: "Cross-platform Flutter mobile application supporting on-call medical screening workflows. Integrated AWS (RDS, Cognito) via REST APIs with full CI/CD pipelines. Capstone project at UOW, led to a graduate engineering role at Innomente.",
    stack: ["Flutter", "Dart", "AWS Cognito", "AWS Lambda", "AWS API Gateway", "PostgreSQL", "Express JS", "Material UI", "Figma", "GitHub Actions"],
    github: "https://github.com/RusiraLiyanage", demo: null,
  },
  {
    title: "PRODEP, Social Media Tracker",
    tag: "Research / AI", color: "#F59E0B", status: "Published",
    description: "Smart procrastination and depression detection system using NLP, Computer Vision, and ML. Published at IEEE SMAP 2022, Greece. Final year research project at SLIIT.",
    stack: ["Flutter", "Django", "Python", "TensorFlow", "NLP", "Firebase", "Facebook API", "Twitter API"],
    github: "https://github.com/RusiraLiyanage", demo: "https://doi.org/10.1109/SMAP56125.2022.9941896",
  },
];

const PUBLICATIONS = [
  {
    title: "PRODEP: Smart Social Media Procrastination and Depression Tracker",
    journal: "IEEE SMAP 2022, 17th International Workshop on Semantic and Social Media Adaptation and Personalisation",
    venue: "Greece", year: "2022",
    doi: "https://doi.org/10.1109/SMAP56125.2022.9941896",
    abstract: "A smart mobile system that detects social media procrastination and depression indicators using NLP, Computer Vision, and Machine Learning models trained on user behavior patterns from Facebook and Twitter APIs.",
    stack: ["Flutter", "Django", "NLP", "Computer Vision", "TensorFlow", "Firebase"],
    note: "Final Year Research Project at SLIIT",
  },
];

const TECH_STACK = [
  { category: "Languages", color: "#5B4DFF", skills: ["Dart", "TypeScript", "JavaScript", "Python", "Java", "C#"] },
  { category: "Mobile", color: "#10B981", skills: ["Flutter (iOS & Android)", "React Native", "GetX", "SQLite (offline-first)"] },
  { category: "Frontend", color: "#F59E0B", skills: ["React + Vite", "Next.js", "Material UI", "Ant Design", "HTML5", "CSS3", "Figma"] },
  { category: "Backend & APIs", color: "#F43F5E", skills: ["NestJS", "Node.js + Express", "ASP.NET Core", "RESTful APIs", "Flask", "Swagger", "Redis"] },
  { category: "Cloud & Infra", color: "#8B5CF6", skills: ["AWS (RDS, Cognito, EC2, ECS, S3)", "Docker", "Kubernetes", "Serverless"] },
  { category: "Databases", color: "#06B6D4", skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"] },
  { category: "DevOps & Tools", color: "#64748B", skills: ["Git", "GitHub Actions", "CI/CD Pipelines", "Docker", "Turborepo", "Asana"] },
];

const EXPERIENCE = [
  {
    role: "Graduate Software Engineer", company: "Innomente Pty Ltd",
    location: "Wollongong, NSW", period: "Oct 2025 – Apr 2026",
    type: "MedTech SaaS", color: "#5B4DFF",
    note: "Promoted from Intern for consistent delivery of production features",
    bullets: [
      "Engineered scalable backend services using NestJS + Express with PostgreSQL for compliance-critical medical screening workflows within a monorepo architecture.",
      "Built high-performance frontend features in React (TypeScript) using hooks, Context API, and Redux for the Collection Manager medical screening web platform.",
      "Implemented and optimised drug testing workflows for the Collect Assist Flutter app with offline-first architecture (GetX + SQLite), automating iOS/Android releases via GitHub Actions & Docker.",
      "Collaborated in an Agile remote-first environment tracking delivery via Asana; leveraged AI tools (Codex, Claude, Copilot) to accelerate feature development.",
    ],
  },
  {
    role: "Software Engineer Intern", company: "Sample Assist (SA) Pty Ltd",
    location: "Wollongong, NSW", period: "Oct 2023 – Sep 2025",
    type: "MedTech", color: "#10B981", note: "",
    bullets: [
      "Built a production Flutter mobile application integrating AWS services (RDS, Cognito) through RESTful APIs to replicate a complex medical screening desktop SaaS platform. Led the team throughout.",
      "Led system design, improving state management reliability and scalability for future desktop feature parity, automating mobile releases via GitHub Actions.",
      "Optimised server-side PDF and email generation by migrating a legacy HTML-to-PDF pipeline to Puppeteer-based templates, improving performance and accessibility by 75%.",
    ],
  },
  {
    role: "Trainee Software Engineer", company: "Metatechno Lanka Company Pty Ltd",
    location: "Colombo, Sri Lanka", period: "Mar 2021 – Dec 2021",
    type: "IT Services", color: "#F59E0B", note: "",
    bullets: [
      "Built UiPath RPA solutions automating HR reporting from Redmine, reducing manual effort by 85%.",
      "Automated system reporting workflows using Linux shell scripting and UiPath, generating structured analysis reports and improving operational efficiency.",
    ],
  },
];

const EDUCATION = [
  { degree: "IT Professional Year, Information Technology", institution: "Performance Education", location: "NSW, Australia", period: "Oct 2025 – Present", result: "Professional development program bridging academic study and professional employment in Australia", color: "#FF6B35" },
  { degree: "Master of Computer Science (Software Engineering)", institution: "University of Wollongong (UOW)", location: "NSW, Australia", period: "Jul 2023 – Jul 2025", result: "Distinction Pass, 76.69% WAM", color: "#5B4DFF" },
  { degree: "BSc (Hons) Information Technology (Software Engineering)", institution: "Sri Lanka Institute of Information Technology (SLIIT)", location: "Colombo, Sri Lanka", period: "Feb 2019 – Mar 2023", result: "Second Class Honours, 3.27/4.0 WGPA", color: "#10B981" },
  { degree: "G.C.E Advanced Level, Commerce Stream with IT", institution: "Ananda College", location: "Colombo, Sri Lanka", period: "2005 – 2018", result: "Commerce Stream with Information Technology", color: "#F59E0B" },
];

const CASE_STUDIES = [
  { title: "From Capstone to Career", client: "Collection Manager App, UOW × Sample Assist", problem: "Sample Assist needed a mobile counterpart to their complex medical screening desktop SaaS platform to support on-call field operations.", solution: "Designed and built a cross-platform Flutter app with AWS (RDS, Cognito) integration, full CI/CD via GitHub Actions, and cross-device testing across iOS and Android.", impact: "Delivered a production-ready app that directly led to a graduate engineering role offer at the industry partner, Innomente Pty Ltd.", tags: ["Flutter", "AWS", "CI/CD", "MedTech"] },
  { title: "AI-Powered Barber Matching", client: "Cooper's Barber Shop Booking Platform", problem: "Traditional booking systems can't personalise barber selection based on service complexity and individual customer needs.", solution: "Integrated a Claude-first AI consultation flow where customers answer service-specific questions and upload hair photos, producing structured barber prep briefs for perfect matching.", impact: "Full-stack system with secure auth (JWT + Google OAuth + Redis sessions), real-time slot management via WebSockets, and Dockerised deployment on AWS ECS.", tags: ["Claude AI", "NestJS", "React", "AWS ECS"] },
];

const BLOG_POSTS = [
  {
    title: "Robotic Process Automation 🤖",
    subtitle: "An incredible way of saving time 🙂🔥",
    date: "Sep 17, 2021",
    tag: "Automation",
    tagColor: "#7C3AED",
    url: "https://rusira-senath.medium.com/robotic-process-automation-97b18621d629",
    thumbnail: "https://cdn-images-1.medium.com/max/769/1*ax4pi6gkw4WZlGR1YtxsEg.png",
  },
  {
    title: "Essentials of JavaScript (Part 1)",
    subtitle: "Core concepts, execution, history and the ecosystem",
    date: "Apr 5, 2021",
    tag: "JavaScript",
    tagColor: "#D97706",
    url: "https://rusira-senath.medium.com/essentials-of-javascript-part1-2b59bc0ec6df",
    thumbnail: "https://cdn-images-1.medium.com/max/800/1*JTVWHBtzlA9P6iKMxCF2yQ.png",
  },
  {
    title: "Essentials of JavaScript (Part 2)",
    subtitle: "Functions, arrow functions, callbacks, promises & async/await",
    date: "Apr 19, 2021",
    tag: "JavaScript",
    tagColor: "#D97706",
    url: "https://rusira-senath.medium.com/essentials-of-javascript-part-2-d7ee900cd57",
    thumbnail: "https://cdn-images-1.medium.com/max/1024/1*hpj1gZSSl2jEhUnfUkXY7w.jpeg",
  },
  {
    title: "Essentials of JavaScript (Part 3)",
    subtitle: "The story of Triple Gems — Let, Const, Var",
    date: "Apr 26, 2021",
    tag: "JavaScript",
    tagColor: "#D97706",
    url: "https://rusira-senath.medium.com/essentials-of-javascript-part-3-c922d0cc8d87",
    thumbnail: "https://cdn-images-1.medium.com/max/1000/1*ZlCVSAxqMP13STKhcXzY2g.jpeg",
  },
  {
    title: "Essentials of JavaScript (Part 4) 😃🔥",
    subtitle: "Most important aspects every developer must know",
    date: "May 10, 2021",
    tag: "JavaScript",
    tagColor: "#D97706",
    url: "https://rusira-senath.medium.com/essentials-of-javascript-part-4-ac54110f5c55",
    thumbnail: "https://cdn-images-1.medium.com/max/1024/1*5Jk5QndOP2rFeMYbAovfHA.jpeg",
  },
  {
    title: "Everything You Need to Know About MongoDB as a Beginner",
    subtitle: "Features, comparison with SQL, security, and setup",
    date: "Mar 11, 2021",
    tag: "Database",
    tagColor: "#059669",
    url: "https://rusira-senath.medium.com/everything-you-need-to-know-about-mongodb-as-a-beginner-481c5bb22e41",
    thumbnail: "https://miro.medium.com/v2/resize:fill:320:214/1*NBtM4jUGKhLs-QvqrU85_g.jpeg",
  },
];

const HONORS = [
  { title: "Sample Assist Intern of the Year", issuer: "Sample Assist (SA) Pty Ltd", year: "2024", description: "Recognised for outstanding contribution and consistent delivery of production features during internship." },
  { title: "IFS Discovery Challenge 2 Winner", issuer: "IFS", year: "2023", description: "Winner of the IFS Discovery Challenge 2, a competitive engineering innovation challenge." },
  { title: "IT Subject Prize, Commerce Section", issuer: "Ananda College, Colombo", year: "2017", description: "Information Technology Subject Prize Winner at the Annual Prize Giving ceremony." },
];

const MEMBERSHIPS = [
  { 
    org: "Australian Computer Society (ACS)", 
    role: "Associate Member", 
    since: "2025", 
    certImage: membershipCert
  },
];

const CERTIFICATIONS = [
  { 
    name: "AWS Cloud Practitioner Essentials", 
    issuer: "Amazon Web Services (AWS)", 
    completed: "October 2025", 
    certImage: awsCloudPractitionerCert,
    logo: "AWS",
    logoColor: "#FF9900"
  },
  { 
    name: "AWS Technical Essentials", 
    issuer: "Amazon Web Services (AWS)", 
    completed: "February 2026", 
    certImage: awsTechnicalEssentialsCert,
    logo: "AWS",
    logoColor: "#FF9900"
  },
  { 
    name: "AWS Solutions Architecture Job Simulation", 
    issuer: "Forage", 
    completed: "November 2025", 
    certImage: awsSolutionsArchitectCert,
    credentialUrl: "https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_PZdAf9JgjTGC4jArR_1761975910263_completion_certificate.pdf",
    logo: "Forage",
    logoColor: "#FF8C00"
  },
  { 
    name: "Study Australia Industry Experience Program", 
    issuer: "Australian Government", 
    completed: "January 2025", 
    certImage: studyAustraliaCert,
    logo: "AU",
    logoColor: "#006F42"
  },
  { 
    name: "Git & GitHub - The Practical Guide", 
    issuer: "Udemy", 
    completed: "October 2025", 
    certImage: gitGithubCert,
    credentialUrl: "https://www.udemy.com/certificate/UC-126e7117-57a6-4500-9bce-0be271624fe4/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    logo: "Udemy",
    logoColor: "#A435F0"
  },
  { 
    name: "GitHub Actions - The Complete Guide", 
    issuer: "Udemy", 
    completed: "May 2026", 
    certImage: githubActionsCert,
    credentialUrl: "https://www.udemy.com/certificate/UC-11cd1ca2-2dbe-46d5-bdb7-83d86c5fe963/",
    logo: "Udemy",
    logoColor: "#A435F0"
  },
  { 
    name: "Docker & Kubernetes: The Practical Guide", 
    issuer: "Udemy", 
    completed: "June 2026", 
    certImage: dockerKubernetesCert,
    credentialUrl: "https://www.udemy.com/certificate/UC-500bd48f-8337-475c-a52e-4d1591bea689/",
    logo: "Udemy",
    logoColor: "#A435F0"
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function useScrollSpy() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const h = () => {
      const y = window.scrollY + 90;
      for (const id of ALL_SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return active;
}

function useTypewriter(texts: string[], speed = 75, pause = 2000) {
  const [ti, setTi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  const [out, setOut] = useState("");
  useEffect(() => {
    const cur = texts[ti];
    let t: ReturnType<typeof setTimeout>;
    if (!del && ci < cur.length) {
      t = setTimeout(() => { setCi(c => c + 1); setOut(cur.slice(0, ci + 1)); }, speed);
    } else if (!del && ci === cur.length) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && ci > 0) {
      t = setTimeout(() => { setCi(c => c - 1); setOut(cur.slice(0, ci - 1)); }, speed / 2);
    } else {
      setDel(false);
      setTi(i => (i + 1) % texts.length);
    }
    return () => clearTimeout(t);
  }, [ci, del, ti, texts, speed, pause]);
  return out;
}

// FadeUp and RevealLeft imported from ./shared

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <FadeUp className="mb-10">
      <div style={{ display: "flex", alignItems: "flex-end", gap: 14, marginBottom: 40 }}>
        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: "#5B4DFF", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", paddingBottom: 3 }}>{number}</span>
        <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "clamp(1.6rem,3.5vw,2.2rem)", fontWeight: 800, color: "#0C0C0C", lineHeight: 1, margin: 0 }}>{title}</h2>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(91,77,255,0.18), transparent)", marginBottom: 3 }} />
      </div>
    </FadeUp>
  );
}

const CARD: React.CSSProperties = { background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 16, padding: 24 };
const STRIPE: React.CSSProperties = { background: "#F8F9FA", border: "1px solid rgba(0,0,0,0.05)", borderRadius: 16, padding: 24 };

// ── Hanging Badge (overlay variant - sits on top of photo) ───────────────────

function HangingBadge() {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", animation: "swing 5s ease-in-out infinite", transformOrigin: "top center" }}>
      <div style={{
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        border: "1.5px solid rgba(91,77,255,0.2)",
        borderRadius: 14,
        padding: "10px 20px",
        boxShadow: "0 10px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(91,77,255,0.12)",
        display: "flex", alignItems: "center", gap: 12,
        whiteSpace: "nowrap",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#10B981", animation: "pulse-dot 2s infinite" }} />
          <div style={{ position: "absolute", inset: -4, borderRadius: "50%", background: "rgba(16,185,129,0.18)", animation: "pulse-ring 2s infinite" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.82rem", color: "#0C0C0C" }}>Open to Opportunities</span>
          <span style={{ color: "#D1D5DB", fontSize: "0.75rem" }}>·</span>
          <span style={{ fontSize: "0.75rem", color: "#6B7280" }}>Australia · Remote · Relocation ready</span>
        </div>
      </div>
    </div>
  );
}

// FloatingPhoto removed - hero shows only profile photo

// ── About Photo Card ─────────────────────────────────────────────────────────
// Phase 1: dramatic scroll-reveal (y drop + scale + opacity)
// Phase 2: continuous float identical to the hero profile picture

function ScrollPhoto({ src, alt, rotate, delay, caption, flip = false, floatDuration = 5 }: {
  src: string; alt: string; rotate: string; delay: number; caption: string;
  flip?: boolean; floatDuration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const revealControls = useAnimation();
  const captionControls = useAnimation();

  useEffect(() => {
    if (!isInView) return;
    // Phase 1: reveal
    revealControls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay },
    }).then(() => {
      // Phase 2: float loop - same feel as the hero profile picture
      revealControls.start({
        y: [0, -10, 0],
        transition: { duration: floatDuration, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
      });
    });
    captionControls.start({
      opacity: 1,
      transition: { duration: 0.6, delay: delay + 0.6 },
    });
  }, [isInView]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Outer motion.div: controls opacity + y (reveal → float) */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 90, scale: 0.86 }}
        animate={revealControls}
        whileHover={{ scale: 1.04, zIndex: 10 }}
        style={{ cursor: "pointer" }}
      >
        {/* Inner div: static rotation (separate element avoids transform conflict) */}
        <div
          style={{
            transform: `rotate(${rotate})`,
            transition: "transform 0.35s ease",
            borderRadius: 18,
            overflow: "hidden",
            border: "4px solid #fff",
            boxShadow: "0 10px 36px rgba(0,0,0,0.13)",
            background: "#F5F5F5",
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
              transform: flip ? "rotate(180deg)" : undefined,
            }}
          />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={captionControls}
        style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.68rem", color: "#9CA3AF", textAlign: "center", fontStyle: "italic", margin: 0 }}
      >
        {caption}
      </motion.p>
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────

function Navbar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.94)" : "rgba(255,255,255,0.88)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.07)" : "none",
        transition: "box-shadow 0.3s",
      }}>
        <div style={{ width: "100%", padding: "0 20px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box" }}>
          {/* LEFT: Full name */}
          <button onClick={() => scrollTo("hero")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "0.95rem", color: "#0C0C0C", letterSpacing: "-0.02em" }}>
              Rusira Senath Liyanage
            </span>
            <span style={{ color: "#5B4DFF", fontWeight: 900, fontSize: "1rem" }}>.</span>
          </button>

          {/* RIGHT: Nav links + Resume */}
          <div style={{ display: "flex", alignItems: "center", gap: 2 }} className="hidden md:flex">
            {NAV_LINKS.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.id)} style={{
                fontFamily: '"Inter", sans-serif', fontSize: "0.82rem", fontWeight: 500,
                padding: "5px 14px", borderRadius: 8, border: "none", cursor: "pointer", transition: "all 0.2s",
                background: active === s.id ? "rgba(91,77,255,0.09)" : "transparent",
                color: active === s.id ? "#5B4DFF" : "#52525B",
              }}>
                {s.label}
              </button>
            ))}
            <div style={{ width: 1, height: 20, background: "rgba(0,0,0,0.1)", margin: "0 8px" }} />
            <Button variant="contained" size="small" startIcon={<Download size={13} />}
              href={RESUME_URL} target="_blank" rel="noopener noreferrer"
              sx={{ fontSize: "0.78rem", px: 2, py: 0.75 }}>
              Resume
            </Button>
          </div>

          {/* Mobile hamburger */}
          <IconButton onClick={() => setOpen(!open)} sx={{ display: { md: "none" }, color: "#0C0C0C" }}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32 }}>
          <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 8 }}>Rusira Senath Liyanage<span style={{ color: "#5B4DFF" }}>.</span></div>
          {NAV_LINKS.map(s => (
            <button key={s.id} onClick={() => { scrollTo(s.id); setOpen(false); }}
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "1.8rem", fontWeight: 800, color: active === s.id ? "#5B4DFF" : "#0C0C0C", background: "none", border: "none", cursor: "pointer" }}>
              {s.label}
            </button>
          ))}
          <Button variant="contained" size="large" startIcon={<Download size={16} />}
            href={RESUME_URL} target="_blank" rel="noopener noreferrer" sx={{ mt: 2 }}>
            Download Resume
          </Button>
        </motion.div>
      )}
    </>
  );
}

// ── Hero ──────────���───────────────────────────────────────────────────────────

function HeroSection() {
  const role = useTypewriter(TYPEWRITER_ROLES);

  return (
    <section id="hero" style={{ minHeight: "100vh", background: "#fff", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
      {/* Subtle ambient blobs */}
      <div style={{ position: "absolute", top: "5%", right: "15%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,77,255,0.05) 0%, transparent 70%)", pointerEvents: "none", animation: "drift1 12s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "5%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)", pointerEvents: "none", animation: "drift2 15s ease-in-out infinite" }} />
      <div style={{ position: "absolute", top: "50%", left: "40%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)", pointerEvents: "none", animation: "drift3 18s ease-in-out infinite" }} />

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "96px 40px 72px", width: "100%" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 480px", gap: 56, alignItems: "start" }}>

          {/* LEFT: Text */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            {/* Badge above the name */}
            <div style={{ marginBottom: 20 }}>
              <HangingBadge />
            </div>

            <h1 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: "clamp(2.4rem, 5.5vw, 4rem)", color: "#0C0C0C", lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: 14 }}>
              Hi, I'm{" "}
              <span style={{ background: "linear-gradient(135deg, #5B4DFF 0%, #8B5CF6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Rusira<br />Senath Liyanage
              </span>
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: 8, height: 34, marginBottom: 20 }}>
              <span style={{ color: "#6B7280", fontSize: "1rem" }}>I'm a</span>
              <span style={{ color: "#5B4DFF", fontWeight: 700, fontSize: "1.05rem", minWidth: 260 }}>
                {role}<span style={{ borderRight: "2.5px solid #5B4DFF", animation: "blink 1s step-end infinite", marginLeft: 1 }} />
              </span>
            </div>

            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: 520, marginBottom: 16 }}>
              Software Engineer with a <strong style={{ color: "#0C0C0C" }}>Master of Computer Science (Distinction)</strong> from
              the University of Wollongong and 2+ years shipping scalable mobile and full-stack solutions in production MedTech SaaS.
              Skilled in Flutter, React, NestJS, PostgreSQL, and AWS, I care about clean architecture, seamless user experiences,
              and building reliable systems that solve real problems at scale.
              Currently based in Wollongong and open to opportunities across Australia as well as remote roles worldwide.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32, color: "#6B7280", fontSize: "0.82rem" }}>
              <LocationOnIcon sx={{ fontSize: 16, color: "#5B4DFF" }} />
              North Wollongong, NSW 2500, Australia
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
              <Button variant="contained" size="large" endIcon={<ArrowRight size={15} />} onClick={() => scrollTo("projects")}
                sx={{ px: 3, py: 1.2, fontSize: "0.88rem" }}>
                View Projects
              </Button>
              <Button variant="outlined" size="large" onClick={() => scrollTo("contact")}
                sx={{ px: 3, py: 1.2, fontSize: "0.88rem", borderColor: "rgba(91,77,255,0.35)", color: "#5B4DFF", "&:hover": { borderColor: "#5B4DFF", background: "rgba(91,77,255,0.05)" } }}>
                Contact Me
              </Button>
              <Button variant="text" size="large" startIcon={<Download size={15} />}
                href={RESUME_URL} target="_blank" rel="noopener noreferrer"
                sx={{ px: 2.5, py: 1.2, fontSize: "0.88rem", color: "#6B7280" }}>
                Resume
              </Button>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {[
                { icon: <GitHubIcon />, label: "GitHub (Personal)", href: "https://github.com/RusiraLiyanage" },
                { icon: <GitHubIcon />, label: "GitHub (Work)", href: "https://github.com/InnomenteRusira" },
                { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://linkedin.com/in/rusira-senath-liyanage" },
                { icon: <EmailIcon />, label: "rusira.senath@gmail.com", href: "mailto:rusira.senath@gmail.com" },
              ].map(l => (
                <Tooltip key={l.label} title={l.label} arrow>
                  <IconButton component="a" href={l.href} target="_blank" rel="noopener noreferrer"
                    sx={{ color: "#71717A", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "10px", p: 0.9, "&:hover": { color: "#5B4DFF", borderColor: "#5B4DFF", background: "rgba(91,77,255,0.06)" }, transition: "all 0.2s" }}>
                    {l.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Profile photo */}
          <motion.div
            className="hero-profile-container hidden md:block"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", justifyContent: "center", paddingRight: 40, paddingTop: 84 }}
          >
            <div style={{
              width: 380,
              borderRadius: 24,
              overflow: "hidden",
              border: "3px solid rgba(91,77,255,0.18)",
              boxShadow: "0 24px 64px rgba(91,77,255,0.14), 0 8px 24px rgba(0,0,0,0.08)",
              background: "#f0f0f0",
              animation: "float-profile 7s ease-in-out infinite",
            }}>
              <img
                src={profileImage}
                alt="Rusira Senath Liyanage"
                style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.2 }}
        style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer", opacity: 0.3 }}
        onClick={() => scrollTo("about")}>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0C0C0C" }}>Scroll</span>
        <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
      </motion.div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────

const textVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const lineVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

function AboutSection() {
  return (
    <section id="about" style={{ padding: "88px 0", background: "#F8F9FA", overflow: "hidden" }}>
      <div className="section-container" style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader number="01" title="About Me" />

        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "start" }}>
          {/* LEFT: personal narrative */}
          <motion.div variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>

            <motion.div variants={lineVariant} style={CARD}>
              <p style={{ color: "#3F3F46", lineHeight: 1.88, fontSize: "0.9rem", marginBottom: 14 }}>
                I grew up in <strong style={{ color: "#0C0C0C" }}>Sri Lanka</strong>, where my curiosity for technology started early and never really switched off. After completing my undergraduate studies at the <strong style={{ color: "#0C0C0C" }}>Sri Lanka Institute of Information Technology</strong> (SLIIT), I made the move to Australia to pursue a Master of Computer Science at the <strong style={{ color: "#0C0C0C" }}>University of Wollongong</strong> (UOW). That decision changed everything.
              </p>
              <p style={{ color: "#3F3F46", lineHeight: 1.88, fontSize: "0.9rem", marginBottom: 14 }}>
                At UOW I led a team of seven members through a Work Integrated Learning capstone for <strong style={{ color: "#5B4DFF" }}>Sample Assist</strong>. Delivering a Flutter app to production, as team leader and project manager, remains one of the things I'm most proud of. That capstone directly led to a graduate engineering role at <strong style={{ color: "#5B4DFF" }}>Innomente Pty Ltd</strong>.
              </p>
              <p style={{ color: "#3F3F46", lineHeight: 1.88, fontSize: "0.9rem", marginBottom: 14 }}>
                In my leisure time, I enjoy listening to and <strong style={{ color: "#0C0C0C" }}>producing house music</strong>, which keeps the creative side of my brain alive. Alongside that, I sharpen my engineering instincts by working on personal projects, turning ideas into real, working things. Solving a hard problem or finishing a track that sounds right both give me the same kind of satisfaction.
              </p>
              <p style={{ color: "#3F3F46", lineHeight: 1.88, fontSize: "0.9rem", marginBottom: 24 }}>
                I hold full working rights in Australia and am open to <strong style={{ color: "#10B981" }}>on-site, hybrid, or fully remote</strong> opportunities. If you are building something interesting, I would love to hear about it.
              </p>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 20 }}>
              {[
                { v: "2+", l: "Years Industry Exp.", accent: true },
                { v: "MCS", l: "Distinction, UOW", accent: false },
                { v: "IEEE", l: "Research Published", accent: false },
                { v: "5", l: "Awards Received", accent: false },
              ].map((s) => (
                <motion.div key={s.l} variants={lineVariant}
                  style={{ ...CARD, textAlign: "center", background: s.accent ? "#5B4DFF" : "#fff" }}>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: "1.8rem", color: s.accent ? "#fff" : "#0C0C0C", lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: "0.74rem", color: s.accent ? "rgba(255,255,255,0.75)" : "#6B7280", marginTop: 8 }}>{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Photo collage */}
          <div className="hidden md:grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>
            {/* Column 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <ScrollPhoto src={photoGraduation} alt="UOW Graduation" rotate="-2deg" delay={0.05} caption="UOW Graduate, 2025" floatDuration={5} />
              <ScrollPhoto src={photoStadium} alt="Accor Stadium" rotate="1.5deg" delay={0.2} caption="Accor Stadium, Sydney" floatDuration={6.5} />
            </div>
            {/* Column 2, offset */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingTop: 48 }}>
              <ScrollPhoto src={photoSydney} alt="Sydney Harbour Bridge" rotate="2deg" delay={0.12} caption="Sydney Harbour Bridge" floatDuration={5.8} />
              <ScrollPhoto src={photoFamily} alt="Family in Wollongong" rotate="-1.5deg" delay={0.27} caption="Family in Wollongong, Australia" floatDuration={7} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────────────────────

// ── Tech icon badge (Simple Icons CDN) ───────────────────────────────────────

function TechBadge({ slug, name, color, emoji }: { slug?: string; name: string; color: string; emoji?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7, minWidth: 64 }}>
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: `${color}12`,
        border: `1px solid ${color}28`,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 6px 16px ${color}30`; }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
      >
        {slug ? (
          <img
            src={`https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`}
            alt={name}
            style={{ width: 26, height: 26 }}
            onError={e => {
              const img = e.target as HTMLImageElement;
              img.style.display = "none";
              if (img.parentNode && emoji) {
                const sp = document.createElement("span");
                sp.style.fontSize = "1.3rem";
                sp.textContent = emoji;
                img.parentNode.appendChild(sp);
              }
            }}
          />
        ) : (
          <span style={{ fontSize: "1.3rem" }}>{emoji ?? "⚙️"}</span>
        )}
      </div>
      <span style={{ fontSize: "0.62rem", color: "#6B7280", textAlign: "center", fontFamily: '"Inter", sans-serif', lineHeight: 1.3, maxWidth: 60 }}>{name}</span>
    </div>
  );
}

// ── Scroll reveal text block ──────────────────────────────────────────────────


// ── Floating screenshot (reveal from right then floats) ───────────────────────

function FloatingScreenshot({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const controls = useAnimation();

  useEffect(() => {
    if (!isInView) return;
    controls.start({ opacity: 1, x: 0, scale: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 } })
      .then(() => {
        controls.start({ y: [0, -12, 0], transition: { duration: 6, ease: "easeInOut", repeat: Infinity } });
      });
  }, [isInView]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: 60, scale: 0.92 }} animate={controls}>
      {/* Browser chrome frame */}
      <div style={{
        borderRadius: 14, overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(91,77,255,0.1)",
        border: "1px solid rgba(0,0,0,0.08)",
      }}>
        {/* Browser top bar */}
        <div style={{ background: "#F1F3F5", padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <div style={{ display: "flex", gap: 6 }}>
            {["#FF5F57", "#FFBD2E", "#28C840"].map(c => (
              <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
            ))}
          </div>
          <div style={{ flex: 1, background: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: "0.65rem", color: "#6B7280", fontFamily: '"Inter", sans-serif', border: "1px solid rgba(0,0,0,0.08)" }}>
            d3ebz9jbxyqihu.cloudfront.net
          </div>
        </div>
        {/* Screenshot */}
        <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
      </div>
    </motion.div>
  );
}

// ── Mobile phone frame (for Flutter app screenshots) ─────────────────────────

function MobileFrame({ src, alt, delay = 0 }: { src: string; alt: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ width: 230, flexShrink: 0 }}
    >
      <div style={{
        background: "#1C1C1E",
        borderRadius: 40,
        padding: "14px 9px",
        boxShadow: "0 28px 64px rgba(0,0,0,0.32), 0 0 0 1px rgba(255,255,255,0.07) inset, 0 0 0 2.5px rgba(0,0,0,0.55)",
        position: "relative",
      }}>
        {/* Dynamic island */}
        <div style={{ position: "absolute", top: 18, left: "50%", transform: "translateX(-50%)", width: 78, height: 22, background: "#000", borderRadius: 12, zIndex: 2 }} />
        {/* Side button (decorative) */}
        <div style={{ position: "absolute", right: -3, top: 110, width: 3, height: 30, background: "#3a3a3c", borderRadius: "0 2px 2px 0" }} />
        <div style={{ position: "absolute", left: -3, top: 90, width: 3, height: 22, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -3, top: 120, width: 3, height: 22, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
        {/* Screen */}
        <div style={{ borderRadius: 30, overflow: "hidden", background: "#000", aspectRatio: "9/19.5", position: "relative" }}>
          <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
        </div>
      </div>
    </motion.div>
  );
}

// ── Sample Assist Project Detail ──────────────────────────────────────────────

const SA_BLUE = "#2B5EA7";
const SA_DARK = "#0D2346";
const SA_BASE = "https://raw.githubusercontent.com/RusiraLiyanage/Collection-Manager-Mobile/main/docs/screenshots/";

// Team members for the capstone group
const SA_TEAM = [
  { initials: "RL", name: "Rusira Liyanage", role: "Team Leader, PM", isLeader: true },
  { initials: "AK", name: "Team Member", role: "Developer", isLeader: false },
  { initials: "BM", name: "Team Member", role: "Developer", isLeader: false },
  { initials: "CS", name: "Team Member", role: "Developer", isLeader: false },
];

function SAFeatureSection({
  num, title, tagline, phoneSrcs, flipLayout, bg, description, bullets,
}: {
  num: string; title: string; tagline: string;
  phoneSrcs: { src: string; alt: string }[];
  flipLayout: boolean; bg: string;
  description: string; bullets: string[];
}) {
  const phoneCol = (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 14, flexShrink: 0 }}>
      {phoneSrcs.slice(0, 3).map((p, i) => (
        <div key={i} style={{ marginTop: i % 2 === 1 ? 36 : 0 }}>
          <MobileFrame src={p.src} alt={p.alt} delay={i * 0.12} />
        </div>
      ))}
    </div>
  );

  const textCol = (
    <RevealLeft delay={0.1}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: "2.8rem", color: `${SA_BLUE}18`, lineHeight: 1 }}>
            {num}
          </span>
          <div style={{ height: 2, flex: 1, background: `${SA_BLUE}25`, borderRadius: 2 }} />
        </div>
        <p style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.72rem", color: SA_BLUE, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>
          {tagline}
        </p>
        <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: "#0C0C0C", marginBottom: 20, lineHeight: 1.25 }}>
          {title}
        </h3>
        <p style={{ color: "#52525B", fontSize: "0.87rem", lineHeight: 1.82, marginBottom: 20 }}>
          {description}
        </p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "#374151", fontSize: "0.85rem", lineHeight: 1.62 }}>
              <span style={{ color: SA_BLUE, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </RevealLeft>
  );

  return (
    <div style={{ background: bg, padding: "72px 20px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: flipLayout ? "auto 1fr" : "1fr auto", gap: 56, alignItems: "center" }}>
        {flipLayout ? <>{phoneCol}{textCol}</> : <>{textCol}{phoneCol}</>}
      </div>
    </div>
  );
}

function SampleAssistProjectSection() {
  const DEMO_VIDEO = "https://1drv.ms/v/c/7e124fed5ca65adc/IQDDnb_IjMNeRrpDEBC73sXNAdRxXhsJxeLir9O-UD0bK5k?e=UnZdrr";
  const GITHUB = "https://github.com/RusiraLiyanage/Collection-Manager-Mobile";

  return (
    <div style={{ background: "#fff" }}>

      {/* ── Header ── */}
      <FadeUp>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "48px 20px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 36, height: 2, background: SA_BLUE, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.72rem", fontWeight: 700, color: SA_BLUE, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Featured Project · 02
            </span>
          </div>

          <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.2rem, 2.2vw, 1.7rem)", color: "#0C0C0C", lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.01em" }}>
            Sample Assist{" "}
            <span style={{ background: `linear-gradient(135deg, ${SA_DARK}, ${SA_BLUE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Emergency Callout Management
            </span>
          </h3>

          {/* "Associated with Sample Assist" animated badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}
          >
            <div style={{ borderRadius: 8, overflow: "hidden", display: "flex", alignItems: "center", background: "#fff", padding: "4px 8px", border: "1px solid #E5E7EB" }}>
              <img src={sampleAssistLogo} alt="Sample Assist" style={{ width: 150, objectFit: "contain", display: "block" }} />
            </div>
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#374151" }}>
              Associated with Sample Assist
            </span>
            <motion.span
              animate={{ opacity: [1, 0.25, 1] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#34D399", flexShrink: 0 }}
            />
          </motion.div>

          {/* Credential badges - animated cards */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
            {[
              { icon: "🎓", label: "University of Wollongong", sub: "Master of Computer Science (Software Engineering)", bg: "#EFF6FF", border: "#BFDBFE", color: "#1D4ED8", delay: 0 },
              { icon: "🤝", label: "Work Integrated Learning", sub: "Industry Partnership", bg: "#F0F7FF", border: `${SA_BLUE}35`, color: SA_BLUE, delay: 0.07 },
              { icon: "⏳", label: "Awaiting Production", sub: "Validated & Ready", bg: "#FFFBEB", border: "#FDE68A", color: "#D97706", delay: 0.14 },
              { icon: "👑", label: "Team Leader", sub: "Project Manager", bg: `${SA_DARK}0C`, border: `${SA_BLUE}30`, color: SA_DARK, delay: 0.21 },
            ].map((badge) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 16, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: badge.delay }}
                whileHover={{ y: -3, boxShadow: `0 8px 24px ${badge.color}25` }}
                style={{ display: "flex", alignItems: "center", gap: 10, background: badge.bg, border: `1.5px solid ${badge.border}`, borderRadius: 12, padding: "10px 16px", cursor: "default" }}
              >
                <span style={{ fontSize: "1.1rem", lineHeight: 1, flexShrink: 0 }}>{badge.icon}</span>
                <div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.8rem", color: badge.color, lineHeight: 1.2 }}>{badge.label}</div>
                  <div style={{ fontSize: "0.68rem", color: `${badge.color}99`, marginTop: 2, fontWeight: 500 }}>{badge.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
            {["Mobile App", "Flutter", "AWS", "MedTech SaaS", "CI/CD", "Cross-Platform", "iOS", "Android"].map(tag => (
              <Chip key={tag} label={tag} size="small"
                sx={{ background: `${SA_BLUE}09`, color: SA_BLUE, border: `1px solid ${SA_BLUE}22`, fontWeight: 600, fontSize: "0.75rem" }} />
            ))}
          </div>

          {/* Watch demo button */}
          <motion.a href={DEMO_VIDEO} target="_blank" rel="noopener noreferrer"
            whileHover={{ y: -3, boxShadow: `0 12px 32px ${SA_BLUE}40` }}
            transition={{ duration: 0.2 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 12, background: `linear-gradient(135deg, ${SA_DARK}, ${SA_BLUE})`, color: "#fff", borderRadius: 12, padding: "14px 24px", textDecoration: "none", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.88rem" }}
          >
            <span style={{ fontSize: "1.1rem" }}>▶</span>
            Watch Live Demo
            <OpenInNewIcon sx={{ fontSize: 16 }} />
          </motion.a>
        </div>
      </FadeUp>

      {/* ── Desktop-to-Mobile Transition + Overview ── */}
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 28px 80px", display: "grid", gridTemplateColumns: "1fr auto", gap: 56, alignItems: "center" }}>

        {/* Left: overview text blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {[
            {
              icon: "🖥️",
              label: "The Challenge: Desktop to Mobile",
              text: "Sample Assist Pty Ltd operates a complex medical drug testing SaaS platform used by enterprise clients across Australia. Their desktop system managed the full collection workflow, but field collectors working on-call emergency jobs had no mobile solution. Teams were coordinating callout jobs, managing client data, logging onsite specimens, and generating compliance reports entirely through desktop tools while in the field. The goal was to bring the full desktop platform's power to mobile, without compromising the workflows that the business relied on.",
            },
            {
              icon: "📱",
              label: "What I Built",
              text: "A cross-platform Flutter application that replicates the Sample Assist desktop SaaS across iOS and Android. The app covers emergency callout creation and management, guided onsite job flows, supervisor approvals, client management with specifications and notes, collection reporting with PDF generation, an accounting dashboard, collectors availability calendar, and a contextual FAQ system. AWS Cognito handles secure authentication, RDS stores all data, and GitHub Actions automates builds for both platforms.",
            },
            {
              icon: "🏆",
              label: "Outcome",
              text: "Delivered into production as the official mobile companion to the Sample Assist desktop platform. The capstone project was completed with Distinction and directly led to a graduate engineering offer at Innomente Pty Ltd, the industry partner. As Team Leader and Project Manager, I led the team through design, development, and delivery within the academic timeline.",
            },
          ].map((block, i) => (
            <RevealLeft key={block.label} delay={i * 0.1}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${SA_BLUE}0D`, border: `1px solid ${SA_BLUE}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0, marginTop: 1 }}>
                  {block.icon}
                </div>
                <div>
                  <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#0C0C0C", marginBottom: 7 }}>{block.label}</h4>
                  <p style={{ color: "#52525B", fontSize: "0.87rem", lineHeight: 1.82, margin: 0 }}>{block.text}</p>
                </div>
              </div>
            </RevealLeft>
          ))}
        </div>

        {/* Right: Desktop → Mobile visual */}
        <FadeUp delay={0.2}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "center" }}>

            {/* Laptop frame showing SA Clinics dashboard */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "0.6rem", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.14em" }}>Desktop SaaS</span>
              {/* Laptop body */}
              <div style={{ background: "#2A2D35", borderRadius: "14px 14px 4px 4px", padding: "10px 10px 0", boxShadow: "0 20px 56px rgba(0,0,0,0.32)" }}>
                {/* Menu bar dots */}
                <div style={{ display: "flex", gap: 5, paddingBottom: 8, paddingLeft: 3 }}>
                  {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />)}
                </div>
                {/* Screen - clean SA Clinics desktop dashboard */}
                <div style={{ width: 360, height: 226, overflow: "hidden", borderRadius: "4px 4px 0 0", background: SA_DARK }}>
                  <img
                    src={saDesktopScreen}
                    alt="SA Clinics desktop dashboard"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "0% 0%", display: "block" }}
                  />
                </div>
              </div>
              {/* Laptop base */}
              <div style={{ width: 400, height: 12, background: "#3A3D47", borderRadius: "0 0 6px 6px" }} />
              <div style={{ width: 440, height: 6, background: "#2A2D35", borderRadius: 3 }} />
            </div>

            {/* Arrow */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                style={{ fontSize: "1.6rem", color: SA_BLUE }}
              >→</motion.div>
              <span style={{ fontSize: "0.55rem", fontWeight: 600, color: SA_BLUE, textTransform: "uppercase", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>To Mobile</span>
            </div>

            {/* Mobile phone with sidebar screenshot */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "0.6rem", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.14em" }}>Mobile App</span>
              <MobileFrame src={saDashboardSplit} alt="Collection Manager mobile sidebar" delay={0.25} />
            </div>

          </div>
        </FadeUp>
      </div>

      {/* ── Team section ── */}
      <div style={{ background: "#F8FAFF", padding: "56px 20px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <div style={{ width: 28, height: 2, background: SA_BLUE, borderRadius: 2 }} />
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: SA_BLUE, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Project Team, Group 14
              </span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.2rem", color: "#0C0C0C", marginBottom: 32 }}>
              Our Team
            </h4>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start" }}>
              {/* Left: team members list */}
              <div>
                {/* Leader row */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20, paddingBottom: 20, borderBottom: `1px solid ${SA_BLUE}15` }}>
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <img src={profileImage} alt="Rusira Liyanage" style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", border: `3px solid ${SA_BLUE}` }} />
                    <div style={{ position: "absolute", bottom: -2, right: -2, background: SA_BLUE, borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #F8FAFF" }}>
                      <span style={{ fontSize: "0.6rem", color: "#fff" }}>★</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.05rem", color: "#0C0C0C", marginBottom: 3 }}>Rusira Liyanage</div>
                    <div style={{ fontSize: "0.78rem", color: SA_BLUE, fontWeight: 700, marginBottom: 3 }}>Team Leader and Project Manager</div>
                    <div style={{ fontSize: "0.73rem", color: "#6B7280", fontWeight: 500 }}>Software Engineer</div>
                  </div>
                </div>

                {/* Other members grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                  {[
                    { name: "Jinchen Wang", role: "Frontend Lead" },
                    { name: "Jingwei Li", role: "Software Engineer" },
                    { name: "Jihoon Lee", role: "AWS Lead" },
                    { name: "Yunheng Luo", role: "Software Engineer" },
                    { name: "Le Shi", role: "UI/UX Lead" },
                    { name: "Yejie Wang", role: "Backend Lead" },
                  ].map((m, i) => (
                    <motion.div key={m.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", borderRadius: 10, padding: "10px 12px", border: `1px solid ${SA_BLUE}14` }}
                    >
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${SA_BLUE}14`, border: `1.5px solid ${SA_BLUE}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.62rem", color: SA_BLUE }}>
                          {m.name.split(" ").map(w => w[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: "0.75rem", color: "#0C0C0C", lineHeight: 1.2 }}>{m.name}</div>
                        <div style={{ fontSize: "0.67rem", color: "#6B7280", marginTop: 1 }}>{m.role}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: team slide image */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: 420, flexShrink: 0 }}
              >
                <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.14)", border: "1px solid rgba(0,0,0,0.07)" }}>
                  <img src={saTeamSlide} alt="Our Team, Group 14" style={{ width: "100%", display: "block" }} />
                </div>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── Real-World Clients ── */}
      <div style={{ background: "#fff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <div style={{ width: 28, height: 2, background: SA_BLUE, borderRadius: 2 }} />
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: SA_BLUE, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Real-World Impact
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 14 }}>
              <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.4rem", color: "#0C0C0C", margin: 0 }}>
                Enterprise Clients
              </h4>
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#FFF7ED", border: "1px solid #FED7AA", borderRadius: 20, padding: "4px 14px" }}>
                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.8, repeat: Infinity }}
                  style={{ width: 7, height: 7, borderRadius: "50%", background: "#F59E0B", display: "inline-block", flexShrink: 0 }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#B45309" }}>Awaiting Production</span>
              </div>
            </div>
            <p style={{ color: "#6B7280", fontSize: "0.87rem", lineHeight: 1.72, marginBottom: 48, maxWidth: 680 }}>
              The app has been developed and validated against real client requirements, and is awaiting production rollout to Sample Assist's enterprise client base across Australia. These organisations will rely on the platform to dispatch field collectors, manage on-call drug screening collections, and maintain compliance across their workforces.
            </p>
          </FadeUp>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* ── Advanced Drug Solutions ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: `0 16px 48px ${SA_BLUE}15` }}
              style={{ background: "#F8FAFF", border: `1px solid ${SA_BLUE}18`, borderRadius: 18, overflow: "hidden", display: "flex", alignItems: "stretch" }}
            >
              {/* Logo panel */}
              <div style={{ width: 220, flexShrink: 0, background: "#fff", borderRight: `1px solid ${SA_BLUE}10`, display: "flex", alignItems: "center", justifyContent: "center", padding: "28px 24px" }}>
                <img src={saClientADS} alt="Advanced Drug Solutions logo"
                  style={{ width: "100%", maxWidth: 160, objectFit: "contain", display: "block" }} />
              </div>

              {/* Content */}
              <div style={{ padding: "24px 28px", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                  <div>
                    <h5 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1rem", color: "#0C0C0C", margin: "0 0 4px" }}>
                      Advanced Drug Solutions (ADS) Pty Ltd
                    </h5>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <LocationOnIcon sx={{ fontSize: 12, color: "#9CA3AF" }} />
                      <span style={{ fontSize: "0.72rem", color: "#9CA3AF" }}>Beresfield, NSW · Australia-wide</span>
                    </div>
                  </div>
                  <Chip label="Workplace Drug Testing" size="small"
                    sx={{ background: `${SA_BLUE}10`, color: SA_BLUE, border: `1px solid ${SA_BLUE}25`, fontWeight: 600, fontSize: "0.68rem" }} />
                </div>
                <p style={{ fontSize: "0.82rem", color: "#52525B", lineHeight: 1.72, margin: "0 0 16px" }}>
                  Leading provider of workplace drug and alcohol testing in Australia. NATA-accredited and ISO9001 certified, offering on-site and clinic-based testing, training programs, and testing products. Serves transport, construction, and local government sectors.
                </p>
                <div style={{ background: `${SA_BLUE}07`, border: `1px solid ${SA_BLUE}14`, borderRadius: 10, padding: "12px 16px" }}>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.68rem", color: SA_BLUE, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                    Why this app matters for ADS
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                    {[
                      "Supports real-time job creation and emergency callout management matching ADS's mobile service model",
                      "Improves operational efficiency and compliance through structured digital data handling",
                      "Enhances client engagement with timely collection updates and report delivery",
                    ].map((item, i) => (
                      <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: "0.78rem", color: "#374151", lineHeight: 1.65 }}>
                        <span style={{ color: SA_BLUE, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>▸</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* ── CQ Rescue Health Services ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(14,90,120,0.12)" }}
              style={{ background: "#F8FAFF", border: "1px solid rgba(14,90,120,0.14)", borderRadius: 18, overflow: "hidden", display: "flex", alignItems: "stretch" }}
            >
              {/* Logo panel */}
              <div style={{ width: 220, flexShrink: 0, background: "#fff", borderRight: "1px solid rgba(14,90,120,0.08)", display: "flex", alignItems: "center", justifyContent: "center", padding: "28px 24px" }}>
                <img src={saClientCQR} alt="CQ Rescue Health Services logo"
                  style={{ width: "100%", maxWidth: 160, objectFit: "contain", display: "block" }} />
              </div>

              {/* Content */}
              <div style={{ padding: "24px 28px", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                  <div>
                    <h5 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1rem", color: "#0C0C0C", margin: "0 0 4px" }}>
                      CQ Rescue (CQR) Health Services Pty Ltd
                    </h5>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <LocationOnIcon sx={{ fontSize: 12, color: "#9CA3AF" }} />
                      <span style={{ fontSize: "0.72rem", color: "#9CA3AF" }}>Queensland · Remote and Regional Australia</span>
                    </div>
                  </div>
                  <Chip label="Emergency Medical Services" size="small"
                    sx={{ background: "rgba(14,90,120,0.09)", color: "#0E5A78", border: "1px solid rgba(14,90,120,0.22)", fontWeight: 600, fontSize: "0.68rem" }} />
                </div>
                <p style={{ fontSize: "0.82rem", color: "#52525B", lineHeight: 1.72, margin: "0 0 16px" }}>
                  Provides 24/7 on-site paramedic and drug testing services across Queensland. Supports industries like mining, construction, and remote communities. Known for rapid response capability and a strong commitment to workplace safety in hard-to-reach locations.
                </p>
                <div style={{ background: "rgba(14,90,120,0.05)", border: "1px solid rgba(14,90,120,0.11)", borderRadius: 10, padding: "12px 16px" }}>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.68rem", color: "#0E5A78", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                    Why this app matters for CQR
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                    {[
                      "Enables rapid job assignment and management for emergency callouts across remote sites",
                      "Facilitates remote access to client information for mobile workforces in the field",
                      "Improves workflow transparency and coordination across distributed response teams",
                    ].map((item, i) => (
                      <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: "0.78rem", color: "#374151", lineHeight: 1.65 }}>
                        <span style={{ color: "#0E5A78", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>▸</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Technologies ── */}
      <div style={{ background: "#F8FAFF", padding: "64px 20px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <div style={{ width: 28, height: 2, background: SA_BLUE, borderRadius: 2 }} />
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: SA_BLUE, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Full Production Stack
              </span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.5rem", color: "#0C0C0C", marginBottom: 40 }}>Technologies Used</h4>
          </FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              { group: "Mobile", color: "#06B6D4", items: [{ slug: "flutter", name: "Flutter", color: "#06B6D4" }, { slug: "dart", name: "Dart", color: "#0175C2" }, { emoji: "📱", name: "iOS", color: "#555" }, { emoji: "🤖", name: "Android", color: "#3DDC84" }, { emoji: "⚡", name: "GetX", color: "#8B5CF6" }] },
              { group: "UI and Design", color: "#8B5CF6", items: [{ slug: "mui", name: "Material UI", color: "#007FFF" }, { slug: "figma", name: "Figma", color: "#F24E1E" }] },
              { group: "AWS Cloud", color: "#FF9900", items: [{ slug: "amazoncognito", name: "AWS Cognito", color: "#FF9900" }, { slug: "awslambda", name: "AWS Lambda", color: "#FF9900" }, { emoji: "🔀", name: "API Gateway", color: "#FF9900" }] },
              { group: "Backend", color: SA_BLUE, items: [{ emoji: "🚂", name: "Express JS", color: "#000" }, { slug: "postgresql", name: "PostgreSQL", color: "#336791" }, { emoji: "🔗", name: "RESTful APIs", color: SA_BLUE }] },
              { group: "DevOps", color: "#2088FF", items: [{ slug: "githubactions", name: "GitHub Actions", color: "#2088FF" }, { slug: "docker", name: "Docker", color: "#2496ED" }, { emoji: "🍎", name: "App Store Deploy", color: "#555" }, { emoji: "🤖", name: "Play Store Deploy", color: "#3DDC84" }] },
            ].map((group, gi) => (
              <motion.div key={group.group}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: gi * 0.06 }}
                style={{ background: "#F8FAFF", border: "1px solid rgba(27,79,216,0.1)", borderRadius: 16, padding: "16px 20px", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}
              >
                <div style={{ minWidth: 140, flexShrink: 0 }}>
                  <div style={{ width: 22, height: 2, background: group.color, borderRadius: 2, marginBottom: 5 }} />
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.7rem", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.1em" }}>{group.group}</span>
                </div>
                <div style={{ width: 1, height: 32, background: "rgba(0,0,0,0.08)", flexShrink: 0 }} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, flex: 1 }}>
                  {group.items.map((item, ii) => (
                    <motion.div key={`${item.name}-${ii}`}
                      initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: gi * 0.06 + ii * 0.04 }}
                      whileHover={{ y: -2, scale: 1.04 }}
                      style={{ display: "flex", alignItems: "center", gap: 7, background: `${item.color}14`, border: `1px solid ${item.color}28`, borderRadius: 8, padding: "6px 12px", cursor: "default" }}
                    >
                      {"slug" in item && item.slug
                        ? <img src={`https://cdn.simpleicons.org/${item.slug}/${item.color.replace("#", "")}`} alt={item.name} style={{ width: 14, height: 14, flexShrink: 0 }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                        : <span style={{ fontSize: "0.85rem" }}>{(item as { emoji: string }).emoji}</span>
                      }
                      <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.73rem", fontWeight: 500, color: "#0C0C0C", whiteSpace: "nowrap" }}>{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Feature nav strip ── */}
      <div style={{ background: SA_DARK, padding: "16px 20px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginRight: 8 }}>App Features</span>
          {["Dashboard","Onsite Jobs","Client Management","Collection Reports","Accounting","Collectors Calendar","FAQ"].map((f, i) => (
            <React.Fragment key={f}>
              {i > 0 && <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>}
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.77rem", fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>{f}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 01 Dashboard */}
      <SAFeatureSection num="01" title="Dashboard" tagline="Workload at a glance"
        bg="#fff" flipLayout={false}
        phoneSrcs={[
          { src: `${SA_BASE}dashboard-home-part-1.png`, alt: "Dashboard home" },
          { src: `${SA_BASE}dashboard-home-part-2.png`, alt: "Dashboard continued" },
          { src: `${SA_BASE}dashboard-collection-summary-part-1.png`, alt: "Collection summary" },
        ]}
        description="The dashboard is the first screen field workers see after login. It provides a real-time snapshot of the day's active workload: total collections, sample result counts, tests processed, and a collection summary broken down by status. Workers instantly see what needs attention without navigating deeper."
        bullets={[
          "Collection activity totals refreshed on every app foreground event",
          "Collection summary grouped by status: pending, in-progress, completed",
          "Sample results and tests-processed counts with progress indicators",
          "Dashboard Home, Tests Processed, Test Sample Results, and Test Collection Summary sub-views",
        ]}
      />

      {/* 02 Onsite Jobs */}
      <SAFeatureSection num="02" title="Onsite Jobs" tagline="Guided multi-step collection workflow"
        bg="#F8FAFF" flipLayout={true}
        phoneSrcs={[
          { src: `${SA_BASE}onsite-jobs-home-part-1.png`, alt: "Onsite jobs home" },
          { src: `${SA_BASE}new-onsite-job-step-1-part-1.png`, alt: "New onsite job step 1" },
          { src: `${SA_BASE}manage-onsite-job-part-1.png`, alt: "Manage onsite job" },
        ]}
        description="Onsite jobs follow a structured 3-step creation flow: Step 1 captures the job and client details, Step 2 fills collection-type specific fields, Step 3 confirms and submits. The home view gives a paginated filterable list. The manage view tracks each job through its full lifecycle from creation to completion, including specimen recording and status updates."
        bullets={[
          "3-step guided creation with dynamic fields per collection type in Step 2",
          "Onsite jobs home: paginated list with status filter tabs and client search",
          "Manage onsite job: status progression, specimen recording, and inline notes",
          "Completed jobs appear automatically in the client's onsite job history",
          "On-Site Approvals module handles supervisor compliance sign-off",
        ]}
      />

      {/* 03 Client Management */}
      <SAFeatureSection num="03" title="Client Management" tagline="Full client profile and history"
        bg="#fff" flipLayout={false}
        phoneSrcs={[
          { src: `${SA_BASE}client-management-home.png`, alt: "Client management home" },
          { src: `${SA_BASE}client-details-part-1.png`, alt: "Client details" },
          { src: `${SA_BASE}client-notes-home.png`, alt: "Client notes" },
        ]}
        description="The client module provides field workers with a comprehensive profile hub for every client: personal and contact details, site specifications, GPS-pinned location, notes with full CRUD, authorized representatives, onsite job history, and automated PDF reporting. Every sub-section loads directly from the backend in real time."
        bullets={[
          "Client home: searchable list with quick-access to all client sub-sections",
          "Details: personal info, contact numbers, and employer data",
          "Specifications: per-client collection requirements (multi-part scrollable)",
          "Location: GPS-pinned address with in-app map for field navigation",
          "Notes: create, edit, delete with timestamps per entry",
          "Authorized representatives: manage who may accompany or witness collections",
          "Onsite job history: all past jobs with status and date filters",
        ]}
      />

      {/* 04 Collection Reports */}
      <SAFeatureSection num="04" title="Collection Reports" tagline="Reports, delivery and compliance tracking"
        bg="#F8FAFF" flipLayout={true}
        phoneSrcs={[
          { src: saCollectionReports5, alt: "Collection reports list" },
          { src: saCollectionReports2, alt: "Report summary and send" },
        ]}
        description="The Collection Reports module covers the full reporting lifecycle for completed collection jobs. Field workers can view report summaries per batch, check delivery status, and trigger email dispatch directly from mobile. Reports show client details, authorized representatives, site contacts, and test metadata. Send-by-collector and send-by-system modes are both supported, with status indicators per report item."
        bullets={[
          "Report list with per-item status: Successfully Sent, Error Sending, Send By Collector",
          "Report summary: client details, authorized rep, site contact, and test date inline",
          "One-tap email dispatch to client contacts directly from the report summary view",
          "Invalid Result Reports flagged separately with dedicated action flow",
          "All report actions sync to the backend for audit and compliance logging",
        ]}
      />

      {/* 05 Accounting */}
      <SAFeatureSection num="05" title="Accounting Dashboard" tagline="Billing, invoicing and GST reporting"
        bg="#fff" flipLayout={false}
        phoneSrcs={[
          { src: saAccountingDash1, alt: "Accounting dashboard filters" },
          { src: saAccountingDash2, alt: "Accounting billing breakdown" },
        ]}
        description="The Accounting Dashboard gives collectors and supervisors a filtered view of billing data across service offices, clients, and date ranges. It displays licensing subscriptions, IT service charges, and client onboarding setup fees, all broken down with totals in AUD. GST inclusive and exclusive views can be toggled and data can be exported for finance processing."
        bullets={[
          "Filter by service office, client, and custom date range",
          "GST exclusive and inclusive toggle with export capability",
          "Licensing breakdown: Collection Manager, Collect Assist, Secure Assist, and more",
          "IT services and client onboarding fees itemised per category",
          "Grand total displayed in AUD at the bottom of each filtered view",
        ]}
      />

      {/* 06 Collectors Calendar */}
      <SAFeatureSection num="06" title="Collectors Calendar" tagline="Availability and scheduling visibility"
        bg="#F8FAFF" flipLayout={true}
        phoneSrcs={[
          { src: saCollectorsCalendar, alt: "Collectors availability calendar" },
        ]}
        description="The Collectors Availability Calendar provides a live calendar view of each collector's scheduled availability across service offices. Supervisors can filter by office and collector to check who is available on a given date. Unavailability events appear directly on the calendar with time windows and reasons, helping teams plan callout scheduling around real-time collector availability."
        bullets={[
          "Monthly calendar view with day-level availability indicators",
          "Filter by service office and individual collector",
          "Unavailability events shown with time window and reason text",
          "Collector availability drives emergency callout dispatch decisions",
        ]}
      />

      {/* 07 FAQ */}
      <SAFeatureSection num="07" title="FAQ" tagline="Contextual in-app knowledge base"
        bg="#fff" flipLayout={false}
        phoneSrcs={[
          { src: saFaq, alt: "FAQ in-app knowledge base" },
        ]}
        description="The FAQ module provides a searchable in-app knowledge base for field workers. Questions are organised by category: Collection Manager, User Management, Collection Reports, Accounting, and more. Each category expands to reveal answers inline. Workers can search across all FAQs without leaving the app, reducing the need to contact support for procedural questions."
        bullets={[
          "Searchable FAQ list with category-level accordion grouping",
          "Categories include Collection Manager, User Management, Collection Reports, and Accounting",
          "Inline answers expand on tap without navigation away from the list",
          "Regularly updated content synced from the backend to stay current",
        ]}
      />

      {/* ── Links ── */}
      <div style={{ background: SA_DARK, padding: "64px 20px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              <motion.a href={GITHUB} target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(255,255,255,0.08)", color: "#fff", borderRadius: 14, padding: "18px 28px", textDecoration: "none", flex: "1 1 280px", border: "1px solid rgba(255,255,255,0.12)" }}>
                <GitHubIcon sx={{ fontSize: 28, color: "#fff" }} />
                <div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.88rem" }}>View Source Code</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", marginTop: 2 }}>github.com/RusiraLiyanage/Collection-Manager-Mobile</div>
                </div>
              </motion.a>
              <motion.a href={DEMO_VIDEO} target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -3, boxShadow: `0 12px 32px ${SA_BLUE}50` }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex", alignItems: "center", gap: 14, background: `linear-gradient(135deg, ${SA_BLUE}, #3B82F6)`, color: "#fff", borderRadius: 14, padding: "18px 28px", textDecoration: "none", flex: "1 1 280px" }}>
                <span style={{ fontSize: "1.5rem" }}>▶</span>
                <div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.88rem" }}>Watch Live Demo</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Full walkthrough via Microsoft OneDrive</div>
                </div>
              </motion.a>
            </div>
          </FadeUp>
        </div>
      </div>

    </div>
  );
}

// ── Cooper's Project Detail (Apple-style scroll sections) ────────────────────

const COOPERS_TECH = [
  { slug: "react",           name: "React",          color: "#61DAFB" },
  { slug: "typescript",      name: "TypeScript",     color: "#3178C6" },
  { slug: "vite",            name: "Vite",           color: "#646CFF" },
  { slug: "antdesign",       name: "Ant Design",     color: "#0170FE" },
  { slug: "nestjs",          name: "NestJS",         color: "#E0234E" },
  { slug: "nodedotjs",       name: "Node.js",        color: "#339933" },
  { slug: "postgresql",      name: "PostgreSQL",     color: "#4169E1" },
  { emoji: "🗄️",             name: "TypeORM",        color: "#FF6B35" },
  { slug: "anthropic",       name: "Claude API",     color: "#CC785C" },
  { slug: "jsonwebtokens",   name: "JWT",            color: "#000000" },
  { slug: "google",          name: "Google OAuth",   color: "#4285F4" },
  { slug: "redis",           name: "Redis / Valkey", color: "#FF4438" },
  { slug: "amazonwebservices", name: "AWS",          color: "#FF9900" },
  { slug: "docker",          name: "Docker",         color: "#2496ED" },
  { slug: "githubactions",   name: "GitHub Actions", color: "#2088FF" },
  { slug: "slack",           name: "Slack Alerts",   color: "#4A154B" },
];

const COOPERS_TECH_GROUPS = [
  { label: "Frontend",              keys: ["React", "TypeScript", "Vite", "Ant Design"] },
  { label: "Backend",               keys: ["NestJS", "Node.js", "TypeScript"] },
  { label: "Database",              keys: ["PostgreSQL", "TypeORM"] },
  { label: "AI",                    keys: ["Claude API"] },
  { label: "Auth",                  keys: ["JWT", "Google OAuth"] },
  { label: "Cache / Sessions",      keys: ["Redis / Valkey"] },
  { label: "Cloud / Deployment",    keys: ["AWS"] },
  { label: "Containerization",      keys: ["Docker"] },
  { label: "CI/CD",                 keys: ["GitHub Actions"] },
  { label: "Monitoring",            keys: ["Slack Alerts"] },
];

function CoopersProjectSection() {
  const GITHUB = "https://github.com/RusiraLiyanage/Coopers_Barber_Shop";
  const LIVE   = "https://d3ebz9jbxyqihu.cloudfront.net/";
  const ADMIN  = "https://d3ebz9jbxyqihu.cloudfront.net/admin-console/login";

  const problemText = `Cooper's Barbershop is a full-stack appointment booking platform that solves the challenge of matching customers with the right barber based on their needs, preferences, and service requirements. Instead of relying only on a standard booking form, the app uses an AI-guided questionnaire to understand what the customer wants, identify relevant service needs or safety considerations, and recommend a suitable barber before the appointment is created. It also supports customer authentication, appointment management, and an admin platform for managing barbers, services, AI configuration, safety triggers, and reference data.`;

  const builtText = `I built the project as a monorepo with separate frontend and backend applications, including customer frontend, admin frontend, auth API, booking API, booking guard, and admin API. The backend services were deployed independently to AWS ECS using Docker images, ECR, AppConfig, Secrets Manager, RDS PostgreSQL, Redis caching, CloudFront, and an Application Load Balancer. I also added GitHub Actions CI/CD so staging deployments can build and deploy only the affected applications, with runtime configuration pulled from AWS AppConfig and secrets injected securely from AWS Secrets Manager.`;

  const learnedText = `Through this project, I learned how to design and deploy a real multi-service monorepo architecture, how to manage environment-specific configuration safely in AWS, and how to build a CI/CD workflow that supports independent service deployments. I also gained practical experience integrating AI into a production-style workflow, using AI-assisted consultation logic while keeping business rules, safety checks, and final booking decisions controlled by the backend. A major learning outcome was understanding how frontend behavior, backend session management, infrastructure configuration, logging, caching, and deployment automation all need to work together for a stable cloud-hosted application.`;

  return (
    <div style={{ background: "#fff" }}>
      {/* ── Project intro header ── */}
      <FadeUp>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "48px 28px 56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 36, height: 2, background: "#5B4DFF", borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.72rem", fontWeight: 700, color: "#5B4DFF", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Featured Project · 01
            </span>
          </div>
          <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.15rem, 2vw, 1.5rem)", color: "#0C0C0C", lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.01em" }}>
            Cooper's Barber Shop,{" "}
            <span style={{ background: "linear-gradient(135deg, #5B4DFF, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Booking Platform
            </span>
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Full-Stack Web App", "AI-Powered", "AWS Cloud", "Production-Ready"].map(tag => (
              <Chip key={tag} label={tag} size="small" sx={{ background: "rgba(91,77,255,0.07)", color: "#5B4DFF", border: "1px solid rgba(91,77,255,0.2)", fontWeight: 600, fontSize: "0.75rem" }} />
            ))}
          </div>
        </div>
      </FadeUp>

      {/* ── Main split: image LEFT-dominant, text alongside on the right ── */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px 80px", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 48, alignItems: "start" }}>

        {/* LEFT: two screenshots, similar size, sticky */}
        <div style={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { src: coopersScreenshot, alt: "Cooper's Barber Shop, landing page", pos: "center top" },
            { src: coopersAI2,        alt: "AI barber matching in progress",      pos: "center center" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
            >
              <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 20px 56px rgba(0,0,0,0.14), 0 4px 14px rgba(91,77,255,0.08)", border: "1px solid rgba(0,0,0,0.07)" }}>
                {/* Browser chrome */}
                <div style={{ background: "#F1F3F5", padding: "9px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "flex", gap: 5 }}>
                    {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
                  </div>
                  <div style={{ flex: 1, background: "#fff", borderRadius: 5, padding: "2px 9px", fontSize: "0.6rem", color: "#9CA3AF", fontFamily: '"Inter", sans-serif', border: "1px solid rgba(0,0,0,0.07)" }}>
                    d3ebz9jbxyqihu.cloudfront.net
                  </div>
                </div>
                {/* Image - fixed height so both look the same size */}
                <div style={{ height: 280, overflow: "hidden" }}>
                  <img src={item.src} alt={item.alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: item.pos, display: "block" }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT: condensed scroll-reveal text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {[
            {
              icon: "🎯",
              label: "Problem Solved",
              text: "Cooper's Barbershop replaces standard booking forms with an AI-guided questionnaire that matches customers to the right barber based on their needs, service requirements, and safety flags. It also covers customer auth, appointment management, and a full admin platform.",
            },
            {
              icon: "🏗️",
              label: "How I Built It",
              text: "Built as a monorepo with a customer frontend, admin frontend, auth API, booking API, booking guard, and admin API, each deployed independently to AWS ECS via Docker, ECR, AppConfig, Secrets Manager, RDS PostgreSQL, Redis, CloudFront, and an Application Load Balancer. GitHub Actions CI/CD rebuilds only the affected services per push.",
            },
            {
              icon: "💡",
              label: "What I Learned",
              text: "Designed and shipped a real multi-service monorepo, managed environment config safely in AWS, and built CI/CD for independent deployments. Gained hands-on experience integrating AI into a production workflow while keeping business logic backend-controlled. Key insight: frontend, session management, infra config, caching, and deployment must all work in concert.",
            },
          ].map((block, i) => (
            <RevealLeft key={block.label} delay={i * 0.12}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(91,77,255,0.08)", border: "1px solid rgba(91,77,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0, marginTop: 1 }}>
                  {block.icon}
                </div>
                <div>
                  <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#0C0C0C", marginBottom: 8 }}>
                    {block.label}
                  </h4>
                  <p style={{ color: "#52525B", fontSize: "0.88rem", lineHeight: 1.82, margin: 0 }}>
                    {block.text}
                  </p>
                </div>
              </div>
            </RevealLeft>
          ))}
        </div>
      </div>

      {/* ── Technologies ── */}
      <div style={{ background: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <div style={{ width: 28, height: 2, background: "#5B4DFF", borderRadius: 2 }} />
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: "#5B4DFF", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Full Production Stack
              </span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.5rem", color: "#0C0C0C", marginBottom: 40 }}>
              Technologies Used
            </h4>
          </FadeUp>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              {
                group: "Frontend",
                color: "#61DAFB",
                items: [
                  { slug: "react",       name: "React",       color: "#61DAFB" },
                  { slug: "typescript",  name: "TypeScript",  color: "#3178C6" },
                  { slug: "vite",        name: "Vite",        color: "#646CFF" },
                  { slug: "antdesign",   name: "Ant Design",  color: "#0170FE" },
                ],
              },
              {
                group: "Backend",
                color: "#E0234E",
                items: [
                  { slug: "nestjs",      name: "NestJS",      color: "#E0234E" },
                  { slug: "nodedotjs",   name: "Node.js",     color: "#339933" },
                  { slug: "typescript",  name: "TypeScript",  color: "#3178C6" },
                ],
              },
              {
                group: "Database",
                color: "#4169E1",
                items: [
                  { slug: "postgresql",  name: "PostgreSQL",  color: "#4169E1" },
                  { emoji: "🗄️",         name: "TypeORM",     color: "#FF6B35" },
                ],
              },
              {
                group: "AI",
                color: "#CC785C",
                items: [
                  { slug: "anthropic",   name: "Claude API",  color: "#CC785C" },
                ],
              },
              {
                group: "Auth",
                color: "#4285F4",
                items: [
                  { slug: "jsonwebtokens", name: "JWT",         color: "#F5A623" },
                  { slug: "google",        name: "Google OAuth", color: "#4285F4" },
                ],
              },
              {
                group: "Cache / Sessions",
                color: "#FF4438",
                items: [
                  { slug: "redis",       name: "Redis",             color: "#FF4438" },
                  { emoji: "⚡",         name: "ElastiCache Valkey", color: "#FF8C00" },
                ],
              },
              {
                group: "AWS Cloud",
                color: "#FF9900",
                items: [
                  { slug: "amazonecs",       name: "ECS Fargate",       color: "#FF9900" },
                  { emoji: "📦",             name: "ECR",                color: "#FF9900" },
                  { slug: "amazonrds",       name: "RDS PostgreSQL",     color: "#FF9900" },
                  { emoji: "⚙️",            name: "AppConfig",          color: "#FF9900" },
                  { emoji: "🔐",             name: "Secrets Manager",    color: "#FF9900" },
                  { slug: "amazoncloudfront", name: "CloudFront",        color: "#FF9900" },
                  { emoji: "⚖️",            name: "App Load Balancer",  color: "#FF9900" },
                ],
              },
              {
                group: "DevOps and Monitoring",
                color: "#2088FF",
                items: [
                  { slug: "githubactions", name: "GitHub Actions", color: "#2088FF" },
                  { slug: "docker",        name: "Docker",         color: "#2496ED" },
                  { slug: "amazoncloudwatch", name: "CloudWatch",   color: "#FF9900" },
                  { slug: "slack",         name: "Slack Alerts",   color: "#4A154B" },
                ],
              },
            ].map((group, gi) => (
              <motion.div key={group.group}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: gi * 0.06 }}
                style={{
                  background: "#F8F9FA",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: 16,
                  padding: "18px 22px",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  flexWrap: "wrap",
                }}
              >
                {/* Group label */}
                <div style={{ minWidth: 130, flexShrink: 0 }}>
                  <div style={{ width: 24, height: 2, background: group.color, borderRadius: 2, marginBottom: 6 }} />
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.72rem", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {group.group}
                  </span>
                </div>

                {/* Divider */}
                <div style={{ width: 1, height: 36, background: "rgba(0,0,0,0.1)", flexShrink: 0 }} />

                {/* Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, flex: 1 }}>
                  {group.items.map((item, ii) => (
                    <motion.div key={`${item.name}-${ii}`}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: gi * 0.06 + ii * 0.05 }}
                      whileHover={{ y: -3, scale: 1.06 }}
                      style={{
                        display: "flex", alignItems: "center", gap: 8,
                        background: `${item.color}18`,
                        border: `1px solid ${item.color}35`,
                        borderRadius: 10,
                        padding: "7px 13px",
                        cursor: "default",
                        transition: "box-shadow 0.2s",
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 16px ${item.color}40`; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                    >
                      {"slug" in item && item.slug ? (
                        <img src={`https://cdn.simpleicons.org/${item.slug}/${item.color.replace("#", "")}`} alt={item.name} style={{ width: 16, height: 16, flexShrink: 0 }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      ) : (
                        <span style={{ fontSize: "0.9rem" }}>{(item as { emoji: string }).emoji}</span>
                      )}
                      <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#0C0C0C", whiteSpace: "nowrap" }}>
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Links ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 28px" }}>
        <FadeUp>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {/* GitHub */}
            <motion.a href={GITHUB} target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.12)" }}
              transition={{ duration: 0.2 }}
              style={{ display: "flex", alignItems: "center", gap: 14, background: "#0C0C0C", color: "#fff", borderRadius: 14, padding: "18px 28px", textDecoration: "none", flex: "1 1 280px" }}>
              <GitHubIcon sx={{ fontSize: 28, color: "#fff" }} />
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.88rem" }}>View Source Code</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", marginTop: 2 }}>github.com/RusiraLiyanage/Coopers_Barber_Shop</div>
              </div>
            </motion.a>

            {/* Live Demo */}
            <motion.a href={LIVE} target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(91,77,255,0.25)" }}
              transition={{ duration: 0.2 }}
              style={{ display: "flex", alignItems: "center", gap: 14, background: "linear-gradient(135deg, #5B4DFF, #7C6FFF)", color: "#fff", borderRadius: 14, padding: "18px 28px", textDecoration: "none", flex: "1 1 280px" }}>
              <OpenInNewIcon sx={{ fontSize: 28, color: "#fff" }} />
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.88rem" }}>View Live Demo</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Customer Portal</div>
              </div>
            </motion.a>

            {/* Admin Console */}
            <motion.a href={ADMIN} target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(245,158,11,0.25)" }}
              transition={{ duration: 0.2 }}
              style={{ display: "flex", alignItems: "center", gap: 14, background: "linear-gradient(135deg, #F59E0B, #FBBF24)", color: "#fff", borderRadius: 14, padding: "18px 28px", textDecoration: "none", flex: "1 1 280px" }}>
              <OpenInNewIcon sx={{ fontSize: 28, color: "#fff" }} />
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.88rem" }}>Admin Console</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Management Portal</div>
              </div>
            </motion.a>
          </div>
        </FadeUp>
      </div>

      {/* ── AI Features: Consultation + Barber Matching ── */}
      <CoopersAIFeatures />

      {/* ── Smart Appointment Scheduling ── */}
      <CoopersSchedulingFeatures />

      {/* ── Admin AI Operations Dashboard ── */}
      <CoopersAdminDashboard />
    </div>
  );
}

// ── AI Features: Consultation + Barber Matching (combined) ───────────────────

function CoopersAIFeatures() {
  const browserFrame = (src: string, alt: string, delay: number) => (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}
    >
      <div style={{ background: "#F1F3F5", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: "#fff", borderRadius: 4, padding: "2px 8px", fontSize: "0.58rem", color: "#9CA3AF", fontFamily: '"Inter", sans-serif', border: "1px solid rgba(0,0,0,0.07)" }}>
          new-appointment
        </div>
      </div>
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </motion.div>
  );

  const stepLabel = (num: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
      <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: "0.78rem", color: "#5B4DFF", letterSpacing: "0.06em" }}>{num}</span>
      <div style={{ flex: 1, height: 1, background: "rgba(91,77,255,0.15)" }} />
    </div>
  );

  return (
    <div style={{ background: "#F8F9FA", padding: "72px 20px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>

        {/* Header */}
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 28, height: 2, background: "#5B4DFF", borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: "#5B4DFF", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Key Features
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
            <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", color: "#0C0C0C", letterSpacing: "-0.01em", margin: 0 }}>
              AI Consultation and{" "}
              <span style={{ background: "linear-gradient(135deg, #5B4DFF, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Barber Matching
              </span>
            </h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(204,120,92,0.08)", border: "1.5px solid rgba(204,120,92,0.3)", borderRadius: 40, padding: "6px 14px 6px 8px", flexShrink: 0 }}
            >
              <img src="https://cdn.simpleicons.org/anthropic" alt="Anthropic" style={{ width: 18, height: 18 }} />
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.72rem", fontWeight: 600, color: "#CC785C", whiteSpace: "nowrap" }}>
                Powered by Claude (Anthropic AI API)
              </span>
            </motion.div>
          </div>
        </FadeUp>

        {/* Two-column layout: screenshot + text, side by side */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>

          {/* Step 1 - left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {browserFrame(coopersAI1, "AI-guided consultation questionnaire", 0)}
            <FadeUp delay={0.1}>
              {stepLabel("01")}
              <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1rem", color: "#0C0C0C", marginBottom: 10 }}>
                Personalised Consultation Questionnaire
              </h4>
              <p style={{ color: "#52525B", fontSize: "0.87rem", lineHeight: 1.8, margin: "0 0 14px" }}>
                Before a time slot is chosen, the system generates a set of targeted questions based on the specific service selected. Questions are not generic; they are tailored to the treatment type and cover what the barber actually needs to know: hair condition and history, previous chemical treatments, known allergies or sensitivities, skin concerns, desired outcomes, and any upcoming event deadlines.
              </p>
              <p style={{ color: "#52525B", fontSize: "0.87rem", lineHeight: 1.8, margin: "0 0 14px" }}>
                For returning customers, prior visit data is pulled in automatically. Rather than answering everything from scratch, they simply confirm what has changed or add anything new since their last appointment. This makes the experience faster and more personal with each visit.
              </p>
              <p style={{ color: "#52525B", fontSize: "0.87rem", lineHeight: 1.8, margin: 0 }}>
                Once the questionnaire is submitted, the system has a complete picture of the customer's needs, safety flags, and expectations. This all happens before a barber or time slot has been selected.
              </p>
            </FadeUp>
          </div>

          {/* Step 2 - right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingTop: 32 }}>
            {browserFrame(coopersAI3, "Recommended barber with match score", 0.15)}
            <FadeUp delay={0.2}>
              {stepLabel("02")}
              <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1rem", color: "#0C0C0C", marginBottom: 10 }}>
                AI Barber Matching and Recommendation
              </h4>
              <p style={{ color: "#52525B", fontSize: "0.87rem", lineHeight: 1.8, margin: "0 0 14px" }}>
                Once the questionnaire is complete, the system analyses all collected answers alongside the selected service, required skill level, and any identified safety triggers. It then scores each available barber against the customer's specific profile, taking into account specialist capabilities, treatment experience, safety handling, and overall compatibility.
              </p>
              <p style={{ color: "#52525B", fontSize: "0.87rem", lineHeight: 1.8, margin: "0 0 14px" }}>
                The recommended barber is shown with a numeric match score and a plain-language explanation of why they were selected. The reasoning covers specific strengths, relevant experience, and how the barber's profile aligns with what the customer described. This gives the customer confidence before they confirm anything.
              </p>
              <p style={{ color: "#52525B", fontSize: "0.87rem", lineHeight: 1.8, margin: 0 }}>
                Only after reviewing the recommendation does the customer proceed to choose a date and available time slot, ensuring the right person handles the appointment from the start.
              </p>
            </FadeUp>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Smart Appointment Scheduling & Management ────────────────────────────────

function CoopersSchedulingFeatures() {
  const browserFrame = (src: string, alt: string, delay: number) => (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}
    >
      <div style={{ background: "#F1F3F5", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: "#fff", borderRadius: 4, padding: "2px 8px", fontSize: "0.58rem", color: "#9CA3AF", fontFamily: '"Inter", sans-serif', border: "1px solid rgba(0,0,0,0.07)" }}>
          appointments
        </div>
      </div>
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </motion.div>
  );

  const stepLabel = (num: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
      <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: "0.78rem", color: "#10B981", letterSpacing: "0.06em" }}>{num}</span>
      <div style={{ flex: 1, height: 1, background: "rgba(16,185,129,0.15)" }} />
    </div>
  );

  return (
    <div style={{ background: "#fff", padding: "72px 20px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>

        {/* Header */}
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 28, height: 2, background: "#10B981", borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: "#10B981", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Key Features
            </span>
          </div>
          <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", color: "#0C0C0C", letterSpacing: "-0.01em", margin: "0 0 48px" }}>
            Smart Appointment Scheduling &{" "}
            <span style={{ background: "linear-gradient(135deg, #10B981, #34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Management
            </span>
          </h3>
        </FadeUp>

        {/* Vertical stacked layout with image and text side by side */}
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>

          {/* Feature 1 - Time Slot Generation */}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
            {browserFrame(coopersSchedule1, "Automated time slot generation", 0)}
            <FadeUp delay={0.1}>
              {stepLabel("01")}
              <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>
                Automated Time Slot Generation
              </h4>
              <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
                After selecting a service, date, and matched barber, the system automatically calculates available appointment times. It considers the barber's working hours, the service duration, configured booking intervals, and required grace periods between appointments.
              </p>
              <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
                This prevents double-booking, eliminates invalid time slots, and ensures customers can only select times that are genuinely available. The booking process becomes faster and more reliable, with no manual schedule checking required.
              </p>
            </FadeUp>
          </div>

          {/* Feature 2 - Card View */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 48, alignItems: "center" }}>
            <FadeUp delay={0.1}>
              {stepLabel("02")}
              <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>
                Appointment Card View
              </h4>
              <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
                Customers can review their upcoming and cancelled appointments in a simple, card-based layout. Each card clearly displays the service name, date and time, assigned barber, and current booking status.
              </p>
              <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
                The interface separates scheduled bookings from cancelled ones, making it easy to track active appointments. Customers have quick access to update or cancel their bookings directly from the card view, supporting easy self-service management.
              </p>
            </FadeUp>
            {browserFrame(coopersSchedule2, "Appointment card view", 0)}
          </div>

          {/* Feature 3 - Calendar View */}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
            {browserFrame(coopersSchedule3, "Appointment calendar view", 0)}
            <FadeUp delay={0.1}>
              {stepLabel("03")}
              <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>
                Appointment Calendar View
              </h4>
              <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
                The calendar view provides a visual way to manage bookings across multiple time periods. Customers can switch between month, week, day, and agenda views to see their appointments in context.
              </p>
              <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
                Appointments are colour-coded by status and displayed directly on the calendar grid. Clicking any appointment opens quick actions to update or cancel the booking, helping customers understand their schedule visually and manage their time effectively.
              </p>
            </FadeUp>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Admin AI Operations Dashboard ────────────────────────────────────────────

function CoopersAdminDashboard() {
  const browserFrame = (src: string, alt: string, delay: number) => (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}
    >
      <div style={{ background: "#F1F3F5", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: "#fff", borderRadius: 4, padding: "2px 8px", fontSize: "0.58rem", color: "#9CA3AF", fontFamily: '"Inter", sans-serif', border: "1px solid rgba(0,0,0,0.07)" }}>
          admin-console
        </div>
      </div>
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </motion.div>
  );

  const stepLabel = (num: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
      <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: "0.78rem", color: "#F59E0B", letterSpacing: "0.06em" }}>{num}</span>
      <div style={{ flex: 1, height: 1, background: "rgba(245,158,11,0.15)" }} />
    </div>
  );

  return (
    <div style={{ background: "#F8F9FA", padding: "72px 20px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>

        {/* Header */}
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 28, height: 2, background: "#F59E0B", borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: "#F59E0B", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Admin Tools
            </span>
          </div>
          <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", color: "#0C0C0C", letterSpacing: "-0.01em", margin: "0 0 48px" }}>
            Admin AI{" "}
            <span style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Operations Dashboard
            </span>
          </h3>
        </FadeUp>

        {/* Vertical stacked layout with image and text side by side */}
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>

          {/* Feature 1 - Admin Overview */}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
            {browserFrame(coopersAdmin1, "Admin operations overview", 0)}
            <FadeUp delay={0.1}>
              {stepLabel("01")}
              <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>
                Operations Overview
              </h4>
              <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
                The dashboard landing page provides a central operational snapshot of the AI system's health. It tracks active barbers, configured capabilities, safety triggers, AI-ready services, generated appointment briefs, and customer hair history records.
              </p>
              <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
                Admins can quickly confirm whether the system has sufficient structured data to support AI-powered consultation and barber matching. It also includes quick access to manage barbers, service configuration, reference data, safety rules, and admin invites.
              </p>
            </FadeUp>
          </div>

          {/* Feature 2 - Service AI Config */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 48, alignItems: "center" }}>
            <FadeUp delay={0.1}>
              {stepLabel("02")}
              <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>
                Service AI Configuration
              </h4>
              <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
                This interface lets admins define how each service is understood by the AI. Staff map services to required barber capabilities, define service complexity levels, and assign relevant safety triggers like allergies, bleach history, damaged hair, or scalp sensitivity.
              </p>
              <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
                By structuring service metadata, the AI questionnaire asks relevant questions tailored to the treatment type, and the barber matching logic uses consistent rules instead of guessing from free-text descriptions. Services marked as AI-ready are eligible for intelligent consultation.
              </p>
            </FadeUp>
            {browserFrame(coopersAdmin3, "Service AI configuration", 0)}
          </div>

          {/* Feature 3 - Appointment Briefs */}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
            {browserFrame(coopersAdmin2, "AI-generated appointment briefs", 0)}
            <FadeUp delay={0.1}>
              {stepLabel("03")}
              <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>
                Appointment Prep Briefs
              </h4>
              <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
                Generated automatically at booking time, appointment briefs convert customer consultation responses into clear, actionable notes for staff. Each brief includes customer details, service type, appointment time, matched barber, booking status, and AI-generated context.
              </p>
              <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
                Safety concerns, preparation requirements, hair condition details, and customer expectations are highlighted. This ensures the barber arrives fully prepared for complex or sensitive services and has all the context needed before the customer walks in.
              </p>
            </FadeUp>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Easy EV Charging Project Detail ───────────────────────────────────────────

const EV_GREEN = "#059669";

function EVProjectSection() {
  const browserFrame = (src: string, alt: string, delay: number) => (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}
    >
      <div style={{ background: "#F1F3F5", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: "#fff", borderRadius: 4, padding: "2px 8px", fontSize: "0.58rem", color: "#9CA3AF", fontFamily: '"Inter", sans-serif', border: "1px solid rgba(0,0,0,0.07)" }}>
          localhost / easyEV
        </div>
      </div>
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </motion.div>
  );

  return (
    <div style={{ background: "#fff" }}>

      {/* ── Project intro header ── */}
      <FadeUp>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "48px 28px 56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 36, height: 2, background: EV_GREEN, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.72rem", fontWeight: 700, color: EV_GREEN, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Featured Project · 03
            </span>
          </div>
          <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.15rem, 2vw, 1.5rem)", color: "#0C0C0C", lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.01em" }}>
            Easy EV Charging,{" "}
            <span style={{ background: "linear-gradient(135deg, #059669, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Station Management Platform
            </span>
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
            {["Full-Stack Web App", "PHP & MySQL", "Role-Based Auth", "UOW Assignment"].map(tag => (
              <Chip key={tag} label={tag} size="small" sx={{ background: "rgba(5,150,105,0.07)", color: EV_GREEN, border: "1px solid rgba(5,150,105,0.2)", fontWeight: 600, fontSize: "0.75rem" }} />
            ))}
          </div>

          {/* Credential badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              { icon: "🎓", label: "University of Wollongong", sub: "Master of Computer Science (Software Engineering)", bg: "#EFF6FF", border: "#BFDBFE", color: "#1D4ED8", delay: 0 },
              { icon: "📚", label: "MTS9307", sub: "Web Server Programming", bg: `${EV_GREEN}0C`, border: `${EV_GREEN}30`, color: EV_GREEN, delay: 0.07 },
              { icon: "✅", label: "Completed", sub: "Apr 2025 – May 2025", bg: "#ECFDF5", border: "#A7F3D0", color: "#059669", delay: 0.14 },
              { icon: "👤", label: "Individual Project", sub: "Solo Development", bg: "#F8F9FA", border: "rgba(0,0,0,0.1)", color: "#374151", delay: 0.21 },
            ].map((badge) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: badge.delay }}
                style={{ display: "flex", alignItems: "center", gap: 10, background: badge.bg, border: `1px solid ${badge.border}`, borderRadius: 12, padding: "10px 16px" }}
              >
                <span style={{ fontSize: "1.2rem" }}>{badge.icon}</span>
                <div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.8rem", color: badge.color, lineHeight: 1.2 }}>{badge.label}</div>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.72rem", color: "#6B7280", marginTop: 1 }}>{badge.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* ── Main split: screenshots LEFT sticky, text RIGHT ── */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px 80px", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 48, alignItems: "start" }}>

        {/* LEFT: login + user dashboard */}
        <div style={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { src: evLogin, alt: "Login page - role-based registration and sign-in", pos: "center center", zoom: 1.8, originY: "35%" },
            { src: evUserDashboard, alt: "User dashboard - station search, live availability, check-in", pos: "center top", zoom: 1.5, originY: "top" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
            >
              <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 20px 56px rgba(0,0,0,0.14), 0 4px 14px rgba(5,150,105,0.08)", border: "1px solid rgba(0,0,0,0.07)" }}>
                <div style={{ background: "#F1F3F5", padding: "9px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "flex", gap: 5 }}>
                    {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
                  </div>
                  <div style={{ flex: 1, background: "#fff", borderRadius: 5, padding: "2px 9px", fontSize: "0.6rem", color: "#9CA3AF", fontFamily: '"Inter", sans-serif', border: "1px solid rgba(0,0,0,0.07)" }}>
                    localhost / easyEV
                  </div>
                </div>
                <div style={{ height: 320, overflow: "hidden" }}>
                  <img src={item.src} alt={item.alt} style={{ width: "100%", display: "block", transform: `scale(${item.zoom ?? 1.5})`, transformOrigin: `center ${item.originY ?? "top"}` }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT: condensed scroll-reveal text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {[
            {
              icon: "🎯",
              label: "Problem Solved",
              text: "EV drivers need a frictionless way to find available charging stations nearby, check in quickly, and track their session costs. Easy EV Charging solves this with a real-time station browser, one-click check-in/check-out flow, and a full charging history - all behind a secure role-based login.",
            },
            {
              icon: "🏗️",
              label: "How I Built It",
              text: "Built as a server-rendered PHP application with MySQL as the data layer and MySQLi prepared statements throughout to prevent SQL injection. PHP $_SESSION handles authentication and role-aware routing - users land on their dashboard, admins on theirs. Cost is calculated server-side in whole-hour billing blocks. The database schema provisions starter location data via a bundled SQL file, and the timezone is locked to Australia/Sydney.",
            },
            {
              icon: "💡",
              label: "What I Learned",
              text: "This project sharpened my understanding of server-side session management, parameterised queries, and role-based access control - core patterns that underpin every web app regardless of framework. It also reinforced how clean database schema design makes availability calculations (\"in use\" vs \"available\" per location) trivial once the data model is right.",
            },
          ].map((block, i) => (
            <RevealLeft key={block.label} delay={i * 0.12}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(5,150,105,0.08)", border: "1px solid rgba(5,150,105,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0, marginTop: 1 }}>
                  {block.icon}
                </div>
                <div>
                  <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#0C0C0C", marginBottom: 8 }}>{block.label}</h4>
                  <p style={{ color: "#52525B", fontSize: "0.88rem", lineHeight: 1.82, margin: 0 }}>{block.text}</p>
                </div>
              </div>
            </RevealLeft>
          ))}
        </div>
      </div>

      {/* ── Technologies ── */}
      <div style={{ background: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <div style={{ width: 28, height: 2, background: EV_GREEN, borderRadius: 2 }} />
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: EV_GREEN, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Full Project Stack
              </span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.5rem", color: "#0C0C0C", marginBottom: 40 }}>
              Technologies Used
            </h4>
          </FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { group: "Backend", color: "#777BB4", items: [
                { slug: "php", name: "PHP 8+", color: "#777BB4" },
                { slug: "mysql", name: "MySQL", color: "#4479A1" },
                { emoji: "🔒", name: "MySQLi Prepared Stmts", color: "#777BB4" },
                { emoji: "🧩", name: "PHP Sessions", color: "#777BB4" },
              ]},
              { group: "Frontend", color: "#E34F26", items: [
                { slug: "html5", name: "HTML5", color: "#E34F26" },
                { slug: "css3", name: "CSS3", color: "#1572B6" },
              ]},
              { group: "DevOps", color: "#F05032", items: [
                { slug: "git", name: "Git", color: "#F05032" },
                { slug: "github", name: "GitHub", color: "#181717" },
              ]},
            ].map((group, gi) => (
              <motion.div key={group.group}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: gi * 0.06 }}
                style={{ background: "#F8F9FA", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 16, padding: "18px 22px", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}
              >
                <div style={{ minWidth: 130, flexShrink: 0 }}>
                  <div style={{ width: 24, height: 2, background: group.color, borderRadius: 2, marginBottom: 6 }} />
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.72rem", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.1em" }}>{group.group}</span>
                </div>
                <div style={{ width: 1, height: 36, background: "rgba(0,0,0,0.1)", flexShrink: 0 }} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, flex: 1 }}>
                  {group.items.map((item, ii) => (
                    <motion.div key={`${item.name}-${ii}`}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: gi * 0.06 + ii * 0.05 }}
                      whileHover={{ y: -3, scale: 1.06 }}
                      style={{ display: "flex", alignItems: "center", gap: 8, background: `${item.color}18`, border: `1px solid ${item.color}35`, borderRadius: 10, padding: "7px 13px", cursor: "default", transition: "box-shadow 0.2s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 16px ${item.color}40`; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                    >
                      {"slug" in item && item.slug ? (
                        <img src={`https://cdn.simpleicons.org/${item.slug}/${item.color.replace("#", "")}`} alt={item.name} style={{ width: 16, height: 16, flexShrink: 0 }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      ) : (
                        <span style={{ fontSize: "0.9rem" }}>{(item as { emoji: string }).emoji}</span>
                      )}
                      <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#0C0C0C", whiteSpace: "nowrap" }}>{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GitHub link ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px 64px" }}>
        <FadeUp>
          <motion.a href="https://github.com/RusiraLiyanage/Easy-EV-Charging" target="_blank" rel="noopener noreferrer"
            whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.12)" }}
            transition={{ duration: 0.2 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 14, background: "#0C0C0C", color: "#fff", borderRadius: 14, padding: "18px 28px", textDecoration: "none" }}>
            <GitHubIcon sx={{ fontSize: 28, color: "#fff" }} />
            <div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.88rem" }}>View Source Code</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", marginTop: 2 }}>github.com/RusiraLiyanage/Easy-EV-Charging</div>
            </div>
          </motion.a>
        </FadeUp>
      </div>

      {/* ── User Flow Features ── */}
      <EVUserFeatures />

      {/* ── Admin Flow Features ── */}
      <EVAdminFeatures />

    </div>
  );
}

// ── EV User Flow ───────────────────────────────────────────────────────────────

function EVUserFeatures() {
  const browserFrame = (src: string, alt: string, delay: number, zoom = 1.5, originY = "top") => (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.13)", border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}
    >
      <div style={{ background: "#F1F3F5", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: "#fff", borderRadius: 4, padding: "2px 8px", fontSize: "0.58rem", color: "#9CA3AF", fontFamily: '"Inter", sans-serif', border: "1px solid rgba(0,0,0,0.07)" }}>
          dashboard_user.php
        </div>
      </div>
      <div style={{ height: 340, overflow: "hidden", position: "relative" }}>
        <img src={src} alt={alt} style={{ width: "100%", display: "block", transform: `scale(${zoom})`, transformOrigin: `center ${originY}` }} />
      </div>
    </motion.div>
  );

  return (
    <div style={{ background: "#F8F9FA", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <div style={{ width: 28, height: 2, background: EV_GREEN, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: EV_GREEN, letterSpacing: "0.2em", textTransform: "uppercase" }}>User Experience</span>
          </div>
          <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.5rem", color: "#0C0C0C", marginBottom: 64 }}>Charging Session Flow</h4>
        </FadeUp>

        {/* Feature 1 - Charging History */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center", marginBottom: 80 }}>
          {browserFrame(evUserHistory, "Full charging history - all sessions with start, end, location, and cost", 0, 1.6, "top")}
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${EV_GREEN}12`, border: `1px solid ${EV_GREEN}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>📋</div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: EV_GREEN, textTransform: "uppercase", letterSpacing: "0.12em" }}>01</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>Charging History</h4>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
              Every session is persisted to the database with start time, end time, location, and total cost. The user dashboard surfaces the full history in a clean table, ordered by most recent first.
            </p>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
              Session records accumulate over time, giving users a clear view of their charging spend across all visited stations.
            </p>
          </FadeUp>
        </div>

        {/* Feature 2 - Checkout History / Session state */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 48, alignItems: "center", marginBottom: 80 }}>
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${EV_GREEN}12`, border: `1px solid ${EV_GREEN}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>🔌</div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: EV_GREEN, textTransform: "uppercase", letterSpacing: "0.12em" }}>02</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>Check-In / Check-Out Flow</h4>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
              Users check in to any available station directly from the station table. The "Currently Charging" panel appears immediately, showing the active location and check-in timestamp.
            </p>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
              Checking out closes the session and returns the station to available - the history row and updated availability count are both reflected instantly.
            </p>
          </FadeUp>
          {browserFrame(evUserCheckoutHistory, "User dashboard with active session and checkout action visible", 0, 1.5, "25%")}
        </div>

        {/* Feature 3 - Charging Complete */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
          {browserFrame(evChargingComplete, "Post-checkout confirmation - cost summary displayed inline", 0, 1.5, "top")}
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${EV_GREEN}12`, border: `1px solid ${EV_GREEN}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>✅</div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: EV_GREEN, textTransform: "uppercase", letterSpacing: "0.12em" }}>03</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>Automatic Cost Calculation</h4>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
              On check-out, the server calculates the session duration and applies the location's hourly rate in whole-hour billing blocks. The final cost is displayed as a confirmation message inline on the dashboard.
            </p>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
              The cost is immediately written to the session history record so users always see an accurate total without any page reload.
            </p>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

// ── EV Admin Flow ──────────────────���───────────────────────────────────────────

function EVAdminFeatures() {
  const browserFrame = (src: string, alt: string, delay: number, zoom = 1.5, originY = "top") => (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.13)", border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}
    >
      <div style={{ background: "#F1F3F5", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: "#fff", borderRadius: 4, padding: "2px 8px", fontSize: "0.58rem", color: "#9CA3AF", fontFamily: '"Inter", sans-serif', border: "1px solid rgba(0,0,0,0.07)" }}>
          dashboard_admin.php
        </div>
      </div>
      <div style={{ height: 340, overflow: "hidden", position: "relative" }}>
        <img src={src} alt={alt} style={{ width: "100%", display: "block", transform: `scale(${zoom})`, transformOrigin: `center ${originY}` }} />
      </div>
    </motion.div>
  );

  return (
    <div style={{ background: "#fff", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <div style={{ width: 28, height: 2, background: EV_GREEN, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: EV_GREEN, letterSpacing: "0.2em", textTransform: "uppercase" }}>Admin Dashboard</span>
          </div>
          <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.5rem", color: "#0C0C0C", marginBottom: 64 }}>Platform Administration</h4>
        </FadeUp>

        {/* Feature 1 - Admin Monitoring */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 48, alignItems: "center", marginBottom: 80 }}>
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${EV_GREEN}12`, border: `1px solid ${EV_GREEN}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>👥</div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: EV_GREEN, textTransform: "uppercase", letterSpacing: "0.12em" }}>01</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>User & Session Monitoring</h4>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
              The admin dashboard exposes every registered user with their contact details and role type. A live "Users Currently Checked-in" panel shows who is actively charging and at which station, in real time.
            </p>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
              Stations are categorised into "Locations with Available Stations" and "Locations that Are Full" at a glance, giving admins immediate operational awareness without querying the database manually.
            </p>
          </FadeUp>
          {browserFrame(evAdminMonitoring, "Admin monitoring - user list, active check-ins, station availability", 0, 1.6, "40%")}
        </div>

        {/* Feature 2 - Location Management */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
          {browserFrame(evLocationManagement, "Location management - add new station, edit existing, view all", 0, 1.5, "top")}
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${EV_GREEN}12`, border: `1px solid ${EV_GREEN}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>📍</div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: EV_GREEN, textTransform: "uppercase", letterSpacing: "0.12em" }}>02</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>Location Management</h4>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
              Admins can add new charging locations by specifying a description, number of stations, and cost per hour. New entries appear in the full station table immediately after submission.
            </p>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
              Existing locations can be edited inline - updating station counts or pricing propagates through availability calculations and user-facing tables without any manual cache invalidation.
            </p>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

// ── FuelUpp Project Detail ─────────────────────────────────────────────────────

const FUEL_ORANGE = "#EA580C";
const FUEL_DARK = "#1C1917";

// ── Fake UI: Phone frame wrapper ───────────────────────────────────────────────
function PhoneMockup({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ width: "100%", maxWidth: 300, margin: "0 auto" }}
    >
      <div style={{ background: "#1a1a1a", borderRadius: 36, padding: "12px 8px", boxShadow: "0 24px 64px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)" }}>
        {/* Notch */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
          <div style={{ width: 80, height: 20, background: "#111", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#333" }} />
            <div style={{ width: 36, height: 6, borderRadius: 4, background: "#222" }} />
          </div>
        </div>
        {/* Screen */}
        <div style={{ borderRadius: 24, overflow: "hidden", background: "#fff", minHeight: 520 }}>
          {children}
        </div>
        {/* Home bar */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
          <div style={{ width: 80, height: 4, borderRadius: 2, background: "#444" }} />
        </div>
      </div>
    </motion.div>
  );
}

// ── Fake screens ───────────────────────────────────────────────────────────────

function FuelRoleSelectScreen() {
  return (
    <div style={{ background: FUEL_DARK, minHeight: 520, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "28px 20px 16px", textAlign: "center" }}>
        <div style={{ fontSize: "2rem", marginBottom: 6 }}>⛽</div>
        <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.5rem", color: "#fff", letterSpacing: "-0.02em" }}>FuelUpp</div>
        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", marginTop: 4 }}>Fuel Distribution & Queue Management</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px 32px", gap: 16 }}>
        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>Select your role</div>
        {[
          { icon: "🚗", label: "I'm a Client", sub: "Find fuel & join queue", bg: FUEL_ORANGE },
          { icon: "🏪", label: "I'm a Shed Owner", sub: "Manage your station", bg: "#292524" },
        ].map(btn => (
          <div key={btn.label} style={{ width: "100%", background: btn.bg, borderRadius: 16, padding: "18px 20px", display: "flex", alignItems: "center", gap: 14, border: btn.bg === "#292524" ? "1px solid rgba(255,255,255,0.1)" : "none", cursor: "pointer" }}>
            <span style={{ fontSize: "1.6rem" }}>{btn.icon}</span>
            <div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>{btn.label}</div>
              <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{btn.sub}</div>
            </div>
            <div style={{ marginLeft: "auto", color: "rgba(255,255,255,0.5)", fontSize: "1rem" }}>›</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FuelClientStationScreen() {
  const sheds = [
    { name: "Colombo 03 Shed", loc: "Colombo 03", queue: 12, wait: "~45 min", avail: true },
    { name: "Rajagiriya Petrol", loc: "Rajagiriya", queue: 8, wait: "~28 min", avail: true },
    { name: "Nugegoda Shed", loc: "Nugegoda", queue: 0, wait: "—", avail: false },
    { name: "Kandy Road Station", loc: "Kandy Rd", queue: 23, wait: "~1h 20m", avail: true },
  ];
  return (
    <div style={{ background: "#F8F9FA", minHeight: 520, display: "flex", flexDirection: "column" }}>
      <div style={{ background: FUEL_DARK, padding: "20px 16px 16px" }}>
        <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.1rem", color: "#fff" }}>⛽ Find a Station</div>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "8px 12px", marginTop: 10, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "0.8rem" }}>🔍</span>
          <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.72rem", color: "rgba(255,255,255,0.35)" }}>Search sheds...</span>
        </div>
      </div>
      <div style={{ flex: 1, padding: "12px", display: "flex", flexDirection: "column", gap: 8, overflowY: "hidden" }}>
        {sheds.map(s => (
          <div key={s.name} style={{ background: "#fff", borderRadius: 12, padding: "12px 14px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.78rem", color: "#0C0C0C" }}>{s.name}</div>
              <div style={{ background: s.avail ? "#ECFDF5" : "#FEF2F2", color: s.avail ? "#059669" : "#DC2626", borderRadius: 6, padding: "2px 8px", fontSize: "0.6rem", fontWeight: 700 }}>
                {s.avail ? "Available" : "Unavailable"}
              </div>
            </div>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.65rem", color: "#9CA3AF", marginBottom: 6 }}>📍 {s.loc}</div>
            {s.avail && (
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ background: "#FFF7ED", borderRadius: 6, padding: "3px 8px", fontSize: "0.62rem", color: FUEL_ORANGE, fontWeight: 600 }}>🚗 {s.queue} in queue</div>
                <div style={{ background: "#F0F9FF", borderRadius: 6, padding: "3px 8px", fontSize: "0.62rem", color: "#0284C7", fontWeight: 600 }}>⏱ {s.wait}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FuelJoinQueueScreen() {
  return (
    <div style={{ background: "#fff", minHeight: 520, display: "flex", flexDirection: "column" }}>
      <div style={{ background: FUEL_DARK, padding: "20px 16px 20px" }}>
        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.65rem", color: "rgba(255,255,255,0.45)", marginBottom: 4 }}>‹ Back</div>
        <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1rem", color: "#fff" }}>Join Queue</div>
        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", marginTop: 4 }}>Colombo 03 Shed · 12 ahead</div>
      </div>
      <div style={{ padding: "20px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.68rem", fontWeight: 600, color: "#6B7280", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Your Name</div>
          <div style={{ border: "1.5px solid #E5E7EB", borderRadius: 10, padding: "10px 14px", fontFamily: '"Inter", sans-serif', fontSize: "0.78rem", color: "#374151" }}>Rusira Liyanage</div>
        </div>
        <div>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.68rem", fontWeight: 600, color: "#6B7280", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Vehicle Type</div>
          <div style={{ display: "flex", gap: 8 }}>
            {["🚗 Car", "🏍 Motorbike", "🛺 3-Wheeler"].map((v, i) => (
              <div key={v} style={{ flex: 1, border: i === 0 ? `2px solid ${FUEL_ORANGE}` : "1.5px solid #E5E7EB", borderRadius: 10, padding: "8px 4px", textAlign: "center", fontSize: "0.58rem", fontFamily: '"Inter", sans-serif', fontWeight: i === 0 ? 700 : 500, color: i === 0 ? FUEL_ORANGE : "#6B7280", background: i === 0 ? "#FFF7ED" : "#fff" }}>{v}</div>
            ))}
          </div>
        </div>
        <div style={{ background: "#FFF7ED", border: "1px solid #FDE68A", borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: "#92400E", marginBottom: 4 }}>Estimated Wait</div>
          <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.4rem", color: FUEL_ORANGE }}>~45 min</div>
        </div>
        <div style={{ marginTop: 8, background: FUEL_ORANGE, borderRadius: 12, padding: "14px", textAlign: "center", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.85rem", color: "#fff", cursor: "pointer" }}>
          Join Queue Now
        </div>
      </div>
    </div>
  );
}

function FuelOwnerDashScreen() {
  return (
    <div style={{ background: "#F8F9FA", minHeight: 520, display: "flex", flexDirection: "column" }}>
      <div style={{ background: FUEL_DARK, padding: "20px 16px 24px" }}>
        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>Welcome back</div>
        <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1rem", color: "#fff" }}>Nuwan - Colombo 03 Shed</div>
        <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: 12, padding: "12px" }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.62rem", color: "rgba(255,255,255,0.45)", marginBottom: 4 }}>In Queue</div>
            <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.6rem", color: "#fff" }}>12</div>
          </div>
          <div style={{ flex: 1, background: `${FUEL_ORANGE}22`, border: `1px solid ${FUEL_ORANGE}44`, borderRadius: 12, padding: "12px" }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.62rem", color: "rgba(255,255,255,0.45)", marginBottom: 4 }}>Fuel Status</div>
            <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.85rem", color: "#FCA07A" }}>Available</div>
          </div>
        </div>
      </div>
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ background: "#fff", borderRadius: 12, padding: "14px", border: "1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.65rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Fuel Window</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div><div style={{ fontSize: "0.6rem", color: "#9CA3AF" }}>Arrives</div><div style={{ fontWeight: 700, fontSize: "0.8rem", color: "#0C0C0C" }}>08:00 AM</div></div>
            <div style={{ color: "#D1D5DB", fontSize: "1rem" }}>→</div>
            <div><div style={{ fontSize: "0.6rem", color: "#9CA3AF" }}>Finishes</div><div style={{ fontWeight: 700, fontSize: "0.8rem", color: "#0C0C0C" }}>06:00 PM</div></div>
          </div>
        </div>
        {[{ icon: "⛽", label: "Update Fuel Status", color: FUEL_ORANGE }, { icon: "⏱", label: "Update Wait Time", color: "#0284C7" }].map(btn => (
          <div key={btn.label} style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, border: "1px solid rgba(0,0,0,0.06)", cursor: "pointer" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `${btn.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>{btn.icon}</div>
            <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: "0.78rem", color: "#0C0C0C" }}>{btn.label}</div>
            <div style={{ marginLeft: "auto", color: "#D1D5DB" }}>›</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FuelOwnerUpdateScreen() {
  return (
    <div style={{ background: "#fff", minHeight: 520, display: "flex", flexDirection: "column" }}>
      <div style={{ background: FUEL_DARK, padding: "20px 16px 20px" }}>
        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.65rem", color: "rgba(255,255,255,0.45)", marginBottom: 4 }}>‹ Dashboard</div>
        <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1rem", color: "#fff" }}>Update Fuel Status</div>
      </div>
      <div style={{ padding: "20px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.68rem", fontWeight: 600, color: "#6B7280", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Fuel Availability</div>
          <div style={{ display: "flex", gap: 8 }}>
            {["✅ Available", "❌ Unavailable"].map((v, i) => (
              <div key={v} style={{ flex: 1, border: i === 0 ? `2px solid ${FUEL_ORANGE}` : "1.5px solid #E5E7EB", borderRadius: 10, padding: "10px 8px", textAlign: "center", fontSize: "0.65rem", fontFamily: '"Inter", sans-serif', fontWeight: i === 0 ? 700 : 500, color: i === 0 ? FUEL_ORANGE : "#9CA3AF", background: i === 0 ? "#FFF7ED" : "#fff" }}>{v}</div>
            ))}
          </div>
        </div>
        {[{ label: "Fuel Arrival Time", val: "08:00 AM" }, { label: "Fuel Finish Time", val: "06:00 PM" }].map(f => (
          <div key={f.label}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.68rem", fontWeight: 600, color: "#6B7280", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{f.label}</div>
            <div style={{ border: "1.5px solid #E5E7EB", borderRadius: 10, padding: "10px 14px", fontFamily: '"Inter", sans-serif', fontSize: "0.78rem", color: "#374151", display: "flex", justifyContent: "space-between" }}>
              <span>{f.val}</span><span style={{ color: "#D1D5DB" }}>🕐</span>
            </div>
          </div>
        ))}
        <div style={{ marginTop: 8, background: FUEL_ORANGE, borderRadius: 12, padding: "14px", textAlign: "center", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.85rem", color: "#fff" }}>
          Save Changes
        </div>
      </div>
    </div>
  );
}

function FuelSwaggerScreen() {
  const endpoints = [
    { method: "GET", path: "/api/users/queueLength/{shed_name}", color: "#059669", bg: "#ECFDF5" },
    { method: "GET", path: "/api/users/retrieveWaitingTime/{shed_name}", color: "#059669", bg: "#ECFDF5" },
    { method: "POST", path: "/api/users", color: "#2563EB", bg: "#EFF6FF" },
    { method: "PUT", path: "/api/users/pumpingDone/{id}", color: "#D97706", bg: "#FFFBEB" },
    { method: "PUT", path: "/api/users/existingWithoutPumping/{id}", color: "#D97706", bg: "#FFFBEB" },
    { method: "GET", path: "/api/ShedOwners", color: "#059669", bg: "#ECFDF5" },
    { method: "POST", path: "/api/ShedOwners", color: "#2563EB", bg: "#EFF6FF" },
    { method: "PUT", path: "/api/ShedOwners/updateFuelData/{shed_name}", color: "#D97706", bg: "#FFFBEB" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.13)", border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}
    >
      <div style={{ background: "#F1F3F5", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: "#fff", borderRadius: 4, padding: "2px 8px", fontSize: "0.58rem", color: "#9CA3AF", fontFamily: '"Inter", sans-serif', border: "1px solid rgba(0,0,0,0.07)" }}>
          localhost:5000/swagger
        </div>
      </div>
      <div style={{ background: "#1a1a2e", padding: "12px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "0.9rem", color: "#fff" }}>FuelUpp API</div>
          <div style={{ background: "#22c55e22", border: "1px solid #22c55e44", borderRadius: 4, padding: "1px 6px", fontSize: "0.55rem", color: "#22c55e", fontWeight: 700 }}>OAS 3.0</div>
        </div>
        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.62rem", color: "rgba(255,255,255,0.35)", marginTop: 2 }}>ASP.NET Core Web API · MongoDB · Swagger UI</div>
      </div>
      <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
        {endpoints.map(ep => (
          <div key={`${ep.method}-${ep.path}`} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 8px", borderRadius: 6, background: "#F9FAFB", border: "1px solid rgba(0,0,0,0.04)" }}>
            <div style={{ width: 38, background: ep.bg, borderRadius: 4, padding: "2px 0", textAlign: "center", fontSize: "0.52rem", fontWeight: 800, color: ep.color, flexShrink: 0 }}>{ep.method}</div>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.58rem", color: "#374151", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{ep.path}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function FuelProjectSection() {
  return (
    <div style={{ background: "#fff" }}>

      {/* ── Intro header ── */}
      <FadeUp>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "48px 28px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 36, height: 2, background: FUEL_ORANGE, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.72rem", fontWeight: 700, color: FUEL_ORANGE, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Featured Project · 04
            </span>
          </div>
          <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.15rem, 2vw, 1.5rem)", color: "#0C0C0C", lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.01em" }}>
            FuelUpp,{" "}
            <span style={{ background: `linear-gradient(135deg, ${FUEL_ORANGE}, #F97316)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Fuel Distribution & Queue Management
            </span>
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
            {["Native Android", "ASP.NET Core Web API", "MongoDB", "SLIIT EAD"].map(tag => (
              <Chip key={tag} label={tag} size="small" sx={{ background: `${FUEL_ORANGE}0F`, color: FUEL_ORANGE, border: `1px solid ${FUEL_ORANGE}28`, fontWeight: 600, fontSize: "0.75rem" }} />
            ))}
          </div>

          {/* Credential badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 8 }}>
            {[
              { icon: "🎓", label: "Sri Lanka Institute of Information Technology", sub: "BSc (Hons) IT - Software Engineering", bg: "#EFF6FF", border: "#BFDBFE", color: "#1D4ED8", delay: 0 },
              { icon: "📚", label: "Enterprise Application Development", sub: "4th Year · 2nd Semester", bg: `${FUEL_ORANGE}0C`, border: `${FUEL_ORANGE}30`, color: FUEL_ORANGE, delay: 0.07 },
              { icon: "⚙️", label: "Backend Engineer", sub: "Sole .NET / MongoDB contributor", bg: "#F0FDF4", border: "#BBF7D0", color: "#15803D", delay: 0.14 },
              { icon: "✅", label: "Completed", sub: "Feb 2022 – May 2022", bg: "#F8F9FA", border: "rgba(0,0,0,0.1)", color: "#374151", delay: 0.21 },
            ].map(badge => (
              <motion.div key={badge.label}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: badge.delay }}
                style={{ display: "flex", alignItems: "center", gap: 10, background: badge.bg, border: `1px solid ${badge.border}`, borderRadius: 12, padding: "10px 16px" }}
              >
                <span style={{ fontSize: "1.2rem" }}>{badge.icon}</span>
                <div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.78rem", color: badge.color, lineHeight: 1.2 }}>{badge.label}</div>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.7rem", color: "#6B7280", marginTop: 1 }}>{badge.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </FadeUp>

      {/* ── Main split: phones LEFT sticky, text RIGHT ── */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px 80px", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 56, alignItems: "start" }}>

        {/* LEFT: two phone mockups side by side */}
        <div style={{ position: "sticky", top: 88, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <PhoneMockup delay={0}><FuelRoleSelectScreen /></PhoneMockup>
          <PhoneMockup delay={0.15}><FuelClientStationScreen /></PhoneMockup>
        </div>

        {/* RIGHT: problem / built / learned */}
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {[
            {
              icon: "🎯",
              label: "Problem Solved",
              text: "During Sri Lanka's 2021–2022 economic crisis, fuel queues stretched for hours with no visibility into which stations had stock or how long the wait was. FuelUpp gave citizens a way to see real-time availability across petrol sheds, join a virtual queue, and get an accurate wait estimate - reducing uncertainty and wasted trips.",
            },
            {
              icon: "🏗️",
              label: "How I Built It",
              text: "I engineered the entire backend as an ASP.NET Core 6 Web API with MongoDB, implementing two resource controllers - Users (queue join/exit, wait-time calculation) and ShedOwners (shed registration, fuel data updates, queue length management). I documented all endpoints with Swagger/OpenAPI and provided the team with REST API integration guidance. The frontend team consumed these endpoints from a native Android Java app.",
            },
            {
              icon: "💡",
              label: "What I Learned",
              text: "Building a real-time queue system taught me how to model queue state in a document database, how to derive computed values (wait time, queue length by vehicle type) from raw arrival records, and how to design a clean REST API contract that a separate team can implement against confidently. It also reinforced the value of Swagger as a contract-first communication tool between backend and frontend teams.",
            },
          ].map((block, i) => (
            <RevealLeft key={block.label} delay={i * 0.12}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${FUEL_ORANGE}10`, border: `1px solid ${FUEL_ORANGE}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0, marginTop: 1 }}>
                  {block.icon}
                </div>
                <div>
                  <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#0C0C0C", marginBottom: 8 }}>{block.label}</h4>
                  <p style={{ color: "#52525B", fontSize: "0.88rem", lineHeight: 1.82, margin: 0 }}>{block.text}</p>
                </div>
              </div>
            </RevealLeft>
          ))}
        </div>
      </div>

      {/* ── Technologies ── */}
      <div style={{ background: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <div style={{ width: 28, height: 2, background: FUEL_ORANGE, borderRadius: 2 }} />
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: FUEL_ORANGE, letterSpacing: "0.2em", textTransform: "uppercase" }}>Full Project Stack</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.5rem", color: "#0C0C0C", marginBottom: 40 }}>Technologies Used</h4>
          </FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { group: "Backend (Rusira)", color: "#512BD4", items: [
                { slug: "dotnet", name: "ASP.NET Core 6 Web API", color: "#512BD4" },
                { slug: "csharp", name: "C#", color: "#239120" },
                { slug: "mongodb", name: "MongoDB", color: "#47A248" },
                { slug: "swagger", name: "Swagger / OpenAPI", color: "#85EA2D" },
              ]},
              { group: "Frontend (Team)", color: "#3DDC84", items: [
                { slug: "android", name: "Native Android", color: "#3DDC84" },
                { slug: "java", name: "Java", color: "#ED8B00" },
                { slug: "android", name: "XML Layouts", color: "#3DDC84" },
              ]},
              { group: "DevOps", color: "#F05032", items: [
                { slug: "git", name: "Git", color: "#F05032" },
                { slug: "github", name: "GitHub", color: "#181717" },
              ]},
            ].map((group, gi) => (
              <motion.div key={group.group}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: gi * 0.06 }}
                style={{ background: "#F8F9FA", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 16, padding: "18px 22px", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}
              >
                <div style={{ minWidth: 160, flexShrink: 0 }}>
                  <div style={{ width: 24, height: 2, background: group.color, borderRadius: 2, marginBottom: 6 }} />
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.72rem", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.1em" }}>{group.group}</span>
                </div>
                <div style={{ width: 1, height: 36, background: "rgba(0,0,0,0.1)", flexShrink: 0 }} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, flex: 1 }}>
                  {group.items.map((item, ii) => (
                    <motion.div key={`${item.name}-${ii}`}
                      initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: gi * 0.06 + ii * 0.05 }}
                      whileHover={{ y: -3, scale: 1.06 }}
                      style={{ display: "flex", alignItems: "center", gap: 8, background: `${item.color}18`, border: `1px solid ${item.color}35`, borderRadius: 10, padding: "7px 13px", cursor: "default", transition: "box-shadow 0.2s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 16px ${item.color}40`; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                    >
                      <img src={`https://cdn.simpleicons.org/${item.slug}/${item.color.replace("#", "")}`} alt={item.name} style={{ width: 16, height: 16, flexShrink: 0 }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#0C0C0C", whiteSpace: "nowrap" }}>{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GitHub links ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px 64px" }}>
        <FadeUp>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <motion.a href="https://github.com/RusiraLiyanage/FuelUpp---Fuel-Distribution-App-Backend-" target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.14)" }} transition={{ duration: 0.2 }}
              style={{ display: "flex", alignItems: "center", gap: 14, background: "#0C0C0C", color: "#fff", borderRadius: 14, padding: "18px 28px", textDecoration: "none", flex: "1 1 280px" }}>
              <GitHubIcon sx={{ fontSize: 28 }} />
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.88rem" }}>Backend Source</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", marginTop: 2 }}>ASP.NET Core Web API · MongoDB</div>
              </div>
            </motion.a>
            <motion.a href="https://github.com/RusiraLiyanage/FuelUpp---Fuel-Distrubution-App-Frontend-" target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -3, boxShadow: `0 12px 32px ${FUEL_ORANGE}30` }} transition={{ duration: 0.2 }}
              style={{ display: "flex", alignItems: "center", gap: 14, background: `linear-gradient(135deg, ${FUEL_DARK}, ${FUEL_ORANGE})`, color: "#fff", borderRadius: 14, padding: "18px 28px", textDecoration: "none", flex: "1 1 280px" }}>
              <GitHubIcon sx={{ fontSize: 28 }} />
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.88rem" }}>Frontend Source</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", marginTop: 2 }}>Native Android · Java</div>
              </div>
            </motion.a>
          </div>
        </FadeUp>
      </div>

      {/* ── Team ── */}
      <FuelTeamSection />

      {/* ── Client flow features ── */}
      <FuelClientFeatures />

      {/* ── Backend API & Shed Owner features ── */}
      <FuelBackendFeatures />

    </div>
  );
}

// ── FuelUpp: Team ─────────────────────────────────────────────────────────────

function FuelTeamSection() {
  const members = [
    { name: "Thushal Kulathileka", role: "Team Lead · Frontend Developer", photo: thushalPhoto },
    { name: "Pinto R.D.S.P",       role: "Frontend Developer",             photo: pintoPhoto },
  ];
  return (
    <div style={{ background: "#FFF7ED", padding: "56px 20px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div style={{ width: 28, height: 2, background: FUEL_ORANGE, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: FUEL_ORANGE, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Project Team
            </span>
          </div>
          <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.2rem", color: "#0C0C0C", marginBottom: 32 }}>
            Our Team
          </h4>

          {/* Leader row - Rusira */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20, paddingBottom: 20, borderBottom: `1px solid ${FUEL_ORANGE}20` }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <img src={profileImage} alt="Rusira Liyanage" style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", border: `3px solid ${FUEL_ORANGE}` }} />
              <div style={{ position: "absolute", bottom: -2, right: -2, background: FUEL_ORANGE, borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #FFF7ED" }}>
                <span style={{ fontSize: "0.6rem", color: "#fff" }}>★</span>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.05rem", color: "#0C0C0C", marginBottom: 3 }}>Rusira Liyanage</div>
              <div style={{ fontSize: "0.78rem", color: FUEL_ORANGE, fontWeight: 700, marginBottom: 3 }}>Backend Engineer - Sole .NET / MongoDB Contributor</div>
              <div style={{ fontSize: "0.73rem", color: "#6B7280", fontWeight: 500 }}>Designed & implemented all REST API endpoints · Swagger documentation · REST integration guidance</div>
            </div>
          </div>

          {/* Other members */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {members.map((m, i) => (
              <motion.div key={m.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", borderRadius: 10, padding: "12px 16px", border: `1px solid ${FUEL_ORANGE}18`, flex: "1 1 220px" }}
              >
                <img src={m.photo} alt={m.name} style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", border: `2.5px solid ${FUEL_ORANGE}50`, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: "0.78rem", color: "#0C0C0C", lineHeight: 1.2 }}>{m.name}</div>
                  <div style={{ fontSize: "0.68rem", color: "#6B7280", marginTop: 2 }}>{m.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </div>
  );
}

// ── FuelUpp: Client Flow ───────────────────────────────────────────────────────

function FuelClientFeatures() {
  return (
    <div style={{ background: "#F8F9FA", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <div style={{ width: 28, height: 2, background: FUEL_ORANGE, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: FUEL_ORANGE, letterSpacing: "0.2em", textTransform: "uppercase" }}>Client Experience</span>
          </div>
          <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.5rem", color: "#0C0C0C", marginBottom: 64 }}>Finding Fuel & Joining a Queue</h4>
        </FadeUp>

        {/* Feature 1 - Station list */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center", marginBottom: 96 }}>
          <PhoneMockup delay={0}><FuelClientStationScreen /></PhoneMockup>
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${FUEL_ORANGE}12`, border: `1px solid ${FUEL_ORANGE}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>📍</div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: FUEL_ORANGE, textTransform: "uppercase", letterSpacing: "0.12em" }}>01</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>Real-Time Station Browser</h4>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
              The client dashboard fetches all registered petrol sheds from <code style={{ fontFamily: "monospace", background: "#F3F4F6", padding: "1px 5px", borderRadius: 4, fontSize: "0.82rem" }}>GET /api/ShedOwners</code> and surfaces real-time fuel availability, current queue depth, and estimated wait time for each station.
            </p>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
              Stations marked unavailable are shown but greyed out - clients can see at a glance which sheds have fuel without visiting each one.
            </p>
          </FadeUp>
        </div>

        {/* Feature 2 - Join queue */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "center" }}>
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${FUEL_ORANGE}12`, border: `1px solid ${FUEL_ORANGE}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>🚗</div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: FUEL_ORANGE, textTransform: "uppercase", letterSpacing: "0.12em" }}>02</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>Virtual Queue Join & Exit</h4>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
              Selecting a station lets the client provide their name and vehicle type (car, motorbike, three-wheeler) and join the queue. A <code style={{ fontFamily: "monospace", background: "#F3F4F6", padding: "1px 5px", borderRadius: 4, fontSize: "0.82rem" }}>POST /api/users</code> call records the arrival time and increments the shed's queue length.
            </p>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
              On exit, clients choose between <em>pumping done</em> or <em>left without fueling</em> - both paths decrement the queue so wait-time estimates stay accurate for everyone still waiting.
            </p>
          </FadeUp>
          <PhoneMockup delay={0}><FuelJoinQueueScreen /></PhoneMockup>
        </div>
      </div>
    </div>
  );
}

// ── FuelUpp: Backend API & Shed Owner ─────────────────────────────────────────

function FuelBackendFeatures() {
  return (
    <div style={{ background: "#fff", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <div style={{ width: 28, height: 2, background: FUEL_ORANGE, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: FUEL_ORANGE, letterSpacing: "0.2em", textTransform: "uppercase" }}>Shed Owner & Backend</span>
          </div>
          <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.5rem", color: "#0C0C0C", marginBottom: 64 }}>Station Management & REST API</h4>
        </FadeUp>

        {/* Feature 1 - Owner dashboard */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center", marginBottom: 96 }}>
          <PhoneMockup delay={0}><FuelOwnerDashScreen /></PhoneMockup>
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${FUEL_ORANGE}12`, border: `1px solid ${FUEL_ORANGE}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>🏪</div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: FUEL_ORANGE, textTransform: "uppercase", letterSpacing: "0.12em" }}>01</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>Shed Owner Dashboard</h4>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
              Shed owners register their station (name, location, fuel arrival/finish times) and get a live dashboard showing their current queue length and fuel availability status. The backend enforces queue length = 0 on registration regardless of submitted data.
            </p>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
              Owners can push fuel status updates and expected distribution windows - changes propagate instantly to all clients browsing the station list.
            </p>
          </FadeUp>
        </div>

        {/* Feature 2 - Update fuel + Swagger */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "center", marginBottom: 96 }}>
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${FUEL_ORANGE}12`, border: `1px solid ${FUEL_ORANGE}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>⛽</div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: FUEL_ORANGE, textTransform: "uppercase", letterSpacing: "0.12em" }}>02</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>Fuel Status & Time Updates</h4>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
              A dedicated update screen lets owners set fuel availability (available / unavailable), fuel arrival time, and estimated finish time. A <code style={{ fontFamily: "monospace", background: "#F3F4F6", padding: "1px 5px", borderRadius: 4, fontSize: "0.82rem" }}>PUT /api/ShedOwners/updateFuelData/{"{shed_name}"}</code> call persists all changes atomically.
            </p>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
              The wait-time endpoint on the Users controller derives elapsed time from the first active arrival record - giving clients a dynamic estimate rather than a static owner-set figure.
            </p>
          </FadeUp>
          <PhoneMockup delay={0}><FuelOwnerUpdateScreen /></PhoneMockup>
        </div>

        {/* Feature 3 - Swagger API */}
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "center" }}>
          <FuelSwaggerScreen />
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${FUEL_ORANGE}12`, border: `1px solid ${FUEL_ORANGE}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>📡</div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: FUEL_ORANGE, textTransform: "uppercase", letterSpacing: "0.12em" }}>03</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>REST API - Engineered Solo</h4>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
              I designed and implemented all 8 REST endpoints across two controllers - covering queue join, per-vehicle-type queue length queries, computed wait-time calculation, shed registration, fuel data updates, and queue length adjustments.
            </p>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
              All endpoints are documented with Swagger/OpenAPI. I provided REST integration guidance to the frontend team so they could build the Android client confidently against the contract - acting as the sole bridge between backend design and Android consumption.
            </p>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

// ── Projects Section ──────────────────────────────────────────────────────────

function ProjectsSection() {
  const [openCoopersModal, setOpenCoopersModal] = useState(false);
  const [openSAModal, setOpenSAModal] = useState(false);
  const [openEVModal, setOpenEVModal] = useState(false);
  const [openFuelModal, setOpenFuelModal] = useState(false);
  const [openCMSModal, setOpenCMSModal] = useState(false);
  const [openPDFModal, setOpenPDFModal] = useState(false);
  const [openRPAModal, setOpenRPAModal] = useState(false);

  return (
    <section id="projects" style={{ background: "#fff", padding: "88px 0 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px 16px" }}>
        <SectionHeader number="02" title="Projects" />
      </div>

      {/* ── Featured Projects Grid ────────────────────────────────── */}
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px 48px" }}>

        {/* Cooper's - hero card, full width */}
        <FadeUp>
          <motion.div
            whileHover={{ y: -6, boxShadow: "0 20px 52px rgba(91,77,255,0.22)" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setOpenCoopersModal(true)}
            style={{ background: "linear-gradient(135deg, #5B4DFF 0%, #7C3AED 100%)", borderRadius: 18, padding: "26px 32px", cursor: "pointer", position: "relative", overflow: "hidden", boxShadow: "0 10px 32px rgba(91,77,255,0.18)", marginBottom: 14 }}
          >
            <div style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "100%", background: "radial-gradient(circle at 100% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10, flexWrap: "wrap" }}>
                <Chip label="Featured Project" size="small" sx={{ background: "rgba(255,255,255,0.2)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", fontWeight: 700, fontSize: "0.63rem", backdropFilter: "blur(10px)" }} />
                <Chip label="Active" size="small" sx={{ background: "rgba(16,185,129,0.2)", color: "#A7F3D0", border: "1px solid rgba(16,185,129,0.4)", fontSize: "0.63rem" }} />
              </div>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.45rem)", color: "#fff", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
                {"Cooper's Barber Shop, Booking Platform"}
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
                {["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI", "CSS"].map(tech => (
                  <Chip key={tech} label={tech} size="small" sx={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", fontSize: "0.68rem", backdropFilter: "blur(10px)" }} />
                ))}
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "7px 14px", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.08)" }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.82rem", color: "#fff", letterSpacing: "0.02em" }}>View Full Project Details</span>
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowRight size={16} color="#fff" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </FadeUp>

        {/* 2-column grid - remaining 6 cards */}
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>

          {/* Sample Assist - Callout Management */}
          <FadeUp delay={0.05}>
            <motion.div
              whileHover={{ y: -5, boxShadow: `0 18px 44px ${SA_BLUE}35` }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpenSAModal(true)}
              style={{ background: `linear-gradient(135deg, ${SA_DARK} 0%, ${SA_BLUE} 100%)`, borderRadius: 16, padding: "20px 24px", cursor: "pointer", position: "relative", overflow: "hidden", boxShadow: `0 8px 28px ${SA_BLUE}28`, height: "100%" }}
            >
              <div style={{ position: "absolute", top: 0, right: 0, width: "55%", height: "100%", background: "radial-gradient(circle at 100% 50%, rgba(255,255,255,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 8, flexWrap: "wrap" }}>
                  <Chip label="Featured Project" size="small" sx={{ background: "rgba(255,255,255,0.18)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", fontWeight: 700, fontSize: "0.63rem", backdropFilter: "blur(10px)" }} />
                  <Chip label="UOW Capstone" size="small" sx={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", fontSize: "0.63rem" }} />
                  <Chip label="Team Leader & PM" size="small" sx={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", fontSize: "0.63rem" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
                  <div style={{ borderRadius: 4, overflow: "hidden", display: "flex", alignItems: "center" }}>
                    <img src={sampleAssistLogo} alt="Sample Assist" style={{ height: 16, objectFit: "contain", display: "block" }} />
                  </div>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: "0.63rem", color: "rgba(255,255,255,0.7)", whiteSpace: "nowrap" }}>Associated with Sample Assist</span>
                </div>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)", color: "#fff", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                  Sample Assist, Emergency Callout Management
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 12 }}>
                  {["Flutter", "Dart", "AWS Cognito", "AWS Lambda", "AWS API Gateway", "PostgreSQL", "Express JS", "Material UI", "Figma", "GitHub Actions"].map(tech => (
                    <Chip key={tech} label={tech} size="small" sx={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", fontSize: "0.62rem", backdropFilter: "blur(10px)" }} />
                  ))}
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "7px 13px", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.08)" }}>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.78rem", color: "#fff" }}>View Full Project Details</span>
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowRight size={14} color="#fff" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </FadeUp>

          {/* Easy EV Charging */}
          <FadeUp delay={0.1}>
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 18px 44px rgba(16,185,129,0.22)" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpenEVModal(true)}
              style={{ background: "linear-gradient(135deg, #064E3B 0%, #059669 100%)", borderRadius: 16, padding: "20px 24px", cursor: "pointer", position: "relative", overflow: "hidden", boxShadow: "0 8px 28px rgba(5,150,105,0.18)", height: "100%" }}
            >
              <div style={{ position: "absolute", top: 0, right: 0, width: "55%", height: "100%", background: "radial-gradient(circle at 100% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 8, flexWrap: "wrap" }}>
                  <Chip label="Featured Project" size="small" sx={{ background: "rgba(255,255,255,0.18)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", fontWeight: 700, fontSize: "0.63rem", backdropFilter: "blur(10px)" }} />
                  <Chip label="UOW Assignment" size="small" sx={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", fontSize: "0.63rem" }} />
                  <Chip label="Completed" size="small" sx={{ background: "rgba(167,243,208,0.2)", color: "#A7F3D0", border: "1px solid rgba(167,243,208,0.4)", fontSize: "0.63rem" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 7, flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8rem" }}>🎓</span>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: "0.63rem", color: "rgba(255,255,255,0.75)", whiteSpace: "nowrap" }}>University of Wollongong · MCS (Software Engineering)</span>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 500, fontSize: "0.6rem", color: "rgba(255,255,255,0.5)", whiteSpace: "nowrap" }}>· MTS9307 Web Server Programming</span>
                </div>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)", color: "#fff", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                  Easy EV Charging, Station Management Platform
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 0 }}>
                  {["PHP", "MySQL", "HTML", "CSS", "Git", "Role-Based Auth", "CRUD Operations"].map(tech => (
                    <Chip key={tech} label={tech} size="small" sx={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", fontSize: "0.62rem", backdropFilter: "blur(10px)" }} />
                  ))}
                </div>
                <div style={{ marginTop: "auto", paddingTop: 12 }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "7px 13px", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.08)" }}>
                    <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.78rem", color: "#fff" }}>View Full Project Details</span>
                    <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                      <ArrowRight size={14} color="#fff" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeUp>

          {/* FuelUpp */}
          <FadeUp delay={0.12}>
            <motion.div
              whileHover={{ y: -5, boxShadow: `0 18px 44px ${FUEL_ORANGE}28` }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpenFuelModal(true)}
              style={{ background: `linear-gradient(135deg, ${FUEL_DARK} 0%, ${FUEL_ORANGE} 100%)`, borderRadius: 16, padding: "20px 24px", cursor: "pointer", position: "relative", overflow: "hidden", boxShadow: `0 8px 28px ${FUEL_ORANGE}22`, height: "100%" }}
            >
              <div style={{ position: "absolute", top: 0, right: 0, width: "55%", height: "100%", background: "radial-gradient(circle at 100% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 8, flexWrap: "wrap" }}>
                  <Chip label="Featured Project" size="small" sx={{ background: "rgba(255,255,255,0.18)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", fontWeight: 700, fontSize: "0.63rem", backdropFilter: "blur(10px)" }} />
                  <Chip label="SLIIT - EAD" size="small" sx={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", fontSize: "0.63rem" }} />
                  <Chip label="Completed" size="small" sx={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.2)", fontSize: "0.63rem" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 7, flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8rem" }}>🎓</span>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: "0.63rem", color: "rgba(255,255,255,0.75)", whiteSpace: "nowrap" }}>SLIIT · BSc (Hons) IT - Software Engineering</span>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 500, fontSize: "0.6rem", color: "rgba(255,255,255,0.5)", whiteSpace: "nowrap" }}>· Enterprise Application Development</span>
                </div>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)", color: "#fff", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                  FuelUpp, Fuel Distribution & Queue Management
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 12 }}>
                  {["ASP.NET Core", "MongoDB", "Native Android", "Java", "Swagger", "REST API"].map(tech => (
                    <Chip key={tech} label={tech} size="small" sx={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", fontSize: "0.62rem", backdropFilter: "blur(10px)" }} />
                  ))}
                </div>
                <div style={{ marginTop: "auto", paddingTop: 12 }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "7px 13px", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.08)" }}>
                    <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.78rem", color: "#fff" }}>View Full Project Details</span>
                    <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                      <ArrowRight size={14} color="#fff" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeUp>

          {/* JCAF2021 - Conference Management System */}
          <FadeUp delay={0.15}>
            <motion.div
              whileHover={{ y: -5, boxShadow: `0 18px 44px ${CMS_INDIGO}28` }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpenCMSModal(true)}
              style={{ background: `linear-gradient(135deg, ${CMS_DARK} 0%, ${CMS_INDIGO} 100%)`, borderRadius: 16, padding: "20px 24px", cursor: "pointer", position: "relative", overflow: "hidden", boxShadow: `0 8px 28px ${CMS_INDIGO}22`, height: "100%" }}
            >
              <div style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "100%", background: "radial-gradient(circle at 100% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 8, flexWrap: "wrap" }}>
                  <Chip label="Featured Project" size="small" sx={{ background: "rgba(255,255,255,0.2)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", fontWeight: 700, fontSize: "0.63rem", backdropFilter: "blur(10px)" }} />
                  <Chip label="Completed" size="small" sx={{ background: "rgba(167,243,208,0.2)", color: "#A7F3D0", border: "1px solid rgba(167,243,208,0.4)", fontSize: "0.63rem" }} />
                  <Chip label="BSc (Hons) IT · SLIIT" size="small" sx={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.9)", border: "1px solid rgba(255,255,255,0.2)", fontSize: "0.63rem" }} />
                </div>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)", color: "#fff", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                  JCAF2021, Conference Management System
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
                  {[
                    { slug: "react",     name: "React.js",   color: "#61DAFB" },
                    { slug: "nodedotjs", name: "Node.js",    color: "#339933" },
                    { slug: "express",   name: "Express.js", color: "#ffffff" },
                    { slug: "mongodb",   name: "MongoDB",    color: "#47A248" },
                  ].map(t => (
                    <Chip key={t.name} size="small"
                      icon={<img src={`https://cdn.simpleicons.org/${t.slug}/${t.color.replace("#","")}`} alt={t.name} style={{ width: 12, height: 12 }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />}
                      label={t.name}
                      sx={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", fontSize: "0.62rem", "& .MuiChip-icon": { marginLeft: "5px" } }}
                    />
                  ))}
                </div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem", lineHeight: 1.5, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  Full-stack academic conference platform for JCAF 2021 - role-based registration, paper submission, reviewer workflows, and admin dashboards built at SLIIT.
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "7px 13px", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.08)" }}>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.78rem", color: "#fff" }}>View Full Project Details</span>
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowRight size={14} color="#fff" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </FadeUp>

          {/* Sample Assist - HTML-to-PDF */}
          <FadeUp delay={0.18}>
            <motion.div
              whileHover={{ y: -5, boxShadow: `0 18px 44px ${PDF_BLUE}28` }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpenPDFModal(true)}
              style={{ background: `linear-gradient(135deg, ${PDF_DARK} 0%, ${PDF_SLATE} 50%, ${PDF_BLUE} 100%)`, borderRadius: 16, padding: "20px 24px", cursor: "pointer", position: "relative", overflow: "hidden", boxShadow: `0 8px 28px ${PDF_BLUE}22`, height: "100%" }}
            >
              <div style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "100%", background: "radial-gradient(circle at 100% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 16, right: 28, opacity: 0.06, display: "flex", flexDirection: "column", gap: 5, pointerEvents: "none" }}>
                {[120, 90, 105, 70, 85].map((w, i) => <div key={i} style={{ width: w, height: 3, background: "#fff", borderRadius: 2 }} />)}
              </div>
              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 8, flexWrap: "wrap" }}>
                  <Chip label="Featured Project" size="small" sx={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", fontWeight: 700, fontSize: "0.63rem", backdropFilter: "blur(10px)" }} />
                  <Chip label="Live · Production" size="small" sx={{ background: "rgba(16,185,129,0.2)", color: "#A7F3D0", border: "1px solid rgba(16,185,129,0.4)", fontSize: "0.63rem" }} />
                </div>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)", color: "#fff", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                  Sample Assist - HTML-to-PDF Generation Engine
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
                  {[
                    { slug: "nodedotjs", name: "Node.js",   color: "#339933" },
                    { slug: "puppeteer", name: "Puppeteer", color: "#40B5A4" },
                    { slug: "firebase",  name: "Firebase",  color: "#FFCA28" },
                    { slug: "html5",     name: "HTML/CSS",  color: "#E34F26" },
                  ].map(t => (
                    <Chip key={t.name} size="small"
                      icon={<img src={`https://cdn.simpleicons.org/${t.slug}/${t.color.replace("#","")}`} alt={t.name} style={{ width: 12, height: 12 }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />}
                      label={t.name}
                      sx={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", fontSize: "0.62rem", "& .MuiChip-icon": { marginLeft: "5px" } }}
                    />
                  ))}
                </div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem", lineHeight: 1.5, marginBottom: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {"Led Sample Assist's PDF pipeline migration from html-pdf to Puppeteer for Drug & Alcohol testing reports - live in production."}
                </p>
                <div style={{ marginTop: "auto", paddingTop: 12 }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "7px 13px", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.08)" }}>
                    <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.78rem", color: "#fff" }}>View Full Project Details</span>
                    <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                      <ArrowRight size={14} color="#fff" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeUp>

          {/* MetaLanka - RPA Redmine */}
          <FadeUp delay={0.2}>
            <motion.div
              whileHover={{ y: -5, boxShadow: `0 18px 44px ${RPA_TEAL}28` }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpenRPAModal(true)}
              style={{ background: `linear-gradient(135deg, ${RPA_DARK} 0%, #0E5A6E 50%, ${RPA_TEAL} 100%)`, borderRadius: 16, padding: "20px 24px", cursor: "pointer", position: "relative", overflow: "hidden", boxShadow: `0 8px 28px ${RPA_TEAL}22`, height: "100%" }}
            >
              <div style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "100%", background: "radial-gradient(circle at 100% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 14, right: 36, opacity: 0.07, display: "grid", gridTemplateColumns: "repeat(6,9px)", gap: 3, pointerEvents: "none" }}>
                {Array(24).fill(0).map((_, i) => <div key={i} style={{ width: 9, height: 6, background: "#fff", borderRadius: 1 }} />)}
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 8, flexWrap: "wrap" }}>
                  <Chip label="Featured Project" size="small" sx={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", fontWeight: 700, fontSize: "0.63rem", backdropFilter: "blur(10px)" }} />
                  <Chip label="Delivered · HR Production" size="small" sx={{ background: "rgba(16,185,129,0.2)", color: "#A7F3D0", border: "1px solid rgba(16,185,129,0.4)", fontSize: "0.63rem" }} />
                  <Chip label="Project Leader" size="small" sx={{ background: "rgba(251,191,36,0.2)", color: "#FDE68A", border: "1px solid rgba(251,191,36,0.3)", fontSize: "0.63rem" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ background: "#fff", borderRadius: 6, padding: "2px 8px", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center" }}>
                    <img src={metatechnoLogo} alt="MetaTechno Lanka" style={{ height: 26, objectFit: "contain", display: "block" }} />
                  </div>
                </div>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)", color: "#fff", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                  MetaLanka - RPA Redmine Report Generation
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
                  {[
                    { name: "UiPath",   color: "#FA4616", slug: "uipath" },
                    { name: "MS Excel", color: "#217346", slug: "microsoftexcel" },
                    { name: "VMware",   color: "#607078", slug: "vmware" },
                    { name: "Redmine",  color: "#B22222", slug: "redmine" },
                  ].map(t => (
                    <Chip key={t.name} size="small"
                      icon={<img src={`https://cdn.simpleicons.org/${t.slug}/${t.color.replace("#","")}`} alt={t.name} style={{ width: 12, height: 12 }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />}
                      label={t.name}
                      sx={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", fontSize: "0.62rem", "& .MuiChip-icon": { marginLeft: "5px" } }}
                    />
                  ))}
                </div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem", lineHeight: 1.5, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  Led a UiPath RPA bot that extracts Redmine time entries and generates colour-coded Excel reports for HR - reducing manual reporting time by 85%.
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "7px 13px", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.08)" }}>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.78rem", color: "#fff" }}>View Full Project Details</span>
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowRight size={14} color="#fff" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </FadeUp>

        </div>{/* end 2-column grid */}
      </div>{/* end Featured Projects wrapper */}

      {/* ── All Modals ─────────────────────────────────────────────── */}
      <Dialog open={openCoopersModal} onClose={() => setOpenCoopersModal(false)} maxWidth={false}
        PaperProps={{ sx: { maxWidth: "95vw", maxHeight: "90vh", borderRadius: 4, background: "#fff" } }}>
        <DialogContent sx={{ padding: 0, position: "relative" }}>
          <IconButton onClick={() => setOpenCoopersModal(false)}
            sx={{ position: "fixed", top: 20, right: 20, zIndex: 1000, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", "&:hover": { background: "#fff", transform: "scale(1.05)" } }}>
            <CloseIcon />
          </IconButton>
          <div style={{ overflowY: "auto", maxHeight: "90vh" }}><CoopersProjectSection /></div>
        </DialogContent>
      </Dialog>

      <Dialog open={openSAModal} onClose={() => setOpenSAModal(false)} maxWidth={false}
        PaperProps={{ sx: { maxWidth: "95vw", maxHeight: "90vh", borderRadius: 4, background: "#fff" } }}>
        <DialogContent sx={{ padding: 0, position: "relative" }}>
          <IconButton onClick={() => setOpenSAModal(false)}
            sx={{ position: "fixed", top: 20, right: 20, zIndex: 1000, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", "&:hover": { background: "#fff", transform: "scale(1.05)" } }}>
            <CloseIcon />
          </IconButton>
          <div style={{ overflowY: "auto", maxHeight: "90vh" }}><SampleAssistProjectSection /></div>
        </DialogContent>
      </Dialog>

      <Dialog open={openEVModal} onClose={() => setOpenEVModal(false)} maxWidth={false}
        PaperProps={{ sx: { maxWidth: "95vw", maxHeight: "90vh", borderRadius: 4, background: "#fff" } }}>
        <DialogContent sx={{ padding: 0, position: "relative" }}>
          <IconButton onClick={() => setOpenEVModal(false)}
            sx={{ position: "fixed", top: 20, right: 20, zIndex: 1000, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", "&:hover": { background: "#fff", transform: "scale(1.05)" } }}>
            <CloseIcon />
          </IconButton>
          <div style={{ overflowY: "auto", maxHeight: "90vh" }}><EVProjectSection /></div>
        </DialogContent>
      </Dialog>

      <Dialog open={openFuelModal} onClose={() => setOpenFuelModal(false)} maxWidth={false}
        PaperProps={{ sx: { maxWidth: "95vw", maxHeight: "90vh", borderRadius: 4, background: "#fff" } }}>
        <DialogContent sx={{ padding: 0, position: "relative" }}>
          <IconButton onClick={() => setOpenFuelModal(false)}
            sx={{ position: "fixed", top: 20, right: 20, zIndex: 1000, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", "&:hover": { background: "#fff", transform: "scale(1.05)" } }}>
            <CloseIcon />
          </IconButton>
          <div style={{ overflowY: "auto", maxHeight: "90vh" }}><FuelProjectSection /></div>
        </DialogContent>
      </Dialog>

      <Dialog open={openCMSModal} onClose={() => setOpenCMSModal(false)} maxWidth={false}
        PaperProps={{ sx: { maxWidth: "95vw", maxHeight: "90vh", borderRadius: 4, background: "#fff" } }}>
        <DialogContent sx={{ padding: 0, position: "relative" }}>
          <IconButton onClick={() => setOpenCMSModal(false)}
            sx={{ position: "fixed", top: 20, right: 20, zIndex: 1000, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", "&:hover": { background: "#fff", transform: "scale(1.05)" } }}>
            <CloseIcon />
          </IconButton>
          <div style={{ overflowY: "auto", maxHeight: "90vh" }}><CMSProjectSection /></div>
        </DialogContent>
      </Dialog>

      <Dialog open={openPDFModal} onClose={() => setOpenPDFModal(false)} maxWidth={false}
        PaperProps={{ sx: { maxWidth: "95vw", maxHeight: "90vh", borderRadius: 4, background: "#fff" } }}>
        <DialogContent sx={{ padding: 0, position: "relative" }}>
          <IconButton onClick={() => setOpenPDFModal(false)}
            sx={{ position: "fixed", top: 20, right: 20, zIndex: 1000, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", "&:hover": { background: "#fff", transform: "scale(1.05)" } }}>
            <CloseIcon />
          </IconButton>
          <div style={{ overflowY: "auto", maxHeight: "90vh" }}><PDFProjectSection /></div>
        </DialogContent>
      </Dialog>

      <Dialog open={openRPAModal} onClose={() => setOpenRPAModal(false)} maxWidth={false}
        PaperProps={{ sx: { maxWidth: "95vw", maxHeight: "90vh", borderRadius: 4, background: "#fff" } }}>
        <DialogContent sx={{ padding: 0, position: "relative" }}>
          <IconButton onClick={() => setOpenRPAModal(false)}
            sx={{ position: "fixed", top: 20, right: 20, zIndex: 1000, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", "&:hover": { background: "#fff", transform: "scale(1.05)" } }}>
            <CloseIcon />
          </IconButton>
          <div style={{ overflowY: "auto", maxHeight: "90vh" }}><RPAProjectSection /></div>
        </DialogContent>
      </Dialog>

    </section>
  );
}

// ── Publications ──────────────────────────────────────────────────────────────

const PRODEP_TEAM = [
  { name: "Disni Gunawardena", role: "Project Supervisor", photo: disniPhoto, highlight: "supervisor" },
  { name: "Thushal Kulathileka", role: "Team Leader", photo: thushalPhoto1, highlight: "leader" },
  { name: "Rusira Liyanage", role: "Chatbot Component Owner", photo: profileImage, highlight: "me" },
  { name: "Kishen Deemad", role: "Team Member", photo: kishenPhoto1, highlight: "member" },
  { name: "Sujani Chathurika", role: "Team Member", photo: sujaniPhoto, highlight: "member" },
];

function PublicationsSection() {
  const PUB_PURPLE = "#4338CA";
  const PUB_DARK   = "#1E1B4B";

  return (
    <section id="publications" style={{ padding: "88px 0", background: "#F8F9FA" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader number="03" title="Research Publication" />

        <div style={{ margin: "0 20px" }}>
          <FadeUp>
          <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.06)" }}>

            {/* Header band */}
            <div style={{ background: `linear-gradient(135deg, ${PUB_DARK} 0%, ${PUB_PURPLE} 100%)`, padding: "28px 36px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(circle at 100% 50%, rgba(255,255,255,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                  <div style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 6, padding: "3px 10px", display: "flex", alignItems: "center", gap: 5 }}>
                    <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.62rem", color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>IEEE SMAP 2022</span>
                  </div>
                  <div style={{ background: "rgba(167,243,208,0.2)", border: "1px solid rgba(167,243,208,0.4)", borderRadius: 6, padding: "3px 10px" }}>
                    <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: "0.62rem", color: "#A7F3D0", letterSpacing: "0.04em" }}>Published · 2022</span>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 6, padding: "3px 10px" }}>
                    <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: "0.62rem", color: "rgba(255,255,255,0.8)" }}>🎓 SLIIT Final Year Research</span>
                  </div>
                </div>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.05rem, 2vw, 1.35rem)", color: "#fff", margin: "0 0 8px", letterSpacing: "-0.01em", lineHeight: 1.35 }}>
                  PRODEP: Smart Social Media Procrastination and Depression Tracker
                </h2>
                <p style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.78rem", color: "rgba(255,255,255,0.65)", margin: 0 }}>
                  17th International Workshop on Semantic and Social Media Adaptation and Personalisation · Thessaloniki, Greece · Nov 2021 – Dec 2022
                </p>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "32px 36px", display: "grid", gridTemplateColumns: "1fr 340px", gap: 40 }}>

              {/* Left: description + tech + links */}
              <div>
                <p style={{ color: "#374151", fontSize: "0.88rem", lineHeight: 1.75, marginBottom: 20 }}>
                  A Flutter-based mobile application that analyzes Sri Lankan students' procrastination and depression levels using sentiment analysis on Facebook and Twitter, facial recognition, and chatbot interactions to generate comprehensive mental health reports. Published at IEEE SMAP 2022 in Thessaloniki, Greece.
                </p>

                {/* My contribution callout */}
                <div style={{ background: `${PUB_PURPLE}0D`, border: `1px solid ${PUB_PURPLE}25`, borderRadius: 12, padding: "12px 16px", marginBottom: 20, display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ fontSize: "1rem", marginTop: 1 }}>💬</span>
                  <div>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.75rem", color: PUB_PURPLE, marginBottom: 2 }}>My Contribution</div>
                    <p style={{ fontSize: "0.82rem", color: "#374151", margin: 0, lineHeight: 1.6 }}>
                      Individual contributor to the <strong>Chatbot component</strong> of the mobile application - responsible for designing and building the conversational AI module that conducts interactive mental health assessments.
                    </p>
                  </div>
                </div>

                {/* Tech stack */}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.7rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Tech Stack</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {["Flutter", "Django (Python)", "NLP", "Computer Vision", "TensorFlow", "Scikit-learn", "Firebase", "Facebook Developer API", "Twitter Developer API"].map(t => (
                      <Chip key={t} label={t} size="small" sx={{ background: `${PUB_PURPLE}0D`, color: PUB_PURPLE, border: `1px solid ${PUB_PURPLE}22`, fontSize: "0.68rem" }} />
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  <a href="https://github.com/RusiraLiyanage/PRODEP-Smart-Social-Media-Procrastination-and-Depression-Tracker" target="_blank" rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#0C0C0C", color: "#fff", borderRadius: 8, padding: "8px 14px", fontSize: "0.78rem", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, textDecoration: "none" }}>
                    <GitHubIcon sx={{ fontSize: 15 }} />
                    GitHub Repository
                  </a>
                  <a href="https://doi.org/10.1109/SMAP56125.2022.9941896" target="_blank" rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, background: PUB_PURPLE, color: "#fff", borderRadius: 8, padding: "8px 14px", fontSize: "0.78rem", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, textDecoration: "none", boxShadow: `0 4px 14px ${PUB_PURPLE}50` }}>
                    <ArticleIcon sx={{ fontSize: 15 }} />
                    IEEE DOI · 10.1109/SMAP56125.2022.9941896
                  </a>
                  <a href="https://rda.sliit.lk/handle/123456789/3162" target="_blank" rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(16,185,129,0.1)", color: "#059669", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 8, padding: "8px 14px", fontSize: "0.78rem", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, textDecoration: "none" }}>
                    <OpenInNewIcon sx={{ fontSize: 15 }} />
                    Research Data Archive
                  </a>
                  <a href="https://docs.google.com/presentation/d/18bQsh1GbLhr6qQAYBn7w8o7EZv1b_QdF/edit?usp=sharing&ouid=116022254782375216965&rtpof=true&sd=true" target="_blank" rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(251,146,60,0.1)", color: "#EA580C", border: "1px solid rgba(251,146,60,0.25)", borderRadius: 8, padding: "8px 14px", fontSize: "0.78rem", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, textDecoration: "none" }}>
                    <span style={{ fontSize: "0.85rem" }}>🎤</span>
                    PRODEP Bot Presentation
                  </a>
                </div>
              </div>

              {/* Right: team */}
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.7rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Research Team</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {PRODEP_TEAM.map(member => (
                    <div key={member.name} style={{ display: "flex", alignItems: "center", gap: 12,
                      background: member.highlight === "me" ? `${PUB_PURPLE}08` : member.highlight === "supervisor" ? "rgba(245,158,11,0.06)" : member.highlight === "leader" ? "rgba(16,185,129,0.06)" : "#F9FAFB",
                      border: member.highlight === "me" ? `1px solid ${PUB_PURPLE}20` : member.highlight === "supervisor" ? "1px solid rgba(245,158,11,0.2)" : member.highlight === "leader" ? "1px solid rgba(16,185,129,0.2)" : "1px solid rgba(0,0,0,0.06)",
                      borderRadius: 12, padding: "10px 14px" }}>
                      <img src={member.photo} alt={member.name} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: member.highlight === "me" ? `2px solid ${PUB_PURPLE}` : member.highlight === "supervisor" ? "2px solid #F59E0B" : member.highlight === "leader" ? "2px solid #10B981" : "2px solid rgba(0,0,0,0.08)" }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.82rem", color: "#0C0C0C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{member.name}</div>
                        <div style={{ fontSize: "0.7rem", color: member.highlight === "me" ? PUB_PURPLE : member.highlight === "supervisor" ? "#B45309" : member.highlight === "leader" ? "#047857" : "#6B7280", fontWeight: 500, marginTop: 1 }}>{member.role}</div>
                      </div>
                      {member.highlight === "supervisor" && <span style={{ fontSize: "0.75rem" }}>🎓</span>}
                      {member.highlight === "leader" && <span style={{ fontSize: "0.75rem" }}>⭐</span>}
                      {member.highlight === "me" && <span style={{ fontSize: "0.75rem" }}>💬</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ── Tech Stack ────────────────────────────────────────────────────────────────

function TechStackSection() {
  return (
    <section id="techstack" style={{ padding: "88px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader number="04" title="Tech Stack" />
        <div className="content-cards" style={{ margin: "0 20px" }}>
          <div className="tech-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: 14 }}>
          {TECH_STACK.map((cat, i) => (
            <FadeUp key={cat.category} delay={i * 0.07}>
              <div style={STRIPE}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: cat.color }} />
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.8rem", color: "#0C0C0C", textTransform: "uppercase", letterSpacing: "0.06em" }}>{cat.category}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {cat.skills.map(s => (
                    <Chip key={s} label={s} size="small"
                      sx={{ background: `${cat.color}10`, color: cat.color, border: `1px solid ${cat.color}22`, fontWeight: 500, fontSize: "0.73rem", "&:hover": { background: `${cat.color}1e` }, transition: "background 0.2s" }} />
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Experience ────────────────────────────────────────────────────────────────

const COMPANY_LOGOS: Record<string, { src: string; bg: string; radius: number; imgH: number; maxW: number }> = {
  "Innomente Pty Ltd":                { src: innomenteLogoImg,    bg: "#0F2B5B", radius: 8, imgH: 28, maxW: 110 },
  "Sample Assist (SA) Pty Ltd":       { src: sampleAssistLogoImg, bg: "#fff",    radius: 8, imgH: 58, maxW: 200 },
  "Metatechno Lanka Company Pty Ltd": { src: metatechnoLogoImg,   bg: "#fff",    radius: 8, imgH: 44, maxW: 160 },
};

function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "88px 0", background: "#F8F9FA" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader number="05" title="Work Experience" />
        <div style={{ margin: "0 20px" }}>
          <div style={{ position: "relative", paddingLeft: 28 }}>
          <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 2, background: "linear-gradient(to bottom, #5B4DFF 0%, rgba(91,77,255,0.06) 100%)", borderRadius: 2 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {EXPERIENCE.map((e, i) => {
              const logoMeta = COMPANY_LOGOS[e.company];
              return (
                <FadeUp key={e.company} delay={i * 0.09}>
                  <div style={{ position: "relative" }}>
                    <div style={{ position: "absolute", left: -31, top: 22, width: 12, height: 12, borderRadius: "50%", background: e.color, border: "2.5px solid #F8F9FA", boxShadow: `0 0 0 2px ${e.color}35` }} />
                    <div style={CARD}>
                      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.98rem", color: "#0C0C0C", margin: "0 0 3px" }}>{e.role}</h3>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                            <span style={{ fontSize: "0.85rem", color: e.color, fontWeight: 600 }}>{e.company}</span>
                            <span style={{ fontSize: "0.72rem", color: "#A1A1AA" }}>· {e.location}</span>
                            {e.type && <Chip label={e.type} size="small" sx={{ fontSize: "0.65rem", height: 18, background: `${e.color}10`, color: e.color, border: `1px solid ${e.color}25` }} />}
                          </div>
                          {e.note && <p style={{ fontSize: "0.75rem", color: "#6B7280", fontStyle: "italic", margin: "4px 0 0" }}>↑ {e.note}</p>}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                          {logoMeta && (
                            <div style={{ background: logoMeta.bg, borderRadius: logoMeta.radius, padding: "5px 10px", border: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", height: logoMeta.imgH + 12 }}>
                              <img src={logoMeta.src} alt={e.company} style={{ height: logoMeta.imgH, maxWidth: logoMeta.maxW, objectFit: "contain", display: "block" }} />
                            </div>
                          )}
                          <div style={{ background: e.color, color: "#fff", fontSize: "0.72rem", fontWeight: 600, padding: "3px 10px", borderRadius: 6, whiteSpace: "nowrap" }}>{e.period}</div>
                        </div>
                      </div>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                        {e.bullets.map((b, j) => (
                          <li key={j} style={{ display: "flex", gap: 10, color: "#52525B", fontSize: "0.855rem", lineHeight: 1.62 }}>
                            <span style={{ color: e.color, flexShrink: 0, marginTop: 4 }}>▸</span>{b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Education ─────────────────────────────────────────────────────────────────

function EducationSection() {
  return (
    <section id="education" style={{ padding: "88px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader number="06" title="Education" />
        <div style={{ margin: "0 20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {EDUCATION.map((e, i) => {
            const eduLogo: Record<string, string> = {
              "Performance Education": performanceEduLogoImg,
              "University of Wollongong (UOW)": uowLogoImg,
              "Sri Lanka Institute of Information Technology (SLIIT)": sliitLogoImg,
              "Ananda College": anandaLogoImg,
            };
            const logo = eduLogo[e.institution];
            return (
            <FadeUp key={e.institution} delay={i * 0.1}>
              <div style={{ ...STRIPE, display: "flex", gap: 18, alignItems: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: 12, background: "#fff", border: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: 6, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", overflow: "hidden" }}>
                  {logo
                    ? <img src={logo} alt={e.institution} style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: (e.institution === "University of Wollongong" || e.institution === "Performance Education") ? "cover" : "contain",
                        objectPosition: (e.institution === "University of Wollongong" || e.institution === "Performance Education") ? "center center" : "center",
                        transform: (e.institution === "University of Wollongong" || e.institution === "Performance Education") ? "scale(1.8)" : "none"
                      }} />
                    : <SchoolIcon sx={{ color: e.color, fontSize: 24 }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#0C0C0C", marginBottom: 4 }}>{e.degree}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    <span style={{ fontSize: "0.83rem", color: e.color, fontWeight: 600 }}>{e.institution}</span>
                    <span style={{ fontSize: "0.78rem", color: "#A1A1AA" }}>· {e.location}</span>
                    <span style={{ fontSize: "0.78rem", color: "#A1A1AA" }}>· {e.period}</span>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "#6B7280", margin: "4px 0 0" }}>{e.result}</p>
                </div>
              </div>
            </FadeUp>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Blog ──────────────────────────────────────────────────────────────────────

function BlogSection() {
  return (
    <section id="blog" style={{ padding: "88px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>

        <div style={{ margin: "0 20px" }}>
          {/* Header row with Medium profile link */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
          <div style={{ flex: 1 }}>
            <SectionHeader number="08" title="Blog" />
          </div>
          <FadeUp delay={0.1}>
            <a href="https://medium.com/@rusira-senath" target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#000", color: "#fff", borderRadius: 10, padding: "9px 18px", fontSize: "0.8rem", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, textDecoration: "none", letterSpacing: "-0.01em", marginTop: -8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
              View all on Medium
            </a>
          </FadeUp>
        </div>

        {/* Article grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {BLOG_POSTS.map((p, i) => (
            <FadeUp key={p.url} delay={i * 0.07}>
              <motion.a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 16, overflow: "hidden", textDecoration: "none", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", height: "100%" }}
              >
                {/* Thumbnail */}
                <div style={{ width: "100%", height: 180, overflow: "hidden", background: "#F3F4F6", flexShrink: 0 }}>
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "16px 20px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ background: `${p.tagColor}15`, color: p.tagColor, border: `1px solid ${p.tagColor}30`, borderRadius: 6, padding: "2px 9px", fontSize: "0.68rem", fontWeight: 700 }}>{p.tag}</span>
                    <span style={{ fontSize: "0.68rem", color: "#A1A1AA" }}>{p.date}</span>
                  </div>
                  <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.93rem", color: "#0C0C0C", marginBottom: 6, lineHeight: 1.4 }}>{p.title}</h3>
                  <p style={{ fontSize: "0.78rem", color: "#6B7280", lineHeight: 1.6, margin: 0, flex: 1 }}>{p.subtitle}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 14, paddingTop: 12, borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#9CA3AF"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                    <span style={{ fontSize: "0.72rem", color: "#9CA3AF" }}>Medium</span>
                    <span style={{ fontSize: "0.72rem", color: "#5B4DFF", fontWeight: 600, marginLeft: "auto" }}>Read article →</span>
                  </div>
                </div>
              </motion.a>
            </FadeUp>
          ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ── Honors ────────────────────────────────────────────────────────────────────

function HonorsSection() {
  return (
    <section id="honors" style={{ padding: "88px 0", background: "linear-gradient(to bottom, #F8F9FA 0%, #FFFFFF 100%)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader number="09" title="Honors & Awards" />

        <div style={{ margin: "0 20px" }}>
          {/* Row 1 — two big image cards with dramatic presentation */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginBottom: 22 }}>

          {/* Sample Assist — Intern of the Year */}
          <FadeUp delay={0}>
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              style={{ background: "#fff", borderRadius: 24, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", height: "100%" }}
            >
              <div style={{ position: "relative", height: 340, overflow: "hidden", background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", flexShrink: 0 }}>
                <img src={sampleAssistCert} alt="Sample Assist Intern of the Year Certificate" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", transform: "scale(1.02)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.35) 100%)" }} />
                <div style={{ position: "absolute", top: 16, left: 16, background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)", color: "#fff", borderRadius: 8, padding: "5px 14px", fontSize: "0.72rem", fontWeight: 800, boxShadow: "0 4px 12px rgba(245,158,11,0.4)", display: "flex", alignItems: "center", gap: 6 }}>
                  <EmojiEventsIcon sx={{ fontSize: 16 }} />
                  With Distinction
                </div>
              </div>
              <div style={{ padding: "22px 26px 26px", flex: 1 }}>
                <div style={{ fontSize: "0.68rem", color: "#F59E0B", fontWeight: 800, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 6 }}>Sample Assist (SA) Pty Ltd · Dec 2024</div>
                <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.15rem", color: "#0C0C0C", margin: "0 0 10px", lineHeight: 1.25 }}>Intern of the Year 2024</h3>
                <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>Recognised for outstanding dedication and rapid skill development — significant contributions to the Collection Manager Mobile project and PDF capabilities, awarded with distinction by CEO Heath Cooper.</p>
              </div>
            </motion.div>
          </FadeUp>

          {/* IFS Discovery Winner */}
          <FadeUp delay={0.1}>
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              style={{ background: "#fff", borderRadius: 24, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", height: "100%" }}
            >
              <div style={{ position: "relative", height: 340, overflow: "hidden", background: "linear-gradient(135deg, #5B21B6 0%, #4C1D95 100%)", flexShrink: 0 }}>
                <img src={ifsWinnerCard} alt="IFS Discovery Winner" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transform: "scale(1.02)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4) 100%)" }} />
                <div style={{ position: "absolute", top: 16, left: 16, background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)", color: "#fff", borderRadius: 8, padding: "5px 14px", fontSize: "0.72rem", fontWeight: 800, boxShadow: "0 4px 12px rgba(124,58,237,0.5)", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: "1rem" }}>🥇</span>
                  Winner
                </div>
              </div>
              <div style={{ padding: "22px 26px 26px", flex: 1 }}>
                <div style={{ fontSize: "0.68rem", color: "#7C3AED", fontWeight: 800, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 6 }}>IFS Sri Lanka · Discover IFS #MakeYourMoment · 2023</div>
                <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.15rem", color: "#0C0C0C", margin: "0 0 10px", lineHeight: 1.25 }}>IFS Discovery Challenge — Winner</h3>
                <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>Won the IFS Discovery Challenge with the proposal "Reimagining Mobile Solutions for Enterprises" — a competitive global engineering innovation challenge hosted by IFS Sri Lanka.</p>
              </div>
            </motion.div>
          </FadeUp>

        </div>

        {/* Row 2 — SLIIT cert images with dramatic presentation */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginBottom: 22 }}>

          {/* Treasure Hunt Certificate */}
          <FadeUp delay={0.15}>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              style={{ background: "#fff", borderRadius: 24, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", height: "100%" }}
            >
              <div style={{ position: "relative", height: 320, overflow: "hidden", background: "linear-gradient(135deg, #064E3B 0%, #022C22 100%)", flexShrink: 0 }}>
                <img src={treasureHuntCert} alt="Treasure Hunt Certificate of Achievement" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transform: "scale(1.02)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.35) 100%)" }} />
                <div style={{ position: "absolute", top: 16, left: 16, background: "linear-gradient(135deg, #059669 0%, #047857 100%)", color: "#fff", borderRadius: 8, padding: "5px 14px", fontSize: "0.7rem", fontWeight: 800, boxShadow: "0 4px 12px rgba(5,150,105,0.4)", display: "flex", alignItems: "center", gap: 6 }}>
                  <EmojiEventsIcon sx={{ fontSize: 14 }} />
                  Winners
                </div>
              </div>
              <div style={{ padding: "20px 24px 24px", flex: 1 }}>
                <div style={{ fontSize: "0.68rem", color: "#059669", fontWeight: 800, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 5 }}>SLIIT Gaming Community · Jan 7, 2019</div>
                <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.05rem", color: "#0C0C0C", margin: "0 0 8px", lineHeight: 1.3 }}>Treasure Hunt Competition — Winners</h3>
                <p style={{ fontSize: "0.81rem", color: "#6B7280", lineHeight: 1.65, margin: 0 }}>Certificate of Achievement awarded by R-Factory for becoming winners at the Treasure Hunt Competition conducted at SLIIT Gaming {"Community's"} Freshers Meetup 2019.</p>
              </div>
            </motion.div>
          </FadeUp>

          {/* SLIIT Merit Award Certificate */}
          <FadeUp delay={0.2}>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              style={{ background: "#fff", borderRadius: 24, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", height: "100%" }}
            >
              <div style={{ position: "relative", height: 320, overflow: "hidden", background: "linear-gradient(135deg, #F5F0E8 0%, #E5DDD0 100%)", flexShrink: 0 }}>
                <img src={meritAwardCert} alt="SLIIT Merit Award Certificate" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transform: "scale(1.02)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3) 100%)" }} />
                <div style={{ position: "absolute", top: 16, left: 16, background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)", color: "#fff", borderRadius: 8, padding: "5px 14px", fontSize: "0.7rem", fontWeight: 800, boxShadow: "0 4px 12px rgba(37,99,235,0.4)", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: "0.95rem" }}>🥈</span>
                  Merit Award
                </div>
              </div>
              <div style={{ padding: "20px 24px 24px", flex: 1 }}>
                <div style={{ fontSize: "0.68rem", color: "#2563EB", fontWeight: 800, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 5 }}>SLIIT · Dec 14, 2018</div>
                <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.05rem", color: "#0C0C0C", margin: "0 0 8px", lineHeight: 1.3 }}>Merit Award — Games Development Competition</h3>
                <p style={{ fontSize: "0.81rem", color: "#6B7280", lineHeight: 1.65, margin: 0 }}>Merit Award Winner as team member of Innovators 3 — SLIIT Games Development Competition at the BootStrap Programme, awarded by Sri Lanka Institute of Information Technology.</p>
              </div>
            </motion.div>
          </FadeUp>

        </div>

        {/* Row 3 — Ananda College (dramatic crest + text, full width) */}
        <FadeUp delay={0.25}>
          <motion.div
            whileHover={{ y: -8, scale: 1.008 }}
            transition={{ duration: 0.35 }}
            style={{ 
              background: "linear-gradient(135deg, #FFF9F5 0%, #FFFCFA 100%)", 
              borderRadius: 28, 
              overflow: "hidden", 
              boxShadow: "0 16px 48px rgba(181, 83, 9, 0.22), 0 4px 16px rgba(0,0,0,0.08)", 
              border: "2px solid rgba(181, 83, 9, 0.15)", 
              display: "flex",
              position: "relative"
            }}
          >
            {/* Decorative accent stripe */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #B45309 0%, #D97706 50%, #B45309 100%)" }} />
            
            <div style={{ width: 200, flexShrink: 0, background: "linear-gradient(160deg, #7B1E1E 0%, #5C1212 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 28px", position: "relative", overflow: "hidden" }}>
              {/* Enhanced decorative background pattern */}
              <div style={{ position: "absolute", inset: 0, opacity: 0.12, backgroundImage: "radial-gradient(circle at 20% 50%, transparent 0%, rgba(255,255,255,0.4) 100%)" }} />
              <div style={{ position: "absolute", width: 300, height: 300, background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)", top: -100, left: -100 }} />
              <img src={anandaCrest} alt="Ananda College Crest" style={{ width: 130, height: 130, objectFit: "contain", position: "relative", zIndex: 1, filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.3))" }} />
            </div>
            
            <div style={{ padding: "36px 40px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <SchoolIcon sx={{ fontSize: 18, color: "#B45309" }} />
                <div style={{ fontSize: "0.72rem", color: "#B45309", fontWeight: 800, textTransform: "uppercase" as const, letterSpacing: "0.14em" }}>Ananda College Annual Prize Giving · 2017</div>
              </div>
              <h3 style={{ 
                fontFamily: '"Plus Jakarta Sans", sans-serif', 
                fontWeight: 800, 
                fontSize: "1.45rem", 
                color: "#0C0C0C", 
                margin: "0 0 14px", 
                lineHeight: 1.25,
                background: "linear-gradient(135deg, #B45309 0%, #D97706 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>IT Subject Prize — Commerce Section</h3>
              <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.75, margin: 0, maxWidth: 720, fontWeight: 500 }}>
                Honored with the <strong>Information and Communication Technology (ICT) Subject Prize</strong> for achieving the highest marks in all three terms in both Grade 12 and Grade 13 at Ananda College, Colombo — one of Sri Lanka's most prestigious Buddhist schools with a rich history dating back to 1886. This remains one of my proudest achievements.
              </p>
            </div>
          </motion.div>
        </FadeUp>
        </div>

      </div>
    </section>
  );
}

// ── Memberships ───────────────────────────────────────────────────────────────

function MembershipsSection() {
  return (
    <section id="memberships" style={{ padding: "88px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader number="10" title="Memberships" />
        <div style={{ margin: "0 20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {MEMBERSHIPS.map((m, i) => (
            <FadeUp key={m.org} delay={i * 0.1}>
              <div style={{ ...STRIPE, display: "flex", gap: 18, alignItems: "flex-start" }}>
                <div style={{ width: 56, height: 56, borderRadius: 12, background: "#fff", border: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: 6, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", overflow: "hidden" }}>
                  <SchoolIcon sx={{ color: "#5B4DFF", fontSize: 24 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#0C0C0C", marginBottom: 4 }}>{m.org}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 16 }}>
                    <span style={{ fontSize: "0.83rem", color: "#5B4DFF", fontWeight: 600 }}>{m.role}</span>
                    <span style={{ fontSize: "0.78rem", color: "#A1A1AA" }}>· since {m.since}</span>
                  </div>
                  <div style={{ ...CARD, padding: 0, overflow: "hidden", maxWidth: 400 }}>
                    <img 
                      src={m.certImage} 
                      alt={`${m.org} Membership Certificate`}
                      style={{ width: "100%", display: "block" }}
                    />
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Certifications ────────────────────────────────────────────────────────────

function CertificationsSection() {
  return (
    <section id="certifications" style={{ padding: "88px 0", background: "#F8F9FA" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader number="11" title="Certifications" />
        <div style={{ margin: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {CERTIFICATIONS.map((c, i) => (
            <FadeUp key={c.name} delay={i * 0.1}>
              <div style={{ ...CARD, display: "flex", flexDirection: "column", gap: 12, transition: "all 0.2s ease", cursor: "default" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: c.logoColor, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: `0 4px 12px ${c.logoColor}33` }}>
                    <span style={{ color: "#fff", fontWeight: 900, fontSize: c.logo === "Forage" ? "0.6rem" : "0.7rem", fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{c.logo}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.85rem", color: "#0C0C0C", marginBottom: 3, lineHeight: 1.3 }}>{c.name}</h3>
                    <div style={{ fontSize: "0.73rem", color: "#A1A1AA" }}>Completed {c.completed}</div>
                  </div>
                </div>
                <div style={{ padding: 0, overflow: "hidden", borderRadius: 8, border: "1px solid rgba(0,0,0,0.06)" }}>
                  <img 
                    src={c.certImage} 
                    alt={`${c.name} Certificate`}
                    style={{ width: "100%", display: "block" }}
                  />
                </div>
                {c.credentialUrl && (
                  <a 
                    href={c.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: 6, 
                      padding: "8px 16px", 
                      background: "#5B4DFF", 
                      color: "#fff", 
                      borderRadius: 6, 
                      fontSize: "0.8rem", 
                      fontWeight: 600, 
                      textDecoration: "none",
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      transition: "background 0.2s ease",
                      alignSelf: "flex-start"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#4A3EDD"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "#5B4DFF"}
                  >
                    View Credential
                    <OpenInNewIcon style={{ fontSize: "0.9rem" }} />
                  </a>
                )}
              </div>
            </FadeUp>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Fun Facts ─────────────────────────────────────────────────────────────────

// FunFactsSection moved to FunFactsSection.tsx

// ── Audio Player Component ────────────────────────────────────────────────────
// Component for playing music demo tracks

function AudioPlayer({ 
  title, 
  artist, 
  audioSrc, 
  color, 
  gradient,
  delay = 0 
}: { 
  title: string; 
  artist: string; 
  audioSrc: string; 
  color: string; 
  gradient: string;
  delay?: number;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - bounds.left) / bounds.width;
      audioRef.current.currentTime = percent * duration;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -4 }}
      style={{
        position: "relative",
        background: `linear-gradient(135deg, rgba(17,17,27,0.95) 0%, rgba(17,17,27,0.85) 100%)`,
        borderRadius: 20,
        padding: 24,
        boxShadow: `0 12px 32px ${color}30`,
        border: `2px solid ${color}40`,
        overflow: "hidden"
      }}
    >
      {/* Background Gradient Glow */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: gradient,
        opacity: isPlaying ? 1 : 0.5,
        transition: "opacity 0.3s ease"
      }} />

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      {/* Track Info */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: "1.3rem",
          fontWeight: 800,
          color: "#fff",
          margin: "0 0 6px 0",
          letterSpacing: "0.01em"
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: "0.95rem",
          color: "rgba(255,255,255,0.6)",
          margin: 0,
          fontWeight: 500
        }}>
          {artist}
        </p>
      </div>

      {/* Progress Bar */}
      <div 
        onClick={handleSeek}
        style={{
          width: "100%",
          height: 8,
          background: "rgba(255,255,255,0.1)",
          borderRadius: 8,
          cursor: "pointer",
          marginBottom: 16,
          position: "relative",
          overflow: "hidden"
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          style={{
            height: "100%",
            background: gradient,
            borderRadius: 8,
            position: "relative"
          }}
        >
          {/* Progress Indicator */}
          <div style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: 16,
            height: 16,
            background: "#fff",
            borderRadius: "50%",
            boxShadow: `0 2px 8px ${color}60`,
            opacity: isPlaying ? 1 : 0,
            transition: "opacity 0.3s ease"
          }} />
        </motion.div>
      </div>

      {/* Controls */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        {/* Play/Pause Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: gradient,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 6px 20px ${color}50`,
            transition: "all 0.3s ease"
          }}
        >
          {isPlaying ? (
            <div style={{
              width: 16,
              height: 16,
              display: "flex",
              gap: 4,
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div style={{ width: 4, height: 16, background: "#fff", borderRadius: 2 }} />
              <div style={{ width: 4, height: 16, background: "#fff", borderRadius: 2 }} />
            </div>
          ) : (
            <div style={{
              width: 0,
              height: 0,
              borderLeft: "12px solid #fff",
              borderTop: "8px solid transparent",
              borderBottom: "8px solid transparent",
              marginLeft: 3
            }} />
          )}
        </motion.button>

        {/* Time Display */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.7)",
          fontWeight: 600
        }}>
          <span>{formatTime(currentTime)}</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Waveform Animation (when playing) */}
      {isPlaying && (
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 3,
          padding: "0 24px 12px",
          pointerEvents: "none",
          opacity: 0.15
        }}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                height: ["20%", "80%", "30%", "70%", "20%"]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.05,
                ease: "easeInOut"
              }}
              style={{
                width: 3,
                background: gradient,
                borderRadius: 2,
                minHeight: "20%"
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ── Contact (Coffee Chat) ────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section id="contact" style={{ 
      padding: "70px 0 80px", 
      background: "linear-gradient(135deg, #5D4037 0%, #3E2723 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Coffee Steam Animation Background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03,
        pointerEvents: "none"
      }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-100, -400],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut"
            }}
            style={{
              position: "absolute",
              left: `${20 + i * 15}%`,
              bottom: 0,
              width: 60,
              height: 100,
              background: "radial-gradient(ellipse, #fff 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(20px)"
            }}
          />
        ))}
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>
        {/* Coffee Chat Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
            padding: "16px 32px",
            borderRadius: 20,
            marginBottom: 24,
            border: "2px solid rgba(255,255,255,0.12)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.3)"
          }}>
            <span style={{ fontSize: "2rem" }}>☕</span>
            <div>
              <h2 style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "1.8rem",
                fontWeight: 900,
                color: "#fff",
                margin: 0,
                letterSpacing: "0.01em",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)"
              }}>
                Let's Grab a Coffee Chat
              </h2>
            </div>
          </div>

          <p style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.8,
            maxWidth: 700,
            margin: "0 auto",
            textShadow: "0 1px 3px rgba(0,0,0,0.2)"
          }}>
            Open to new opportunities across Australia: on-site, hybrid, or fully remote. 
            <br />
            Contract projects, full-time roles, or collaborations in mobile development, 
            full-stack engineering, or SaaS products.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <FadeUp>
          <div style={{
            background: "rgba(255,255,255,0.98)",
            borderRadius: 24,
            padding: "40px 44px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.5)"
          }}>
            {/* Main Title */}
            <h3 style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: "1.4rem",
              fontWeight: 800,
              color: "#3D2817",
              margin: "0 0 12px 0",
              textAlign: "center"
            }}>
              Get in Touch
            </h3>
            
            <p style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.9rem",
              color: "#8B7355",
              textAlign: "center",
              marginBottom: 36,
              lineHeight: 1.6
            }}>
              I'd love to hear from you! Feel free to reach out through any of these channels.
            </p>

            {/* Contact Grid */}
            <div className="contact-grid" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginBottom: 36
            }}>
              {[
                { 
                  icon: <EmailIcon sx={{ fontSize: 22 }} />, 
                  label: "Email", 
                  text: "rusira.senath@gmail.com", 
                  href: "mailto:rusira.senath@gmail.com",
                  color: "#EA4335"
                },
                { 
                  icon: <PhoneIcon sx={{ fontSize: 22 }} />, 
                  label: "Mobile", 
                  text: "0418 549 596", 
                  href: "tel:+61418549596",
                  color: "#34A853"
                },
                { 
                  icon: <LinkedInIcon sx={{ fontSize: 22 }} />, 
                  label: "LinkedIn", 
                  text: "rusira-senath-liyanage", 
                  href: "https://linkedin.com/in/rusira-senath-liyanage",
                  color: "#0A66C2"
                },
                { 
                  icon: <GitHubIcon sx={{ fontSize: 22 }} />, 
                  label: "GitHub", 
                  text: "RusiraLiyanage", 
                  href: "https://github.com/RusiraLiyanage",
                  color: "#181717"
                },
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    padding: "22px 20px",
                    background: "linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%)",
                    borderRadius: 16,
                    textDecoration: "none",
                    border: "2px solid #E5E5E5",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = contact.color;
                    e.currentTarget.style.boxShadow = `0 8px 24px ${contact.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E5E5E5";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: `${contact.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: contact.color,
                    marginBottom: 4
                  }}>
                    {contact.icon}
                  </div>

                  {/* Label */}
                  <div style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    color: "#9CA3AF",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em"
                  }}>
                    {contact.label}
                  </div>

                  {/* Text */}
                  <div style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#1F2937",
                    lineHeight: 1.4
                  }}>
                    {contact.text}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div style={{
              height: 1,
              background: "linear-gradient(90deg, transparent, #E5E5E5 50%, transparent)",
              margin: "40px 0"
            }} />

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ textAlign: "center" }}
            >
              <Button 
                variant="contained" 
                size="large"
                startIcon={<Download size={20} />} 
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  py: 1.5,
                  px: 3.5,
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #3D2817 0%, #2D1B0E 100%)",
                  boxShadow: "0 8px 24px rgba(61, 40, 23, 0.4)",
                  "&:hover": { 
                    background: "linear-gradient(135deg, #2D1B0E 0%, #1F120A 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 32px rgba(61, 40, 23, 0.5)"
                  },
                  transition: "all 0.3s ease"
                }}
              >
                Download My Resume
              </Button>
            </motion.div>
          </div>
        </FadeUp>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            textAlign: "center",
            marginTop: 36,
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.9rem",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.7)",
            textShadow: "0 1px 3px rgba(0,0,0,0.2)"
          }}
        >
          "The best conversations happen over coffee." ☕✨
        </motion.div>
      </div>
    </section>
  );
}

// ── Scroll Arrow ──────────────────────────────────────────────────────────────

function ScrollArrow() {
  const [atBottom, setAtBottom] = useState(false);
  useEffect(() => {
    const h = () => { const { scrollTop, scrollHeight, clientHeight } = document.documentElement; setAtBottom(scrollTop + clientHeight >= scrollHeight - 120); };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
      onClick={() => atBottom ? window.scrollTo({ top: 0, behavior: "smooth" }) : window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })}
      style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50, width: 42, height: 42, borderRadius: 12, background: "#5B4DFF", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: "0 4px 16px rgba(91,77,255,0.35)", transition: "background 0.2s" }}>
      {atBottom ? <KeyboardArrowUpIcon sx={{ fontSize: 19 }} /> : <KeyboardArrowDownIcon sx={{ fontSize: 19 }} />}
    </motion.button>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App(props?: any) {
  const active = useScrollSpy();
  
  // Filter out Figma-specific props to avoid warnings
  const cleanProps = props ? Object.fromEntries(
    Object.entries(props).filter(([key]) => !key.startsWith('data-fg'))
  ) : {};
  
  return (
    <ThemeProvider theme={muiTheme}>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes swing {
          0%   { transform: rotate(-2.5deg); }
          50%  { transform: rotate(2.5deg); }
          100% { transform: rotate(-2.5deg); }
        }
        @keyframes pulse-dot {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.85); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes float-profile {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes drift1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(-20px,15px) scale(1.05); }
          66% { transform: translate(10px,-10px) scale(0.97); }
        }
        @keyframes drift2 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(15px,-20px); }
        }
        @keyframes drift3 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-10px,15px); }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #fff; }
        ::-webkit-scrollbar-thumb { background: rgba(91,77,255,0.25); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(91,77,255,0.5); }
        * { box-sizing: border-box; }
        
        /* Mobile Portrait Responsive Styles */
        @media (max-width: 767px) {
          .hidden.md\\:block { display: none !important; }
          .hidden.md\\:grid { display: none !important; }
          .hidden.md\\:flex { display: none !important; }
          
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 80px 20px 40px !important;
          }
          
          .hero-profile-container {
            display: block !important;
            order: -1 !important;
            max-width: 280px !important;
            margin: 0 auto !important;
            padding: 0 !important;
          }
          
          .hero-profile-container > div {
            width: 100% !important;
          }
          
          section {
            padding: 48px 0 !important;
          }
          
          .section-container {
            padding: 0 16px !important;
          }
          
          .content-cards {
            margin: 0 8px !important;
          }
          
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          .tech-grid {
            grid-template-columns: 1fr !important;
          }
          
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          
          .MuiDialog-paper {
            margin: 16px !important;
            max-width: calc(100% - 32px) !important;
          }
          
          /* Honors & Awards grid */
          section#honors div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          
          /* Any 2-column grids in sections */
          section div[style*='gridTemplateColumns: "1fr 1fr"'],
          section div[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          /* Adjust modal/feature sections */
          section div[style*="position: sticky"] {
            position: relative !important;
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (min-width: 768px) {
          .hidden.md\\:block { display: block !important; }
          .hidden.md\\:grid { display: grid !important; }
          .hidden.md\\:flex { display: flex !important; }
        }
        
        @media (min-width: 768px) and (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 320px !important;
            gap: 40px !important;
          }
          
          section {
            padding: 64px 0 !important;
          }
        }
      `}</style>

      <Toaster position="top-right" />
      <div {...cleanProps} style={{ background: "#fff", minHeight: "100vh" }}>
        <Navbar active={active} />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <PublicationsSection />
          <TechStackSection />
          <ExperienceSection />
          <EducationSection />
          <CaseStudiesSection />
          <BlogSection />
          <HonorsSection />
          <MembershipsSection />
          <CertificationsSection />
          <FunFactsSection />
          <ContactSection />
        </main>
        <footer style={{ background: "#F8F9FA", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "28px 28px", textAlign: "center" }}>
          <p style={{ fontFamily: '"Inter", sans-serif', color: "#A1A1AA", fontSize: "0.78rem", margin: 0 }}>
            © {new Date().getFullYear()} Rusira Senath Liyanage · Built with React & Material UI ·{" "}
            <span style={{ color: "#5B4DFF" }}>Wollongong, NSW, Australia</span>
          </p>
        </footer>
      </div>
      <ScrollArrow />
    </ThemeProvider>
  );
}
