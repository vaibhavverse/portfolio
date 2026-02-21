import { motion } from 'framer-motion'
import { HiBriefcase } from 'react-icons/hi'

const experiences = [
  {
    title: 'Infosys Springboard Internship',
    type: 'Internship',
    description: 'Worked on industry-based learning modules and software development concepts.',
  },
  {
    title: 'Design Verification Internship',
    type: 'Internship',
    description: 'Exposure to testing, debugging, and system verification processes.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          <span className="text-gradient">Experience</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          Where I've worked and learned
        </motion.p>

        <div className="relative pl-10 md:pl-0">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-violet/50 to-transparent -translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-stretch gap-6 mb-12 last:mb-0"
            >
              <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`} />
              <div className={`ml-6 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:order-1'}`}>
                <div className="glass rounded-2xl p-6 glass-hover">
                  <div className="flex items-center gap-2 mb-2">
                    <HiBriefcase className="text-accent-cyan flex-shrink-0" />
                    <span className="text-xs font-mono text-accent-cyan uppercase">{exp.type}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{exp.title}</h3>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent-cyan border-4 border-dark-800 -translate-x-1/2 flex-shrink-0 mt-6 z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
