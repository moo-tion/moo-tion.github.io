import { Play, FileText } from 'lucide-react';
import { useLanguage } from './LanguageSwitcher';

const demoUrl = 'https://www.youtube.com/watch?v=uhvhUnFRo8I';

export default function FinalCTA() {
  const { t } = useLanguage();
  const cta = t.finalCta;

  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <div className="animate-gradient relative mx-auto max-w-7xl overflow-hidden rounded-[12px] border border-border bg-[linear-gradient(110deg,#17211a,#0f2e1d_42%,#168a45_72%,#1aa858)] px-6 py-9 text-white shadow-[0_24px_70px_rgba(23,33,26,0.18)] sm:px-10">
        <img
          src="/cows/cow_icon.png"
          alt=""
          className="pointer-events-none absolute -right-8 bottom-[-3.4rem] z-0 h-48 w-48 rotate-[-10deg] object-contain opacity-22 sm:h-60 sm:w-60 lg:right-[27%] lg:opacity-26"
        />
        <img
          src="/cows/cow_icon.png"
          alt=""
          className="pointer-events-none absolute left-5 top-1 z-0 hidden h-24 w-24 rotate-[12deg] object-contain opacity-18 sm:block"
        />
        <img
          src="/cows/cow_icon.png"
          alt=""
          className="pointer-events-none absolute right-8 top-3 z-0 hidden h-16 w-16 rotate-[20deg] object-contain opacity-16 lg:block"
        />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_62%,rgba(255,255,255,0.16),transparent_26%),linear-gradient(90deg,rgba(23,33,26,0.34),transparent_58%)]" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">{cta.title}</h2>
            <p className="mt-3 max-w-2xl font-semibold text-white/86">{cta.subtitle}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://github.com/moo-tion" target="_blank" rel="noopener noreferrer" className="cta-primary-glow inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-text-primary shadow-[0_16px_36px_rgba(255,255,255,0.18)] transition duration-200 hover:scale-[1.02]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.77 5.46.77 11.74c0 4.92 3.19 9.1 7.62 10.57.56.1.77-.24.77-.54v-2c-3.1.67-3.76-1.34-3.76-1.34-.51-1.28-1.25-1.62-1.25-1.62-1.02-.7.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15 1 .1.77 2.1 2.86 1.53.1-.75.39-1.27.7-1.56-2.48-.28-5.08-1.24-5.08-5.51 0-1.22.43-2.22 1.14-3-.11-.28-.5-1.42.11-2.95 0 0 .95-.3 3.1 1.15.9-.25 1.86-.38 2.82-.39.96.01 1.92.14 2.82.39 2.15-1.45 3.1-1.15 3.1-1.15.61 1.53.22 2.67.11 2.95.71.78 1.14 1.78 1.14 3 0 4.28-2.61 5.22-5.1 5.49.4.35.75 1.04.75 2.1v3.11c0 .3.21.65.78.54 4.42-1.47 7.61-5.65 7.61-10.57C23.22 5.46 18.26.5 12 .5Z"/>
              </svg>
              {cta.github}
            </a>
            <a href="#reports" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              <FileText className="h-4 w-4" strokeWidth={2} />
              {cta.reports}
            </a>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              <Play className="h-4 w-4" strokeWidth={2} />
              {cta.demo}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
