import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mtgraphy from "@/public/mtgraphy.png";
import portfolioImg from "@/public/portfolioimg.png";
import fakenewsdetectionImg from "@/public/fakenewsDetection.png";
import viewContractor from "@/public/viewContractor.png";
import reactPorto from "@/public/ReactPorto.png";
import circle from "@/public/circle.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Publications",
    hash: "#publications",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Contestant",
    location: "ICPC - International Collegiate Programming Contest",
    description: "Competing nationally against Top Universities in Indonesia.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Information Technology Developer Intern",
    location: "PT Bank CIMB Niaga Tbk",
    description:
      "• Front-End Development: Skilled in creating responsive interfaces using React and Tailwind CSS.\n" +
      "• Software Testing & Documentation: Skilled in manual testing, test script creation, and clear documentation using Jira based on user requirements and test results.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Feb 2025",
  },
  {
    title: "Quality Assurance Intern ",
    location: "PT Bank CIMB Niaga Tbk",
    description:
      "• Software Testing: Performed SIT, defect retesting, UAT, and PVT for banking modules like TRS and SLIK.\n" +
      "• Test Documentation: Familiar with structured testing workflows and lifecycle in the banking sector. \n" +
      "• Production Support: Supported system verification and readiness during production rollout (Stage 2).",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - April 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Mobile App Circle",
    description:
      "Circle is a Flutter application project hosted on GitHub. It supports multiple platforms and is written in several languages including Dart, C++, and Swift.",
    tags: ["Dart", "C++", "Swift", "Figma"],
    imageUrl: circle,
  },
  {
    title: "React Portfolio Website",
    description:
      "This project is my first React-based portfolio website. The project uses Vite as a build tool and ESLint as a code linter.",
    tags: ["HTML", "SCSS", "JavaScript", "React", "Vite", "ESLint"],
    imageUrl: reactPorto,
  },
  // {
  //   title: "Fake News Detection Paper using Machine Learning Technique",
  //   description:
  //     "Fake News Detection using ML technique like Bert, TF-IDF, and GLOVE.",
  //   tags: ["Machine Learning", "TF-IDF", "Bert", "GLOVE", "NLP"],
  //   imageUrl: fakenewsdetectionImg,
  // },
  // {
  //   title: "Contractor Website UI/UX",
  //   description:
  //     "A Software Engineering projects, and our team take on that is to make a Website that help user find a contractor. (This is only the prototype)",
  //   tags: ["UI/UX", "Figma"],
  //   imageUrl: viewContractor,
  // },
  // {
  //   title: "3d Portfolio Website",
  //   description:
  //     "This is a 3d Portfolio Website that i made using ReactJs + Vite",
  //   tags: ["Vite", "React", "TailwindCSS"],
  //   imageUrl: reactPorto,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Cypress",
  "Postman",
  "React",
  "Machine Learning",
  "Deep Learning",
  "Java",
  "C/C++",
  "SQL",
  "Critical Thinking",
  "Communication",
] as const;

export const publicationsData = [
  {
    title:
      "Classifying and Predicting The Rating Sentiment of Women's E-commerce Clothing Reviews",
    authors: "Immanuel Yabes, et al.",
    journal:
      "2023 5th International Conference on Cybernetics and Intelligent System (ICORIS)",
    abstract:
      "This research explores the application of machine learning algorithms to predict anger proneness in individuals based on physiological and behavioral data, contributing to mental health monitoring and intervention strategies.",
    tags: [
      "Product Reviews",
      "Rating",
      "Sentiment Analysis",
      "SVM",
      "ANN",
      "BERT",
    ],
    url: "https://www.researchgate.net/publication/376637850_Classifying_and_Predicting_The_Rating_Sentiment_of_Women's_E-commerce_Clothing_Reviews_A_Comparative_Study_Using_SVM_ANN_and_BERT_Models",
  },
] as const;

export const certificationsData = [
  {
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    date: "2026",
    credentialUrl: "https://www.dicoding.com/certificates/MRZMLJN7NXYQ",
  },
  {
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    date: "2026",
    credentialUrl: "https://www.dicoding.com/certificates/6RPN4N48RX2M",
  },
  {
    title: "Belajar Dasar Manajemen Proyek",
    issuer: "Dicoding Indonesia",
    date: "2026",
    credentialUrl: "https://www.dicoding.com/certificates/98XWVJ2V0PM3",
  },
  {
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    date: "2027",
    credentialUrl: "https://www.dicoding.com/certificates/EYX40EW2JPDL",
  },
  // Add more certifications as needed
] as const;
