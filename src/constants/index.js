import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    expressjs,
    mysql,
    c,
    cPlus,
    python,
    bootstrap,
    blank,
    fitney,
    teachbook,
    threejs,
    brainware,
    school,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
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
  
  const technologies = [
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: expressjs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Bootstrap 5",
      icon: bootstrap,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cPlus,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const education = [
    {
      title: "B.TECH in Computer Science Engineering",
      school_name: "Brainware University",
      icon: brainware,
      iconBg: "#383E56",
      cgpa: "CGPA - 9.47/10",
      date: "2019 - 2023",
    },
    {
      title: "Higher Secondary, WBCHSE",
      school_name: "Dumdum Road Govt. Sponsored High School",
      icon: school,
      iconBg: "#E6DEDD",
      cgpa: "PERCENTAGE - 74.80",
      date: "2017 - 2019",
    },
    {
      title: "Secondary, WBBSE",
      school_name: "Dumdum Road Govt. Sponsored High School",
      icon: school,
      iconBg: "#383E56",
      cgpa: "PERCENTAGE - 80.29",
      date: "2016 - 2017",
    },
  ];
  
  const projects = [
    {
      name: "Blank",
      description:
        "It is a sentiment analysis model using Natural Language Processing which helps businesses to classify their products review whether it is positive, negative or neutral",
      tags: [
        {
          name: "html5",
          color: "blue-text-gradient",
        },
        {
          name: "css3",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "expressjs",
          color: "pink-text-gradient",
        },
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
      ],
      image: blank,
      source_code_link: "https://github.com/SUPARNA150/Final-Year-Project",
    },
    {
      name: "TeachBook",
      description:
        "It is an E-learning website, from where user can read different kinds of blogs and purchase various courses and also user can give their feedback in the contact us section.",
      tags: [
        {
          name: "html5",
          color: "blue-text-gradient",
        },
        {
          name: "css3",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: teachbook,
      source_code_link: "https://github.com/SUPARNA150/TEACHBOOK",
    },
    {
      name: "Fitney",
      description:
        "It is a gym website which provides users a seamless interface for fitness management, offering diverse memberships and a BMI calculator for personalized health tracking.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "expressjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: fitney,
      source_code_link: "https://github.com/SUPARNA150/gymwebSite_Fitney",
    },
  ];
  
  export { technologies, education, projects };