import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maya Mannam | Full Stack Developer",
  description:
    "Portfolio of Maya Mannam - Full Stack Developer, Frontend Developer, Backend Developer, Python Developer, and Machine Learning Enthusiast. Explore my projects, skills, and professional experience.",
  keywords: [
    "Maya Mannam",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Python Developer",
    "Machine Learning",
    "React",
    "Next.js",
    "NestJS",
    "Portfolio",
  ],
  authors: [{ name: "Maya Mannam" }],
  creator: "Maya Mannam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mayamannam.com",
    title: "Maya Mannam | Full Stack Developer",
    description:
      "Portfolio of Maya Mannam - Full Stack Developer passionate about building scalable web applications and innovative solutions.",
    siteName: "Maya Mannam Portfolio",
    images: [
      {
        url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Maya Mannam - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maya Mannam | Full Stack Developer",
    description:
      "Portfolio of Maya Mannam - Full Stack Developer passionate about building scalable web applications.",
    images: [
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
