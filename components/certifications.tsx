"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { certificationsData } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Certifications() {
  const { ref } = useSectionInView("Certifications");

  return (
    <section
      id="certifications"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Certifications</SectionHeading>
      <ul className="flex flex-col gap-3 text-lg">
        {certificationsData.map((certification, index) => (
          <motion.li
            key={index}
            className="bg-gray-100 p-6 rounded-lg border border-black/5 dark:bg-white/10"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold">{certification.title}</h3>
            <p className="mt-1 text-gray-600 dark:text-white/70">
              {certification.issuer} • {certification.date}
            </p>
            {certification.credentialUrl && (
              <div className="mt-4 flex justify-center">
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
                >
                  View Credential
                </a>
              </div>
            )}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
