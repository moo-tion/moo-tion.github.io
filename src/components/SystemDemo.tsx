import { Bell, Camera, Play, Smartphone, Target } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from './LanguageSwitcher';

const demoUrl = 'https://www.youtube.com/watch?v=uhvhUnFRo8I';
const icons = [Camera, Target, Bell, Smartphone];

export default function SystemDemo() {
  const { t } = useLanguage();
  const demo = t.demo;

  return (
    <section id="demo" className="relative py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-center xl:grid-cols-[1.12fr_0.88fr]">
          <AnimatedSection className="min-w-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary sm:mb-3 sm:text-sm">
              {demo.sectionLabel}
            </p>
            <h2 className="text-2xl font-extrabold text-text-primary sm:text-4xl lg:text-5xl">
              {demo.sectionTitle1}
              <span className="gradient-text">{demo.sectionTitleHighlight}</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-text-secondary sm:mt-4 sm:text-lg sm:leading-8">
              {demo.sectionSubtitle}
            </p>

            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-[0_14px_30px_rgba(22,138,69,0.22)] transition hover:bg-primary-dark sm:mt-7 sm:px-6 sm:py-3 sm:text-sm"
            >
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-red-600 text-white sm:h-7 sm:w-7">
                <Play className="h-3 w-3 fill-current sm:h-3.5 sm:w-3.5" />
              </span>
              {demo.watchVideo}
            </a>

            <div className="demo-flow-window mt-6 overflow-x-auto pb-2 sm:mt-8 sm:overflow-visible sm:pb-0">
              <ol className="demo-flow-timeline relative grid min-w-[34rem] grid-cols-4 gap-2 before:absolute before:left-[4.25rem] before:right-[4.25rem] before:top-4 before:h-px before:bg-primary/25 sm:min-w-0 sm:gap-3 sm:before:left-[4.75rem] sm:before:right-[4.75rem] sm:before:top-[1.125rem]">
                {demo.items.map((item, i) => {
                  const Icon = icons[i];
                  return (
                    <li
                      key={item.title}
                      className="relative flex min-w-0 flex-col items-center"
                      style={{ animationDelay: `${i * 0.28}s` }}
                    >
                      <div className="z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-primary/20 bg-[#eef8ef] text-primary shadow-[0_8px_18px_rgba(22,138,69,0.12)] sm:h-9 sm:w-9">
                        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                      </div>
                      <div className="active-step-glow mt-3 min-w-0 flex-1 rounded-[9px] border border-border bg-white/76 p-2.5 text-left shadow-sm backdrop-blur-xl sm:p-3">
                        <div className="flex items-start gap-1.5">
                          <span className="mt-0.5 flex-none text-[0.62rem] font-black leading-none text-primary/35 sm:text-[0.68rem]">0{i + 1}</span>
                          <p className="text-[0.72rem] font-bold leading-tight text-text-primary sm:text-xs xl:text-sm">{item.title}</p>
                        </div>
                        <p className="mt-1.5 text-[0.68rem] leading-4 text-text-secondary sm:text-[0.72rem] sm:leading-5 xl:text-xs">{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="min-w-0">
            <div className="rounded-[12px] border border-border bg-gradient-to-br from-white to-[#f8fbf2] p-2.5 shadow-[0_18px_50px_rgba(23,33,26,0.09)] sm:p-4">
              <div className="rounded-[10px] border border-border bg-[#111812] p-2.5 text-white sm:p-4">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>{demo.videoTitle}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-2 py-1 text-[10px] font-bold text-white">
                    <span className="live-pulse-dot h-1.5 w-1.5 rounded-full bg-white" />
                    {demo.liveLabel}
                  </span>
                </div>
                <div className="mt-3 aspect-video rounded-[8px] border border-white/10 bg-[#111812] p-1.5 sm:mt-4 sm:p-4">
                  <div className="relative h-full overflow-hidden rounded-[8px] border border-white/15 bg-[#1d2a20]">
                    <img
                      src="/demo_examples/estrus_1.jpeg"
                      alt={demo.imageAlt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/15" />
                    <div className="absolute inset-0 opacity-20 grid-pattern" />
                    <div className="absolute bottom-3 left-3 right-3 rounded-[8px] border border-white/15 bg-white/90 p-2 sm:bottom-4 sm:left-4 sm:right-4 sm:p-3">
                      <div className="flex items-center justify-between gap-2 text-center text-[10px] font-bold text-text-primary sm:text-xs">
                        <span>{demo.timeline[0]}</span>
                        <span className="h-px min-w-6 flex-1 bg-primary/40" />
                        <span>{demo.timeline[1]}</span>
                        <span className="h-px min-w-6 flex-1 bg-primary/40" />
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
