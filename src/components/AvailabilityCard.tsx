'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe, Briefcase, CheckCircle } from 'lucide-react';
import { useLang } from '@/lib/lang-context';

const AvailabilityCard = () => {
  const { t } = useLang();
  const a = t.availability;

  const handleContactClick = () => {
    const el = document.querySelector('#contact-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md">
            <img
              src="/profile.jpeg"
              alt="Umit's avatar"
              className="h-full w-full object-cover object-[center_top_-5%] scale-95"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">Umit Barlas</h2>
            <p className="text-muted-foreground text-sm">{a.availableFor}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center gap-2 sm:mt-0 sm:items-end">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            {a.availableNow}
          </span>
          <p className="text-xs text-muted-foreground text-center sm:text-right">{a.openTo}</p>
        </div>
      </div>

      {/* Availability Highlight */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 border border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
            <Briefcase className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{a.currentStatus}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-foreground mb-1">{a.status}</p>
            <p className="text-sm text-green-600 dark:text-green-400 font-semibold flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4" />
                {a.statusValue}
              </p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-1">{a.lookingFor}</p>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{a.lookingForValue}</p>
          </div>
        </div>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">{a.duration}</p>
            <p className="text-muted-foreground text-sm">{a.durationValue}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">{a.location}</p>
            <p className="text-muted-foreground text-sm">{a.locationValue}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">{a.techStack}</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
              <ul className="decoration-none list-disc pl-4">
                  <li>Social Media Management (LinkedIn, X, Instagram)</li>
                  <li>Video Editing (Premiere Pro), Motion Design (After Effects)</li>
                  <li>Figma, Framer, Adobe Suite</li>
                  <li>AI Automation (n8n, OpenRouter)</li>
                </ul>
                <ul className="list-disc pl-4">
                  <li>Community Management & Editorial Planning</li>
                  <li>Storytelling & Copywriting</li>
                  <li>Vibe Coding (Claude, Cursor, React Native)</li>
                  <li>Google Analytics (GA4), Google Ads, Hubspot CRM</li>
                </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">{a.whatIBring}</p>
        <p className="text-foreground text-sm">
          {a.bringLine1} <br />
          {a.bringLine2} <br />
          {a.bringLine3}
        </p>
      </div>

      {/* Goal */}
      <div className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">{a.goal}</p>
        <p className="text-foreground text-sm">{a.goalText}</p>
      </div>

      {/* Contact button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={handleContactClick}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          {a.contactMe}
        </button>
      </div>
    </motion.div>
  );
};

export default AvailabilityCard;
