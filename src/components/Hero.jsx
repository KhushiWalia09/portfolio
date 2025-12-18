import { useEffect, useRef } from "react";
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
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)"; // Dark particles
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

              if (distance < 100) {
                  ctx.beginPath();
                  ctx.strokeStyle = `rgba(0, 0, 0, ${1 - distance / 100})`; // Fade line
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

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">Hi, I'm </span>
          <span className="name">Khushi Walia</span>
        </h1>
        <p className="hero-subtitle"><b>BCA Student | Aspiring Web Developer</b></p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
          <a href="#about" className="btn third">About Me</a>
        </div>
      </div>
    </section>
  );
}
export default Hero;