"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaLightbulb, FaPuzzlePiece, FaUsers, FaRocket } from "react-icons/fa"

import { FaPython, FaJava, FaEthereum, FaDatabase, FaHtml5, FaReact, FaNodeJs } from "react-icons/fa"
import { SiDjango, SiNextdotjs, SiWireshark, SiGit } from "react-icons/si"
import { Particles } from "../../components/ui/particles";

const traits = [
  { icon: FaLightbulb, title: "Computer Science", description: "Student passionate about Tech" },
  { icon: FaPuzzlePiece, title: "Problem-solving", description: "Tackling complex challenges" },
  { icon: FaUsers, title: "Leadership & Teamwork", description: "Collaborating for excellence" },
  { icon: FaRocket, title: "Interests", description: "Security and Web3.0" },
]
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


export default function About() {
  
  return (
    <div>
    
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <Particles
        className="fixed inset-0 z-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
       
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto mt-16 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-xl"
      >
        <div className="p-8">
        

          <div className="flex flex-col sm:flex-row items-center mb-8">
            <Image
              src="/IMG_2070.JPG"
              alt="Sampurna Pyne"
              width={150}
              height={150}
              className="rounded-full object-fill border-4 border-white shadow-lg mb-4 sm:mb-0 sm:mr-8"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-600 via-indigo-400 to-teal-500 text-transparent bg-clip-text animate-gradient bg-300% tracking-wider">Sampurna Pyne</h1>
              <p className="text-gray-300">
                Full-stack Web3 Developer and Security enthusiast passionate about creating secure, innovative
                technology solutions. Currently a Computer Science and Engineering Sttudent.

              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 flex items-center"
              >
                <trait.icon className="text-3xl text-white mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">{trait.title}</h3>
                  <p className="text-gray-300">{trait.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <section id="skills" className="mt-4">
      <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto mt-16"
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
                    <skill.icon className="text-5xl mb-4 animate-pulse" />
                    <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
      </section>
      
    </div>
    </div>
  )
}

