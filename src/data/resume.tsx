import { Icons } from "@/components/ui/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shubham Sinha",
  // initials: "DV",
  url: "https://dillion.io",
  // location: "",
  // locationLink: "",
  description:
    "AI Solution Architect with experience across AI architecture, machine learning engineering, and automation workflows",
  summary:
    "I’m an AI Solution Architect with hands-on experience designing and building production-grade AI systems. Over the past two years, I’ve worked across AI architecture, machine learning engineering, and automation, delivering real-world solutions such as large-scale WhatsApp automation and image-to-video generation pipelines. My focus is on building scalable, reliable AI products by combining applied machine learning, full-stack engineering, and API-driven system design.",
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
        "Middleware Development",
        "API Integration",
        "Postman",
        "Authentication & Authorization",
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
      category: "AI / Machine Learning",
      items: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Fine-Tuning LLMs",
        "TensorFlow",
        "PyTorch",
        "Model Evaluation & Benchmarking",
      ],
    },
    {
      category: "AI Agents Frameworks",
      items: [
        "AI Agents",
        "LangChain",
        "AutoGPT",
        "N8N",
        "CrewAI",
        "LangGraph",
      ],
    },
    {
      category: "Data & Analytics",
      items: ["Power BI"],
    },
    {
      category: "Blockchain (Working Knowledge)",
      items: ["Solidity", "Vyper", "Etherium", "Smart Contracts"],
    },
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
  ],
  contact: {
    email: "shubhamsinha07084@gmail.com.com",
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
      end: "Present",
      description: [
        "Designing conversational AI flows on Gryd for large-scale WhatsApp interactions across enterprise clients.",
        "Integrating and maintaining Airtel WhatsApp APIs for message handling and automated campaigns.",
        "Developing logic for dealership onboarding and multilingual campaign flows for pre- and post-sales journeys.",
        "Collaborating with AI/product teams to align LLM capabilities with automotivebusiness needs.",
        "Debugging API payloads, improving trigger reliability, and maintaining integration documentation.",
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
        "Built Gryd pipelines for AI-driven video generation (talking-head synthesis, lip-sync, and masking).",
        "Developed APIs for real-time video synchronization and internal tool integration.",
        "Handled deployment and production readiness of video generation workflows.",
        "Created clear documentation for setup, parameters, and pipeline integration.",
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
        "Supported avatar generation pipelines using image processing and video overlay scripting.",
        "Improved lip-sync accuracy via fine-tuning and benchmarking models (D-ID vs Retalk).",
        "Wrote evaluation scripts in Google Colab, generated embeddings, and measured similarity scores.",
        "Conducted MOS-based evaluations to assess video generation quality.",
        "Automated video generation tasks via Gryd worker scripts for production pipelines.",
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
        "Built mobile application UIs using React Native and Tailwind CSS.",
        "Contributed across the full app lifecycle including design, development, and deployment.",
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
        "Developed and optimized the company website using React.js and Next.js.",
        "Built scalable, responsive frontend components following best practices.",
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

  education: [
    {
      school: "Amity University",
      // href: "https://amity.edu",
      degree: "BTECH CSE ( CGPA - 8.7/10 )",
      logoUrl: "amity.jpeg",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Podscrybe",
      href: "https://github.com/shubhamsinha21/podscrybe",
      active: true,
      description:
        "AI-Powered Podcast Pipeline that transforms raw podcast audio into clean transcripts, chapters, show notes, and summaries. Users can upload audio and instantly get organized content with chapter markers, titles, and concise summaries for easy consumption and publishing.",
      technologies: [
        "Next.js",
        "React.js",
        "Typescript",
        "Shadcn UI",
        "TailwindCSS",
        "Radix UI",
        "Clerk Auth",
        "AssemblyAI",
        "Groq SDK",
        "Convex DB",
        "Vercel Blob",
        "Inngest",
        "Vs Code",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/podscrybe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/podscrybe.png",
    },
    {
      title: "Spur Support",
      href: "https://github.com/shubhamsinha21/spur",
      active: true,
      description: "A mini AI support agent simulating a live chat widget for e-commerce using React, Node.js, PostgreSQL, Redis, and OpenAI GPT-4o-mini. Features include end-to-end AI conversation, session persistence, typing indicators, suggested questions for quick start, and a modern responsive UI. Fully deployed with backend on Render and frontend on Vercel.",
      technologies: [
        "React.js",
        "Vite" ,
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
      title: "Reddit Mastermind",
      href: "https://github.com/shubhamsinha21/reddit-mastermind",
      active: true,
      description:
        "An automated Reddit content calendar generator built with Python and Streamlit. It helps businesses plan posts, generate persona-driven comments, and simulate human-like Reddit interactions to boost engagement, upvotes, and inbound leads—reducing manual effort and streamlining Reddit growth.",
      technologies: [
        "Streamlit",
        "Python",
        "Pandas",
        "Openpyxl",
        "python-dotenv",
        "Vs Code"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/reddit-mastermind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/reddit-mastermind.png",
    },
    {
      title: "InsightTicker",
      href: "https://github.com/shubhamsinha21/insightticker",
      active: true,
      description:
        "a full-stack stocks and financial-insights dashboard built by following a step-by-step YouTube tutorial. The goal is to create a modern, production- ready web application that combines authentication, database integration, real-time stock search, detailed market data, and automated daily news summaries.",
      technologies: [
        "Next.js",
        "React.js",
        "TailwindCSS",
        "Typescript",
        "Radix UI",
        "Shadcn UI",
        "Lucide Icons",
        "Better Auth",
        "Nextjs API Routes",
        "MongoDB",
        "Mongoose",
        "Inngest",
        "React Hook Form",
        "Nodemailer",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/insightticker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/insightticker.png",
    },
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
    {
      title: "Virtual-R",
      href: "https://github.com/shubhamsinha21/virtual-R",
      active: true,
      description:
        "VirtualR is a developer-focused platform for building and managing VR applications using a visual, drag-and-drop workflow. It supports multi-platform deployment, real-time previews, collaboration tools, and built-in analytics to streamline VR development. The platform is designed to accelerate VR prototyping while enabling teams to iterate quickly with AI-assisted tooling.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "VS Code",
        "Git & GitHub",
        "Javascript",
        "Vercel",
        "VS Code",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/virtual-R",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/virtualr.png",
    },
    {
      title: "To-Desktop",
      href: "https://github.com/shubhamsinha21/ToDesktop",
      active: true,
      description:
        "ToDesktop is a platform that converts existing web applications into fully functional, cross-platform desktop apps for Windows, macOS, and Linux. It enables developers to bootstrap desktop apps directly from a web URL while providing native features like notifications, tray access, and system integrations. The product focuses on reducing desktop app development complexity while maintaining a polished, native user experience.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "VS Code",
        "Git & GitHub",
        "Javascript",
        "Vercel",
        "VS Code",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/ToDesktop",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/todesktop.png",
    },
  ],
  hackathons: [
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
