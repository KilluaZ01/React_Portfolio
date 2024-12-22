import projectBrickSync from "../assets/projects/project_BrickSync.png";
import projectPersonalPortfolio from "../assets/projects/project_PersonalPortfolio.png";
import BrickSyncDemo from "../assets/projects/BrickSyncDemo.mp4";
import PortfolioDemo from "../assets/projects/PortfolioDemo.mp4";

import certificateJsBasics from "../assets/certificates/certificate_jsBasics.jpg";
import certificateJsIntermediate from "../assets/certificates/certificate_jsIntermediate.jpg";
import certificatePyBasics from "../assets/certificates/certificate_pyBasics.jpg";

export const HERO_CONTENT = `As a web developer specializing in the MERN stack, I focus on creating user-friendly, dynamic applications. Whether it's building a sleek front-end with React or ensuring smooth back-end functionality with Node.js and MongoDB, I strive to craft solutions that meet both business needs and user expectations.`;

export const ABOUT_TEXT1 = `I'm Arik Rai, a web developer with a passion for creating interactive, efficient, and scalable web applications. My expertise lies in using the MERN stack (MongoDB, Express, React, Node.js) to build solutions that are not only visually appealing but also highly functional.`;
export const ABOUT_TEXT2 = `I enjoy learning new technologies, solving problems, and continuously refining my skills. Outside of coding, I like exploring new tools and contributing to open-source projects.`;
export const ABOUT_TEXT3 = `I’m always looking for exciting opportunities to collaborate on impactful projects and expand my knowledge.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Full Stack Developer",
    company: "Texas Imaginology",
    description: `Led a team in developing a mobile application using Flutter, Node.js, and MongoDB. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with students to define project requirements and timelines.`,
    technologies: ["Flutter", "Node.js", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "BrickSync (Inventory & Expense Tracking App)",
    image: projectBrickSync,
    description:
      "A fully functional full-stack inventory & expense tracking web app with features like product listing, inventory tracking, expense tracking, vehicle management, and user authentication.",
    fullDescription:
      "BrickSync is a comprehensive inventory management and expense tracking web application designed specifically for suppliers. It enables users to efficiently manage product stock by listing items, monitoring sales, and logging restocks. The app features low-stock alerts, ensuring timely replenishment of inventory, and provides detailed insights into revenue, expenses, and profit, offering a clear overview of financial performance.\n\nIn addition to inventory management, BrickSync helps track fuel expenses for owned vehicles, maintaining detailed histories of restocking, sales, and refueling activities. To support better decision-making, the app includes robust reporting tools, allowing users to generate charts and summaries of expenses and stock levels in PDF format. With its user-friendly interface and powerful functionality, BrickSync is an essential tool for streamlining supply chain operations and optimizing financial management for suppliers.",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    githubLink: "https://github.com/KilluaZ01/BrickSync.git",
    demoVideo: BrickSyncDemo,
  },
  {
    title: "Personal Portfolio",
    image: projectPersonalPortfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    fullDescription:
      "A personal portfolio website designed to showcase an individual's professional projects, skills, experience, and contact information. The website serves as a digital resume, highlighting the user's expertise and work across various fields such as web development, graphic design, content creation, or any other industry-specific skills. It features a clean, user-friendly layout with sections for presenting completed projects, providing details on technical and soft skills, and offering insight into personal achievements and professional background. The portfolio may also include client testimonials, downloadable resumes, and a contact form or social media links to make it easy for potential employers, collaborators, or clients to get in touch",
    technologies: ["React", "Tailwind"],
    githubLink: "https://github.com/KilluaZ01/React_Portfolio.git",
    demoVideo: PortfolioDemo,
  },
];

export const CERTIFICATE = [
  {
    title: "Learn JavaScript Basics",
    issuer: "Programiz",
    image: certificateJsBasics,
    description:
      "Completed a foundational JavaScript course covering essential topics such as data types, operators, control flow, functions, objects, arrays, and basic error handling.",
    date: "26th August, 2024",
    certificateLink: "https://programiz.pro/certificates/B7B0A8A62F2E",
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
  {
    title: "Learn Python Basics",
    issuer: "Programiz",
    image: certificatePyBasics,
    description:
      "I learned core Python concepts, including variables, data types, control flow, and functions. The course included projects like computing grades and building a rock-paper-scissors game, reinforcing topics such as loops, dictionaries, and modules.",
    date: "19th October, 2024",
    certificateLink: "https://programiz.pro/certificates/D75348A8C855",
  },
];

export const CONTACT = {
  address: "Gokarneshwor, Kathmandu",
  phoneNo: "+977 9848063688",
  email: "raiarik97@gmail.com",
};
