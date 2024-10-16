import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

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
    image: project1,
    description:
      "A fully functional full stack inventory & expense tracking webapp with features like product listing, inventory tracking, expense tracking, vehicle management and user authentication.",
    technologies: ["HTML", "CSS", "Tailwind", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Weather App",
    image: project4,
    description:
      "A platform for Dynamic weather updates by the name of the location using API.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Nayapati, Gokarneshwar, Kathmandu",
  phoneNo: "+977 9848063688",
  email: "raiarik97@gmail.com",
};
