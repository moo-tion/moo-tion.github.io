import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Camera,
  WifiOff,
  Activity,
  Bell,
  CalendarClock,
  BarChart3,
  HeartPulse,
  Cctv,
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from './LanguageSwitcher';

const featureIcons = [Camera, Cctv, WifiOff, Activity, Bell, CalendarClock, HeartPulse, BarChart3];
const featureGradients = [
  'bg-white',
  'bg-[#fbfaf4]',
  'bg-white',
  'bg-[#f7fbf4]',
  'bg-white',
  'bg-[#fbfaf4]',
  'bg-white',
  'bg-[#f7fbf4]',
];
const featureIconColors = [
  'text-blue-400',
  'text-cyan-400',
  'text-violet-400',
  'text-amber-400',
  'text-green-400',
  'text-pink-400',
  'text-rose-400',
  'text-teal-400',
];
const featureIconBgs = [
  'bg-blue-500/10',
  'bg-cyan-500/10',
  'bg-violet-500/10',
  'bg-amber-500/10',
  'bg-green-500/10',
  'bg-pink-500/10',
  'bg-rose-500/10',
  'bg-teal-500/10',
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();
  const f = t.features;

  return (
    <section id="features" className="relative py-14 sm:py-16 overflow-hidden" ref={ref}>
      <img
        src="/cows/milking.gif"
        alt=""
        className="cow-gif-accent left-[4%] bottom-[18%] hidden lg:block"
        style={{ width: '7.4rem', opacity: 0.055, transform: 'rotate(-4deg)' }}
      />
      <img
        src="/cows/cow.gif"
        alt=""
        className="cow-gif-accent right-[3%] top-[24%] hidden lg:block"
        style={{ width: '5.2rem', opacity: 0.043, transform: 'rotate(11deg)' }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-6 sm:mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            {f.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
            {f.sectionTitle1}
            <span className="gradient-text">{f.sectionTitleHighlight}</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-text-secondary text-base font-medium leading-7 sm:mt-4 sm:text-lg">
            {f.sectionSubtitle}
          </p>
        </AnimatedSection>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {f.items.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.1 + i * 0.08,
                  duration: 0.6,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="group relative overflow-hidden rounded-[12px] border border-transparent bg-gradient-to-br from-primary/25 via-border to-transparent p-px transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_22px_54px_rgba(23,33,26,0.12)]"
              >
                <div className={`flex h-full min-h-[178px] flex-col rounded-[12px] ${featureGradients[i]} p-3.5 shadow-sm sm:min-h-[230px] sm:p-6`}>
                  {i === 0 && (
                    <span className="mb-3 inline-flex self-start rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-white sm:mb-4 sm:px-3 sm:text-xs">
                      {f.coreFeature}
                    </span>
                  )}
                  <div
                    className={`mb-3 flex h-9 w-9 items-center justify-center rounded-[8px] ${featureIconBgs[i]} group-hover:scale-110 transition-transform duration-300 sm:mb-5 sm:h-11 sm:w-11`}
                  >
                    <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${featureIconColors[i]}`} strokeWidth={2} />
                  </div>
                  <h3 className="mb-1.5 text-sm font-semibold leading-snug text-text-primary sm:mb-2 sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-xs leading-5 text-text-secondary sm:text-sm sm:leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
