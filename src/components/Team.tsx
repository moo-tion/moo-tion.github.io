import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, GraduationCap, BookOpen, Lightbulb, Users, NotebookTabs, Download } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from './LanguageSwitcher';

interface TeamMember {
  name: string;
  email: string;
  initials: string;
  github: string;
  linkedin: string;
  logbook: string;
  gradient: string;
  photo: string;
  photoClassName?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ahmet Burak Kılıçkaya',
    email: 'burak.kilickaya@ug.bilkent.edu.tr',
    initials: 'AK',
    github: 'https://github.com/ABKJgM',
    linkedin: 'https://linkedin.com/in/ahmet-burak-kilickaya',
    logbook: '/logbooks/CS%20491_2%20Ahmet%20Burak%20K%C4%B1l%C4%B1c%CC%A7kaya%20Logbook.docx',
    gradient: 'from-rose-500 to-pink-500',
    photo: '/team_photo/Ahmet_Burak_Kilickaya_Photo.jpeg',
  },
  {
    name: 'Mert Özkaya',
    email: 'mert.ozkaya@ug.bilkent.edu.tr',
    initials: 'MÖ',
    github: 'https://github.com/Mertozkaya21',
    linkedin: 'https://www.linkedin.com/in/mertozkaya1/',
    logbook: '/logbooks/CS%20491_2%20Mert%20O%CC%88zkaya%20Logbook.docx',
    gradient: 'from-green-500 to-emerald-500',
    photo: '/team_photo/Mert_Ozkaya_Photo.jpeg',
  },
  {
    name: 'Canberk Özba',
    email: 'canberk.ozba@ug.bilkent.edu.tr',
    initials: 'CÖ',
    github: 'https://github.com/Canberk-Ozba',
    linkedin: 'https://www.linkedin.com/in/canberk-%C3%B6zba-bb8b11386/',
    logbook: '/logbooks/CS%20491_2%20Canberk%20O%CC%88zba%20Logbook.docx',
    gradient: 'from-sky-500 to-indigo-500',
    photo: '/team_photo/Canberk_Ozba_Photo.jpeg',
  },
  {
    name: 'Emir Eroğlu',
    email: 'emir.eroglu@ug.bilkent.edu.tr',
    initials: 'EE',
    github: 'https://github.com/emireroglu2k',
    linkedin: 'https://www.linkedin.com/in/emir-eroglu/',
    logbook: '/logbooks/CS%20491_2%20Emir%20Erog%CC%86lu%20Logbook.docx',
    gradient: 'from-blue-500 to-cyan-500',
    photo: '/team_photo/Emir_Eroglu_Photo.jpeg',
  },
  {
    name: 'Muhammed Enes Şahin',
    email: 'muhammed.sahin@ug.bilkent.edu.tr',
    initials: 'MŞ',
    github: 'https://github.com/Menesahin7',
    linkedin: 'https://www.linkedin.com/in/muhammed-enes-%C5%9Fahin-088469221/',
    logbook: '/logbooks/CS%20491_2%20Muhammed%20Enes%20S%CC%A7ahin%20Logbook.docx',
    gradient: 'from-amber-500 to-orange-500',
    photo: '/team_photo/Muhammed_Enes_Sahin_Photo.jpeg',
  },
];

