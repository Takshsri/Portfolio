"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Download,
  FileText,
  Folder,
  Award,
  Code,
  Github,
  Brain,
  Server,
  Globe,
} from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "7+", icon: Folder },
  { label: "Technologies Known", value: "25+", icon: Code },
  { label: "Certifications", value: "6+", icon: Award },
  { label: "GitHub Repositories", value: "20+", icon: Github },
];

const resumes = [
  {
    name: "Full Stack Resume",
    file: "/Ramya_FullStack.pdf",
    icon: Code,
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Frontend Resume",
    file: "/Ramya_FullStack.pdf",
    icon: Globe,
    color: "from-teal-500 to-emerald-500",
  },
  {
    name: "Backend Resume",
    file: "/Ramya_FullStack.pdf",
    icon: Server,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Python Resume",
    file: "/Ramya_Resume.pdf",
    icon: FileText,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Machine Learning Resume",
    file: "/Ramya_Resume.pdf",
    icon: Brain,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "AI Engineer Resume",
    file: "/Ramya_Resume.pdf",
    icon: Brain,
    color: "from-violet-500 to-purple-500",
  },
];

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const handleDownload = (file: string, name: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = `${name}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">
            Resume
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Professional Resume</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Download role-specific resumes tailored for Full Stack,
            Frontend, Backend, Python, AI, and Machine Learning roles.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Main Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 relative overflow-hidden">
            {/* Background Blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
              {/* Resume Icon */}
              <div className="w-36 h-44 glass rounded-xl flex items-center justify-center shrink-0">
                <FileText className="w-16 h-16 text-cyan-400" />
              </div>

              {/* Resume Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-3">
                  Ramya Mannam
                </h3>

                <p className="text-cyan-400 font-medium mb-4">
                  Full Stack Developer • AI Enthusiast • Python Developer
                </p>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  Explore and download specialized resumes tailored for
                  different software engineering domains including Full
                  Stack Development, Frontend Engineering, Backend
                  Systems, Artificial Intelligence, and Machine Learning.
                </p>

                {/* Resume Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {resumes.map((resume) => (
                    <motion.button
                      key={resume.name}
                      onClick={() =>
                        handleDownload(
                          resume.file,
                          resume.name
                        )
                      }
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`px-5 py-4 bg-gradient-to-r ${resume.color} rounded-xl font-medium flex items-center justify-center gap-3 hover:shadow-lg transition-all duration-300`}
                    >
                      <resume.icon className="w-5 h-5" />
                      <span>{resume.name}</span>
                      <Download className="w-4 h-4" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.1,
                }}
                className="glass rounded-xl p-6 text-center hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-cyan-400" />
                </div>

                <div className="text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>

                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}