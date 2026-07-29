export type Project = {
  slug: string;
  name: string;
  description: string;
  overview: string;
  role: string;
  technologies: string[];
  features: string[];
  github: string;
  live: string;
  image: string;
};

export const site = {
  name: "Akshat Mehra",
  role: "AI & Full Stack Developer",
  location: "Palampur, Himachal Pradesh, India",
  email: "mehrakshu@gmail.com",
  phone: "9805508996",
  linkedin: "https://www.linkedin.com/in/akshat-mehra-b505a9256",
  github: "https://github.com/akshu5688",
  portfolio: "", // fill later
  summary:
    "BCA student building production-ready AI-powered web apps and full-stack SaaS products. Experienced with React, Next.js, Supabase, and modern development workflows using Cursor AI. Focused on clean UI, scalable architecture, and shipping real startup products.",
};

export const about = {
  education: "Bachelor of Computer Applications (BCA)",
  college: "Dronacharya PG College, Rait",
  university: "", // fill later
  graduation: "2026",
  focus: [
    "AI-powered web applications",
    "Full-stack & SaaS products",
    "API integrations & database design",
    "Modern, responsive UI development",
  ],
};

export const experience = [
  {
    company: "Acharya Ventures",
    role: "AI Developer",
    duration: "Nov 2025",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
      "Railway",
      "Cursor AI",
    ],
    highlights: [
      "Developed production-ready web applications with React and Next.js.",
      "Built responsive user interfaces and integrated Supabase Authentication.",
      "Worked with PostgreSQL databases and developed backend APIs.",
      "Built AI-powered workflows and automation; integrated third-party APIs.",
      "Collaborated on performance improvements and deployed apps on Vercel and Railway.",
    ],
  },
  {
    company: "Startup911",
    role: "AI Developer",
    duration: "Aug 2025",
    technologies: ["React", "Next.js", "Tailwind CSS", "SEO", "Cursor AI"],
    highlights: [
      "Developed modern landing pages and improved website SEO.",
      "Built responsive user interfaces and frontend improvements.",
      "Created AI-assisted development workflows.",
      "Optimized website performance for a startup ecosystem platform.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "eera-os",
    name: "EERA OS",
    description:
      "An AI-powered business operating system designed to streamline business workflows, user management, authentication, and operational processes.",
    overview:
      "EERA OS is a full-stack business operating system focused on authentication, dashboards, CRM, AI-assisted workflows, and day-to-day operational tools. Built as a production-oriented product with modern web architecture.",
    role: "Full Stack Developer",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    features: [
      "Authentication",
      "Dashboard",
      "CRM",
      "AI Features",
      "Workflow Automation",
      "Responsive Design",
    ],
    github: "", // fill later
    live: "https://www.eera-os.com/",
    image: "/projects/eera-os-project.png",
  },
  {
    slug: "startup911",
    name: "Startup911",
    description:
      "A startup ecosystem platform connecting founders with grants, incubators, accelerators, and startup resources.",
    overview:
      "Startup911 helps founders discover grants, incubators, accelerators, and ecosystem resources. Work focused on modern landing pages, SEO, responsive UI, and AI-assisted development workflows.",
    role: "Frontend & AI Developer",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    features: [
      "Landing Pages",
      "SEO Optimization",
      "Responsive Design",
      "Modern UI",
    ],
    github: "", // fill later
    live: "https://www.startup911.in/",
    image: "/projects/startup911-project.png",
  },
  {
    slug: "travel-mantra",
    name: "Travel Mantra Website",
    description:
      "Designed and developed modern travel landing pages with improved UI, responsiveness, and performance.",
    overview:
      "Travel Mantra is a travel-focused web experience with mobile-first landing pages, clearer visual hierarchy, and performance-minded frontend work using Next.js and Tailwind CSS.",
    role: "Frontend Developer",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Responsive Design",
      "Mobile First",
      "Landing Pages",
      "Performance Optimization",
    ],
    github: "", // fill later
    live: "https://travel-mantra-final-rc6o.vercel.app/",
    image: "/projects/travel-mantra-project.png",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const skills = {
  "Programming Languages": [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "SQL",
  ],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design"],
  Backend: ["Node.js", "REST APIs"],
  Databases: ["PostgreSQL", "Supabase"],
  "AI & Tools": [
    "Cursor AI",
    "Antigravity",
    "Claude AI",
    "Flow",
    "Lovable",
    "Grok AI",
  ],
  "Version Control": ["Git", "GitHub"],
  Deployment: ["Vercel"],
  "Development Tools": ["Cursor", "Postman"],
};

export const languages = ["English", "Hindi"];

export const interests = [
  "Artificial Intelligence",
  "Full Stack Development",
  "SaaS Products",
  "UI/UX Design",
  "Problem Solving",
  "Cloud Technologies",
];

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];
