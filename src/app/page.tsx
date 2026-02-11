'use client';

import { Suspense } from 'react';
import Presentation from '@/components/presentation';
import Skills from '@/components/skills';
import Resume from '@/components/resume';
import Contact from '@/components/contact';
import AvailabilityCard from '@/components/AvailabilityCard';
import Projects from '@/components/projects';
import Expertise from '@/components/expertise';
import Strategy from '@/components/strategy';
import SoftSkills from '@/components/soft-skills';
import Experience from '@/components/experience';
import Parcours from '@/components/parcours';
import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';
import { LangProvider } from '@/lib/lang-context';

const Section = ({ id, children, delay = 0.1 }: { id: string; children: React.ReactNode; delay?: number }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.section>
);

export default function Home() {
  return (
    <LangProvider>
      <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
        <Navbar />

        {/* Spacer for fixed navbar */}
        <div className="h-16" />

        <div className="w-full max-w-5xl px-4 sm:px-6 py-8 space-y-16">
          <section id="presentation">
            <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100 rounded-2xl" />}>
              <Presentation />
            </Suspense>
            </section>

            <Section id="parcours">
              <Parcours />
            </Section>

              <Section id="experience">
              <Experience />
            </Section>

            <Section id="expertise">
              <Expertise />
            </Section>

          <Section id="skills">
            <Skills />
          </Section>

          <Section id="strategy">
            <Strategy />
          </Section>

          <Section id="soft-skills">
            <SoftSkills />
          </Section>

          <Section id="projects">
            <Projects />
          </Section>

          <Section id="availability">
            <AvailabilityCard />
          </Section>

          <Section id="resume">
            <Resume />
          </Section>

          <Section id="contact">
            <Contact />
          </Section>
        </div>
      </main>
    </LangProvider>
  );
}
