import { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Preloader from "./components/Preloader";
import {
  SeekingOpportunitiesSkeleton,
  AboutSkeleton,
  EducationSkeleton,
  ExperienceSkeleton,
  HighlightsSkeleton,
  SkillsSkeleton,
  ProjectsSkeleton,
  ContactSkeleton,
  FooterSkeleton,
  LearningsTestimonialsSkeleton,
} from "./components/Skeletons";

// Lazy loaded components below the fold
const SeekingOpportunities = lazy(() => import("./components/SeekingOpportunities"));
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Highlights = lazy(() => import("./components/Highlights"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const LearningsTestimonials = lazy(() => import("./components/LearningsTestimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [theme, setTheme] = useState("dark");
  const [isAppLoading, setIsAppLoading] = useState(true);

  // Theme handling
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Prevent scroll during initial load
  useEffect(() => {
    if (isAppLoading) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [isAppLoading]);

  // Scroll restorations & observers
  useEffect(() => {
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
      { threshold: 0.25 }
    );

    sections.forEach((section) => navObserver.observe(section));

    // Cleanup
    return () => {
      navObserver.disconnect();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isAppLoading && <Preloader onComplete={() => setIsAppLoading(false)} />}
      </AnimatePresence>

      <Header toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      
      <Suspense fallback={<AboutSkeleton />}>
        <About />
      </Suspense>

      <Suspense fallback={<SeekingOpportunitiesSkeleton />}>
        <SeekingOpportunities />
      </Suspense>
      
      <Suspense fallback={<ExperienceSkeleton />}>
        <Experience />
      </Suspense>
      
      <Suspense fallback={<EducationSkeleton />}>
        <Education />
      </Suspense>
      
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<SkillsSkeleton />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<HighlightsSkeleton />}>
        <Highlights />
      </Suspense>
      
      <Suspense fallback={<LearningsTestimonialsSkeleton />}>
        <LearningsTestimonials />
      </Suspense>
      
      <Suspense fallback={<ContactSkeleton />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
