import { Database, ScanEye, Server, Smartphone, Target } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from './LanguageSwitcher';

const cardStyles = [
  'from-sky-50 via-white to-emerald-50',
  'from-emerald-50 via-white to-lime-50',
  'from-lime-50 via-white to-yellow-50',
  'from-amber-50 via-white to-emerald-50',
  'from-zinc-50 via-white to-sky-50',
];
const iconMap = {
  mobile: Smartphone,
  api: Server,
  target: Target,
  vision: ScanEye,
  database: Database,
};

export default function Architecture() {
  const { t } = useLanguage();
  const architecture = t.architecture;

  return (
    <section id="architecture" className="relative py-14 sm:py-16 overflow-hidden">
      <img
        src="/cows/cow.gif"
        alt=""
        className="cow-gif-accent left-[9%] top-[7%] hidden lg:block"
        style={{ width: '5.5rem', opacity: 0.046, transform: 'rotate(-12deg)' }}
      />
      <img
        src="/cows/milking.gif"
        alt=""
        className="cow-gif-accent bottom-[16%] right-[2%] hidden lg:block"
        style={{ width: '8rem', opacity: 0.052, transform: 'rotate(4deg)' }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-6 sm:mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            {architecture.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
            {architecture.sectionTitle1}
            <span className="gradient-text">{architecture.sectionTitleHighlight}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base font-medium leading-7 text-text-secondary sm:mt-4 sm:text-lg sm:leading-8">
            {architecture.sectionSubtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {architecture.items.map((item, i) => (
            <AnimatedSection key={item.name} delay={0.05 * i}>
              <div className={`architecture-card group relative h-full min-h-[112px] overflow-hidden rounded-[14px] border border-primary/15 bg-gradient-to-br ${cardStyles[i]} p-3.5 shadow-[0_14px_34px_rgba(23,33,26,0.07)] transition duration-200 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_48px_rgba(22,138,69,0.14)] sm:min-h-[150px] sm:rounded-[18px] sm:p-5`}>
                <img
                  src="/cows/cow_icon.png"
                  alt=""
                  className="architecture-watermark absolute -right-4 -top-4 h-12 w-12 opacity-[0.08] transition duration-200 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-[0.14] sm:h-16 sm:w-16"
                />
                <div className="absolute inset-x-5 bottom-0 h-1 rounded-t-full bg-gradient-to-r from-primary/0 via-primary/45 to-primary/0" />
                {(() => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div className="architecture-icon mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/10 bg-white/85 text-primary shadow-sm backdrop-blur sm:mb-5 sm:h-12 sm:w-12">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                    </div>
                  );
                })()}
                <div className="text-sm font-black leading-snug text-text-primary sm:text-xl">{item.name}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
