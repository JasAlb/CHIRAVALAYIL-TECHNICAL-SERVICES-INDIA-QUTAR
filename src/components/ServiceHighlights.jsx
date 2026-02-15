import { motion } from 'framer-motion'
import {
  Wrench,
  Gauge,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react'

const services = [
  {
    title: 'Repair',
    description: 'Expert repair of NDT equipment with precision diagnostics.',
    icon: Wrench,
  },
  {
    title: 'Calibration',
    description: 'Certified calibration ensuring accurate measurements.',
    icon: Gauge,
  },
  {
    title: 'Reconditioning',
    description: 'Restore equipment to factory specifications.',
    icon: RefreshCw,
  },
  {
    title: 'Preventive Maintenance',
    description: 'Proactive care to extend equipment lifespan.',
    icon: ShieldCheck,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function ServiceHighlights() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Service Highlights
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Fast, reliable service you can count on
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="relative bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <span className="absolute -top-2 right-4 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                48-hour turnaround
              </span>
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-primary text-xl mb-2">
                {service.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
