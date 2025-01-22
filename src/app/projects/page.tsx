"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaGlobe } from "react-icons/fa"

const projects = [
  {
    name: "Benchmarking Tool",
    description: "Security suite for vulnerability scanning",
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    name: "CredKey",
    description: "Blockchain-based credential verification",
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    name: "Altnode",
    description: "AI plugin DApp",
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    name: "PySec",
    description: "Network security tools",
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg"
            >
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

