import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section className="bg-gray-900 py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Explore Our <span className="text-red-600">Facilities</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A glimpse into the premium environment where you'll achieve your fitness milestones.
        </motion.p>

        <motion.div
          className="relative group perspective-1000"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            className="absolute inset-0 bg-red-600/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
            style={{ transform: 'translateZ(-50px)' }}
          ></motion.div>
          <motion.img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
            alt="Gym interior with modern equipment"
            className="relative z-10 w-full max-w-5xl mx-auto h-[400px] md:h-[600px] object-cover rounded-3xl shadow-2xl border border-gray-700
                       transform rotate-x-6 rotate-z-2 group-hover:rotate-x-0 group-hover:rotate-z-0 transition-transform duration-700 ease-out"
          />
        </motion.div>
      </div>
    </section>
  );
}
