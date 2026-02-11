'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, CalendarDays, BarChart3 } from 'lucide-react';
import { useLang } from '@/lib/lang-context';

const stepKeys = ['analyse', 'conception', 'planification', 'suivi'] as const;
const icons = [Search, Lightbulb, CalendarDays, BarChart3];

export default function Strategy() {
  const { t } = useLang();

  return (
    <div className="mx-auto w-full">
      {/* Black background wrapper */}
      <div className="rounded-3xl bg-black px-6 py-12 md:px-12 md:py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {t.strategy.title}
          </h2>
          <p className="mt-2 text-gray-400 text-lg">
            {t.strategy.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 hidden md:block" />

          <div className="space-y-6">
            {stepKeys.map((key, i) => {
              const Icon = icons[i];
              const step = t.strategy.steps[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative flex gap-6 items-start"
                >
                  {/* Step number circle - white icon on dark bg */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                        0{i + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
