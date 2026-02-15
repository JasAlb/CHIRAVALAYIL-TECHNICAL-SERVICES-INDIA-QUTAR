import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-primary text-white section-padding"
    >
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Chiravalayil Technical Services</h3>
            <p className="text-secondary text-sm leading-relaxed">
              NDT Equipment Sales, Service, Calibration & Repair
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-secondary text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Nedumkunnam, Kottayam,
                  <br />
                  Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <a href="tel:+919446922819" className="hover:text-white transition-colors">
                    Bincy John: +91 94469 22819
                  </a>
                  <br />
                  <a href="tel:+96895779028" className="hover:text-white transition-colors">
                    John Jacob: +968 95779 028
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:chiravalayil@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  chiravalayil@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-secondary text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-white transition-colors">
                  Equipment
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#sales" className="hover:text-white transition-colors">
                  Sales & Supplies
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-secondary text-sm">
          <p>© {new Date().getFullYear()} Chiravalayil Technical Services. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}
