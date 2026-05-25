"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    color: "from-cyan-500 to-teal-500",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    color: "from-blue-500 to-indigo-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "NestJS", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "FastAPI", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    name: "Database",
    icon: "🗄️",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 78 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    name: "Programming",
    icon: "💻",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
    ],
  },
  {
    name: "Machine Learning",
    icon: "🤖",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Scikit-learn", level: 75 },
      { name: "Pandas", level: 80 },
      { name: "NumPy", level: 82 },
      { name: "Matplotlib", level: 78 },
    ],
  },
  {
    name: "Tools",
    icon: "🛠️",
    color: "from-gray-500 to-slate-500",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "Postman", level: 88 },
      { name: "Vercel", level: 85 },
      { name: "Docker", level: 70 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technologies I{" "}
            <span className="gradient-text">Work With</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
              className="glass rounded-xl p-6 group hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group/skill cursor-pointer"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={
                          hoveredSkill === skill.name
                            ? { opacity: 1 }
                            : { opacity: 0 }
                        }
                        className="text-cyan-400 text-sm font-bold"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
