"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaLightbulb, FaPuzzlePiece, FaUsers, FaRocket } from "react-icons/fa"
import { Particles } from "../../components/ui/particles";

const traits = [
  { icon: FaLightbulb, title: "Leadership", description: "Guiding teams to success" },
  { icon: FaPuzzlePiece, title: "Problem-solving", description: "Tackling complex challenges" },
  { icon: FaUsers, title: "Teamwork", description: "Collaborating for excellence" },
  { icon: FaRocket, title: "Innovation", description: "Driving cutting-edge solutions" },
]

export default function About() {
  return (
    <div>
    
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    
       
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-xl"
      >
        <div className="p-8">
        <Particles />

          <div className="flex flex-col sm:flex-row items-center mb-8">
            <Image
              src="/placeholder.svg"
              alt="Sampurna Pyne"
              width={150}
              height={150}
              className="rounded-full border-4 border-white shadow-lg mb-4 sm:mb-0 sm:mr-8"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2">Sampurna Pyne</h1>
              <p className="text-gray-300">
                Full-stack Web3 Developer and Security enthusiast passionate about creating secure, innovative
                technology solutions.
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
    </div>
    </div>
  )
}

