import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import WhoWeAre from './sections/WhoWeAre';
import Services from './sections/Services';
import WhyWeeFlare from './sections/WhyWeeFlare';
import Partners from './sections/Partners';
import CaseStudies from './sections/CaseStudies';
import Testimonials from './sections/Testimonials';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import CaseStudyPage from './pages/CaseStudyPage';
import BlogPage from './pages/BlogPage';
import PartnershipPage from './pages/PartnershipPage';
import TeamPage from './pages/TeamPage';

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  useEffect(() => {
    // Initialize scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll('.animate-on-scroll'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Services />
      <WhyWeeFlare />
      <Partners />
      <CaseStudies />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
