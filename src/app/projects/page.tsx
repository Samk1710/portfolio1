"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaGlobe } from "react-icons/fa"
import { Particles } from "@/components/ui/particles"
const projects = [
  {
    name: "SecureNet",
    description: "IDS/IPS benchmarking tool",
    image: "/Cyber-security.jpg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    name: "CredKey",
    description: "Blockchain-based credential verification",
    image: "/WhatsApp Image 2025-01-23 at 03.35.31_3daefd66.jpg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    name: "Altnode",
    description: "AI plugin DApp",
    image: "/Gemini_Generated_Image_t5p0szt5p0szt5p0.jpeg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    name: "PySec",
    description: "Network security tools",
    image: "/WhatsApp Image 2025-01-23 at 03.40.06_07a9e9b0.jpg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <Particles
                    className="absolute inset-0 z-0"
                    quantity={100}
                    ease={80}
                    color="#ffffff"
                    refresh
                  />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto" >
        <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg"  >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    <FaGlobe size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

