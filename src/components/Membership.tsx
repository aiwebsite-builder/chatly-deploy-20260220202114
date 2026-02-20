import { motion } from 'framer-motion';
import { CheckCircle, Zap, Star } from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';

const tiers = [
  {
    name: 'Basic Flow',
    price: '$30',
    frequency: '/month',
    features: [
      'Access to all gym equipment',
      'Locker room facilities',
      'Basic fitness classes',
    ],
    icon: CheckCircle,
    color: 'text-gray-400',
  },
  {
    name: 'Power Pro',
    price: '$59',
    frequency: '/month',
    features: [
      'All Basic Flow features',
      'Unlimited premium classes',
      'Personalized workout plans',
      'Access to sauna & spa',
    ],
    icon: Zap,
    color: 'text-red-600',
    highlight: true,
  },
  {
    name: 'Elite Zen',
    price: '$99',
    frequency: '/month',
    features: [
      'All Power Pro features',
      '1-on-1 personal trainer sessions (2/month)',
      'Nutrition guidance',
      'Exclusive member events',
    ],
    icon: Star,
    color: 'text-yellow-400',
  },
];

export default function Membership() {
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
    <section className="bg-gray-900 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Choose Your <span className="text-red-600">Membership</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Find the perfect plan to match your fitness journey and unlock exclusive benefits.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {tiers.map((tier, index) => (
            <motion.div variants={itemVariants} key={tier.name}>
              <Card
                className={`flex flex-col h-full ${tier.highlight ? 'border-red-600 bg-gray-850' : ''}`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 right-0 left-0 text-center">
                    <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md -translate-y-1">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <tier.icon size={48} className={`mx-auto mb-4 ${tier.color}`} />
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400">{tier.price} <span className="font-medium">{tier.frequency}</span></p>
                </div>
                <ul className="text-gray-300 text-left space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={20} className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-auto" variant={tier.highlight ? 'primary' : 'secondary'}>
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
