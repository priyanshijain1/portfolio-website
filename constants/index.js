import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";
import CompetitiveProgrammerIcon from "./../public/assets/icons/competitive-programmer.svg";
import AiEnthusiastIcon from "./../public/assets/icons/ai-enthusiast.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Competitive Programmer",
    icon: <CompetitiveProgrammerIcon />,
  },
  {
    title: "AI Enthusiast",
    icon: <AiEnthusiastIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    // {
    //   name: "Flutter",
    //   icon: "/assets/tech/flutter.svg",
    //   link: "https://flutter.dev/",
    // },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },

  ],
};

const experiences = [
  {
    title: "Competitive Programming",
    company_name: "LeetCode & CodeChef",
    icon: "/assets/icons/competitive-programmer.svg",
    iconBg: "#FFFBE6",
    date: "Sep 2023 - Present",
    points: [
      "Solved 700+ Data Structures and Algorithms problems across various platforms.",
      "Achieved a peak LeetCode rating of 1830, ranking in the top 7.5% globally.",
      "Secured a Global Rank of 179 in CodeChef Starters 236 out of thousands of participants."
    ],
  },
  {
    title: "Flipkart Runway & Google WE",
    company_name: "Achievements & Scholarships",
    icon: "/assets/icons/ai-enthusiast.svg",
    iconBg: "#FFFBE6",
    date: "2024",
    points: [
      "Emerged as a Semi-finalist in Flipkart Runway, placing in the top 500 out of 40,000+ girls.",
      "Selected for the Women Engineers program by Talentsprint (supported by Google).",
      "Awarded a full scholarship of Rs.1,00,000 for the program."
    ],
  },
  {
    title: "Full-Stack Mentorship",
    company_name: "Codess Cafe & HackByte",
    icon: "/assets/icons/full-stack.svg",
    iconBg: "#FFFBE6",
    date: "2024 - 2026",
    points: [
      "Selected as a mentee at Codess Cafe, engaging with top industry professionals.",
      "Mentored 20+ juniors in programming, algorithms, and web development fundamentals.",
      "Volunteered at HackByte 2.0, assisting in managing an event with 400+ registrations."
    ],
  },
];

const projects = [
  {
    name: "ThinkSpire",
    description:
      "An AI-assisted adaptive problem-solving assistant with 4 teaching modes. Implemented secure JWT auth and a Redis caching layer, reducing database lookups by 60%.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "redis", color: "orange-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/Priyanshi-Jain",
    deployed_link: "#",
  },
  {
    name: "InternHub",
    description:
      "Full-stack platform tracking internships & detecting fraudulent listings. Built an AI pipeline extracting structured data from 300+ emails, reducing manual processing by 70%.",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "sqlite", color: "pink-text-gradient" },
      { name: "gemini api", color: "orange-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/Priyanshi-Jain",
    deployed_link: "#",
  },
  {
    name: "PennyWise",
    description:
      "Expense tracker with JWT authentication. Designed analytics dashboards with date-based filtering and optimized MongoDB queries using indexing.",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "express.js", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/Priyanshi-Jain",
    deployed_link: "#",
  },
  {
    name: "CodeQuest",
    description:
      "A competitive programming practice platform with curated problem sets, difficulty-based filtering, and progress tracking. Features streak tracking and topic-wise performance analytics.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "prisma", color: "orange-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/Priyanshi-Jain",
    deployed_link: "#",
  },
  {
    name: "NoteNest",
    description:
      "A real-time collaborative note-taking app with rich text editing, live cursors, and room-based sharing. Supports markdown, tagging, and version history.",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "socket.io", color: "green-text-gradient" },
      { name: "node.js", color: "orange-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/Priyanshi-Jain",
    deployed_link: "#",
  },
  {
    name: "StyleSense",
    description:
      "An AI-powered outfit recommendation engine that analyzes wardrobe items via image upload and suggests outfits based on occasion, weather, and personal style preferences.",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "gemini api", color: "orange-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/Priyanshi-Jain",
    deployed_link: "#",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/priyanshijain1",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/priyanshi-jain-b3588228b/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "#",
  },
];

const heroTexts = [
  "AI Enthusiast",
  500,
  "Competitive Programmer",
  500,
  "Full-Stack Developer",
  500,
  "Problem Solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  projects,
  socials,
  heroTexts,
};
