import React from 'react';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.2,0.9,0.3,1] } },
};

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      data-anim="zoom-in"
    >
      <div className="hero-inner">
        <motion.img
          className="hero-image"
          alt="group"
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.7 }}
        />

        <motion.div
          className="hero-overlay"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.18, 0.26, 0.18] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ x: -18, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BICE 2024
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Notices, classroom codes & exam schedules — beautifully presented.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <motion.a
              href="#courses"
              className="btn primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              View Classroom Codes
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
