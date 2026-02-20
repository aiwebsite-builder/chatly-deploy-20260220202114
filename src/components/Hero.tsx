import { motion } from 'framer-motion';
import { Button } from './Button';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28 radial-gradient-bg">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          className="text-center md:text-left relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Unleash Your <span className="text-red-600">Potential</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0"
            variants={itemVariants}
          >
            VigorFlow provides a state-of-the-art fitness experience designed to transform your body and mind. Join our community and achieve your goals.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" variants={itemVariants}>
            <Button>Start Your Free Trial</Button>
            <Button variant="secondary">View Classes</Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mt-12 md:mt-0 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-red-600/20 rounded-full blur-3xl opacity-50 z-0 scale-125"></div>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            alt="Dynamic gym workout scene"
            className="relative z-10 w-full max-w-md md:max-w-none h-[400px] md:h-[550px] object-cover rounded-3xl shadow-2xl border border-gray-700 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
          />
        </motion.div>
      </div>
    </section>
  );
}
