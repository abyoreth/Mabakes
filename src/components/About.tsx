import { motion } from 'motion/react';
import { Heart, Award, Clock } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every creation is crafted with passion and attention to detail'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest ingredients go into our baked goods'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Baked fresh every day to ensure the best taste and quality'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">About Us</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Welcome to MA Bakes! We are a passionate bakery dedicated to creating delicious, 
            beautiful desserts that make your celebrations unforgettable. With years of experience 
            and a commitment to quality, we transform simple ingredients into extraordinary treats.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg hover:bg-pink-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
