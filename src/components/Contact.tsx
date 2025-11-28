import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export function Contact() {
  const handleWhatsApp = () => {
    // Replace with your actual WhatsApp number (international format without + or -)
    const phoneNumber = '1234567890';
    const message = encodeURIComponent('Hi! I would like to order from MA Bakes.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Get In Touch</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Ready to order or have questions? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="bg-pink-500 text-white p-3 rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="mb-1">Phone</h3>
                <p className="text-gray-600">+1 (234) 567-8900</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-500 text-white p-3 rounded-full">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="mb-1">Email</h3>
                <p className="text-gray-600">hello@mabakes.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-500 text-white p-3 rounded-full">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="mb-1">Location</h3>
                <p className="text-gray-600">123 Sweet Street, Bakery Town, BT 12345</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors w-full justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your order..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-gray-600"
        >
          <p>&copy; 2024 MA Bakes. All rights reserved. Made with ❤️ and flour.</p>
        </motion.div>
      </div>
    </section>
  );
}
