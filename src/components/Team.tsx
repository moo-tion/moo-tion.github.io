import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, GraduationCap, BookOpen } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from './LanguageSwitcher';

interface TeamMember {
  name: string;
  email: string;
  initials: string;
  github: string;
  gradient: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Emir Eroğlu',
    email: 'emir.eroglu@ug.bilkent.edu.tr',
    initials: 'EE',
    github: 'https://github.com/moo-tion',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Canberk Özba',
    email: 'canberk.ozba@ug.bilkent.edu.tr',
    initials: 'CO',
    github: 'https://github.com/moo-tion',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Muhammed Enes Şahin',
    email: 'muhammed.sahin@ug.bilkent.edu.tr',
    initials: 'MS',
    github: 'https://github.com/moo-tion',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Ahmet Burak Kılıçkaya',
    email: 'burak.kilickaya@ug.bilkent.edu.tr',
    initials: 'AK',
    github: 'https://github.com/moo-tion',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    name: 'Mert Özkaya',
    email: 'mert.ozkaya@ug.bilkent.edu.tr',
    initials: 'MÖ',
    github: 'https://github.com/moo-tion',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();
  const tm = t.team;

  return (
    <section id="team" className="relative py-14 sm:py-16 overflow-hidden" ref={ref}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            {tm.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
            {tm.sectionTitle1}<span className="gradient-text">{tm.sectionTitleHighlight}</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-secondary text-lg font-medium">
            {tm.sectionSubtitle}
          </p>
        </AnimatedSection>

        {/* Team Grid */}
        <div className="grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.08,
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group glass-card p-5 flex items-center gap-4 text-left transition duration-200 hover:scale-[1.015] hover:border-primary/45"
            >
              <div
                className={`flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} text-base font-black text-white shadow-sm transition-transform duration-200 group-hover:rotate-2 group-hover:scale-105`}
              >
                {member.initials}
              </div>

              <div className="min-w-0">
                <h3 className="text-base font-semibold text-text-primary">{member.name}</h3>
                <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href={`mailto:${member.email}`}
                  className="mt-1 inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" strokeWidth={2} />
                  <span className="truncate max-w-[220px]">{member.email}</span>
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.73.5.77 5.46.77 11.74c0 4.92 3.19 9.1 7.62 10.57.56.1.77-.24.77-.54v-2c-3.1.67-3.76-1.34-3.76-1.34-.51-1.28-1.25-1.62-1.25-1.62-1.02-.7.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15 1 .1.77 2.1 2.86 1.53.1-.75.39-1.27.7-1.56-2.48-.28-5.08-1.24-5.08-5.51 0-1.22.43-2.22 1.14-3-.11-.28-.5-1.42.11-2.95 0 0 .95-.3 3.1 1.15.9-.25 1.86-.38 2.82-.39.96.01 1.92.14 2.82.39 2.15-1.45 3.1-1.15 3.1-1.15.61 1.53.22 2.67.11 2.95.71.78 1.14 1.78 1.14 3 0 4.28-2.61 5.22-5.1 5.49.4.35.75 1.04.75 2.1v3.11c0 .3.21.65.78.54 4.42-1.47 7.61-5.65 7.61-10.57C23.22 5.46 18.26.5 12 .5Z"/>
                  </svg>
                  {tm.github}
                </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisors */}
        <AnimatedSection delay={0.4} className="mt-10 max-w-3xl mx-auto">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-card p-5 flex items-center gap-4">
              <div className="flex-none flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-primary mb-0.5">
                  {tm.supervisor}
                </p>
                <p className="text-sm font-semibold text-text-primary truncate">Doruk Öner</p>
                <a
                  href="mailto:doruk.oner@cs.bilkent.edu.tr"
                  className="text-xs text-text-muted hover:text-primary transition-colors"
                >
                  doruk.oner@cs.bilkent.edu.tr
                </a>
              </div>
            </div>
            <div className="glass-card p-5 flex items-center gap-4">
              <div className="flex-none flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-primary mb-0.5">
                  {tm.instructors}
                </p>
                <p className="text-sm font-semibold text-text-primary truncate">İlker Burak Kurt &amp; Mert Bıçakçı</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
