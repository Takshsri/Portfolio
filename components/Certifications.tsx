"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Award } from "lucide-react";
import Image from "next/image";

const certifications = [
  {
    title: "Software Architecture and System Design Fundamentals",
    issuer: "ScholarHat",
    date: "2026",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
    verifyUrl:
      "https://drive.google.com/file/d/1WDj3ZUksrctfy3HxFoIOKIEAHnY9u8m3/view?usp=drivesdk",
  },

  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2025",
    image:
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400",
    verifyUrl:
      "https://drive.google.com/file/d/1cu2gD210amfbKSF8tGLIiB1V42eftF-Y/view?usp=drivesdk",
  },

  {
    title: "Machine Learning",
    issuer: "PrepInsta Prime",
    date: "2026",
    image:
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400",
    verifyUrl: "#",
  },

  {
    title: "Problem Solving Methods and Artificial Intelligence",
    issuer: "NPTEL",
    date: "2025",
    image:
      "https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=400",
    verifyUrl:
      "https://drive.google.com/file/d/14nf-nH12U0jGAQ11oAkzmoDPhWTxwFf2/view?usp=drivesdk",
  },

  {
    title: "Python Programming",
    issuer: "PrepInsta Prime",
    date: "2026",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    verifyUrl: "#",
  },

  {
    title: "Full Stack Web Development",
    issuer: "PrepInsta Prime",
    date: "2026",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
    verifyUrl: "#",
  },
  {
  title: "AWS ",
  issuer: "PrepInsta Prime",
  date: "2026",
  image:
    "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=400",
  verifyUrl: "#",
},
];
export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-xl overflow-hidden"
            >
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold mb-1 text-sm line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-xs mb-1">{cert.issuer}</p>
                <p className="text-cyan-400 text-xs font-medium mb-3">
                  {cert.date}
                </p>

                <motion.a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-3 py-2 glass rounded-lg text-xs font-medium flex items-center justify-center gap-2 hover:bg-cyan-500/10 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Verify
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
