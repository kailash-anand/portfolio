import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  dotnet,
  csharp,
  nodejs,
  mongodb,
  git,
  docker,
  sbu,
  scope,
  adani,
  carrent,
  tripguide,
  fakestackoverflow,
  c,
  java,
  python,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Systems Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
  {
    title: "Web & Offensive Security",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "dotnet",
    icon: dotnet,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Development Intern",
    companyName: "Scope IT Consultations",
    icon: scope,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Built and deployed custom web applications using Appian, a low-code process automation platform, streamlining business workflows.",
      "Designed interactive user interfaces with Appian’s SAIL framework, ensuring responsiveness and cross-device compatibility.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Development Intern",
    companyName: "Adani Electricity",
    icon: adani,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Refactored and migrated SOAP-based ASPX web services to RESTful APIs using ASP.NET Core.",
      "Reduced API response time by 30%, ensuring secure data operations.",
      "Optimized API request handling and response serialization, improving throughput and reducing latency",
      "Implemented secure authentication and access control mechanisms, ensuring data protection and compliance.",
    ],
  },
  {
    title: "Teaching Assistant",
    companyName: "Stony Brook University",
    icon: sbu,
    iconBg: "#383E56",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Provided tutoring in OOP, Data Structures, and Logic, improving students’ grades.",
      "Provided one-on-one support in programming concepts, helping students build a strong foundation in software development.",
      "Developed quizzes and coding assignments to assess student understanding and reinforce key concepts.",
      "Encouraged collaborative learning through peer programming sessions and group discussions.",
    ],
  },
  {
    title: "Research Assistant",
    companyName: "Stony Brook University",
    icon: sbu,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Contributing to the development of an IoT runtime by integrating features from Arduino, MicroPython, ESPHome, and Tasmota into a unified system.",
      "Implementing bug fixes and developing missing features to enhance system stability and functionality.",
      "Assisting in porting the runtime to various microcontroller platforms, including RP2040, STM32, and nRF5340.",
      "Collaborating on documentation and example applications for the upcoming v1.0 release.",
    ],
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Fake Stack Overflow",
    description:
      "Developed a website like Stack Overflow using React and MongoDB, enabling user profiles and CRUD operations. Ensured secure passwords with bcrypt and implemented responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: fakestackoverflow,
    sourceCodeLink: "https://github.com/sbu-ckane-s24-cse316-pa04org/pa04-butter-chicken.git",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
