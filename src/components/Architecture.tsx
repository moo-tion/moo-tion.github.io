import { Gauge, BellRing } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from './LanguageSwitcher';

const cardStyles = [
  'from-sky-50 via-white to-emerald-50',
  'from-emerald-50 via-white to-lime-50',
  'from-lime-50 via-white to-yellow-50',
  'from-amber-50 via-white to-emerald-50',
  'from-zinc-50 via-white to-sky-50',
];
const logoMap = {
  mobile: {
    label: 'F',
    src: 'https://cdn.simpleicons.org/flutter/02569B',
  },
  api: {
    label: 'F',
    src: 'https://cdn.simpleicons.org/fastapi/009688',
  },
  target: {
    label: 'YOLO',
    src: '',
  },
  vision: {
    label: 'CV',
    src: 'https://cdn.simpleicons.org/opencv/5C3EE8',
  },
  database: {
    label: 'P',
    src: 'https://cdn.simpleicons.org/postgresql/4169E1',
  },
};
const metricIcons = [Gauge, BellRing];

export default function Architecture() {
  const { t } = useLanguage();
  const architecture = t.architecture;

  return (
    <section id="architecture" className="relative py-12 sm:py-16 overflow-hidden">
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
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary sm:mb-3 sm:text-sm">
            {architecture.sectionLabel}
          </p>
          <h2 className="text-2xl font-extrabold text-text-primary sm:text-4xl lg:text-5xl">
            {architecture.sectionTitle1}
            <span className="gradient-text">{architecture.sectionTitleHighlight}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-text-secondary sm:mt-4 sm:text-lg sm:leading-8">
            {architecture.sectionSubtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {architecture.items.map((item, i) => (
            <AnimatedSection key={item.name} delay={0.05 * i}>
              <div className={`architecture-card group relative h-full overflow-hidden rounded-[12px] border border-primary/15 bg-gradient-to-br ${cardStyles[i]} p-3 shadow-[0_12px_28px_rgba(23,33,26,0.06)] transition duration-200 sm:rounded-[16px] sm:p-4 lg:min-h-[172px]`}>
                <img
                  src="/cows/cow_icon.png"
                  alt=""
                  className="architecture-watermark absolute -right-4 -top-4 h-12 w-12 opacity-[0.07] sm:h-16 sm:w-16"
                />
                <div className="absolute inset-x-4 bottom-0 h-1 rounded-t-full bg-gradient-to-r from-primary/0 via-primary/45 to-primary/0" />
                <div className="relative flex min-w-0 gap-3 lg:block">
                  <div className="architecture-icon flex h-10 w-10 flex-none items-center justify-center rounded-[10px] border border-primary/10 bg-white/85 text-primary shadow-sm backdrop-blur sm:h-11 sm:w-11 lg:mb-4 lg:h-12 lg:w-12 lg:rounded-xl">
                    {logoMap[item.icon].src ? (
                      <img
                        src={logoMap[item.icon].src}
                        alt=""
                        className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-[0.58rem] font-black tracking-tight text-primary sm:text-[0.68rem]">
                        {logoMap[item.icon].label}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-black leading-snug text-text-primary sm:text-base lg:text-lg">{item.name}</div>
                    <p className="mt-1 text-xs leading-5 text-text-secondary lg:text-[11px] xl:text-xs">{item.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-4">
          {architecture.metrics.map((item, i) => {
            const Icon = metricIcons[i];
            return (
              <AnimatedSection key={item.label} delay={0.28 + i * 0.05}>
                <div className="rounded-[12px] border border-border bg-white/88 p-3 shadow-sm sm:rounded-[16px] sm:p-4">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[9px] bg-primary/10 text-primary sm:h-10 sm:w-10 sm:rounded-[10px]">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-[9px] font-bold uppercase tracking-wider text-text-muted sm:text-[11px]">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-xs font-black leading-snug text-text-primary sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
