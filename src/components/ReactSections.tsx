import { LanguageProvider } from './LanguageSwitcher';
import LanguageSwitcher, { ThemeToggle } from './LanguageSwitcher';
import ProblemSolution from './ProblemSolution';
import Features from './Features';
import SystemDemo from './SystemDemo';
import Reports from './Reports';
import Team from './Team';
import Architecture from './Architecture';
import TechnicalDetails from './TechnicalDetails';
import FinalCTA from './FinalCTA';

/**
 * Wraps all interactive React sections in a single LanguageProvider
 * so they share language state. Astro handles the static parts (Navbar, Hero, Footer).
 */
export default function ReactSections() {
  return (
    <LanguageProvider>
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-border bg-bg-card/90 p-1.5 shadow-[0_16px_38px_rgba(23,33,26,0.12)] backdrop-blur-xl">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      <div className="section-divider" />
      <ProblemSolution />

      <div className="section-divider" />
      <Features />

      <div className="section-divider" />
      <SystemDemo />

      <div className="section-divider" />
      <Reports />

      <div className="section-divider" />
      <Team />

      <div className="section-divider" />
      <Architecture />

      <div className="section-divider" />
      <TechnicalDetails />

      <FinalCTA />
    </LanguageProvider>
  );
}
