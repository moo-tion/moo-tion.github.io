import { LanguageProvider } from './LanguageSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
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
      {/* Floating language switcher */}
      <div className="fixed bottom-6 right-6 z-50">
        <LanguageSwitcher />
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
