"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full px-4 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.6rem] sm:w-[53rem] sm:px-10 sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {/* Hamburger menu for mobile */}
      <button
        className="fixed top-4 right-6 z-[1000] sm:hidden bg-gray-900 text-white p-2 rounded-full focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile menu as right-side drawer */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-[998] sm:hidden"
            onClick={() => setMenuOpen(false)}
          />
          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-1/2 max-w-xs bg-gray-900 z-[999] flex flex-col items-end p-8 sm:hidden transition-transform duration-300">
            <button
              className="mb-8 text-white text-xl focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <HiX />
            </button>
            <ul className="flex flex-col gap-8 text-xl font-semibold text-white w-full items-end">
              {links.map((link) => (
                <li key={link.hash} className="w-full">
                  <Link
                    href={link.hash}
                    className={clsx(
                      "block px-4 py-2 rounded-lg hover:bg-gray-800 text-right transition w-full",
                      { "bg-gray-800": activeSection === link.name }
                    )}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Desktop navbar */}
      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 -translate-x-1/2 h-[3.25rem] py-0">
        <ul className="flex flex-nowrap items-center justify-center gap-4 text-[0.9rem] font-medium text-gray-500 px-4">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
