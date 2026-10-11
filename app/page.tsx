"use client";

import { useState, useEffect } from "react";
import { SystemStatusBar } from "@/components/SystemStatusBar";
import { HeroSection } from "@/components/HeroSection";
import { ClusterSwitcher } from "@/components/ClusterSwitcher";
import { BentoGridProof } from "@/components/BentoGridProof";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationCertifications } from "@/components/EducationCertifications";
import { WorkPhilosophy } from "@/components/WorkPhilosophy";
import { TerminalDrawer } from "@/components/TerminalDrawer";

export default function HomePage() {
  const [activeCluster, setActiveCluster] = useState<string>("tech-ops");
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Sync cluster tab with URL hash on mount & hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["tech-ops", "growth-marketing", "data-pipelines", "integration-qa"].includes(hash)) {
        setActiveCluster(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Listen to keyboard shortcut 'T' to open terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === "t" || e.key === "T") &&
        !isTerminalOpen &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        setIsTerminalOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTerminalOpen]);

  const handleTabChange = (clusterId: string) => {
    setActiveCluster(clusterId);
    window.history.replaceState(null, "", `#${clusterId}`);
  };

  const scrollToProofOfWork = () => {
    const element = document.getElementById("proof-of-work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#09090b] text-[#f4f4f5] bg-grid-subtle selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* 1. Fixed System Status Bar */}
      <SystemStatusBar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* 2. Hero & Umbrella Positioning */}
      <HeroSection
        onViewWorks={scrollToProofOfWork}
        onGetInTouch={scrollToContact}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* 3. Proof of Work & Cluster Switcher Section */}
      <section id="proof-of-work" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="font-mono text-xs text-emerald-400 uppercase tracking-wider mb-2">
              Verified Production Architecture
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Engineered Proof of Work.
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-2xl">
              Concrete architectural implementations delivering hard numerical ROI, zero downtime, and hands-off operational stability.
            </p>
          </div>

          <div className="font-mono text-xs text-zinc-500">
            CLUSTER: <span className="text-zinc-300 font-semibold uppercase">{activeCluster}</span>
          </div>
        </div>

        {/* 3-Cluster Switcher */}
        <ClusterSwitcher
          activeTab={activeCluster}
          onTabChange={handleTabChange}
        />

        {/* Full-Width Project Cards with Live & GitHub Links */}
        <BentoGridProof activeCluster={activeCluster} />
      </section>

      {/* 4. Technical Arsenal & Operational Leadership */}
      <SkillsSection />

      {/* 5. Formal Education & Accredited Certifications */}
      <EducationCertifications />

      {/* 6. Work Philosophy & Direct Collaboration Hub */}
      <WorkPhilosophy />

      {/* 7. Interactive Telemetry Terminal Drawer */}
      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </main>
  );
}
