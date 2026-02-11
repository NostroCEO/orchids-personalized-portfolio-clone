'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/lang-context';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

const experiencesFr: ExperienceItem[] = [
  {
    title: 'Growth Marketing & Content Manager',
    company: 'Ceram Pierre',
    period: '2025',
    bullets: [
      'SEO & Content Strategy : Refonte de la strategie semantique. Redaction de contenus experts ayant propulse le site en Top 1 Google (+200% de trafic organique).',
      'User Experience : Optimisation de l\'accessibilite web via une plateforme ultra-performante (Lighthouse 98/100).',
      'Pilotage de la roadmap digitale et analyse des KPIs d\'acquisition.',
    ],
  },
  {
    title: 'Freelance Brand Content Strategist & IA',
    company: 'Independant (Creative Studio)',
    period: '2024 – Present',
    bullets: [
      'Daily Vibe Coding : Creation d\'app iOS et Web App, automatisations sur-mesure pour accelerer des workflows.',
      'Visual Storytelling : Conception de campagnes Motion Design pour engager les audiences.',
      'AI Workflows : Creations d\'automatisations (n8n + OpenRouter) pour la production de contenu a grande echelle.',
    ],
  },
  {
    title: 'Internal Comms & Content Lead',
    company: 'GROUPE IDEC (700 collaborateurs)',
    period: '2023 – 2024',
    bullets: [
      'Content Factory (Video & Print) : Production de supports Video de A a Z (Captation iPhone, montage Premiere Pro, storyboard, interviews metiers/chantier) et creation de supports Print.',
      'Web & Marque Employeur : Rebranding complet de l\'espace "Carriere" (UX/UI). Benchmark concurrentiel et Community Management pour booster l\'attractivite RH.',
      'Communication 360° : Gestion de l\'Intranet (Newsletters, Interviews) et evenementiel (Salons recrutement, Journees d\'integration).',
    ],
  },
  {
    title: 'Community Manager & Digital Lead',
    company: 'Chambre de Commerce et d\'Industrie',
    period: '2021 – 2022',
    bullets: [
      'Community Growth : Animation des reseaux sociaux et newsletters. Creation de lien direct entre l\'institution et le tissu economique local.',
      'Event Comms : Organisation d\'evenements pour la notoriete.',
    ],
  },
];

const experiencesEn: ExperienceItem[] = [
  {
    title: 'Growth Marketing & Content Manager',
    company: 'Ceram Pierre',
    period: '2025',
    bullets: [
      'SEO & Content Strategy: Revamped semantic strategy. Expert content writing that pushed the site to Google Top 1 (+200% organic traffic).',
      'User Experience: Web accessibility optimization through an ultra-performant platform (Lighthouse 98/100).',
      'Digital roadmap management and acquisition KPI analysis.',
    ],
  },
  {
    title: 'Freelance Brand Content Strategist & AI',
    company: 'Independent (Creative Studio)',
    period: '2024 – Present',
    bullets: [
      'Daily Vibe Coding: iOS and Web App creation, custom automations to accelerate workflows.',
      'Visual Storytelling: Motion Design campaigns to engage audiences.',
      'AI Workflows: Building automations (n8n + OpenRouter) for large-scale content production.',
    ],
  },
  {
    title: 'Internal Comms & Content Lead',
    company: 'GROUPE IDEC (700 employees)',
    period: '2023 – 2024',
    bullets: [
      'Content Factory (Video & Print): End-to-end video production (iPhone capture, Premiere Pro editing, storyboard, field interviews) and print material creation.',
      'Web & Employer Brand: Complete "Career" space rebranding (UX/UI). Competitive benchmark and Community Management to boost HR attractiveness.',
      'Communication 360°: Intranet management (Newsletters, Interviews) and events (Recruitment fairs, Integration days).',
    ],
  },
  {
    title: 'Community Manager & Digital Lead',
    company: 'Chamber of Commerce and Industry',
    period: '2021 – 2022',
    bullets: [
      'Community Growth: Social media and newsletter management. Building direct links between the institution and local businesses.',
      'Event Comms: Organizing events for brand awareness.',
    ],
  },
];

export default function Experience() {
  const { locale } = useLang();
  const experiences = locale === 'fr' ? experiencesFr : experiencesEn;
  const sectionTitle = locale === 'fr' ? 'EXPERIENCE' : 'EXPERIENCE';
  const sectionHeading = locale === 'fr' ? "Mon Parcours" : "Where I've Worked";

  return (
    <div className="w-full">
        <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
          {sectionTitle}
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

      <div className="relative mt-10 ml-4 border-l border-gray-700">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative mb-12 pl-8 last:mb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-foreground bg-foreground" />

            {/* Header */}
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="text-lg font-semibold text-foreground">
                {exp.title}
              </h3>
                <span className="text-sm font-medium text-foreground">
                {exp.period}
              </span>
            </div>

            <p className="mt-0.5 text-sm text-muted-foreground">
              {exp.company}
            </p>

            {/* Bullets */}
            <ul className="mt-3 space-y-2">
              {exp.bullets.map((bullet, bIndex) => (
                <li key={bIndex} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
