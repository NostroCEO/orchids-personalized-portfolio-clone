'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import LangToggle from '@/components/lang-toggle';

const sections = [
  { id: 'presentation', labelFr: 'Profil', labelEn: 'Profile' },
  { id: 'experience', labelFr: 'Parcours', labelEn: 'Experience' },
  { id: 'expertise', labelFr: 'Expertise', labelEn: 'Expertise' },
  { id: 'skills', labelFr: 'Compétences', labelEn: 'Skills' },
  { id: 'projects', labelFr: 'Réalisations', labelEn: 'Projects' },
  { id: 'resume', labelFr: 'CV', labelEn: 'Resume' },
  { id: 'contact', labelFr: 'Contact', labelEn: 'Contact' },
];

export default function Navbar() {
  const { locale: lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50 dark:border-gray-800/50'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-bold tracking-tight text-foreground"
          >
            Umit<span className="text-blue-500">.</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map(({ id, labelFr, labelEn }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-3 py-1.5 text-sm rounded-full transition-colors ${
                  activeSection === id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {lang === 'fr' ? labelFr : labelEn}
                {activeSection === id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-blue-50 dark:bg-blue-500/10 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <div className="ml-2">
              <LangToggle />
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <LangToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-foreground"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 md:hidden"
          >
            <div className="flex flex-col px-4 py-3 gap-1">
              {sections.map(({ id, labelFr, labelEn }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    activeSection === id
                      ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-muted-foreground hover:bg-gray-50 dark:hover:bg-gray-900'
                  }`}
                >
                  {lang === 'fr' ? labelFr : labelEn}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
