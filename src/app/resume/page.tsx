"use client"

import { motion } from "framer-motion"
import { FaDownload, FaPrint } from "react-icons/fa"

export default function Resume() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-xl"
      >
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Resume</h1>
          <div className="mb-8 flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300">
              <FaDownload className="mr-2" />
              <span>Download Resume</span>
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300">
              <FaPrint className="mr-2" />
              <span>Print Resume</span>
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg">
            {/* Replace this with an actual embedded resume or create a detailed resume layout */}
            <p className="text-gray-800">Your detailed resume content goes here...</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

