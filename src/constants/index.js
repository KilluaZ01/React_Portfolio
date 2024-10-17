import projectBrickSync from "../assets/projects/project_BrickSync.png";
import projectPersonalPortfolio from "../assets/projects/project_PersonalPortfolio.png";

import certificateJsBasics from "../assets/certificates/certificate_jsBasics.jpg";
import certificateJsIntermediate from "../assets/certificates/certificate_jsIntermediate.jpg";

export const HERO_CONTENT = `As a web developer specializing in the MERN stack, I focus on creating user-friendly, dynamic applications. Whether it's building a sleek front-end with React or ensuring smooth back-end functionality with Node.js and MongoDB, I strive to craft solutions that meet both business needs and user expectations.`;

export const ABOUT_TEXT1 = `I'm Arik Rai, a web developer with a passion for creating interactive, efficient, and scalable web applications. My expertise lies in using the MERN stack (MongoDB, Express, React, Node.js) to build solutions that are not only visually appealing but also highly functional.`;
export const ABOUT_TEXT2 = `I enjoy learning new technologies, solving problems, and continuously refining my skills. Outside of coding, I like exploring new tools and contributing to open-source projects`;
export const ABOUT_TEXT3 = `I’m always looking for exciting opportunities to collaborate on impactful projects and expand my knowledge.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Full Stack Developer",
    company: "Texas Imaginology",
    description: `Led a team in developing a mobile application using Flutter, Node.js and MongoDB. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with students to define project requirements and timelines.`,
    technologies: ["Flutter", "Node.js", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "BrickSync (Inventory & Expense Tracking App)",
    image: projectBrickSync,
    description:
      "A fully functional full stack inventory & expense tracking webapp with features like product listing, inventory tracking, expense tracking, vehicle management and user authentication.",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    githubLink: "https://github.com/KilluaZ01/BrickSync.git",
  },
  {
    title: "Personal Portfolio",
    image: projectPersonalPortfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind"],
    githubLink: "https://github.com/KilluaZ01/React_Portfolio.git",
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
  },
  {
    title: "Learn JavaScript Intermediate",
    issuer: "Programiz",
    image: certificateJsIntermediate,
    description:
      "This course covered advanced JavaScript concepts such as truthy and falsy values, ternary operators, recursion, and asynchronous programming (Fetch API, promises, async/await). I also worked with JSON, explored variable scope, and hoisting. A project on fetching and displaying movie data helped solidify these concepts.",
    date: "30th August, 2024",
  },
];

export const CONTACT = {
  address: "Nayapati, Gokarneshwar, Kathmandu",
  phoneNo: "+977 9848063688",
  email: "raiarik97@gmail.com",
};
