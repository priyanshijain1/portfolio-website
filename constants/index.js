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
    icon: "/assets/icons/leetcode_logo.png",
    iconBg: "#FFFBE6",
    date: "Sep 2023 - Present",
    points: [
      "Solved 700+ Data Structures and Algorithms problems across various platforms.",
      "Achieved the Knight badge on LeetCode with a peak rating of 1855, ranking in the top 6% globally among competitive programmers.",
      "Secured a Global Rank of 179 in CodeChef Starters 236 out of thousands of participants."
    ],
  },
  {
    title: "Mentorship",
    company_name: "Codess.Cafe",
    icon: "/assets/icons/codesscafe_logo.jpg",
    iconBg: "#FFFBE6",
    date: "2024 - Present",
    points: [
      "Selected as a mentee for the Codess.Cafe mentorship program from a pool of 2000+ applicants across India.",
      "Engaged in weekly mentorship and peer-learning sessions focused on DSA, development, career growth, and interview preparation.",
      "Collaborated with a community of aspiring women engineers through networking events, technical discussions, and accountability groups.",
      "Enhanced consistency in competitive programming and project building through structured mentorship and community-driven learning initiatives."
    ],
  },
  {
    title: "Google WE Scholar",
    company_name: "Google and TalentSprint",
    icon: "/assets/icons/image.png",
    iconBg: "#FFFBE6",
    date: "2024 - 2026",
    points: [
      "Selected among 22,000+ applicants for the prestigious Women Engineers (WE) Program supported by Google.",
      "Completed 100+ hours of intensive technical learning, mentorship, and problem-solving sessions in DSA and software development.",
      "Collaborated with a peer network of 200+ women engineers across India through hackathons, mentoring circles, and community activities.",
      "Strengthened problem-solving skills by consistently practicing coding challenges on platforms like LeetCode and Codeforces during the program."
    ],
  },
  {
    title: "Programming Mentor",
    company_name: "The Programming Club, IIIT Jabalpur",
    icon: "/assets/icons/tpc logo.png",
    iconBg: "#FFFBE6",
    date: "2024 - 2025",
    points: [
      "Mentored 20+ juniors in programming, algorithms, and web development fundamentals.",
      "Organised workshops on Data Structures, Algorithms, and Web Development, benefiting 100+ students.",
      "Provided one-on-one mentoring sessions to students struggling with programming concepts.",
    ],
  },
  {
    title: "Student Guide",
    company_name: "Counselling Committee, IIIT Jabalpur",
    icon: "/assets/icons/IIITDM-Jabalpur.png",
    iconBg: "#FFFBE6",
    date: "2024 - 2025",
    points: [
      "Mentored 10+ juniors in academics and career planning as a Student Guide at IIIT Jabalpur.",
      "Organised peer engagement sessions, fostering a supportive community for new students.",
      "Received positive feedback for guidance and support provided to mentees."
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
    image: "/assets/projects/mythinkspire.png",
    source_code_link: "https://github.com/priyanshijain1/Thinkspire",
    deployed_link: "https://thinkspire.vercel.app/",
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
    source_code_link: "https://github.com/priyanshijain1/InternHub",
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
    image: "/assets/projects/pennywise.png",
    source_code_link: "https://github.com/priyanshijain1/PennyWise",
    deployed_link: "https://pennywise-u38o.onrender.com/",
  },
  {
    name: "StarBoard",
    description:
      "Interactive dashboard with animated galaxy background and modular widgets",
    tags: [
      { name: "HTML5", color: "blue-text-gradient" },
      { name: "VanillaJS", color: "green-text-gradient" },
      { name: "Spotify Web API", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/mystarboard.png",
    source_code_link: "https://github.com/priyanshijain1/Starboard",
    deployed_link: "#",
  },
  {
    name: "ProdectiveNow",
    description:
      "Developed ProductiveNow using React.js, integrating features like a habit tracker, health chart generator, and mood-based music player system to improve daily productivity and wellness.",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "AntDesign", color: "green-text-gradient" }
    ],
    image: "/assets/projects/productivenow.png",
    source_code_link: "https://gitlab.com/catalyst8283034/automation_productivity",
    deployed_link: "#",
  },
  {
    name: "GameShippers",
    description:
      "Developed Gameshippers, a Python-Pygame based game suite featuring strategy games like Battleship, Othello, and Latrunculi with interactive UI and game logic implementation.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "pygame", color: "green-text-gradient" },
    ],
    image: "/assets/projects/gameshippers.png",
    source_code_link: "https://gitlab.com/sahayak1/gameplay",
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
