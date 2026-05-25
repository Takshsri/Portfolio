"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Brain, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "End-to-end web applications with modern frameworks",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Scalable APIs and database architecture",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Data analysis and predictive modeling",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description: "Creative solutions for complex challenges",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Passionate About Building{" "}
            <span className="gradient-text">Digital Experiences</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I&apos;m a passionate software engineering student with a deep love for
                full-stack development and creating elegant, efficient solutions.
                My journey in tech started with curiosity about how things work,
                and has evolved into a dedication to building impactful applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I specialize in <span className="text-cyan-400 font-medium">React</span> and{" "}
                <span className="text-cyan-400 font-medium">NestJS</span> for full-stack applications,
                with strong expertise in <span className="text-cyan-400 font-medium">Python</span> for
                backend development and automation. I&apos;m fascinated by the intersection
                of web development and machine learning.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open-source projects, or diving deep into algorithmic
                problem solving on coding platforms.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
