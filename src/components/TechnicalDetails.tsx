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
        <AnimatedSection className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            {technical.sectionLabel}
          </p>
          <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl lg:text-5xl">
            {technical.sectionTitle1}
            <span className="gradient-text">{technical.sectionTitleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium leading-8 text-text-secondary">
            {technical.sectionSubtitle}
          </p>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technical.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={item.label} delay={0.05 * i}>
                <div className="technical-card h-full rounded-[12px] border border-border bg-gradient-to-br from-white to-[#f8fbf2] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_18px_42px_rgba(23,33,26,0.1)]">
                  <div className="technical-icon mb-5 flex h-12 w-12 items-center justify-center rounded-[8px] bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xl font-black text-text-primary">{item.value}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
