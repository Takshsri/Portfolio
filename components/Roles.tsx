"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code,
  Globe,
  Server,
  FileCode,
  Brain,
  Download,
  CheckCircle,
} from "lucide-react";

const roles = [
  {
    icon: Code,
    title: "Full Stack Developer",
    description:
      "End-to-end development with React, Node.js, and modern databases",
    color: "from-cyan-500 to-blue-500",
    resume: "/ramyaresume2026.pdf",
  },
  {
    icon: Globe,
    title: "Frontend Developer",
    description:
      "Beautiful, responsive interfaces with React, Next.js, and Tailwind",
    color: "from-teal-500 to-emerald-500",
    resume: "/ramyaresume2026.pdf",
  },
  {
    icon: Server,
    title: "Backend Developer",
    description:
      "Robust APIs and services with NestJS, Express, and FastAPI",
    color: "from-blue-500 to-indigo-500",
    resume: "/ramyaresume2026.pdf",
  },
  {
    icon: FileCode,
    title: "Python Developer",
    description:
      "Scripting, automation, and backend development with Python",
    color: "from-orange-500 to-red-500",
    resume: "/Ramya_Resume.pdf",
  },
  {
    icon: Brain,
    title: "Machine Learning Engineer",
    description:
      "Predictive models and intelligent systems using ML workflows",
    color: "from-pink-500 to-rose-500",
    resume: "/Ramya_Resume.pdf",
  },
  {
    icon: Brain,
    title: "AI Engineer",
    description:
      "LLMs, RAG systems, Agentic AI workflows, and intelligent applications",
    color: "from-violet-500 to-purple-500",
    resume: "/Ramya_Resume.pdf",
  },
];

export default function Roles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPopup, setShowPopup] = useState(false);

  const handleDownload = (resume: string, role: string) => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = `${role.replace(/\s+/g, "_")}_Resume.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setShowPopup(true);
  setTimeout(() => setShowPopup(false), 3000);
};

  return (
    <section id="roles" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">Roles</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Click on any role to download my resume and learn more about my
            qualifications in each area.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <motion.button
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onClick={() => handleDownload(role.resume, role.title)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group glass rounded-xl p-6 text-left cursor-pointer relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${role.color.split(" ")[0].replace("from-", "")} 0%, transparent 100%)`,
                }}
              />

              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-4 relative z-10`}
              >
                <role.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-semibold mb-2 relative z-10">
                {role.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 relative z-10">
                {role.description}
              </p>

              <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium relative z-10 group-hover:gap-3 transition-all">
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="glass rounded-xl p-4 flex items-center gap-3 shadow-xl shadow-cyan-500/10">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="font-medium">Resume download started</p>
                <p className="text-sm text-gray-400">
                  Check your downloads folder
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
