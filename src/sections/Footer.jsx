import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const year = new Date().getFullYear()
const GITHUB_URL = 'https://github.com/vaibhavverse'
const LINKEDIN_URL = 'https://www.linkedin.com/in/vaibhavverse/'
const EMAIL = 'vaibhav.devvk@gmail.com'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-t border-white/10"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {year} Vaibhav Kumar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent-cyan transition-colors" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent-cyan transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${EMAIL}`} className="text-gray-500 hover:text-accent-cyan transition-colors" aria-label="Email">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
