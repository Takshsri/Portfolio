"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, Folder, Award, Code, Github } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "5+", icon: Folder },
  { label: "Technologies Known", value: "20+", icon: Code },
  { label: "Certifications", value: "4+", icon: Award },
  { label: "GitHub Repositories", value: "15+", icon: Github },
];

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Maya_Mannam_Resume.pdf";
    link.click();
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">Resume</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-32 h-40 glass rounded-lg flex items-center justify-center">
                <FileText className="w-12 h-12 text-cyan-400" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Maya Mannam</h3>
                <p className="text-gray-400 mb-4">
                  Full Stack Developer Resume
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  A comprehensive overview of my skills, experience, and
                  qualifications in software development.
                </p>

                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium flex items-center gap-3 mx-auto md:mx-0 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.button>
              </div>
            </div>
          </div>

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
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
