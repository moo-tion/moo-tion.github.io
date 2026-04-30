import { Bell, Camera, Smartphone, Target } from 'lucide-react';
import { Fragment } from 'react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from './LanguageSwitcher';

const demoUrl = 'https://www.youtube.com/watch?v=uhvhUnFRo8I';
const icons = [Camera, Target, Bell, Smartphone];

export default function SystemDemo() {
  const { t } = useLanguage();
  const demo = t.demo;

  return (
    <section id="demo" className="relative py-14 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              {demo.sectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
              {demo.sectionTitle1}
              <span className="gradient-text">{demo.sectionTitleHighlight}</span>
            </h2>
            <p className="mt-4 max-w-xl text-text-secondary text-lg font-medium leading-8">
              {demo.sectionSubtitle}
            </p>

            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(22,138,69,0.22)] transition hover:-translate-y-0.5 hover:bg-primary-dark sm:w-auto"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white">▶</span>
              {demo.watchVideo}
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-[12px] border border-border bg-gradient-to-br from-white to-[#f8fbf2] p-4 shadow-[0_18px_50px_rgba(23,33,26,0.09)]">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex w-full flex-wrap items-center justify-center gap-2 rounded-[12px] border border-border bg-[#fbfaf4] px-3 py-1.5 text-xs font-bold text-text-primary sm:w-auto sm:rounded-full sm:justify-start">
                  {demo.timeline.map((item, i) => (
                    <span key={item} className="inline-flex items-center gap-2">
                      {item}
                      {i < demo.timeline.length - 1 && <span className="hidden h-px w-8 bg-primary/35 sm:inline-flex" />}
                    </span>
                  ))}
                </div>
                <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-white">
                  {demo.latencyBadge}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-stretch">
                {demo.items.map((item, i) => {
                  const Icon = icons[i];
                  return (
                    <Fragment key={item.title}>
                    <div className="active-step-glow relative rounded-[12px] border border-border bg-white/72 p-3 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(23,33,26,0.1)] sm:p-4" style={{ animationDelay: `${i * 0.28}s` }}>
                      <div className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-primary/10 text-primary sm:h-10 sm:w-10">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                      </div>
                      <p className="mt-3 text-xs font-bold leading-snug text-text-primary sm:mt-4 sm:text-sm">{item.title}</p>
                      <p className="mt-1.5 text-[11px] leading-4 text-text-secondary sm:mt-2 sm:text-xs sm:leading-5">{item.description}</p>
                      <div className="absolute right-3 top-3 text-[10px] font-black text-primary/30 sm:text-xs">
                        0{i + 1}
                      </div>
                    </div>
                    {i < demo.items.length - 1 && <span className="motion-arrow my-auto hidden h-px w-full min-w-8 bg-primary/25 sm:block" />}
                    </Fragment>
                  );
                })}
              </div>

              <div className="mt-4 rounded-[10px] border border-border bg-[#111812] p-4 text-white">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>{demo.videoTitle}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-2 py-1 text-[10px] font-bold text-white">
                    <span className="live-pulse-dot h-1.5 w-1.5 rounded-full bg-white"></span>
                    LIVE
                  </span>
                </div>
                <div className="mt-4 aspect-[4/3] rounded-[8px] border border-white/10 bg-[#111812] p-3 sm:aspect-video sm:p-5">
                  <div className="relative h-full overflow-hidden rounded-[8px] border border-white/15 bg-[#1d2a20] p-4">
                    <img
                      src="/demo_examples/estrus_1.jpeg"
                      alt="Barn camera feed showing estrus detection on a cow"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/15" />
                    <div className="absolute inset-0 opacity-20 grid-pattern" />
                    <div className="absolute bottom-3 left-3 right-3 rounded-[8px] border border-white/15 bg-white/90 p-2 sm:bottom-4 sm:left-4 sm:right-4 sm:p-3">
                      <div className="flex flex-wrap items-center justify-center gap-2 text-center text-[10px] font-bold text-text-primary sm:justify-between sm:text-xs">
                        <span>{demo.timeline[0]}</span>
                        <span className="hidden h-px w-10 bg-primary/40 sm:block" />
                        <span>{demo.timeline[1]}</span>
                        <span className="hidden h-px w-10 bg-primary/40 sm:block" />
                        <span>{demo.timeline[2]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
