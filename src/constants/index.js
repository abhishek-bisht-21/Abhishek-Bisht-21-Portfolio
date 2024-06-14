import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a dedicated full-stack developer with a focus on creating reliable and scalable web applications. Over the past 2 years, I've gained valuable experience working with front-end technologies such as React and Next.js, and back-end technologies including Node.js, Express, and databases like MySQL, PostgreSQL, and MongoDB.`;

export const ABOUT_TEXT = `
Hi there! I'm Abhishek Bisht. I graduated in 2022 with a degree in Computer Science from DIT University and am currently working as a Software Developer in Test (SDET) at SOTI. In my role, I design and develop automation scripts for comprehensive user journeys, utilizing tools like Playwright, Appium, and C#. 
My journey in tech started with an internship at Lenovo, where I developed new features to enhance user experiences using Angular. I'm deeply interested in problem-solving, building scalable backend systems, and exploring the vast possibilities of Web 3.0.I’m currently working on my Problem Solving along with building scalable WebApps. I’m looking to collaborate on free-lance projects and love to contribute to open source projects.  Talk to me about Software Engineering, problem-solving, and building Scalable Backend Systems.
 `;

export const EXPERIENCES = [
  {
    year: "July 2022 - Present",
    role: "Software Developer",
    company: "SOTI Inc.",
    description: `Developed, maintained, and scaled a robust UI automation framework utilizing C#, enhancing testing efficiency and 
reliability. 
Working on design and implementation of a comprehensive Automation framework for UI starting from the ground up.
Leveraged Playwright Web Driver for web automation and harnessed Appium for mobile automation, all within the .NET 
framework. `,
    technologies: ["Playwright", "Appium", ".NET", "C#"],
  },

  {
    year: "Feb 2022 - july 2022",
    role: "Software Engineer Intern",
    company: "Lenovo",
    description: `Contributed to the development of web applications using JavaScript, Angular.js, and Node.js. Refactored unit tests for microservices, achieving 90% threshold coverage using code coverage tools. . Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["NodeJS", "ExpressJS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "ShopKart E-Commerce Website",
    image: project1,
    description:
      "Shop Kart is a front-end e-commerce application built using HTML, CSS, and Vanilla JavaScript. It utilizes the FakeStore API to fetch product data, Axios for making API calls, DOM APIs for manipulation, and Bootstrap for styling and UI components.",
    technologies: ["HTML", "CSS", "Axios", "Bootstrap"],
    link:"https://github.com/abhishek-bisht-21/E-Commerce-App"
  },
  {
    title: "Codeial Social Media App",
    image: project2,
    description:"Codeial is a social networking platform built using Node.js, Express.js, MongoDB, and other web technologies. It allows users to register, create posts, comment on posts, add friends, and engage in various social interactions. A dynamic social media platform for tech enthusiasts. Users can register, connect, and explore a world of knowledge sharing while engaging with captivating posts, comments, and real-time chats",
    technologies: ["HTML", "EJS", "ExpressJS","NodeJS","MongoDB", "Redis"],
    link: "https://github.com/abhishek-bisht-21/Codeial"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer-Motion"],
    link: "https://github.com/abhishek-bisht-21/Personal-Portfolio"
  }
];

export const CONTACT = {
  address: "R.K. Puram, New Delhi, 110022 ",
  phoneNo: "+91 93-###-392-17",
  email: "abhishek.bisht.21@gmail.com",
};
