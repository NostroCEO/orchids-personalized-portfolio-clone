'use client';

import { motion } from 'framer-motion';
import { Lightbulb, RefreshCw, Rocket, Users, Target, Search } from 'lucide-react';
import { useLang } from '@/lib/lang-context';

const icons = [Lightbulb, RefreshCw, Rocket, Users, Target, Search];

export default function SoftSkills() {
  const { t } = useLang();

  return (
    <div className="mx-auto w-full">
      <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-8">
        {t.softSkills.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.softSkills.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-5 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex rounded-lg bg-blue-50 dark:bg-blue-500/10 p-2">
                  <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground">{item.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
