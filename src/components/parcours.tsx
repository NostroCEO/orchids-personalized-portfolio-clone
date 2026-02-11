'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/lang-context';
import {
  Building2,
  Megaphone,
  Palette,
  Cpu,
} from 'lucide-react';

interface ParcoursStep {
  year: string;
  title: string;
  company: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const parcoursFr: ParcoursStep[] = [
  {
    year: '2021 – 2022',
    title: 'Community Manager & Digital Lead',
    company: 'CCI',
    icon: <Megaphone className="h-5 w-5" />,
  },
  {
    year: '2023 – 2024',
    title: 'Content Factory & Communication Interne',
    company: 'Groupe IDEC',
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    year: '2024 – Auj.',
    title: 'Brand Content Strategist & IA',
    company: 'Freelance – SCPF',
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    year: '2025',
    title: 'Growth Marketing & Création de contenu',
    company: 'Ceram Pierre',
    icon: <Palette className="h-5 w-5" />,
    highlight: true,
  },
];

const parcoursEn: ParcoursStep[] = [
  {
    year: '2021 – 2022',
    title: 'Community Manager & Digital Lead',
    company: 'CCI',
    icon: <Megaphone className="h-5 w-5" />,
  },
  {
    year: '2023 – 2024',
    title: 'Content Factory & Internal Comms',
    company: 'Groupe IDEC',
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    year: '2024 – Now',
    title: 'Brand Content Strategist & AI',
    company: 'Freelance – SCPF',
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    year: '2025',
    title: 'Growth Marketing & Content Creation',
    company: 'Ceram Pierre',
    icon: <Palette className="h-5 w-5" />,
    highlight: true,
  },
];

export default function Parcours() {
  const { locale } = useLang();
  const steps = locale === 'fr' ? parcoursFr : parcoursEn;
  const sectionLabel = locale === 'fr' ? 'PARCOURS' : 'JOURNEY';
  const sectionHeading = locale === 'fr' ? 'Mon Parcours' : 'My Journey';

  return (
    <div className="w-full">
      <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
        {sectionLabel}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
        {sectionHeading.split(' ').map((word, i, arr) =>
          i === arr.length - 1 ? (
            <span key={i} className="italic"> {word}</span>
          ) : (
            <span key={i}>{i > 0 ? ' ' : ''}{word}</span>
          )
        )}
      </h2>

      <div className="mt-10">
        {/* Desktop: horizontal */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[44px] h-0.5 bg-gray-200 dark:bg-gray-800" />
            <div className="flex justify-between">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                  style={{ width: `${100 / steps.length}%` }}
                >
                  <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                    {`Exp. ${index + 1}`}
                  </span>
                  <div
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                      step.highlight
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-gray-300 bg-white text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span className="mt-3 text-xs font-bold uppercase tracking-wider text-foreground">
                    {step.year}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold text-foreground leading-tight px-1">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {step.company}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden relative ml-6 border-l border-gray-200 dark:border-gray-800">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative mb-8 pl-8 last:mb-0"
            >
              <div
                className={`absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  step.highlight
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-gray-300 bg-white text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400'
                }`}
              >
                {step.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                {step.year}
              </span>
              <h3 className="text-sm font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground">{step.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
