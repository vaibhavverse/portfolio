import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'

const points = [
  'Strong foundation in Data Structures & Algorithms',
  'Hands-on experience building real-world applications',
  'Good understanding of core CS fundamentals',
  'Fast learner with strong problem-solving mindset',
  'Focused on Software Development Engineer roles',
]

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Why <span className="text-gradient">Hire Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          What I bring to your engineering team
        </motion.p>

        <ul className="space-y-4">
          {points.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 p-4 rounded-xl glass glass-hover"
            >
              <HiCheckCircle className="text-accent-cyan flex-shrink-0 mt-0.5" size={22} />
              <span className="text-gray-300">{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
