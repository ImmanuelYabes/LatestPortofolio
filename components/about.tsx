"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A final-year <span className="font-medium">Computer Science</span>{" "}
        student specializing in{" "}
        <span className="font-medium">Intelligent Systems</span>, I am
        passionate about leveraging technology to solve complex problems. With
        strong skills in{" "}
        <span className="italic">
          Quality Assurance, Machine learning, and web development
        </span>
        , I have practical experience from internships and academic projects
        like the{" "}
        <span className="underline">Rating clasiification research</span>.
        Proficient in{" "}
        <span className="font-medium">
          JavaScript, Python, React, Tailwind CSS, REST APIs, Git, SQL
        </span>
        , and multiple programming languages, I excel in collaborative
        environments and am committed to{" "}
        <span className="font-medium">continuous learning</span> and
        technological innovation.
      </p>
    </motion.section>
  );
}
