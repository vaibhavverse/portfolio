import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          Aspiring Software Development Engineer with a focus on building impact
        </motion.p>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl glass overflow-hidden flex items-center justify-center bg-dark-700/50">
              <span className="text-6xl md:text-8xl opacity-50">👨‍💻</span>
            </div>
          </motion.div>
          <div className="flex-1 space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              I'm an aspiring <span className="text-accent-cyan font-medium">Software Development Engineer</span> with a strong foundation in problem solving and system-level thinking.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              I actively practice <span className="text-accent-violet font-medium">Data Structures and Algorithms</span> to improve my analytical and coding skills, and I enjoy building scalable, real-world applications as a Full Stack Developer.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              I have hands-on experience developing web applications, designing REST APIs, implementing authentication systems, and working with databases.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Currently, I'm expanding my knowledge in System Design, Cloud, AI, and DevOps to understand how large-scale production systems are built and maintained.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              I'm passionate about writing clean code, learning continuously, and contributing to high-impact engineering teams.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
