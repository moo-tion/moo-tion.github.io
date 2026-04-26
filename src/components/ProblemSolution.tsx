import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Camera,
  ScanEye,
  Activity,
  BrainCircuit,
  Bell,
  AlertTriangle,
  DollarSign,
  Clock,
  CheckCircle2,
  Zap,
  Shield,
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from './LanguageSwitcher';

const problemIcons = [AlertTriangle, DollarSign, Clock];
const solutionIcons = [CheckCircle2, Zap, Shield];

const pipelineIcons = [Camera, ScanEye, Activity, BrainCircuit, Bell];
const pipelineColors = [
  'bg-white',
  'bg-[#fbfaf4]',
  'bg-white',
  'bg-[#f7fbf4]',
  'bg-white',
];

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
          <div className="overflow-hidden rounded-[12px] border border-border bg-gradient-to-br from-white to-[#f8fbf2] shadow-sm">
            <div className="grid grid-cols-[1fr_auto_1fr] border-b border-border bg-[#fbfaf4] px-5 py-3 text-sm font-bold">
              <span className="text-red-500">{ps.problemLabel}</span>
              <span />
              <span className="text-primary">{ps.solutionLabel}</span>
            </div>
            <div className="divide-y divide-border">
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
                    className="grid gap-4 p-4 transition hover:-translate-y-1 hover:bg-white/70 hover:shadow-[0_14px_34px_rgba(23,33,26,0.08)] md:grid-cols-[1fr_auto_1fr] md:items-center"
                  >
                    <div className="flex gap-3 border-l-4 border-red-400 pl-4">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[8px] bg-red-500/10">
                        <ProblemIcon className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">{problem.title}</h3>
                        <p className="mt-1 line-clamp-2 text-sm leading-6 text-text-secondary">{emphasizeMetrics(problem.desc)}</p>
                      </div>
                    </div>
                    <span className="connection-line mx-auto" />
                    <div className="flex gap-3 border-l-4 border-primary pl-4">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[8px] bg-primary/10">
                        <SolutionIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">{solution.title}</h3>
                        <p className="mt-1 line-clamp-2 text-sm leading-6 text-text-secondary">{solution.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Pipeline */}
        <AnimatedSection delay={0.3}>
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
              {ps.pipelineTitle1}<span className="gradient-text">{ps.pipelineTitleHighlight}</span>
            </h3>
            <p className="mt-2 font-medium text-text-secondary">{ps.pipelineSubtitle}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2">
            {ps.pipelineSteps.map((label, i) => {
              const Icon = pipelineIcons[i];
              return (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 sm:gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                >
                  <div className={`glass-card flex min-w-[120px] flex-col items-center gap-3 px-5 py-5 text-center sm:px-5 sm:py-5 ${pipelineColors[i]}`}>
                    <span className="text-xs font-black text-primary/50">0{i + 1}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-primary/10 border border-border">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={2} />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-text-primary whitespace-nowrap">
                      {label}
                    </span>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary">
                      {ps.pipelineLatency[i]}
                    </span>
                  </div>
                  {i < ps.pipelineSteps.length - 1 && <span className="connection-line" />}
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
