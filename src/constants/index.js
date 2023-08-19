import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    smarter,
    freelance,
    brainquest,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full-Stack Developer",
      icon: backend,
    },
    {
      title: "App Deployment",
      icon: mobile,
    },
    {
      title: "QA & Testing",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
  
  const experiences = [
    {
      title: "Data Annotation Specialist (Internship)",
      company_name: "Smarter E-learning Pvt Ltd",
      icon: smarter,
      iconBg: "#383E56",
      date: "Nov 2021 - Apr 2022",
      points: [
        "As a data annotation specialist, I worked on an AI project for self-driving cars.", 
        "Where I annotated data for training machine learning models.",
        
      ],
    },
    {
      title: "Javascript Developer (Internship)",
      company_name: "Brain Quest",
      icon: brainquest,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Nov 2022",
      points: [
        "I worked as a JavaScript developer on a project that involved creating a web app with Wix Velo.",
        "I was responsible for writing backend logics and modules.",
        "Joined forces with a fearless team of bug zappers to squash pesky coding errors and save the digital day.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freenlancing",
      icon: freelance,
      iconBg: "#383E56",
      date: "Jul 2020 - Present",
      points: [
        "As a part-time freelancer, I create websites and provide SEO services to clients.",
        "I specialize in creating visually appealing and highly functional websites that are optimized for search engines.",
        "Waved my wand (or keyboard) to craft robust web applications and slay bugs with a flick of my debugging wand.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Google Docs Clone",
      description:
        "Yep, I took on the challenge and crafted a wicked Google Docs clone using React, socket.io, and MongoDB. Collaborate with pals in real-time, watch as text changes pop up like magic, and keep those enchanting documents securely stored.",
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
          name: "socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "URL Shortener",
      description:
        "Long URLs can be a real drag, right? Not anymore! I went all-in with React, Tailwind, Express.js, and MongoDB to create a cool URL shortener. Now, those long links will shrink down to bite-sized bits, making web navigation a piece of cake.",
      tags: [
        {
          name: "react + tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "express.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "The Shopping Cart",
      description:
        "Let's talk shopping! I whipped up a sweet shopping cart using React and TypeScript. It's user-friendly, responsive, and just what you need to keep those cart functionality in your e-commerce website.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };