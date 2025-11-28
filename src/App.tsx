import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { WhatsAppButton } from './components/WhatsAppButton';
import { motion } from 'motion/react';

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-pink-50 to-white"
    >
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Contact />
      <WhatsAppButton />
    </motion.div>
  );
}
