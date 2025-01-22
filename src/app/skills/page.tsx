"use client"

import { motion } from "framer-motion"
import { FaPython, FaJava, FaEthereum, FaDatabase, FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa"
import { SiDjango, SiNextdotjs, SiWireshark, SiGit } from "react-icons/si"

const skills = [
  { name: "Python", icon: FaPython },
  { name: "Java", icon: FaJava },
  { name: "Solidity", icon: FaEthereum },
  { name: "SQL", icon: FaDatabase },
  { name: "HTML/CSS", icon: FaHtml5 },
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Django", icon: SiDjango },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Wireshark", icon: SiWireshark },
  { name: "Git", icon: SiGit },
]

export default function Skills() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-700 transition duration-300"
            >
              <skill.icon className="text-5xl mb-4" />
              <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

