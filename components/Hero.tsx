"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,

} from "lucide-react";
import Image from "next/image";

const titles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Python Developer",
  "Machine Learning Enthusiast",
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/Takshsri", color: "hover:text-white" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/ramya-mannam-bb6703289", color: "hover:text-sky-400" },
  { name: "Email", icon: Mail, href: "mailto:ramyamannam7@gmail.com", color: "hover:text-cyan-400" },
];

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const title = titles[currentTitle];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < title.length) {
          setDisplayText(title.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Ramya_Resume.pdf";
    link.download = "Ramya_Mannam_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5" />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Ramya Mannam</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-400 mb-6 h-8"
            >
              <span>{displayText}</span>
              <span className="animate-pulse text-cyan-400">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg max-w-lg mb-8"
            >
              Passionate software engineering student focused on full-stack development, 
              machine learning, AI, and system design, crafting scalable and intelligent
               digital solutions with creativity and technical excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={handleDownloadResume}
                className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </button>
              <a
                href="#projects"
                className="group px-6 py-3 glass rounded-lg font-medium flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 glass rounded-lg text-gray-400 ${social.color} transition-colors`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-cyan-500/30 animate-pulse-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
                <Image
                  src="https://i.pinimg.com/1200x/18/e2/c4/18e2c4d8ef7c7e2e18f76b57409361ea.jpg"
                  alt="Ramya Mannam"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 px-4 py-2 glass rounded-lg text-sm"
              >
                <span className="text-cyan-400 font-bold">5+</span> Projects
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-4 -left-4 px-4 py-2 glass rounded-lg text-sm"
              >
                <span className="text-cyan-400 font-bold">20+</span> Technologies
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center p-2"
        >
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
