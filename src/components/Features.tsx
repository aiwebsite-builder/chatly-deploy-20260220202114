import { motion } from 'framer-motion';
import { Dumbbell, Clock, Coffee, ShieldCheck, HeartPulse, User } from 'lucide-react';
import { Card } from './Card';

const features = [
  {
    icon: Dumbbell,
    title: 'State-of-the-Art Equipment',
    description: 'Access to the latest and most advanced fitness machinery and free weights for all muscle groups.',
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Train anytime, day or night, with our secure 24-hour access for members.',
  },
  {
    icon: Coffee,
    title: 'Nutritional Support',
    description: 'Expert guidance and personalized plans to fuel your body and optimize results.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified Trainers',
    description: 'Work with highly qualified and experienced personal trainers committed to your success.',
  },
  {
    icon: HeartPulse,
    title: 'Diverse Group Classes',
    description: 'From HIIT to Yoga, discover a wide range of classes for all fitness levels and interests.',
  },
  {
    icon: User,
    title: 'Vibrant Community',
    description: 'Join a supportive and motivating community that pushes you to be your best.',
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="bg-gray-950 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-red-600">VigorFlow?</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We offer more than just a gym; we provide a holistic environment for your health and wellness journey.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div variants={itemVariants} key={index}>
              <Card>
                <feature.icon size={48} className="text-red-600 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
