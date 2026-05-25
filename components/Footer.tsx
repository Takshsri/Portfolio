"use client";

import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/Takshsri" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/ramyamannam" },
];

export default function Footer() {
  return (
    <footer className="py-12 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">Ramya</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
                  Full Stack Developer passionate about building scalable and intelligent
                  applications using modern technologies. Focused on AI, Machine Learning,
                  System Design, and creating impactful digital experiences through clean,
                  efficient, and user-centric engineering.
                </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass rounded-lg text-gray-400 hover:text-cyan-400 transition-colors"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            Built with{" "}
            <Heart className="w-4 h-4 text-red-500 inline-block mx-1" /> using
            React & Tailwind CSS
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ramya Mannam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
