import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#141413] flex flex-col selection:bg-[#D9480F]/15 selection:text-[#141413]">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#D9480F] focus:text-white focus:rounded-md focus:shadow-md focus:outline-none text-sm font-medium"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Areas */}
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
