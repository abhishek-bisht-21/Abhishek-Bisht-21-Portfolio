import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
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
