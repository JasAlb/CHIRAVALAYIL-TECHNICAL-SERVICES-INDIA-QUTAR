import { motion } from 'framer-motion'
import {
  Box,
  Cable,
  Crosshair,
  Plug,
  Cpu,
  CircleDot,
  Settings,
} from 'lucide-react'

const salesItems = [
  { label: 'Equipment Accessories', icon: Box },
  { label: 'Cables', icon: Cable },
  { label: 'Probes', icon: Crosshair },
  { label: 'Connectors', icon: Plug },
  { label: 'Motors', icon: Cpu },
  { label: 'Wheels', icon: CircleDot },
  { label: 'Other Mechanical Parts', icon: Settings },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function SalesSupplies() {
  return (
    <section id="sales" className="section-padding bg-white">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Sales & Supplies
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Quality parts and accessories for NDT equipment
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {salesItems.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="flex flex-col items-center p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-primary/10 rounded-lg mb-3 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-secondary text-sm sm:text-base font-medium text-center">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
