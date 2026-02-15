import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, Phone, User, Loader2, CheckCircle2 } from 'lucide-react'

const RECIPIENT_EMAIL = 'jassimalbin@gmail.com'
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '5ebfcd69-82b3-4fb8-b65b-5040e67954b9'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const initialErrors = { ...initialForm }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [showToast, setShowToast] = useState(false)

  const validate = () => {
    const newErrors = { ...initialErrors }
    let isValid = true

    if (!form.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email'
      isValid = false
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required'
      isValid = false
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitError('')
    setIsSubmitting(true)

    try {
      if (WEB3FORMS_ACCESS_KEY) {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: form.name,
            email: form.email,
            subject: '[CTS] Contact / Quote Inquiry',
            message: `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage / Equipment Details:\n${form.message}`,
          }),
        })
        const data = await res.json()
        if (!data.success) throw new Error(data.message || 'Failed to send')
        setIsSubmitted(true)
        setForm(initialForm)
        setErrors(initialErrors)
        setShowToast(true)
        setTimeout(() => setShowToast(false), 4000)
      } else {
        const mailto = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent('[CTS] Contact / Quote Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage / Equipment Details:\n${form.message}`)}`
        window.location.href = mailto
        setIsSubmitted(true)
        setForm(initialForm)
        setErrors(initialErrors)
        setShowToast(true)
        setTimeout(() => setShowToast(false), 4000)
      }
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Send us an inquiry and we'll respond promptly
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8"
        >
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="inline-flex p-4 bg-green-100 rounded-full mb-4">
                <Send className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Message Sent Successfully
              </h3>
              <p className="text-secondary">
                We'll get back to you within 24–48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary mb-1"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                        errors.name ? 'border-accent' : 'border-gray-200'
                      } focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition`}
                      placeholder="Your name"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-accent text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary mb-1"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                        errors.email ? 'border-accent' : 'border-gray-200'
                      } focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition`}
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-accent text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-primary mb-1"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                      errors.phone ? 'border-accent' : 'border-gray-200'
                    } focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition`}
                    placeholder="+91 98765 43210"
                  />
                </div>
                {errors.phone && (
                  <p className="text-accent text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-1"
                >
                  Message / Equipment Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.message ? 'border-accent' : 'border-gray-200'
                  } focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition resize-none`}
                  placeholder="Describe your requirements or equipment details..."
                />
                {errors.message && (
                  <p className="text-accent text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {submitError && (
                <p className="text-accent text-sm text-center">{submitError}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 bg-primary text-white rounded-xl shadow-lg border border-white/20"
            >
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div>
                <p className="font-semibold">Message Sent Successfully</p>
                <p className="text-sm text-secondary">We'll respond within 24–48 hours.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
