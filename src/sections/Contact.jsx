import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const EMAIL = 'vaibhav.devvk@gmail.com'
const GITHUB_URL = 'https://github.com/vaibhavverse'
const LINKEDIN_URL = 'https://www.linkedin.com/in/vaibhavverse/'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setForm({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Get in <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-4"
        >
          I'm actively looking for internship and full-time opportunities as a Software Development Engineer.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 text-center text-sm mb-12"
        >
          Feel free to reach out for opportunities, collaborations, or technical discussions.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 mb-12"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20 outline-none transition-all text-white placeholder-gray-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20 outline-none transition-all text-white placeholder-gray-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20 outline-none transition-all text-white placeholder-gray-500 resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-dark-900 font-semibold hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm mb-4">Or reach me directly</p>
          <a href={`mailto:${EMAIL}`} className="text-accent-cyan hover:underline font-medium">
            {EMAIL}
          </a>
          <div className="flex justify-center gap-4 mt-6">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass glass-hover text-gray-300 hover:text-accent-cyan" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass glass-hover text-gray-300 hover:text-accent-cyan" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${EMAIL}`} className="p-3 rounded-xl glass glass-hover text-gray-300 hover:text-accent-cyan" aria-label="Email">
              <FaEnvelope size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
