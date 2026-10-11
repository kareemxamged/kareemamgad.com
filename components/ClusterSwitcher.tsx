"use client";

import { motion } from "motion/react";
import { Server, Database, GitMerge, TrendingUp } from "lucide-react";

export interface ClusterTab {
  id: string;
  name: string;
  shortName: string;
  icon: typeof Server;
  description: string;
}

export const CLUSTERS: ClusterTab[] = [
  {
    id: "tech-ops",
    name: "Technical Operations & Founder Systems",
    shortName: "Tech Operations",
    icon: Server,
    description: "Eliminating founder friction, streamlining deployments, and orchestrating full-stack reliability.",
  },
  {
    id: "growth-marketing",
    name: "Growth & Marketing Operations",
    shortName: "Growth & Marketing",
    icon: TrendingUp,
    description: "Meta Ads conversion funnels, Paymob & courier API automation, and real-time ROAS intelligence.",
  },
  {
    id: "data-pipelines",
    name: "AI Data Extraction & Scraping",
    shortName: "AI Data Scraping",
    icon: Database,
    description: "High-frequency web scrapers, headless browser daemons, and AI-native data structuring.",
  },
  {
    id: "integration-qa",
    name: "Systems Integration & QA Automation",
    shortName: "Systems Integration",
    icon: GitMerge,
    description: "Multi-tenant database migrations, API bridges, webhook dispatchers, and end-to-end regression suites.",
  },
];

export function ClusterSwitcher({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (id: string) => void;
}) {
  return (
    <div className="w-full">
      <div className="relative grid grid-cols-2 lg:flex lg:flex-row gap-1.5 rounded-xl border border-zinc-800 bg-zinc-950/80 p-1.5 backdrop-blur-sm">
        {CLUSTERS.map((cluster) => {
          const Icon = cluster.icon;
          const isActive = activeTab === cluster.id;

          return (
            <motion.button
              key={cluster.id}
              onClick={() => onTabChange(cluster.id)}
              whileTap={{ scale: 0.98 }}
              className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 sm:gap-2 rounded-lg px-2 sm:px-3.5 py-2.5 text-xs font-mono font-medium transition-colors duration-200 min-h-[44px] ${
                isActive
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Icon
                className={`h-4 w-4 shrink-0 transition-colors duration-200 ${
                  isActive ? "text-emerald-400" : "text-zinc-500"
                }`}
              />
              <span className="hidden xl:inline truncate">{cluster.name}</span>
              <span className="xl:hidden text-[11px] sm:text-xs truncate">{cluster.shortName}</span>

              {/* Fluid Pill with Framer Motion Spring Physics */}
              {isActive && (
                <motion.div
                  layoutId="active-cluster-pill"
                  className="absolute inset-0 -z-10 rounded-lg bg-zinc-800/90 shadow-sm border border-zinc-700/60"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
