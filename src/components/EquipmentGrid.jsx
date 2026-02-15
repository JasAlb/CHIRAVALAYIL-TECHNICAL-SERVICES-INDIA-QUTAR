import { motion } from 'framer-motion'
import {
  Radio,
  Magnet,
  Zap,
  Wrench,
} from 'lucide-react'

const equipmentCategories = [
  {
    title: 'Auto UT Systems',
    icon: Radio,
    items: ['Silverwing RMS', 'B-Scan', 'AUT Solutions', 'Jireh Scanners'],
  },
  {
    title: 'Magnetic Flux Leakage (MFL)',
    icon: Magnet,
    items: [
      'Floor Mapping: Silverwing, MFE',
      'Hand/Pipe Scanners: Silverwing, 3P',
    ],
  },
  {
    title: 'Advanced Tube Inspection',
    icon: Zap,
    items: ['Olympus MS-5800', 'EDDYFI Ectane'],
  },
  {
    title: 'Advanced NDT',
    icon: Wrench,
    items: [
      'Pulse Eddy Current',
      'Eddy Current Flaw detector',
      'Vacuum Box Testing',
      'Magnetic Yokes & Accessories',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function EquipmentGrid() {
  return (
    <section id="equipment" className="section-padding bg-gray-50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Equipment We Handle
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Leading brands and technologies in NDT inspection
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {equipmentCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-primary text-lg">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-secondary flex items-center gap-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
