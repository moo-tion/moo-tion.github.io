import { useState, useEffect, createContext, useContext } from 'react';
import { Languages, Moon, Sun } from 'lucide-react';
import type { Locale, Translations } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'tr',
  t: translations.tr,
  toggleLocale: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    const saved = localStorage.getItem('mootion-lang') as Locale | null;
    if (saved && (saved === 'tr' || saved === 'en')) {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mootion-lang', locale);
    document.documentElement.lang = locale;
    // Dispatch custom event so Astro components can listen too
    window.dispatchEvent(new CustomEvent('locale-change', { detail: locale }));
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'tr' ? 'en' : 'tr'));
  };

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default function LanguageSwitcher() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      className="control-button flex h-10 items-center gap-2 rounded-full px-3 text-xs font-bold transition-all duration-200"
      aria-label={locale === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
      title={locale === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
    >
      <Languages className="h-4 w-4" strokeWidth={2.2} />
      {locale === 'tr' ? 'EN' : 'TR'}
    </button>
  );
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('mootion-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextIsDark = saved ? saved === 'dark' : prefersDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle('dark', nextIsDark);
  }, []);

  const toggleTheme = () => {
    setIsDark((current) => {
      const next = !current;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('mootion-theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="control-button flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200"
      aria-label={isDark ? 'Açık moda geç' : 'Koyu moda geç'}
      title={isDark ? 'Açık moda geç' : 'Koyu moda geç'}
    >
      {isDark ? <Sun className="h-4 w-4" strokeWidth={2.2} /> : <Moon className="h-4 w-4" strokeWidth={2.2} />}
    </button>
  );
}
