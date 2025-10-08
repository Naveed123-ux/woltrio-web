import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt, faHeartbeat, faUsers, faBrain } from '@fortawesome/free-solid-svg-icons';

// We need an even number of features for a perfect 2-card slider. Let's add one more.
const features = [
  {
    icon: faMicrophoneAlt,
    title: 'Voice-powered Services',
    description: 'AI-driven, hands-free support for documentation and clinical tasks.',
  },
  {
    icon: faHeartbeat,
    title: 'Population Health Support',
    description: 'Coordinate care for patient populations of any size across multiple EHRs.',
  },
  {
    icon: faUsers,
    title: 'Patient Engagement',
    description: 'Improve communication and empower patients with intuitive, accessible tools.',
  },
  {
    icon: faBrain,
    title: 'Intelligent Diagnostics',
    description: 'Leverage machine learning to assist in faster and more accurate diagnostics.',
  },
];

const CurealogCapabilities = () => {
  const cardsPerPage = 2;
  const totalPages = Math.ceil(features.length / cardsPerPage);
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };
  
  const startIndex = page * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleFeatures = features.slice(startIndex, endIndex);

  // --- STYLES ---
  const primaryOrange = '#FF6600';

  const sectionStyles = {
    backgroundColor: '#000000', // Black background
    padding: '6rem 0',
    overflow: 'hidden', // Important for animations
  };

  const headerStyles = {
    color: primaryOrange,
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  };

  const mainTitleStyles = {
    color: '#FFFFFF', // White text
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '1rem',
  };

  const descriptionStyles = {
    color: '#a0a0a0', // Light grey text
    fontSize: '1.15rem',
    maxWidth: '700px',
    margin: '0 auto 4rem auto',
  };

  const cardStyles = {
    backgroundColor: '#1c1c1c', // Dark charcoal card
    border: '1px solid #333',
    borderRadius: '1rem',
    padding: '2.5rem',
    textAlign: 'left',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const iconContainerStyles = {
    backgroundColor: primaryOrange,
    color: '#fff',
    borderRadius: '50%',
    width: '3.5rem',
    height: '3.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
  };

  const cardTitleStyles = {
    color: '#f5f5f5',
    fontSize: '1.75rem',
    fontWeight: '600',
    marginBottom: '1rem',
  };

  const cardDescriptionStyles = {
    color: '#a0a0a0',
    fontSize: '1rem',
    flexGrow: 1,
    marginBottom: '2rem',
  };
  
  const learnMoreLinkStyles = {
    color: primaryOrange,
    textDecoration: 'none',
    fontWeight: '600',
  };

  // --- ANIMATION VARIANTS ---
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      style={sectionStyles}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container text-center">
        {/* Header */}
        <motion.p style={headerStyles} variants={itemVariants}>
          Curealog
        </motion.p>
        <motion.h2 style={mainTitleStyles} variants={itemVariants}>
          Expanded Capabilities
        </motion.h2>
        <motion.p style={descriptionStyles} variants={itemVariants}>
          Get more done with less time and effort with these fully integrated, AI-powered tools and services.
        </motion.p>

        {/* Card Slider */}
        <div className="row justify-content-center align-items-center g-4">
          {/* Previous Button */}
          <div className="col-auto">
            <motion.button onClick={prevPage} className="btn max-md:!hidden btn-outline-light rounded-circle" style={{ width: '3rem', height: '3rem' }} whileHover={{ scale: 1.1, backgroundColor: '#333' }} whileTap={{ scale: 0.9 }}>
              &larr;
            </motion.button>
          </div>

          {/* Card Container */}
          <div className="col-10 col-lg-8">
            <div className="row g-4">
              <AnimatePresence mode="wait">
                {visibleFeatures.map((feature, i) => (
                  <motion.div
                    key={page * cardsPerPage + i} // Unique key for AnimatePresence
                    className="col-md-6 d-flex" // Max 2 cards
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                  >
                    <motion.div style={cardStyles} whileHover={{ y: -5, borderColor: primaryOrange }}>
                      <div style={iconContainerStyles}> <FontAwesomeIcon icon={feature.icon} /> </div>
                      <h3 style={cardTitleStyles}>{feature.title}</h3>
                      <p style={cardDescriptionStyles}>{feature.description}</p>
                      <a href="#" style={learnMoreLinkStyles}> Learn more &rarr; </a>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Next Button */}
          <div className="col-auto">
            <motion.button onClick={nextPage} className="btn btn-warning rounded-circle !text-2xl max-md:!hidden !text-white !rounded-full" style={{ width: '3.5rem', height: '3.5rem', backgroundColor: primaryOrange, borderColor: primaryOrange }} whileHover={{ scale: 1.1, filter: 'brightness(1.1)' }} whileTap={{ scale: 0.9 }}>
              &rarr;
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CurealogCapabilities;