'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Globe, Linkedin, Phone, Briefcase, GraduationCap, Award, Cpu, BarChart3, Palette, Languages, Beaker } from 'lucide-react';
import { useLang } from '@/lib/lang-context';

export function Resume() {
  const { locale, t } = useLang();

    const cvData = locale === 'fr' ? {
      name: 'Umit Barlas',
      title: 'Content & Communication Manager',
      subtitle: 'Social Media | Video | IA',
      profile: 'Content Manager de 28 ans avec plus de 4 ans d\'experience en communication 360 (Social Media, Video, Strategie Editoriale). Gestion de communautes sur LinkedIn, X et Instagram. Creation de contenus visuels et video (formats pedagogiques, interviews, teasers, reels). Contribution a l\'evolution de l\'identite visuelle et editoriale. Passionne par l\'IA et son application dans la communication.',
    contact: {
      email: 'b3.umit@gmail.com',
      website: 'umit-barlas-portfolio.vercel.app',
      linkedin: 'Umit Barlas',
      phone: '+33 7 78 24 45 72',
    },
    certifications: [
      'Google (Marketing Ads)',
      'Hubspot Skillshop (CRM)',
      'Skillshop (AI Powered Perf Ads)',
      'Nvidia (AI Fundamentals with Jetson Nano)',
    ],
    aiSkills: [
      'Content Factory : Automation (n8n)',
      'Vibe Coding : Apps, Web, iOS, Android (Sub Agents, MCPs, Claude Code)',
      'Privacy : Local LLM via ClawdBot (Mac Mini)',
    ],
      marketingStack: {
        contentBrand: ['Community Management (LinkedIn, X, Instagram)', 'Storytelling & Copywriting', 'Strategie Editoriale (SEO)'],
        creativeTools: ['Videos courtes (interviews, teasers, reels)', 'Motion Design (After Effects)', 'Figma / Framer'],
        growthData: ['Suivi KPIs par canal', 'Analytics (GA4)', 'SEO/SEA'],
      },
    languages: ['Francais - Natif', 'Anglais - Courant'],
      experience: [
        {
          role: 'Growth Marketing & Content Manager',
          company: 'Ceram Pierre',
          period: '2025',
          points: [
            'SEO & Content Strategy : Refonte de la strategie semantique. Redaction de contenus experts ayant propulse le site en Top 1 Google (+200% de trafic organique).',
            'Communication Globale : Mise en avant des projets, outils et partenariats via contenus multi-formats.',
            'Pilotage de la roadmap digitale et analyse des KPIs d\'acquisition par canal.',
          ],
        },
        {
          role: 'Freelance Brand Content Strategist et IA',
          company: 'Independant (Creative Studio)',
          period: '2024 - Present',
          points: [
            'Social Media : Animation de communautes et creation de contenus adaptes a differentes audiences (institutions, associations, partenaires).',
            'Video & Visuel : Production de formats courts (teasers, reels, interviews) avec focus clarte et impact.',
            'AI Workflows : Automatisations (n8n + OpenRouter) pour la production de contenu a grande echelle.',
          ],
        },
        {
          role: 'Internal Comms & Content Lead',
          company: 'Groupe IDEC (700 collaborateurs)',
          period: '2023 - 2024',
          points: [
            'Content Factory (Video & Print) : Production de supports Video de A a Z (Captation, montage Premiere Pro, storyboard, interviews metiers). Design de visuels (posts sociaux, bannieres, supports de presentation).',
            'Community Management & Marque Employeur : Animation des reseaux sociaux. Rebranding de l\'espace "Carriere" (UX/UI). Adaptation des messages pour differents publics.',
            'Communication 360 : Gestion de l\'Intranet (Newsletters, Interviews), contribution a la strategie de communication globale et evenementiel.',
          ],
        },
        {
          role: 'Community Manager & Digital Lead',
          company: 'Chambre de Commerce et d\'Industrie',
          period: '2021 - 2022',
          points: [
            'Community Management : Animation des reseaux sociaux (LinkedIn, X). Planification et publication de contenus. Suivi de performance et amelioration continue des formats.',
            'Communication Institutionnelle : Support sur les materiaux institutionnels (site web, presentations, evenements). Lien direct entre l\'institution et le tissu economique local.',
          ],
        },
      ],
    projects: {
      title: 'Projets "Citizen Tech" & R&D',
      items: [
        {
          role: 'AI Lab & Communaute (Autodidacte)',
          subtitle: 'Veille Active & Projets Personnels',
          points: [
            'Mobile App Building : Developpement d\'applications iOS (React Native + Expo) pour maitriser l\'integration des LLMs et explorer le protocole MCP.',
            'Communaute IA : Membre actif de l\'ecosysteme parisien. Participation reguliere aux "Co-Working Cafes" de Cursor et conferences IA.',
          ],
        },
      ],
    },
    education: [
      { degree: 'Bachelor Communication & Marketing Digital', school: 'ESG Ecole de Commerce', year: '2023-2024' },
      { degree: 'Bachelor Lead Business Developer', school: 'CCI Campus France', year: '2021-2022' },
      { degree: 'BTS Commerce International', school: 'Choiseul Tours', year: '2018-2019' },
      { degree: 'Bac ES (Spe Maths)', school: 'Lycee Prive Notre Dame des Aydes', year: '2017-2018' },
    ],
    sectionTitles: {
      profile: 'Profil',
      contact: 'Contact',
      certifications: 'Certifications',
      aiSkills: 'AI Skills',
      marketingStack: 'Marketing Stack',
      languages: 'Langues',
      experience: 'Experience Marketing Impact',
      education: 'Formation',
    },
  } : {
      name: 'Umit Barlas',
      title: 'Content & Communication Manager',
      subtitle: 'Social Media | Video | AI',
      profile: '28-year-old Content Manager with 4+ years of experience in 360 communication (Social Media, Video, Editorial Strategy). Community management on LinkedIn, X and Instagram. Visual and video content creation (educational formats, interviews, teasers, reels). Contributing to visual and editorial identity evolution. Passionate about AI and its application in communication.',
    contact: {
      email: 'b3.umit@gmail.com',
      website: 'umit-barlas-portfolio.vercel.app',
      linkedin: 'Umit Barlas',
      phone: '+33 7 78 24 45 72',
    },
    certifications: [
      'Google (Marketing Ads)',
      'Hubspot Skillshop (CRM)',
      'Skillshop (AI Powered Perf Ads)',
      'Nvidia (AI Fundamentals with Jetson Nano)',
    ],
    aiSkills: [
      'Content Factory: Automation (n8n)',
      'Vibe Coding: Apps, Web, iOS, Android (Sub Agents, MCPs, Claude Code)',
      'Privacy: Local LLM via ClawdBot (Mac Mini)',
    ],
      marketingStack: {
        contentBrand: ['Community Management (LinkedIn, X, Instagram)', 'Storytelling & Copywriting', 'Editorial Strategy (SEO)'],
        creativeTools: ['Short-form video (interviews, teasers, reels)', 'Motion Design (After Effects)', 'Figma / Framer'],
        growthData: ['Per-channel KPI tracking', 'Analytics (GA4)', 'SEO/SEA'],
      },
    languages: ['French - Native', 'English - Fluent'],
    experience: [
        {
          role: 'Growth Marketing & Content Manager',
          company: 'Ceram Pierre',
          period: '2025',
          points: [
            'SEO & Content Strategy: Semantic strategy overhaul. Expert content writing that propelled the site to Google Top 1 (+200% organic traffic).',
            'Global Communication: Highlighting projects, tools and partnerships through multi-format content.',
            'Digital roadmap management and per-channel acquisition KPI analysis.',
          ],
        },
        {
          role: 'Freelance Brand Content Strategist & AI',
          company: 'Independent (Creative Studio)',
          period: '2024 - Present',
          points: [
            'Social Media: Community management and content creation adapted to diverse audiences (institutions, nonprofits, partners).',
            'Video & Visual: Short-form production (teasers, reels, interviews) focused on clarity and impact.',
            'AI Workflows: Automations (n8n + OpenRouter) for large-scale content production.',
          ],
        },
        {
          role: 'Internal Comms & Content Lead',
          company: 'Groupe IDEC (700 employees)',
          period: '2023 - 2024',
          points: [
            'Content Factory (Video & Print): End-to-end video production (capture, Premiere Pro editing, storyboard, interviews). Visual asset design (social posts, banners, presentation materials).',
            'Community Management & Employer Brand: Social media management. Career space rebranding (UX/UI). Messaging adapted to different audiences.',
            '360 Communication: Intranet management (newsletters, interviews), contributing to overall communication strategy and events.',
          ],
        },
        {
          role: 'Community Manager & Digital Lead',
          company: 'Chamber of Commerce and Industry',
          period: '2021 - 2022',
          points: [
            'Community Management: Social media management (LinkedIn, X). Content planning and publishing. Performance monitoring and continuous format improvement.',
            'Institutional Communication: Support on institutional materials (website, presentations, events). Building direct links between the institution and local business ecosystem.',
          ],
        },
      ],
    projects: {
      title: '"Citizen Tech" Projects & R&D',
      items: [
        {
          role: 'AI Lab & Community (Self-Taught)',
          subtitle: 'Active Watch & Personal Projects',
          points: [
            'Mobile App Building: iOS app development (React Native + Expo) to master LLM integration and explore MCP protocol.',
            'AI Community: Active member of the Paris ecosystem. Regular participation in Cursor "Co-Working Cafes" and AI conferences.',
          ],
        },
      ],
    },
    education: [
      { degree: 'Bachelor Communication & Digital Marketing', school: 'ESG Business School', year: '2023-2024' },
      { degree: 'Bachelor Lead Business Developer', school: 'CCI Campus France', year: '2021-2022' },
      { degree: 'BTS International Trade', school: 'Choiseul Tours', year: '2018-2019' },
      { degree: 'Bac ES (Math Specialization)', school: 'Lycee Prive Notre Dame des Aydes', year: '2017-2018' },
    ],
    sectionTitles: {
      profile: 'Profile',
      contact: 'Contact',
      certifications: 'Certifications',
      aiSkills: 'AI Skills',
      marketingStack: 'Marketing Stack',
      languages: 'Languages',
      experience: 'Marketing Impact Experience',
      education: 'Education',
    },
  };

    return (
    <div className="mx-auto w-full py-8 font-sans">
      {/* CV Rendered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg"
      >
        {/* Header bar */}
        <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">{t.resume.preview}</span>
          </div>
          <motion.button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1 text-xs bg-foreground text-background rounded-md hover:opacity-80 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="h-3 w-3" />
            PDF
          </motion.button>
        </div>

        {/* CV Content */}
        <div className="p-6 sm:p-8 text-foreground print:p-4">
          {/* Name & Title */}
          <div className="text-center mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">{cvData.name}</h1>
            <p className="text-base sm:text-lg font-medium text-muted-foreground mt-1">{cvData.title}</p>
            <span className="inline-block mt-2 px-3 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-muted-foreground rounded-full">
              {cvData.subtitle}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
            {/* LEFT SIDEBAR */}
            <div className="space-y-5 text-sm">
              {/* Profile */}
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    {cvData.sectionTitles.profile}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-[13px]">{cvData.profile}</p>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    <Mail className="h-3 w-3" />
                    {cvData.sectionTitles.contact}
                  </h2>
                  <div className="space-y-1.5 text-[13px] text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3 opacity-50 shrink-0" />
                      <span className="break-all">{cvData.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-3 w-3 opacity-50 shrink-0" />
                      <span>{cvData.contact.website}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-3 w-3 opacity-50 shrink-0" />
                      <span>{cvData.contact.linkedin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3 opacity-50 shrink-0" />
                      <span>{cvData.contact.phone}</span>
                    </div>
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    <Award className="h-3 w-3" />
                    {cvData.sectionTitles.certifications}
                  </h2>
                  <ul className="space-y-1 text-[13px] text-muted-foreground">
                    {cvData.certifications.map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="opacity-50 mt-0.5">--</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* AI Skills */}
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    <Cpu className="h-3 w-3" />
                    {cvData.sectionTitles.aiSkills}
                  </h2>
                  <ul className="space-y-1 text-[13px] text-muted-foreground">
                    {cvData.aiSkills.map((s, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="opacity-50 mt-0.5">--</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Marketing Stack */}
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    <BarChart3 className="h-3 w-3" />
                    {cvData.sectionTitles.marketingStack}
                  </h2>
                  <div className="space-y-2 text-[13px] text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground/70 text-[11px] uppercase tracking-wide">Content & Brand</p>
                      {cvData.marketingStack.contentBrand.map((s, i) => (
                        <p key={i} className="ml-2">-- {s}</p>
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground/70 text-[11px] uppercase tracking-wide">Creative Tools</p>
                      {cvData.marketingStack.creativeTools.map((s, i) => (
                        <p key={i} className="ml-2">-- {s}</p>
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground/70 text-[11px] uppercase tracking-wide">Growth & Data</p>
                      {cvData.marketingStack.growthData.map((s, i) => (
                        <p key={i} className="ml-2">-- {s}</p>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Languages */}
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    <Languages className="h-3 w-3" />
                    {cvData.sectionTitles.languages}
                  </h2>
                  <ul className="space-y-1 text-[13px] text-muted-foreground">
                    {cvData.languages.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                </section>
              </div>

            {/* RIGHT MAIN CONTENT */}
            <div className="space-y-5">
              {/* Experience */}
              <section>
                <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 pb-1 border-b border-gray-200 dark:border-gray-800 flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5" />
                    {cvData.sectionTitles.experience}
                  </h2>
                  <div className="space-y-4">
                    {cvData.experience.map((exp, i) => (
                      <div key={i}>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-sm font-semibold text-foreground">{exp.role}</h3>
                            <p className="text-[13px] text-muted-foreground">{exp.company}</p>
                          </div>
                          <span className="text-[12px] text-muted-foreground/60 whitespace-nowrap shrink-0">{exp.period}</span>
                        </div>
                        <ul className="mt-1.5 space-y-1">
                          {exp.points.map((p, j) => (
                            <li key={j} className="text-[13px] text-muted-foreground leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:bg-gray-300 dark:before:bg-gray-600 before:rounded-full">
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Projects */}
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 pb-1 border-b border-gray-200 dark:border-gray-800 flex items-center gap-1.5">
                    <Beaker className="h-3.5 w-3.5" />
                    {cvData.projects.title}
                  </h2>
                  {cvData.projects.items.map((proj, i) => (
                    <div key={i}>
                      <h3 className="text-sm font-semibold text-foreground">{proj.role}</h3>
                      <p className="text-[13px] text-muted-foreground">{proj.subtitle}</p>
                      <ul className="mt-1.5 space-y-1">
                        {proj.points.map((p, j) => (
                          <li key={j} className="text-[13px] text-muted-foreground leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:bg-gray-300 dark:before:bg-gray-600 before:rounded-full">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </section>

                {/* Education */}
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 pb-1 border-b border-gray-200 dark:border-gray-800 flex items-center gap-1.5">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {cvData.sectionTitles.education}
                  </h2>
                  <div className="space-y-2">
                    {cvData.education.map((edu, i) => (
                      <div key={i} className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">{edu.degree}</h3>
                          <p className="text-[13px] text-muted-foreground">{edu.school}</p>
                        </div>
                        <span className="text-[12px] text-muted-foreground/60 whitespace-nowrap shrink-0">{edu.year}</span>
                      </div>
                    ))}
                  </div>
                </section>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;
