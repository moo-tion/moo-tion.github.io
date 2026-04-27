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
    pdfUrl: '/reports/final-report.pdf',
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
    <section id="reports" className="relative py-14 sm:py-16 overflow-hidden" ref={ref}>
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
        <AnimatedSection className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            {r.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
            {r.sectionTitle1}<span className="gradient-text">{r.sectionTitleHighlight}</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-secondary text-lg font-medium">
            {r.sectionSubtitle}
          </p>
        </AnimatedSection>

        {/* Report Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
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
              className={`cow-report-card group relative flex min-h-[220px] flex-col overflow-hidden rounded-[18px] border border-primary/12 bg-gradient-to-br from-white via-[#fbfaf4] to-[#eef8e8] shadow-[0_14px_34px_rgba(23,33,26,0.075)] transition duration-200 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_48px_rgba(22,138,69,0.14)] ${
                status === 'coming-soon' ? 'opacity-70' : ''
              }`}
            >
              <img
                src="/cows/cow_icon.png"
                alt=""
                className="cow-card-watermark absolute -bottom-5 -right-4 h-24 w-24 opacity-[0.07] transition duration-200 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-[0.13]"
              />
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-lime-400 to-primary/20" />
              <div className="relative flex flex-1 flex-col p-5 pl-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="report-icon flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-primary/10 bg-white/80 text-primary shadow-sm backdrop-blur">
                    <FileText className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="pr-2 text-lg font-black leading-snug text-text-primary">
                  {r.items[i].title}
                  </h3>
                </div>
                {status === 'completed' ? (
                  <span className="inline-flex flex-none items-center gap-1.5 rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1 text-xs font-medium text-green-500">
                    <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2} />
                    {r.completed}
                  </span>
                ) : (
                  <span className="inline-flex flex-none items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-medium text-amber-500">
                    <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                    {r.comingSoon}
                  </span>
                )}
              </div>

              <div className="mb-5 text-xs text-text-muted">
                <div className="report-meta rounded-xl border border-border bg-white/75 px-4 py-3 backdrop-blur">
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-primary">{r.deadline}</span>
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
                      className="btn-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                    >
                      {r.previewAction}
                      <ExternalLink className="h-4 w-4" strokeWidth={2} />
                    </a>
                    <a
                      href={report.pdfUrl}
                      download
                      className="btn-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                    >
                      <Download className="h-4 w-4" strokeWidth={2} />
                      {r.downloadAction}
                    </a>
                  </div>
                ) : (
                  <span className="report-pending inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-5 py-2.5 text-sm font-medium text-text-muted cursor-default">
                    <Clock className="h-4 w-4" strokeWidth={2} />
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
        <AnimatedSection delay={0.4} className="text-center mt-10">
          <p className="text-sm text-text-muted">
            {r.footerNote}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
