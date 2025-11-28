import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1572978577832-287ca6539e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjdXBjYWtlcyUyMGRpc3BsYXl8ZW58MXx8fHwxNzY0MzIwMjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Bakery Display"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="mb-6">MA Bakes</h1>
        <p className="mb-8 max-w-2xl mx-auto">
          Handcrafted desserts made with love and the finest ingredients. 
          From custom cakes to artisan pastries, we bring sweetness to your special moments.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition-colors"
        >
          Order Now
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
