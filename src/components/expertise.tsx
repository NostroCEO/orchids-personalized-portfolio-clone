'use client';

import { motion } from 'framer-motion';
import { Video, Share2, Palette, Globe, Sparkles, PenTool } from 'lucide-react';
import { useLang } from '@/lib/lang-context';

const iconMap = {
  social: Share2,
  video: Video,
  brand: Palette,
  web: Globe,
  ai: Sparkles,
  design: PenTool,
};

const blockKeys = ['social', 'video', 'brand', 'web', 'ai', 'design'] as const;

export default function Expertise() {
  const { t } = useLang();

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t.expertise.title}
        </h2>
        <p className="mt-2 text-muted-foreground text-lg">
          {t.expertise.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blockKeys.map((key, i) => {
          const Icon = iconMap[key];
          const block = t.expertise.blocks[key];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
            >
              <div className="mb-4 inline-flex rounded-xl bg-blue-50 dark:bg-blue-500/10 p-3">
                <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {block.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {block.description}
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
