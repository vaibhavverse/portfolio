import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const GITHUB_BASE = 'https://github.com/vaibhavverse'

const projects = [
  {
    title: 'HealthSense',
    description: 'Machine learning-based system that predicts diseases based on symptoms and provides health insights.',
    tech: ['Python', 'Flask', 'Machine Learning'],
    github: GITHUB_BASE,
    live: '#',
    placeholder: '🏥',
  },
  {
    title: 'Trackify',
    description: 'Full-stack application for managing buses, routes, and transport operations efficiently at university level.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: GITHUB_BASE,
    live: '#',
    placeholder: '🚚',
  },
  {
    title: 'TalentNest',
    description: 'Job portal with authentication, role-based access, and job management for recruiters and candidates.',
    tech: ['Full Stack Web Development'],
    github: GITHUB_BASE,
    live: '#',
    placeholder: '💼',
  },
  {
    title: 'Streamify',
    description: 'Web-based video streaming platform with user authentication and media management.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: GITHUB_BASE,
    live: '#',
    placeholder: '🎬',
  },
  {
    title: 'LocalHub',
    description: 'Platform connecting users with local services and community resources.',
    tech: ['Full Stack Web Development'],
    github: GITHUB_BASE,
    live: '#',
    placeholder: '🏘️',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          Things I've built
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl glass overflow-hidden glass-hover hover:shadow-xl hover:shadow-accent-cyan/10 transition-all duration-300"
            >
              <div className="h-44 bg-dark-700/80 flex items-center justify-center text-6xl border-b border-white/10 group-hover:scale-105 transition-transform duration-500">
                {project.placeholder}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded bg-dark-600 text-gray-400 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-dark-600/80 border border-white/10 text-accent-cyan text-sm font-medium hover:bg-accent-cyan/10 hover:border-accent-cyan/30 hover:shadow-md hover:shadow-accent-cyan/10 transition-all duration-300"
                  >
                    <FaGithub size={16} /> GitHub
                  </motion.a>
                  {project.live && project.live !== '#' && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-dark-600/80 border border-white/10 text-accent-violet text-sm font-medium hover:bg-accent-violet/10 hover:border-accent-violet/30 hover:shadow-md hover:shadow-accent-violet/10 transition-all duration-300"
                    >
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
