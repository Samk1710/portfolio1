import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">© 2023 Sampurna Pyne. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:sampurnapyne1710@gmail.com"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              sampurnapyne1710@gmail.com
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

