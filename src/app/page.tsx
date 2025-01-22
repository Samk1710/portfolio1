"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { useState } from "react"

import { Particles } from "../../src/components/ui/particles";
import { MorphingText } from "@/components/ui/morphing-text"
import { AuroraText } from "../components/ui/aurora-text";
export default function Home() {
  const [color, setColor] = useState("#ffffff");
  const texts = [
    "Security",
    "Web3.0",


    
  ];
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Particles
              className="absolute inset-0 z-0"
              quantity={100}
              ease={80}
              color={color}
              refresh
            />
      
      <div className="z-10 text-center p-8 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-pink-500 to-teal-500 text-transparent bg-clip-text animate-gradient bg-300%"
        >
          <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] animate-gradient-x">
            Sampurna Pyne
          </span>
          
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-xl text-gray-300 mb-8"
        >
          <MorphingText texts={texts}/>
        </motion.div>
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

