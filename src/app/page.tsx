"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Particles } from "../../src/components/ui/particles";
import { MorphingText } from "@/components/ui/morphing-text"
export default function Home() {
   const texts = [
    "Security",
    "Web3.0",
    "Full-Stack",
  ];
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Particles
              className="absolute inset-0 z-0"
              quantity={100}
              ease={80}
              color="#ffffff"
              refresh
            />
      
      <div className="z-10 text-center p-8 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-7xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-700 via-pink-500 to-teal-500 text-transparent bg-clip-text animate-gradient bg-300% tracking-wider"
        >
          
            Sampurna Pyne
        
          
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-lg text-gray-300"
        >
          <MorphingText texts={texts}/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 "
        >
          <Link
            href="https://sampurnapyneresume.tiiny.site/" target="_blank"
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

