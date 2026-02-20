import { motion } from 'framer-motion';
import { Button } from './Button';

export default function CallToAction() {
  return (
    <section className="bg-red-600 py-20 md:py-28 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-pattern-dots transform scale-150 animate-pulse-slow"></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Start Your <span className="text-gray-900">Transformation?</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-10 text-red-100 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join VigorFlow today and take the first step towards a stronger, healthier you.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="secondary" className="bg-white text-red-600 hover:bg-red-100 border-white hover:border-red-100 shadow-lg">
            Join VigorFlow Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
