import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <motion.h3
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              VigorFlow
            </motion.h3>
            <motion.p
              className="text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Unleash your potential with VigorFlow – your ultimate destination for fitness and wellness.
            </motion.p>
          </div>

          <div>
            <motion.h4
              className="text-xl font-semibold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul
              className="space-y-3 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <li><a href="#" className="hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Classes</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Contact</a></li>
            </motion.ul>
          </div>

          <div>
            <motion.h4
              className="text-xl font-semibold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Connect
            </motion.h4>
            <motion.div
              className="flex justify-center md:justify-start space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                <Youtube size={24} />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          &copy; {new Date().getFullYear()} VigorFlow. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
