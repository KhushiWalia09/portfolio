import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let mouseX = 0;
    let mouseY = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Constellation Effect (Dark)
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 0.5 - 0.25;
        this.vy = Math.random() * 0.5 - 0.25;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Mouse interaction
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * 1;
          this.y += Math.sin(angle) * 1;
        }

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        const theme = document.documentElement.getAttribute("data-theme");
        ctx.fillStyle = theme === "light" ? "rgba(79, 70, 229, 0.3)" : "rgba(255, 255, 255, 0.3)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = [];
    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
          particle.update();
          particle.draw();

          // Connect particles
          for (let j = index + 1; j < particles.length; j++) {
              const p2 = particles[j];
              const dx = particle.x - p2.x;
              const dy = particle.y - p2.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 120) {
                  const theme = document.documentElement.getAttribute("data-theme");
                  const color = theme === "light" ? "79, 70, 229" : "255, 255, 255";
                  ctx.beginPath();
                  ctx.strokeStyle = `rgba(${color}, ${0.2 - distance / 600})`; 
                  ctx.lineWidth = 0.5;
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.stroke();
              }
          }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const photoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="greeting">Crafting Digital Experiences</span>
            <span className="name">Khushi Walia</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Full-Stack Developer Specializing in <b>Modern Web Applications</b> & <b>Intelligent Solutions</b>.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a 
              href="#projects" 
              className="btn primary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Explore My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn secondary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get In Touch
            </motion.a>
            <motion.a 
              href="/resume.pdf" 
              className="btn outline"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              target="_blank"
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          variants={photoVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="profile-wrapper glass-card">
            <div className="profile-placeholder">
              {/* Profile image placeholder */}
              <div className="glow-effect"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;