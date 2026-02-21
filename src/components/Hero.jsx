import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

// const roles = ['Aspiring Software Development Engineer', 'Aspiring Full Stack Developer', 'DSA Enthusiast', 'Problem Solver']
const roles = [
  'Software Development Engineer Aspirant',
  'Full Stack Developer',
  'DSA Enthusiast',
  'Problem Solver'
]
const RESUME_URL = '/Vaibhav_Kumar_Resume.pdf'
const GITHUB_URL = 'https://github.com/vaibhavverse'
const LINKEDIN_URL = 'https://www.linkedin.com/in/vaibhavverse/'
const EMAIL = 'vaibhav.devvk@gmail.com'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-mesh-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(167,139,250,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(52,211,153,0.06),transparent)]" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-cyan/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-violet/10 blur-3xl"
      />

      <div className="relative container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent-cyan font-mono text-sm md:text-base mb-4"
        >
          Hi, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
        >
          Vaibhav Kumar
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-10 md:h-12 flex items-center justify-center mb-6"
        >
          <span className="text-xl md:text-2xl text-gray-400">
            <span className="text-accent-cyan">|</span>{' '}
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-200"
            >
              {roles[roleIndex]}
            </motion.span>
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          B.Tech CSE student focused on Software Development and problem solving, with strong foundations in Data Structures & Algorithms and experience building scalable full-stack applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-dark-900 font-semibold hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300 hover:scale-105"
          >
            View Projects
          </a>
          <a
            href={RESUME_URL}
            download
            className="px-6 py-3 rounded-xl glass glass-hover text-gray-200 font-medium"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass glass-hover text-gray-300 hover:text-accent-cyan transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass glass-hover text-gray-300 hover:text-accent-cyan transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="p-3 rounded-xl glass glass-hover text-gray-300 hover:text-accent-cyan transition-all hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
