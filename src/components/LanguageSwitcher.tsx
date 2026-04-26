import { useState, useEffect, createContext, useContext } from 'react';
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
      className="cow-button flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-200 uppercase tracking-wider"
      aria-label={locale === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
      title={locale === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
    >
      <img src="/cows/cow_icon.png" alt="" className="h-4 w-4 rounded-full bg-white/85 p-0.5" />
      {locale === 'tr' ? 'EN' : 'TR'}
    </button>
  );
}
