import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
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

    // Cleanup
    return () => {
      navObserver.disconnect();
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
      <Achievements />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
