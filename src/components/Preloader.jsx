import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Preloader.css";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    // Fast but natural looking progress simulation
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 8) + 4;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 500); // visual buffer after hitting 100%
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  const name = "KHUSHI WALIA";

  const overlayVariants = {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      y: -30,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const contentVariants = {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      className="preloader-overlay"
      variants={overlayVariants}
      initial="initial"
      exit="exit"
    >
      <motion.div className="preloader-inner" variants={contentVariants}>
        {/* Glowing Logo Badge */}
        <div className="preloader-logo-container">
          <motion.div
            className="preloader-logo glass-card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="preloader-logo-text">KW</span>
          </motion.div>
          <div className="preloader-logo-glow"></div>
        </div>

        {/* Staggered Name Characters */}
        <div className="preloader-name">
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              className="preloader-char"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.1 + index * 0.04,
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        {/* Loading Progress Bar */}
        <div className="preloader-progress-track">
          <motion.div
            className="preloader-progress-bar"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.1 }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="preloader-percentage-text">
          <span className="preloader-number">{progress}</span>
          <span className="preloader-percent">%</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
