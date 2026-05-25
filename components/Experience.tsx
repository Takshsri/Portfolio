"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full Stack Developer Intern",
    company: "Tech Startup",
    date: "2024 - Present",
    description: [
      "Developed and maintained full-stack web applications using React and NestJS",
      "Implemented RESTful APIs and integrated third-party services",
      "Collaborated with cross-functional teams to deliver features",
    ],
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Freelance",
    date: "2023 - 2024",
    description: [
      "Built responsive web interfaces for multiple clients",
      "Optimized website performance and user experience",
      "Implemented modern UI/UX designs with Tailwind CSS",
    ],
  },
  {
    type: "education",
    title: "B.S. Software Engineering",
    company: "University of Technology",
    date: "2021 - Present",
    description: [
      "GPA: 3.8/4.0",
      "Focus on Full Stack Development and Machine Learning",
      "Active member of Computer Science Club",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`hidden md:block w-1/2 ${
                  index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                }`}
              >
                <div className="glass rounded-xl p-6 inline-block text-left max-w-md">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        exp.type === "work"
                          ? "bg-cyan-500/20"
                          : "bg-teal-500/20"
                      }`}
                    >
                      {exp.type === "work" ? (
                        <Briefcase className="w-4 h-4 text-cyan-400" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-teal-400" />
                      )}
                    </div>
                    <h3 className="font-semibold">{exp.title}</h3>
                  </div>
                  <p className="text-cyan-400 text-sm mb-1">{exp.company}</p>
                  <p className="text-gray-500 text-xs mb-3">{exp.date}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute left-8 md:left-1/2 -translate-x-1/2">
                <div
                  className={`w-4 h-4 rounded-full border-4 ${
                    exp.type === "work"
                      ? "border-cyan-500 bg-background"
                      : "border-teal-500 bg-background"
                  }`}
                />
              </div>

              <div className="md:hidden flex-1 ml-12">
                <div className="glass rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        exp.type === "work"
                          ? "bg-cyan-500/20"
                          : "bg-teal-500/20"
                      }`}
                    >
                      {exp.type === "work" ? (
                        <Briefcase className="w-4 h-4 text-cyan-400" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-teal-400" />
                      )}
                    </div>
                    <h3 className="font-semibold">{exp.title}</h3>
                  </div>
                  <p className="text-cyan-400 text-sm mb-1">{exp.company}</p>
                  <p className="text-gray-500 text-xs mb-3">{exp.date}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
