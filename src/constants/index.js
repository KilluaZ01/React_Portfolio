import projectCraigslist1 from "../assets/projects/craigslist/main_photo.png";
import projectCraigslist2 from "../assets/projects/craigslist/photo1.png";
import projectCraigslist3 from "../assets/projects/craigslist/photo2.png";
import projectCraigslist4 from "../assets/projects/craigslist/photo3.png";
import projectCraigslist5 from "../assets/projects/craigslist/photo4.png";
import projectCraigslist6 from "../assets/projects/craigslist/photo5.png";

import projectGame1 from "../assets/projects/chaos/main_photo.png";
import projectGame2 from "../assets/projects/chaos/photo1.png";
import projectGame3 from "../assets/projects/chaos/photo2.png";
import projectGame4 from "../assets/projects/chaos/photo3.png";
import projectGame5 from "../assets/projects/chaos/photo4.png";

import projectBrickSync from "../assets/projects/project_BrickSync.png";
import projectPersonalPortfolio from "../assets/projects/project_PersonalPortfolio.png";
import projectXoraLanding from "../assets/projects/project_XoraLanding.png";

import certificatePyMaster from "../assets/certificates/certificate_pyMaster.png";
import certificateJsIntermediate from "../assets/certificates/certificate_jsIntermediate.jpg";
// import certificateJsBasics from "../assets/certificates/certificate_jsBasics.jpg";
// import certificatePyBasics from "../assets/certificates/certificate_pyBasics.jpg";
// import certificatePyIntermediate from "../assets/certificates/certificate_pyIntermediate.png";

export const HERO_CONTENT = `Python Automation Developer focused on building efficient systems for web scraping, workflow automation, and process optimization. I create practical, scalable solutions that reduce manual effort and solve real-world problems through code.`;

export const HERO_METRICS = [
  {
    value: "9+ months",
    label: "professional experience",
  },
  {
    value: "5+",
    label: "automation & scraping projects",
  },
  {
    value: "Python",
    label: "primary technology",
  },
];

export const ABOUT_TEXT1 = `I'm Arik Rai, a Python Automation Developer with hands-on experience in building efficient automation solutions, web scraping systems, and workflow optimization tools. I specialize in using Python to streamline processes, reduce manual effort, and solve real-world problems.`;

export const ABOUT_TEXT2 = `I have worked on multiple freelance and personal projects involving automation, data extraction, and system design. My work includes building automated ad posting systems, data scraping tools, and game automation scripts, focusing on performance and reliability.`;

export const ABOUT_TEXT3 = `As a recent BIT graduate, I am eager to further enhance my skills through advanced studies and continuously explore new technologies in software development, automation, and data-driven systems.`;

export const ABOUT_PILLARS = [
  {
    title: "Automation-first mindset",
    description:
      "I focus on identifying repetitive tasks and building reliable automation systems to eliminate manual effort.",
  },
  {
    title: "Efficient problem solving",
    description:
      "I design solutions that prioritize performance, scalability, and practical real-world impact over unnecessary complexity.",
  },
  {
    title: "Continuous improvement",
    description:
      "I refine systems iteratively, optimizing workflows, improving reliability, and adapting to new challenges over time.",
  },
];

export const WORK_PRINCIPLES = [
  "Automation workflows designed for reliability and minimal human intervention.",
  "Data extraction and processing systems built with accuracy and efficiency in mind.",
  "Clean, maintainable Python code focused on scalability and real-world usability.",
];

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Python Automation Developer",
    company: "Zukti Tech",
    description: `Developed and maintained Python-based automation solutions for web scraping, ad posting, and workflow optimization. Built scripts using Selenium and ADB to automate repetitive tasks, improving efficiency and reducing manual effort. Worked on Virtual Private Server (VPS), scheduling tasks, and ensuring reliable execution across multiple accounts.`,
    technologies: ["Python", "Selenium", "ADB"],
  },
];

