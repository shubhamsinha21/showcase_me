import { Icons } from "@/components/ui/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shubham Sinha",
  // initials: "DV",
  url: "https://dillion.io",
  // location: "",
  // locationLink: "",
  description:
    "Full Stack and Machine Learning Engineer turned visionary hustler. I love building things. Very active on LinkedIn.",
  summary:
    "I pursued Computer Science and Engineering and graduated in 2023. Highly Energetic, Passionate, Hardworking Aspiring Enthusiast. Bigger goals want more hardwork. And that's what I look and hustling for. I wish to become the best in whatever i come across during my journey.",
  avatarUrl: "informal.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "AWS S3",
    "Solidity",
    "NeonDB",
    "Prisma",
    "Clerk",
    "TensorFlow",
    "Pytorch",
    "Data Processing",
    "Power BI",
    "Machine Learning",
    "Deep Learning",
    "Neural Networks",
    "Fine Tuning",
    "Blender",
    "Postman API",
    "Linux",
    "Vim Editor",
    "VS Code",
    "Google Colab",
    "FFMPEG",
    "React Native",
    "React Native Animated 3.0",
    "Tailwind",
    "Chakra UI, ShadCn, Magic UI, MUI, Radix UI",
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
      // X: {
      //   name: "X",
      //   url: "",
      //   icon: Icons.x,

      //   navbar: true,
      // },
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
      title: "Machine Learning Engineer",
      logoUrl: "daveai_logo.jpeg",
      start: "Nov 2024",
      end: "Present",
      description:
        "Developing Gryd pipeline for smooth operation of talking head video generation and playing a key role in deployement in production for video generation via APi using postman.",
    },
    {
      company: "Dave AI",
      badges: [],
      href: "https://www.iamdave.ai/",
      location: "Bangalore, India (Remote)",
      title: "Machine Learning Intern",
      logoUrl: "daveai_logo.jpeg",
      start: "July 2024",
      end: "Nov 2024",
      description:
        "Worked in development of Synthesis Pipeline for avatar generation software. Written script for multiple image processing to generate a avatar video. Overlapping it over background video and managing dynamic movement of avatar over it. Worked on fine tuning deep learning neural network model for improving lip sync in Video Retalking Tool. Performed research over various datsets fine tuning. Worked on benchmarking steps for comparison of video generation (D-ID vs Retalk tool). Research on generation of video using D-ID API. Written script in colab and created embeddings and measured scores bet videos. Plotted the difference. Performed MOS by survey. Performing Gryd task, wrote worker script for execution of video generation via gryd and deployment in production.  ",
    },
    {
      company: "React Native Developer",
      href: "https://www.codeate.in/",
      badges: [],
      location: "Hyderabad (Remote)",
      title: "React Native Developer",
      logoUrl: "codeate.jpeg",
      start: "Nov 2023",
      end: "April 2024",
      description:
        "Developed and implemented the user interface for a mobile application using React Native.Contributed to all stages of the development lifecycle, from design to deployment.",
    },
    {
      company: "Zauvijek",
      href: "https://www.zauvijek.com/",
      badges: [],
      location: "Onsite",
      title: "Software Engineer Intern",
      logoUrl: "zauvijek.jpeg",
      start: "Feb 2023",
      end: "Apr 2023",
      description:
        "Built the official website of Zauvijek and enhanced the structure of code following standard rules. Developed the Zauvijek Business Profile following market standard techiques and rules.",
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
      description:
        "Contributed to data-driven decision making by performing data cleaning, processing, and visualization.",
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
      title: "CloudResize",
      href: "https://github.com/shubhamsinha21/CloudResize-SAAS",
      dates: "Aug 2024",
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
        // {
        //   type: "Website",
        //   href: "https://github.com/shubhamsinha21/CloudResize-SAAS",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/CloudResize-SAAS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/user-attachments/assets/8b2ab3b5-1885-453f-a2c9-c9fe00ede112",
    },
    {
      title: "Web Bot",
      href: "https://github.com/shubhamsinha21/WebBot",
      dates: "Aug 2024",
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
        // {
        //   type: "Website",
        //   href: "https://github.com/shubhamsinha21/WebBot",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/shubhamsinha21/WebBot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/user-attachments/assets/bc487078-d282-40ee-83ce-b2f343838450",
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
