import { Icons } from "@/components/ui/icons";
import { FileTextIcon, HomeIcon } from "lucide-react";

import type { LucideIcon } from "lucide-react";

type NavbarItem = {
  href: string;
  icon: LucideIcon;
  label: string;
  external?: boolean;
};

export const RESUME_URL =
  "https://drive.google.com/file/d/1MF4JrkcrRMN3n7caqwvY0-27jQsbUNrg/view?usp=sharing";

export const DATA = {
  name: "Shubham Sinha",
  // initials: "DV",
  url: "https://dillion.io",

  resume: {
    label: "Resume",
    url: RESUME_URL,
  },
  // location: "",
  // locationLink: "",
  description:
    "AI/ML Engineer building production-grade LLM systems, conversational AI, and automation platforms used by real businesses.",
  summary:
    "I build AI-powered products that actually ship. Over the past 2+ years, I’ve worked across LLM systems, conversational AI, and full-stack engineering—taking ideas from early prototypes to production-ready platforms. My work includes large-scale WhatsApp automation for enterprise clients, LLM-driven chat systems, and AI media pipelines for video generation. I enjoy working at the intersection of product, engineering, and applied AI—designing systems that are scalable, reliable, and easy to integrate into real business workflows.",

  avatarUrl: "informal.jpg",

  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "React Native",
        "React Native Reanimated 3.0",
        "Tailwind CSS",
        "Chakra UI",
        "shadcn/ui",
        "Radix UI",
        "Magic UI",
        "MUI",
      ],
    },
    {
      category: "Backend & APIs",
      items: [
        "Node.js",
        "REST APIs",
        "GraphQL",
        "Express.js",
        "FastAPI",
        "Vercel AI SDK",
        "Postman",
      ],
    },
    {
      category: "Databases & ORMs",
      items: ["PostgreSQL", "NeonDB", "Prisma"],
    },
    {
      category: "Cloud & DevOps",
      items: ["Docker", "AWS S3", "Vercel", "Linux", "CI/CD Basics"],
    },
    {
      category: "AI / LLM Systems",
      items: [
        "Python",
        "LangChain",
        "Agent & Workflow Orchestration (LangChain, LangGraph, CrewAI, n8n)",
      ],
    },
    {
      category: "Data & Analytics",
      items: ["Power BI"],
    },
    // {
    //   category: "Blockchain (Working Knowledge)",
    //   items: ["Solidity", "Vyper", "Etherium", "Smart Contracts"],
    // },
    {
      category: "Tools",
      items: [
        "Git & GitHub",
        "VS Code",
        "Vim",
        "Google Colab",
        "Postman",
        "Figma",
        "Github Copilot",
        "Cursor AI",
      ],
    },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    {
      href: RESUME_URL,
      icon: FileTextIcon,
      label: "Resume",
      external: true,
    },
  ] satisfies readonly NavbarItem[],

  contact: {
    email: "shubhamsinha07084@gmail.com",
    // tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shubhamsinha21",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shubham-sinha-39b9b2209/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Shubham04244881",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Dave AI",
      href: "https://www.iamdave.ai/",
      badges: [],
      location: "Bangalore, India (Remote)",
      title: "AI / ML Solution Architect",
      logoUrl: "daveai_logo.jpeg",
      start: "Feb 2025",
      end: "Nov 2025",
      description: [
        "Built and scaled WhatsApp-based conversational AI systems used by enterprise automotive clients for pre-sales and post-sales workflows.",
        "Designed AI conversation logic on Gryd, enabling multilingual customer journeys, dealer onboarding, and campaign automation.",
        "Integrated Airtel WhatsApp APIs for reliable message delivery, trigger-based campaigns, and system-level automation.",
        "Worked closely with product and AI teams to align LLM behavior with real-world business constraints.",
        "Improved system reliability by debugging payloads, optimizing flow triggers, and maintaining integration documentation.",
      ],
    },
    {
      company: "Dave AI",
      badges: [],
      href: "https://www.iamdave.ai/",
      location: "Bangalore, India (Remote)",
      title: "Machine Learning Engineer",
      logoUrl: "daveai_logo.jpeg",
      start: "Nov 2024",
      end: "Feb 2025",
      description: [
        "Developed AI-driven video generation pipelines including talking-head synthesis, lip-sync enhancement, and face masking.",
        "Built backend APIs for real-time video generation and synchronization across internal tools.",
        "Benchmarked video generation tools (D-ID vs Retalk) and improved lip-sync quality through fine-tuning and evaluation.",
        "Prepared production-ready pipelines with clear documentation for reuse across teams.",
      ],
    },
    {
      company: "Dave AI",
      badges: [],
      href: "https://www.iamdave.ai/",
      location: "Bangalore, India (Remote)",
      title: "Machine Learning Intern",
      logoUrl: "daveai_logo.jpeg",
      start: "Jul 2024",
      end: "Nov 2024",
      description: [
        "Assisted in building AI-driven video generation pipelines including avatar synthesis and lip-sync workflows.",
        "Supported benchmarking and evaluation of video generation tools (D-ID vs Retalk).",
        "Wrote Python scripts in Google Colab for experimentation, evaluation, and quality analysis.",
        "Learned production AI workflows, documentation practices, and pipeline deployment processes.",
      ],
    },
    {
      company: "Codeate",
      href: "https://www.codeate.in/",
      badges: [],
      location: "Hyderabad, India (Remote)",
      title: "React Native Developer",
      logoUrl: "codeate.jpeg",
      start: "Nov 2023",
      end: "Apr 2024",
      description: [
        "Developed production-ready mobile application interfaces using React Native and Tailwind CSS.",
        "Implemented reusable UI components, state management, and API integrations for real-world app features.",
        "Collaborated across design and development to ship features from concept to production.",
      ],
    },
    {
      company: "Zauvijek",
      href: "https://www.zauvijek.com/",
      badges: [],
      location: "Patna, India (Onsite)",
      title: "Software Engineer Intern",
      logoUrl: "zauvijek.jpeg",
      start: "Feb 2023",
      end: "Jun 2023",
      description: [
        "Designed and developed responsive web interfaces using React.js and Next.js for the company website and internal business platforms.",
        "Implemented reusable, component-driven frontend architecture to improve maintainability and development speed.",
        "Optimized page load performance and cross-device responsiveness using modern frontend best practices.",
        "Collaborated with designers and backend teams to translate requirements into clean, production-ready UI components.",
      ],
    },
    {
      company: "Fintech and Blockchain Association",
      href: "https://www.estfab.com/",
      badges: [],
      location: "USA (Remote)",
      title: "Data Science Intern",
      logoUrl: "fab.jpeg",
      start: "May 2022",
      end: "Aug 2022",
      description: [
        "Performed data cleaning, processing, and visualization for data-driven decision making.",
      ],
    },
  ],

  // education: [
  //   {
  //     school: "Amity University",
  //     // href: "https://amity.edu",
  //     degree: "BTECH CSE ( CGPA - 8.7/10 )",
  //     logoUrl: "amity.jpeg",
  //     start: "2019",
  //     end: "2023",
  //   },
  // ],
  projects: [
    // {
    //   title: "Podscrybe",
    //   href: "https://github.com/shubhamsinha21/podscrybe",
    //   active: true,
    //   description:
    //     "AI-Powered Podcast Pipeline that transforms raw podcast audio into clean transcripts, chapters, show notes, and summaries. Users can upload audio and instantly get organized content with chapter markers, titles, and concise summaries for easy consumption and publishing.",
    //   technologies: [
    //     "Next.js",
    //     "React.js",
    //     "Typescript",
    //     "Shadcn UI",
    //     "TailwindCSS",
    //     "Radix UI",
    //     "Clerk Auth",
    //     "AssemblyAI",
    //     "Groq SDK",
    //     "Convex DB",
    //     "Vercel Blob",
    //     "Inngest",
    //     "Vs Code",
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/shubhamsinha21/podscrybe",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/projects/podscrybe.png",
    // },
    {
      title: "Spur Support",
      href: "https://github.com/shubhamsinha21/spur",
      active: true,
      description:
        "An AI-powered customer support system that simulates real-time chat for e-commerce platforms. It handles end-to-end LLM conversations with session persistence, typing indicators, suggested prompts, and a production-ready backend. Designed to feel like a real human support agent while remaining scalable and cost-efficient.",

      technologies: [
        "React.js",
        "Vite",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "Redis",
        "OpenAI GPT-4o-mini",
        "Render",
        "Vercel",
        "LLM Integration - openAI GPT-4o-mini",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/spur",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/spur.png",
    },
    {
      title: "CodeSpecto",
      href: "https://github.com/shubhamsinha21/CodeSpecto",
      active: true,
      description:
        "An AI-driven code analysis assistant that helps developers debug, optimize, review, and secure codebases. It delivers structured, actionable feedback through an interactive interface, making advanced code analysis accessible during development.",

      technologies: ["Python", "Gemini-API", "Streamlit", "Langchain"],
      links: [
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/CodeSpecto",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/codespecto.png",
    },
    {
      title: "Reddit Mastermind",
      href: "https://github.com/shubhamsinha21/the-reddit-mastermind",
      active: true,
      description:
        "An automation platform for planning and executing Reddit content strategies. It generates persona-based posts and comments, simulates human-like engagement, and helps businesses grow organically on Reddit with minimal manual effort.",

      technologies: [
        "Streamlit",
        "Python",
        "Pandas",
        "Openpyxl",
        "python-dotenv",
        "Vs Code",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/the-reddit-mastermind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/reddit-mastermind.png",
    },
    // {
    //   title: "InsightTicker",
    //   href: "https://github.com/shubhamsinha21/insightticker",
    //   active: true,
    //   description:
    //     "a full-stack stocks and financial-insights dashboard built by following a step-by-step YouTube tutorial. The goal is to create a modern, production- ready web application that combines authentication, database integration, real-time stock search, detailed market data, and automated daily news summaries.",
    //   technologies: [
    //     "Next.js",
    //     "React.js",
    //     "TailwindCSS",
    //     "Typescript",
    //     "Radix UI",
    //     "Shadcn UI",
    //     "Lucide Icons",
    //     "Better Auth",
    //     "Nextjs API Routes",
    //     "MongoDB",
    //     "Mongoose",
    //     "Inngest",
    //     "React Hook Form",
    //     "Nodemailer",
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/shubhamsinha21/insightticker",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/projects/insightticker.png",
    // },
    {
      title: "CloudResize",
      href: "https://github.com/shubhamsinha21/CloudResize-SAAS",
      active: true,
      description:
        "CloudResize is a SAAS platform for resizing your image for social media and compressing your uploaded video, see preview, download it. This project is an innovative AI-powered SaaS product built with cutting-edge technologies to streamline content creation and management. It empowers users to upload videos and images and leverage the power of artificial intelligence for various transformations.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma ORM",
        "TailwindCSS",
        "NeonDB",
        "Shadcn UI",
        "Daisy UI",
        "Cloudinary",
        "Clerk Auth",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/CloudResize-SAAS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/cloudresize.png",
    },
    {
      title: "Web Bot",
      href: "https://github.com/shubhamsinha21/WebBot",
      active: true,
      description:
        "Your one-stop shop for navigating the vast sea of web information with ease! This AI-powered assistant leverages cutting-edge technologies to seamlessly answer your questions directly from any website you visit.",
      technologies: [
        "Next.js",
        "Typescript",
        "Middleware",
        "Next UI",
        "TailwindCSS",
        "Dev UI",
        "Shadcn UI",
        "Vercel AI SDK",
        "Upstash Vector",
        "Upstash SDK",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/WebBot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/webbot.png",
    },
    {
      title: "Nike",
      href: "https://github.com/shubhamsinha21/Nike",
      active: true,
      description:
        "A modern e-commerce storefront inspired by Nike’s product ecosystem, featuring product listings, customer testimonials, promotional sections, and a responsive shopping experience. The project focuses on UI/UX consistency, component-driven architecture, and performance-optimized layouts for real-world e-commerce use cases.",
      technologies: [
        "React.js",
        "JavaScript",
        "Css",
        "TailwindCSS",
        "VS Code",
        "Git & GitHub",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/Nike",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/nike.png",
    },
    {
      title: "Casino",
      href: "https://github.com/shubhamsinha21/casino",
      active: true,
      description:
        "A high-end marketing and booking platform built for a luxury casino experience in Goa. The website showcases entertainment offerings, live events, VIP packages, and booking workflows with a strong focus on visual storytelling and user engagement. Designed to reflect a premium brand identity while driving conversions through structured content and clear CTAs.",
      technologies: [
        "React.js",
        "JavaScript",
        "Css",
        "TailwindCSS",
        "VS Code",
        "Git & GitHub",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/casino",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/casino.png",
    },
    {
      title: "AI SEO",
      href: "https://github.com/shubhamsinha21/AI-SEO",
      active: true,
      description:
        "AI SEO is an AI-driven SEO automation platform that helps businesses improve search rankings through intelligent keyword research, content optimization, and SEO analytics. It automates traditionally manual SEO workflows using machine learning models and data-driven insights, making SEO accessible to startups and enterprise teams through a clean, user-friendly dashboard.",
      technologies: [
        "React.js",
        "Next.js",
        "TailwindCSS",
        "VS Code",
        "Git & GitHub",
        "Tailwind-merge",
        "Framer Motion",
        "Typescript",
        "Lottie files",
        "Vercel",
        "VS Code",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/AI-SEO",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/aiseo.png",
    },
    // {
    //   title: "Virtual-R",
    //   href: "https://github.com/shubhamsinha21/virtual-R",
    //   active: true,
    //   description:
    //     "VirtualR is a developer-focused platform for building and managing VR applications using a visual, drag-and-drop workflow. It supports multi-platform deployment, real-time previews, collaboration tools, and built-in analytics to streamline VR development. The platform is designed to accelerate VR prototyping while enabling teams to iterate quickly with AI-assisted tooling.",
    //   technologies: [
    //     "React.js",
    //     "TailwindCSS",
    //     "VS Code",
    //     "Git & GitHub",
    //     "Javascript",
    //     "Vercel",
    //     "VS Code",
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/shubhamsinha21/virtual-R",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/projects/virtualr.png",
    // },
    // {
    //   title: "To-Desktop",
    //   href: "https://github.com/shubhamsinha21/ToDesktop",
    //   active: true,
    //   description:
    //     "ToDesktop is a platform that converts existing web applications into fully functional, cross-platform desktop apps for Windows, macOS, and Linux. It enables developers to bootstrap desktop apps directly from a web URL while providing native features like notifications, tray access, and system integrations. The product focuses on reducing desktop app development complexity while maintaining a polished, native user experience.",
    //   technologies: [
    //     "React.js",
    //     "TailwindCSS",
    //     "VS Code",
    //     "Git & GitHub",
    //     "Javascript",
    //     "Vercel",
    //     "VS Code",
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/shubhamsinha21/ToDesktop",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/projects/todesktop.png",
    // },
  ],
  // hackathons: [
  //   {
  //     title: "Hackxios 2K25",
  //     dates: "November 29th, 2025",
  //     location: "Online",
  //     description:
  //       "EcoLearn India is a web application that gamifies environmental education for Indian schools and colleges. The platform combines interactive lessons, quizzes, challenges, and real world participation, enabling students to learn, act and track their sustainable effort.",
  //     image: "/hackxios.webp",
  //     // links: [
  //     //   {
  //     //     title: "Source",
  //     //     icon: <Icons.github className="h-4 w-4" />,
  //     //     href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //     //   },
  //     // ],
  //   },
  //   // {
  //   //   title: "Portal Hackathon",
  //   //   dates: "October 29, 2016",
  //   //   location: "Kingston, Ontario",
  //   //   description:
  //   //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //   //   image:
  //   //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //   //   links: [
  //   //     {
  //   //       title: "Source",
  //   //       icon: <Icons.github className="h-4 w-4" />,
  //   //       href: "https://github.com/UWPortalSDK/crowmark",
  //   //     },
  //   //   ],
  //   // },
  // ],
} as const;
