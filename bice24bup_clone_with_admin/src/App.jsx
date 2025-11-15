import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursesTable from './components/CoursesTable';
import NoticeTable from './components/NoticeTable';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('[data-anim]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="site">
      <Navbar />
      <ThemeToggle />

      <main>
        <AnimatePresence>
          <Hero />
        </AnimatePresence>

        <section className="content-section" data-anim="slide-up">
          <h2 className="section-title">Classroom Codes</h2>
          <CoursesTable />
        </section>

        <section className="content-section" data-anim="fade-in">
          <h2 className="section-title">Recent Exam Schedule</h2>
          <p className="muted">No upcoming exams.</p>
        </section>

        <section className="content-section" data-anim="slide-up">
          <h2 className="section-title">Notice</h2>
          <NoticeTable />
        </section>
      </main>

      <Footer />
    </div>
  );
}
