import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Clock, ExternalLink, Download, FileText } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from './LanguageSwitcher';

interface Report {
  status: 'completed' | 'coming-soon';
  pdfUrl?: string;
}

const reports: Report[] = [
  {
    status: 'coming-soon',
    pdfUrl: '/reports/project-specification-document.pdf',
  },
  {
    status: 'coming-soon',
    pdfUrl: '/reports/analysis-and-requirement-report.pdf',
  },
  {
    status: 'coming-soon',
    pdfUrl: '/reports/detailed-design-report.pdf',
  },
  {
    status: 'coming-soon',
    pdfUrl: '/reports/T2517_Final_Report.pdf',
  },
];

export default function Reports() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();
  const r = t.reports;
  const [availableReports, setAvailableReports] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let isMounted = true;

    Promise.all(
      reports.map(async (report) => {
        if (!report.pdfUrl) return ['', false] as const;

        try {
          const response = await fetch(report.pdfUrl, { method: 'HEAD' });
          return [report.pdfUrl, response.ok] as const;
        } catch {
          return [report.pdfUrl, false] as const;
        }
      })
    ).then((entries) => {
      if (!isMounted) return;

      setAvailableReports(
        Object.fromEntries(entries.filter(([url]) => url))
      );
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="reports" className="relative py-12 sm:py-16 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <img
        src="/cows/milking.gif"
        alt=""
        className="cow-gif-accent left-[2%] top-[22%] hidden lg:block"
        style={{ width: '6.9rem', opacity: 0.05, transform: 'rotate(6deg)' }}
      />
      <img
        src="/cows/cow.gif"
        alt=""
        className="cow-gif-accent bottom-[11%] right-[8%] hidden lg:block"
        style={{ width: '5.8rem', opacity: 0.047, transform: 'rotate(-10deg)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-6 sm:mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary sm:mb-3 sm:text-sm">
            {r.sectionLabel}
          </p>
          <h2 className="text-2xl font-extrabold text-text-primary sm:text-4xl lg:text-5xl">
            {r.sectionTitle1}<span className="gradient-text">{r.sectionTitleHighlight}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-text-secondary sm:mt-4 sm:text-lg sm:leading-8">
            {r.sectionSubtitle}
          </p>
        </AnimatedSection>

        {/* Report Cards Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {reports.map((report, i) => {
            const isAvailable = report.pdfUrl ? availableReports[report.pdfUrl] === true : report.status === 'completed';
            const status = isAvailable ? 'completed' : 'coming-soon';

            return (
              <motion.div
                key={r.items[i].title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.1,
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className={`cow-report-card group relative flex min-h-0 flex-col overflow-hidden rounded-[12px] border border-primary/12 bg-gradient-to-br from-white via-[#fbfaf4] to-[#eef8e8] shadow-[0_12px_28px_rgba(23,33,26,0.07)] transition duration-200 sm:min-h-[210px] sm:rounded-[16px] ${
                status === 'coming-soon' ? 'opacity-70' : ''
              }`}
            >
              <img
                src="/cows/cow_icon.png"
                alt=""
                className="cow-card-watermark absolute -bottom-4 -right-4 h-16 w-16 opacity-[0.07] sm:-bottom-5 sm:h-24 sm:w-24"
              />
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-lime-400 to-primary/20" />
              <div className="relative flex flex-1 flex-col p-3 pl-4 sm:p-4 sm:pl-5">
              <div className="mb-2.5 flex items-start justify-between gap-3 sm:mb-4 sm:block">
                <div className="flex min-w-0 gap-2 sm:gap-3">
                  <div className="report-icon flex h-8 w-8 flex-none items-center justify-center rounded-[10px] border border-primary/10 bg-white/80 text-primary shadow-sm backdrop-blur sm:h-10 sm:w-10">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                  </div>
                  <h3 className="min-w-0 pr-1 text-sm font-black leading-snug text-text-primary sm:pr-2 sm:text-base">
                  {r.items[i].title}
                  </h3>
                </div>
                {status === 'completed' ? (
                  <span className="inline-flex flex-none items-center gap-1 rounded-full border border-green-500/20 bg-green-500/10 px-2 py-1 text-[10px] font-medium text-green-500 sm:mt-3 sm:gap-1.5 sm:px-2.5 sm:text-xs">
                    <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
                    {r.completed}
                  </span>
                ) : (
                  <span className="inline-flex flex-none items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-1 text-[10px] font-medium text-amber-500 sm:mt-3 sm:gap-1.5 sm:px-2.5 sm:text-xs">
                    <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
                    {r.comingSoon}
                  </span>
                )}
              </div>

              <div className="mb-3 text-[10px] sm:mb-4 sm:text-[11px]">
                <div className="report-meta truncate rounded-[10px] border border-primary/20 bg-primary/5 px-2.5 py-2 font-bold leading-snug text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur">
                  {r.items[i].deadline}
                </div>
              </div>

              {/* Action */}
              <div className="mt-auto">
                {status === 'completed' && report.pdfUrl ? (
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={report.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold sm:gap-2"
                    >
                      {r.previewAction}
                      <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                    </a>
                    <a
                      href={report.pdfUrl}
                      download
                      className="btn-primary inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold sm:gap-2"
                    >
                      <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                      {r.downloadAction}
                    </a>
                  </div>
                ) : (
                  <span className="report-pending inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-border bg-white/70 px-3 py-2 text-xs font-medium text-text-muted cursor-default sm:gap-2">
                    <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                    {r.pending}
                  </span>
                )}
              </div>
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <AnimatedSection delay={0.4} className="mt-7 text-center sm:mt-10">
          <p className="text-sm text-text-muted">
            {r.footerNote}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
