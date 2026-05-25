"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ScrollProgress from "@/components/ScrollProgress";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Certifications = dynamic(() => import("@/components/Certifications"), {
  ssr: false,
});
const Roles = dynamic(() => import("@/components/Roles"), { ssr: false });
const Resume = dynamic(() => import("@/components/Resume"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <ScrollProgress />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Roles />
      <Resume />
      <Contact />

      <Footer />
    </motion.main>
  );
}
