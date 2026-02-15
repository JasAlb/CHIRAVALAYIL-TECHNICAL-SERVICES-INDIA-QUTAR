import { motion } from 'framer-motion'
import { Award, Globe, Quote } from 'lucide-react'

const ctsImage = '/images/cts-main.jpeg'

const highlights = [
  {
    value: '25+',
    label: 'Years Experience',
    icon: Award,
  },
  {
    value: 'International',
    label: 'Expertise (Eddyfi/Silverwing Middle East)',
    icon: Globe,
  },
]

export default function CTSDifference() {
  return (
    <section id="expertise" className="section-padding bg-primary">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The CTS Difference
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Trusted expertise in NDT solutions worldwide
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-1 flex justify-center"
          >
            <div className="bg-white rounded-xl shadow-xl border-2 border-white/30 p-4 inline-block">
              <img
                src={ctsImage}
                alt="Chiravalayil Technical Services - NDT Equipment"
                className="block w-auto h-auto max-w-full max-h-[320px] rounded-lg object-contain"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                width={400}
                height={400}
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
          <div className="lg:col-span-2 space-y-6">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="p-4 bg-white/20 rounded-lg">
                <item.icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="text-secondary">{item.label}</p>
              </div>
            </div>
          ))}
          </div>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Quote className="w-12 h-12 text-accent mx-auto mb-4 opacity-80" />
          <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed italic">
            "Quality service is our priority. True quality and care are found here."
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}