export const PROJECTS = [
  {
    title: "Craigslist Automation Bot (Multi-Account Ad Posting System)",
    pinned: true,
    categories: ["Automation"],
    screenshots: [
      projectCraigslist1,
      projectCraigslist2,
      projectCraigslist3,
      projectCraigslist4,
      projectCraigslist5,
      projectCraigslist6,
    ],
    description:
      "A powerful automation system for managing multi-account Craigslist ad posting, renewal, and campaign scheduling with AI-powered content generation and anti-detection mechanisms.",
    fullDescription:
      "This project is a fully featured Craigslist automation bot designed to streamline large-scale ad posting and management across multiple accounts. It includes a custom-built Tkinter GUI for managing accounts, proxies, campaigns, and scheduling, providing a centralized dashboard for complete control over automation workflows.\n\nThe system supports multi-account handling with proxy binding and session persistence, allowing seamless switching between accounts while maintaining login states using cookies. It automates the entire posting pipeline, including category selection, geo-targeting, dynamic form filling, and image uploads.\n\nTo enhance content quality and uniqueness, the bot integrates AI-based ad rewriting using the DeepSeek API, generating multiple variations of titles and descriptions based on configurable strategies (per account, per post, or shared variants).\n\nAn advanced image processing module modifies uploaded images by resizing, adding pixel noise, and stripping metadata to bypass duplicate detection systems. Additionally, the bot includes CAPTCHA detection hooks and manual/extendable solving support, along with logic to handle phone/email verification scenarios.\n\nThe platform also features an automated ad renewal system that identifies eligible listings based on time thresholds and renews them with configurable delays. Campaign scheduling, logging, and error handling ensure stable long-term operation.\n\nOverall, this project demonstrates expertise in browser automation, anti-detection strategies, API integration, and building scalable automation tools with real-world constraints.",
    technologies: [
      "Python",
      "Selenium",
      "Tkinter",
      "OpenAI SDK (DeepSeek)",
      "JSON",
      "Pillow",
    ],
    githubLink: "https://github.com/KilluaZ01/craigslist_bot",
  },
  {
    title: "Multi-Instance Game Automation Bot",
    pinned: true,
    categories: ["Automation"],
    screenshots: [
      projectGame1,
      projectGame2,
      projectGame3,
      projectGame4,
      projectGame5,
    ],
    description:
      "A scalable multi-instance mobile game automation system built for mobile devices, enabling parallel execution of ADB commands, automated workflows, and high-performance botting across 100+ devices.",
    fullDescription:
      "The Multi-Instance Game Automation Bot is a high-performance automation framework designed to control and manage hundreds of devices simultaneously. Built using a modular architecture, the system replaces traditional local emulator integration, allowing asynchronous and synchronous execution of ADB commands across multiple instances.\n\nThe bot supports large-scale automation workflows such as account creation, in-game task execution, reward claiming, and scripted interactions, all executed in parallel across instances. A custom action engine handles core operations like tapping, swiping, text input, and app launching, while a workflow engine processes structured step sequences to automate complex game logic.\n\nTo ensure flexibility and scalability, the system is designed with reusable components, allowing rapid adaptation to different games by modifying workflows and templates without changing the core logic. The integration of threaded execution and batch processing ensures efficient resource utilization, making it capable of handling over 100 devices concurrently.\n\nThis project demonstrates advanced automation techniques, API integration, multi-threading, and scalable system design, making it a powerful solution for large-scale mobile automation tasks.",
    technologies: ["Python", "ADB", "Threading", "OpenCV"],
    githubLink: "https://github.com/KilluaZ01/Chaos-Zero-Nightmare-v2",
  },
  {
    title: "BrickSync (Inventory & Expense Tracking App)",
    pinned: true,
    categories: ["Full Stack"],
    screenshots: [projectBrickSync, projectXoraLanding],
    description:
      "A fully functional full-stack inventory & expense tracking web app with features like product listing, inventory tracking, expense tracking, vehicle management, and user authentication.",
    fullDescription:
      "BrickSync is a comprehensive inventory management and expense tracking web application designed specifically for suppliers. It enables users to efficiently manage product stock by listing items, monitoring sales, and logging restocks. The app features low-stock alerts, ensuring timely replenishment of inventory, and provides detailed insights into revenue, expenses, and profit, offering a clear overview of financial performance.\n\nIn addition to inventory management, BrickSync helps track fuel expenses for owned vehicles, maintaining detailed histories of restocking, sales, and refueling activities. To support better decision-making, the app includes robust reporting tools, allowing users to generate charts and summaries of expenses and stock levels in PDF format. With its user-friendly interface and powerful functionality, BrickSync is an essential tool for streamlining supply chain operations and optimizing financial management for suppliers.",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    githubLink: "https://github.com/KilluaZ01/BrickSync.git",
  },
  {
    title: "Personal Portfolio",
    pinned: false,
    categories: ["React"],
    screenshots: [projectPersonalPortfolio, projectBrickSync],
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    fullDescription:
      "A personal portfolio website designed to showcase an individual's professional projects, skills, experience, and contact information. The website serves as a digital resume, highlighting the user's expertise and work across various fields such as web development, graphic design, content creation, or any other industry-specific skills. It features a clean, user-friendly layout with sections for presenting completed projects, providing details on technical and soft skills, and offering insight into personal achievements and professional background. The portfolio may also include client testimonials, downloadable resumes, and a contact form or social media links to make it easy for potential employers, collaborators, or clients to get in touch",
    technologies: ["React", "Tailwind"],
    githubLink: "https://github.com/KilluaZ01/React_Portfolio.git",
  },
  {
    title: "Xora Landing Page",
    pinned: false,
    categories: ["React"],
    screenshots: [projectXoraLanding, projectPersonalPortfolio],
    description:
      "Xora is a modern SaaS website with a sleek design, smooth animations, and intuitive navigation, built using React.js and Tailwind CSS.",
    fullDescription:
      "Xora is a modern SaaS website designed with React.js and Tailwind CSS. It features a clean, responsive design, smooth animations, and easy navigation for an excellent user experience. The site includes key sections like a hero, features, pricing, FAQ, testimonials, and a software download area. Built for speed and performance, Xora serves as a great reference for creating beautiful and functional web applications. Its reusable and well-structured code makes it ideal for developers, especially those just starting out.",
    technologies: ["React", "Tailwind"],
    githubLink: "https://github.com/KilluaZ01/React_Xora",
  },
];

