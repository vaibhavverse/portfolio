import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Programming',
    skills: ['C++', 'Python', 'JavaScript'],
    color: 'from-accent-cyan to-blue-500',
  },
  {
    title: 'Core Concepts',
    skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
    color: 'from-accent-violet to-purple-500',
  },
  {
    title: 'Development',
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    color: 'from-accent-emerald to-green-500',
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Linux', 'Postman'],
    color: 'from-accent-amber to-orange-500',
  },
  {
    title: 'Currently Learning',
    skills: ['System Design', 'Docker', 'AWS'],
    color: 'from-pink-400 to-rose-500',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          Technologies and fundamentals I work with
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-2xl glass glass-hover group hover:shadow-lg hover:shadow-accent-cyan/10 transition-all duration-300 ${cat.title === 'Core Concepts' ? 'md:col-span-2' : ''}`}
            >
              <h3 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.08 + i * 0.04 }}
                    whileHover={{ scale: 1.08 }}
                    className="px-4 py-2 rounded-lg bg-dark-700/80 border border-white/10 text-gray-300 text-sm font-medium hover:border-accent-cyan/50 hover:shadow-md hover:shadow-accent-cyan/20 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
