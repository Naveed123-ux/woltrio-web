import React from 'react';
import { motion } from 'framer-motion';

const Curealog = () => {
  const title = "curealog";

  // --- STYLES ---
  const heroStyles = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // UPDATED: Gradient from the initial purple/blue color to black
    background: 'radial-gradient(ellipse at center, #2c205a 0%, #000000 60%, #000000 100%)',
    overflow: 'hidden',
  };

  const titleStyles = {
    fontSize: '6rem',
    fontWeight: '700',
  };

  const letterStyles = {
    display: 'inline-block',
    background: 'linear-gradient(to bottom, #ffffff, #c0c0c0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  };


  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };
  
  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 12 },
    },
  };

  return (
    <section style={heroStyles}>
      <motion.div
        className="container text-center text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.p className="lead mb-4" variants={childVariants}>
          One solution. One partner. One goal—your success
        </motion.p>

        <motion.h1
          style={titleStyles}
          variants={childVariants}
          aria-label={title}
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              style={letterStyles}
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.button
          className="btn border border-gray-500 rounded-full  rounded-pill mt-4 !px-7 !py-2"
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a demo
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Curealog;