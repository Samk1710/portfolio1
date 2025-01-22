"use client"

import { Particles } from "@/components/ui/particles"
import { motion } from "framer-motion"
import { useState } from "react"
import { FaTrophy, FaCertificate, FaGraduationCap, FaGoogle } from "react-icons/fa"

const achievements = [
  {
    year: 2025,
    title: "IETF 122 Representative",
    description: "Upcoming Representative at global internet standards conference",
    icon: FaCertificate,
  },
  {
    year: 2025,
    title: "3rd place at East India Blockchain Summit",
    description: "Recognized for innovative blockchain solution for Decentralized Identification",
    icon: FaTrophy,
  },
  {
    year: 2024,
    title: "IEEE-IC Standards Hackathon Winner",
    description: "Developed cutting-edge solution for industry standards",
    icon: FaTrophy,
  },
  
  {
    year: 2024,
    title: "CyberSecurity Mentor At Google Developers on Campus",
    description: "Community at Heritage Institute of Technology",
    icon: FaGoogle,
  },
  {
    year: 2023,
    title: "Started with B.Tech in Computer Science Engineering",
    description: "Specialized in IoT and Cybersecurity including Blockchain Technology ",
    icon: FaGraduationCap,
  },
  {
    year: 2023,
    title: "Started with B.Tech in Computer Science Engineering",
    description: "Specialized in IoT and Cybersecurity including Blockchain Technology ",
    icon: FaGraduationCap,
  },
]

export default function Achievements() {
  const [color, setColor] = useState("#ffffff");
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
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Achievements & Timeline</h1>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-700" />
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 flex justify-between items-center w-full"
            >
              <div className="order-1 w-5/12" />
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{achievement.year}</h1>
              </div>
              <div className="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">{achievement.title}</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  {achievement.description}
                </p>
                <achievement.icon className="text-2xl text-white mt-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

