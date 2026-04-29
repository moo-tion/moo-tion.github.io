import { Gauge, Cpu, Video, BellRing } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from './LanguageSwitcher';

const icons = [Cpu, Gauge, Video, BellRing];

export default function TechnicalDetails() {
  const { t } = useLanguage();
  const technical = t.technical;

  return (
    <section id="technical" className="relative overflow-hidden py-14 sm:py-16">
      <img
        src="/cows/cow.gif"
        alt=""
        className="cow-gif-accent left-[5%] top-[28%] hidden lg:block"
        style={{ width: '4.9rem', opacity: 0.044, transform: 'rotate(13deg)' }}
      />
      <img
        src="/cows/milking.gif"
        alt=""
        className="cow-gif-accent bottom-[8%] right-[13%] hidden lg:block"
        style={{ width: '7.2rem', opacity: 0.053, transform: 'rotate(-5deg)' }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-6 text-center sm:mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            {technical.sectionLabel}
          </p>
          <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl lg:text-5xl">
            {technical.sectionTitle1}
            <span className="gradient-text">{technical.sectionTitleHighlight}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-7 text-text-secondary sm:mt-4 sm:text-lg sm:leading-8">
            {technical.sectionSubtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {technical.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={item.label} delay={0.05 * i}>
                <div className="technical-card h-full rounded-[12px] border border-border bg-gradient-to-br from-white to-[#f8fbf2] p-3.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_18px_42px_rgba(23,33,26,0.1)] sm:p-5">
                  <div className="technical-icon mb-3 flex h-10 w-10 items-center justify-center rounded-[8px] bg-primary/10 text-primary sm:mb-5 sm:h-12 sm:w-12">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted sm:text-xs sm:tracking-widest">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-base font-black leading-snug text-text-primary sm:mt-2 sm:text-xl">{item.value}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
