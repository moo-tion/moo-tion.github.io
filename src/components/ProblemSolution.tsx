import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  AlertTriangle,
  DollarSign,
  Clock,
  CheckCircle2,
  Zap,
  Shield,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from './LanguageSwitcher';

const problemIcons = [AlertTriangle, DollarSign, Clock];
const solutionIcons = [CheckCircle2, Zap, Shield];

function emphasizeMetrics(text: string) {
  return text.split(/((?:~|<)?\d+(?:-\d+)?(?:\+)?\s*(?:%|ms\/?kare|ms\/?frame|ms|\$|\/\s*kare|\/\s*frame)?)/g).map((part, index) => {
    if (/^(?:~|<)?\d/.test(part)) {
      return <strong key={index} className="metric-strong">{part}</strong>;
    }
    return part;
  });
}

export default function ProblemSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();
  const ps = t.problemSolution;
  const [activePair, setActivePair] = useState(0);

  const showPreviousPair = () => {
    setActivePair((current) => (current === 0 ? ps.problems.length - 1 : current - 1));
  };

  const showNextPair = () => {
    setActivePair((current) => (current === ps.problems.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="problem-solution" className="relative py-14 sm:py-16 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <img
        src="/cows/cow.gif"
        alt=""
        className="cow-gif-accent right-[11%] top-[9%] hidden lg:block"
        style={{ width: '5.7rem', opacity: 0.052, transform: 'rotate(8deg)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-8 sm:mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            {ps.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
            {ps.sectionTitle1}<span className="gradient-text">{ps.sectionTitleHighlight}</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-10 sm:mb-12">
          <div className="problem-panel overflow-hidden rounded-[12px] border border-border shadow-sm">
            <div className="problem-panel-header hidden border-b border-border px-5 py-3 text-sm font-bold md:grid md:grid-cols-2 md:gap-8">
              <span className="text-red-500">{ps.problemLabel}</span>
              <span className="text-primary">{ps.solutionLabel}</span>
            </div>

            <div className="problem-carousel md:hidden">
              <div className="problem-carousel-track" style={{ transform: `translateX(-${activePair * 100}%)` }}>
                {ps.problems.map((problem, i) => {
                  const ProblemIcon = problemIcons[i];
                  const SolutionIcon = solutionIcons[i];
                  const solution = ps.solutions[i];
                  return (
                    <article key={problem.title} className="problem-carousel-slide">
                      <div className="problem-mobile-card">
                        <div className="problem-cell flex gap-3 border-l-4 border-red-400 pl-4">
                          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[8px] bg-red-500/10">
                            <ProblemIcon className="h-5 w-5 text-red-500" />
                          </div>
                          <div>
                            <p className="mb-1 text-[0.68rem] font-extrabold uppercase tracking-widest text-red-500">
                              {ps.problemLabel}
                            </p>
                            <h3 className="font-semibold text-text-primary">{problem.title}</h3>
                            <p className="mt-1 text-sm leading-6 text-text-secondary">{emphasizeMetrics(problem.desc)}</p>
                          </div>
                        </div>
                        <div className="problem-cell solution-cell flex gap-3 border-l-4 border-primary pl-4">
                          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[8px] bg-primary/10">
                            <SolutionIcon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="mb-1 text-[0.68rem] font-extrabold uppercase tracking-widest text-primary">
                              {ps.solutionLabel}
                            </p>
                            <h3 className="font-semibold text-text-primary">{solution.title}</h3>
                            <p className="mt-1 text-sm leading-6 text-text-secondary">{solution.desc}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
              <div className="problem-carousel-controls">
                <button
                  type="button"
                  className="problem-carousel-button"
                  onClick={showPreviousPair}
                  aria-label={ps.previousPairAria}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="problem-carousel-status" aria-live="polite">
                  {activePair + 1} / {ps.problems.length}
                </div>
                <button
                  type="button"
                  className="problem-carousel-button"
                  onClick={showNextPair}
                  aria-label={ps.nextPairAria}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              {ps.problems.map((problem, i) => {
                const ProblemIcon = problemIcons[i];
                const SolutionIcon = solutionIcons[i];
                const solution = ps.solutions[i];
                return (
                  <motion.div
                    key={problem.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.12 + i * 0.08, duration: 0.45 }}
                    className="problem-row grid grid-cols-2 items-start gap-8 p-5 transition"
                  >
                    <div className="flex gap-3 border-l-4 border-red-400 pl-4">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[8px] bg-red-500/10">
                        <ProblemIcon className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">{problem.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-text-secondary md:line-clamp-2">{emphasizeMetrics(problem.desc)}</p>
                      </div>
                    </div>
                    <div className="flex gap-3 border-l-4 border-primary pl-4">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[8px] bg-primary/10">
                        <SolutionIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">{solution.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-text-secondary md:line-clamp-2">{solution.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