function TeamPhoto({ member }: { member: TeamMember }) {
  const [hasPhoto, setHasPhoto] = useState(true);

  if (hasPhoto) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className={`h-full w-full ${member.photoClassName ?? 'object-contain object-center sm:object-cover'}`}
        onError={() => setHasPhoto(false)}
      />
    );
  }

  return (
    <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${member.gradient}`}>
      <span className="text-4xl font-bold text-white">{member.initials}</span>
    </div>
  );
}

function TeamMemberCard({
  member,
  index,
  isInView,
  labels,
  className = '',
}: {
  member: TeamMember;
  index: number;
  isInView: boolean;
  labels: { github: string; linkedin: string; logbook: string; downloadLogbook: string };
  className?: string;
}) {
  return (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.12 + index * 0.06,
        duration: 0.42,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group glass-card overflow-hidden text-left transition duration-200 ${className}`}
    >
      <div className="relative aspect-[4/3] bg-[#f8fbf2] sm:aspect-[3/4]">
        <TeamPhoto member={member} />
      </div>

      <div className="min-w-0 p-2.5 sm:p-3">
        <h3 className="truncate text-xs font-semibold text-text-primary sm:text-sm">{member.name}</h3>
        <div className="mt-1.5 grid min-w-0 gap-1">
          <a href={`mailto:${member.email}`} className="inline-flex min-w-0 items-center gap-1 text-[9px] text-text-muted transition-colors hover:text-primary sm:text-[10px]">
            <Mail className="h-3 w-3" strokeWidth={2} />
            <span className="min-w-0 truncate">{member.email}</span>
          </a>
          <div className="flex min-w-0 flex-wrap gap-x-2 gap-y-1">
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[9px] text-text-muted transition-colors hover:text-primary sm:text-[10px]">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.77 5.46.77 11.74c0 4.92 3.19 9.1 7.62 10.57.56.1.77-.24.77-.54v-2c-3.1.67-3.76-1.34-3.76-1.34-.51-1.28-1.25-1.62-1.25-1.62-1.02-.7.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15 1 .1.77 2.1 2.86 1.53.1-.75.39-1.27.7-1.56-2.48-.28-5.08-1.24-5.08-5.51 0-1.22.43-2.22 1.14-3-.11-.28-.5-1.42.11-2.95 0 0 .95-.3 3.1 1.15.9-.25 1.86-.38 2.82-.39.96.01 1.92.14 2.82.39 2.15-1.45 3.1-1.15 3.1-1.15.61 1.53.22 2.67.11 2.95.71.78 1.14 1.78 1.14 3 0 4.28-2.61 5.22-5.1 5.49.4.35.75 1.04.75 2.1v3.11c0 .3.21.65.78.54 4.42-1.47 7.61-5.65 7.61-10.57C23.22 5.46 18.26.5 12 .5Z"/>
              </svg>
              <span>{labels.github}</span>
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[9px] text-text-muted transition-colors hover:text-primary sm:text-[10px]">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>{labels.linkedin}</span>
            </a>
          </div>
        </div>
        <a
          href={member.logbook}
          download
          className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-primary/15 bg-primary/8 px-2 py-1.5 text-[9px] font-semibold text-primary transition-colors hover:border-primary/35 hover:bg-primary/12 sm:text-[10px]"
          aria-label={`${labels.downloadLogbook}: ${member.name}`}
        >
          <NotebookTabs className="h-3.5 w-3.5 flex-none" strokeWidth={2} />
          <span className="truncate">{labels.logbook}</span>
          <Download className="h-3 w-3 flex-none" strokeWidth={2} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hasGroupPhoto, setHasGroupPhoto] = useState(true);
  const { t } = useLanguage();
  const tm = t.team;

  return (
    <section id="team" className="relative py-12 sm:py-16 overflow-hidden" ref={ref}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-6 text-center sm:mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary sm:mb-3 sm:text-sm">
            {tm.sectionLabel}
          </p>
          <h2 className="text-2xl font-extrabold text-text-primary sm:text-4xl lg:text-5xl">
            {tm.sectionTitle1}<span className="gradient-text">{tm.sectionTitleHighlight}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-text-secondary sm:mt-4 sm:text-lg sm:leading-8">
            {tm.sectionSubtitle}
          </p>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-[14px] border border-primary/18 bg-gradient-to-br from-white via-[#fbfaf4] to-[#eaf7e5] shadow-[0_18px_54px_rgba(23,33,26,0.1)] sm:rounded-[18px]"
        >
          {hasGroupPhoto ? (
            <img
              src="/team_photo/Group_Photo.jpg"
              alt={tm.groupPhotoAlt}
              className="block aspect-[16/8] h-auto w-full object-cover sm:aspect-[17/10]"
              onError={() => setHasGroupPhoto(false)}
            />
          ) : (
            <div className="flex aspect-[16/8] items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(22,138,69,0.22),transparent_28%),linear-gradient(135deg,#f8fbf2,#dff4d8)] sm:aspect-[17/10]">
              <Users className="h-28 w-28 text-primary/45" strokeWidth={1.4} />
            </div>
          )}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,33,26,0.02),rgba(23,33,26,0.38))]" />
        </motion.div>

        <div className="mx-auto mt-5 grid max-w-4xl grid-cols-2 gap-3 sm:mt-6 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {teamMembers.map((member, i) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              index={i}
              isInView={isInView}
              labels={{
                github: tm.github,
                linkedin: tm.linkedin,
                logbook: tm.logbook,
                downloadLogbook: tm.downloadLogbook,
              }}
              className={`mx-auto w-full ${i === 4 ? 'col-span-2 max-w-[12rem] justify-self-center md:col-span-1 md:max-w-none' : ''}`}
            />
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mx-auto mt-6 max-w-5xl sm:mt-10">
          <div className="grid gap-2.5 md:grid-cols-3 md:gap-4">
            <div className="rounded-[10px] border border-border bg-white/82 p-2.5 shadow-sm backdrop-blur sm:rounded-[12px] sm:p-4">
              <div className="flex items-center gap-2.5 sm:gap-4">
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] bg-primary/10 sm:h-10 sm:w-10 sm:rounded-[10px]">
                  <GraduationCap className="h-4 w-4 text-primary sm:h-5 sm:w-5" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="mb-0.5 text-[9px] font-medium uppercase tracking-wider text-primary sm:text-[11px]">{tm.supervisor}</p>
                  <p className="truncate text-xs font-semibold text-text-primary sm:text-sm">Doruk Öner</p>
                  <a href="mailto:doruk.oner@cs.bilkent.edu.tr" className="block truncate text-[10px] text-text-muted transition-colors hover:text-primary sm:text-xs">
                    doruk.oner@cs.bilkent.edu.tr
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[10px] border border-border bg-white/82 p-2.5 shadow-sm backdrop-blur sm:rounded-[12px] sm:p-4">
              <div className="flex items-center gap-2.5 sm:gap-4">
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] bg-primary/10 sm:h-10 sm:w-10 sm:rounded-[10px]">
                  <BookOpen className="h-4 w-4 text-primary sm:h-5 sm:w-5" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="mb-0.5 text-[9px] font-medium uppercase tracking-wider text-primary sm:text-[11px]">{tm.instructors}</p>
                  <p className="truncate text-xs font-semibold text-text-primary sm:text-sm">İlker Burak Kurt &amp; Mert Bıçakçı</p>
                </div>
              </div>
            </div>

            <div className="rounded-[10px] border border-border bg-white/82 p-2.5 shadow-sm backdrop-blur sm:rounded-[12px] sm:p-4">
              <div className="flex items-center gap-2.5 sm:gap-4">
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] bg-primary/10 sm:h-10 sm:w-10 sm:rounded-[10px]">
                  <Lightbulb className="h-4 w-4 text-primary sm:h-5 sm:w-5" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="mb-0.5 text-[9px] font-medium uppercase tracking-wider text-primary sm:text-[11px]">{tm.innovationExpert}</p>
                  <p className="truncate text-xs font-semibold text-text-primary sm:text-sm">Bayer Niyazi Kılıçkaya</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
