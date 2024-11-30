import { Icons } from "@/components/icons";
import { File, HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Piyush Saini",
  initials: "PS",
  url: "https://dillion.io",
  location: "New Delhi, IN",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    `Nerd today, Boss Tomorrow`,
  summary: `A Full-Stack Developer based in Delhi. 
    I always aim for the best code quality and experience.
    Alwats excited about using new tech and AI in my projects.`,
  avatarUrl: "/pfp.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Web Sockets",
    "Postgres",
    "Shadcn",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {

      GitHub: {
        name: "GitHub",
        url: "https://github.com/piyushhsainii",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/piyush-saini-b860ab1bb/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/piyushsainii",
        icon: Icons.x,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://docs.google.com/document/d/1y92PQrGmzxSmFmlDuKUD9WmvbwS1MNHiSWu_91BNej8/edit?tab=t.0",
        icon: Icons.googleDrive,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Vexio",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer ( Remote ) ",
      logoUrl: "https://cdn.vexio.in/vlogo.jpeg?w=48&q=75",
      start: "1 Aug 2024",
      end: "1 Oct 2024",

    },
    {
      company: "Freelancing",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full stack Engineer ",
      logoUrl: "https://avatars.githubusercontent.com/u/134310734?v=4",
      start: "1 Oct 2024",
      end: "",

    },
  ],
  education: [
    {
      school: "BCIIT",
      href: "#",
      degree: "Bachelors in Computer Applications (BCA)",
      logoUrl: "http://www.ipu.ac.in/style/head_foot_img/220px-usemGuru_Gobind_Singh_Indraprastha_University12.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Pixel Brew AI ",
      href: "https://pixelbrew-ai.vercel.app/",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        `Launching soon! - Pixel Perfect Thumbnails, Brewed by AI. This Saas model lets you generate you your own customm images with the help of PixelBrew AI`,
      technologies: [
        "React",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "NodeJS",
      ],
      links: [
        {
          type: "Website",
          href: "https://pixelbrew-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dzow59kgu/video/upload/v1729867943/pixelbrew_landingPage_ybdppe.mp4",
    },
    // {
    //   title: "Horsepower Cartel",
    //   href: "https://horsepower-cartel.vercel.app/",
    //   dates: "Oct 2024 - Present",
    //   active: true,
    //   description:
    //     `Introducing Horsepower Cartel 🚀  Where Luxury Meets Innovation 🙌`,
    //   technologies: [
    //     "Next JS",
    //     "MongoDB",
    //     "Vercel",
    //     "Shadcn",
    //     "Prisma",
    //     "Aceternity",
    //     "Docker",
    //     "Redis",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://ai-thumbnail.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/piyushhsainii/horsepower-cartel",
    //       icon: <Icons.github className="size-3" />,

    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://res.cloudinary.com/dzow59kgu/video/upload/v1729869096/horsecartel_landingpgae_mpnfeg.mp4",
    // },
  ],
  hackathons: [
    {
      title: "Open Source Contribution in 100xdevs Chess Project",
      dates: "Apr 19 2024",
      location: "",
      description:
        "Added a feature to let the user see the valid moves on the board when they are moving ",
      image:
        "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Checkout PR",
          href: "https://github.com/code100x/chess/pull/36"
        },

      ],
    },
  ]
} as const;
