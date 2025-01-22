"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import ParticleBackground from "../components/ParticleBackground"


export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <ParticleBackground />
      
      <div className="z-10 text-center p-8 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Sampurna Pyne
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8"
        >
          Cybersecurity and Web3 Professional | Computer Science Major
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link
            href="/resume"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            View Resume
          </Link>
          <Link
            href="/about"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            About Me
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

