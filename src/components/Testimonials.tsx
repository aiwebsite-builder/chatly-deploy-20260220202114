import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card } from './Card';

const testimonials = [
  {
    name: 'Sarah J.',
    title: 'Long-time Member',
    quote: "VigorFlow has completely changed my life. The trainers are incredible, and the community keeps me motivated every single day. Highly recommend!",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    name: 'Mark T.',
    title: 'Fitness Enthusiast',
    quote: "The equipment at VigorFlow is top-notch, and I love the variety of classes. It's truly a premium fitness experience unlike any other gym I've tried.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    name: 'Emily R.',
    title: 'Beginner to Pro',
    quote: "As a beginner, I felt so welcomed. The personalized plans helped me gain confidence and reach goals I never thought possible. Best decision ever!",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
          Hear From Our <span className="text-red-600">Members</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real stories from real people who found their strength and community at VigorFlow.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div variants={itemVariants} key={index}>
              <Card className="flex flex-col items-center text-center">
                <Quote size={40} className="text-red-600 mb-6 opacity-70" />
                <p className="text-gray-200 text-lg italic mb-6 leading-relaxed flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center justify-center mt-auto pt-6 border-t border-gray-700 w-full">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-red-600 shadow-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
