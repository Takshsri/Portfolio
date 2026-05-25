"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Eventz",
    description:
      "A full-stack event management platform where organizers can create and manage events, configure attendee fields, create ticket systems, manage analytics, and users can register and book tickets online.",
    image:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React", "NestJS", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://eventz-aa4j.vercel.app",
    githubUrl: "https://github.com/vens010/stvensi",
    featured: true,
  },

  {
    title: "RenewAlert",
    description:
      "RenewAlert is a modern full-stack subscription management platform that helps users track, monitor, and manage recurring subscriptions from a centralized dashboard. The platform provides renewal reminders, spending analytics, and subscription alerts for services such as SaaS tools, OTT platforms, memberships, and online services.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React", "NestJS", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://renew-mate-fluprbjnb-ramyamannam7-6691s-projects.vercel.app/",
    githubUrl: "https://github.com/Takshsri/Renew_Mate",
    featured: true,
  },

  {
    title: "StackSpend AI",
    description:
      "An AI-powered financial and subscription analytics platform that helps users analyze recurring expenses, predict spending patterns, generate intelligent insights, and optimize subscription usage using modern AI workflows and data visualization techniques.",
    image:
      "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React", "Python", "AI", "PostgreSQL"],
    liveUrl: "https://stackspend-m5f2txtkb-ramyamannam7-6691s-projects.vercel.app",
    githubUrl: "https://github.com/Takshsri/Stackspend-ai",
    featured: true, 
  },

  {
    title: "Python Workflow Automation System",
    description:
      "A workflow automation platform built using Python for automating tasks, scheduling processes, and improving productivity with intelligent task management.",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["Python", "FastAPI", "APIs", "Automation"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },

  {
    title: "Machine Learning House Price Prediction",
    description:
      "A machine learning project for predicting house prices using regression algorithms, feature engineering, and advanced data analysis techniques.",
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },

  {
    title: "AI Resume Analyzer",
    description:
      "An intelligent AI-based resume analysis platform that evaluates resumes, extracts technical skills, suggests improvements, and matches profiles against job descriptions using NLP and LLM-based workflows.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["Python", "LLMs", "NLP", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },

  {
    title: "API Integration Projects",
    description:
      "Projects involving third-party APIs, authentication systems, and real-time data handling with seamless integration across multiple platforms.",
    image:
      "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["REST APIs", "Node.js", "Express.js", "OAuth"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-500/90 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-medium text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium flex items-center justify-center gap-2 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 glass rounded-lg flex items-center justify-center gap-2 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