export const CERTIFICATE = [
  {
    title: "Become a Python Master",
    issuer: "Programiz",
    image: certificatePyMaster,
    description:
      "Completed a comprehensive Python certification covering fundamental to intermediate concepts, including data structures, control flow, functions, and object-oriented programming. Built multiple hands-on projects such as games and utility tools, and solved numerous interview-style problems to strengthen problem-solving abilities and write efficient, Pythonic code.",
    date: "12th February, 2025",
    certificateLink: "https://programiz.pro/certificates/E889C307D67B",
  },
  {
    title: "Learn JavaScript Intermediate",
    issuer: "Programiz",
    image: certificateJsIntermediate,
    description:
      "This course covered advanced JavaScript concepts such as truthy and falsy values, ternary operators, recursion, and asynchronous programming (Fetch API, promises, async/await). I also worked with JSON, explored variable scope, and hoisting. A project on fetching and displaying movie data helped solidify these concepts.",
    date: "30th August, 2024",
    certificateLink: "https://programiz.pro/certificates/A9656AC427E6",
  },
  // {
  //   title: "Learn Python Basics",
  //   issuer: "Programiz",
  //   image: certificatePyBasics,
  //   description:
  //     "I learned core Python concepts, including variables, data types, control flow, and functions. The course included projects like computing grades and building a rock-paper-scissors game, reinforcing topics such as loops, dictionaries, and modules.",
  //   date: "19th October, 2024",
  //   certificateLink: "https://programiz.pro/certificates/D75348A8C855",
  // },
  // {
  //   title: "Learn Python Intermediate",
  //   issuer: "Programiz",
  //   image: certificatePyIntermediate,
  //   description:
  //     "I advanced my Python skills by learning intermediate concepts such as writing Pythonic code using comprehensions, lambdas, and recursion, and mastering function arguments. I gained a deeper understanding of object-oriented programming, including classes, objects, inheritance, and practical OOP examples. The course also covered essential topics like exception handling, file and directory management, and creating modules and packages. Finally, I applied these concepts in hands-on projects, such as developing Rock, Paper, Scissors, Tic-Tac-Toe, and a QR Code Generator, reinforcing my understanding and preparing me for more complex Python applications.",
  //   date: "11th November, 2024",
  //   certificateLink: "https://programiz.pro/certificates/3EAD938A45F3",
  // },
];

export const CONTACT = {
  address: "Gokarneshwor, Kathmandu",
  phoneNo: "+977 9848063688",
  email: "info@arikrai.com.np",
};

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arik-rai-648b5b250",
  },
  {
    label: "GitHub",
    href: "https://github.com/KilluaZ01",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/arik_raii/",
  },
];
