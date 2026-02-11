'use client';

import { useLang } from '@/lib/lang-context';
import { Globe } from 'lucide-react';

export default function LangToggle() {
  const { locale, toggle } = useLang();

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-gray-700 backdrop-blur transition-all hover:bg-white hover:shadow-sm dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-200 dark:hover:bg-gray-900"
      title={locale === 'fr' ? 'Switch to English' : 'Passer en Français'}
    >
      <Globe className="h-3.5 w-3.5" />
      {locale === 'fr' ? 'EN' : 'FR'}
    </button>
  );
}
