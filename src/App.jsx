import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EquipmentGrid from './components/EquipmentGrid'
import ServiceHighlights from './components/ServiceHighlights'
import SalesSupplies from './components/SalesSupplies'
import CTSDifference from './components/CTSDifference'
import ImageGallery from './components/ImageGallery'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <EquipmentGrid />
        <ServiceHighlights />
        <SalesSupplies />
        <CTSDifference />
        <ImageGallery />
        <ContactForm />
        <Footer />
      </main>
    </div>
  )
}

export default App
