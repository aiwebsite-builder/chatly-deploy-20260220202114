import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.3)' }}
      transition={{ duration: 0.3 }}
      className={`bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
};
