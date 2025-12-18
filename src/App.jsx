import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  // Theme handling + scroll control + observers
  useEffect(() => {
    // Apply theme
    document.documentElement.setAttribute("data-theme", theme);

    // Prevent scroll during initial load
    document.body.style.overflow = "hidden";

    // Prevent browser auto-scroll
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Clear hash if any
    if (window.location.hash) {
      history.replaceState(null, null, " ");
    }

    // Force scroll to top
    window.scrollTo(0, 0);

    // Re-enable scroll after load
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }, 100);
    });

    // Active nav link observer
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              if (link.dataset.link === entry.target.id) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => navObserver.observe(section));

    // Scroll-reveal animation observer
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: unobserve after revealing (one-time animation)
            // revealObserver.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.15,  // Trigger when 15% of element is visible
        rootMargin: '0px 0px -50px 0px'  // Trigger slightly before element enters viewport
      }
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    // Cleanup
    return () => {
      navObserver.disconnect();
      revealObserver.disconnect();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
