"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Code2,
  Server,
  Database,
  Cpu,
  Users2,
  BrainCircuit,
  Zap,
  Globe2,
  CheckCircle2,
  Layers,
  TrendingUp,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  description: string;
  skills: Array<{ name: string; level?: string; highlight?: boolean }>;
}

const TECH_CATEGORIES: SkillCategory[] = [
  {
    title: "Growth & Marketing Stack",
    icon: TrendingUp,
    description: "Paid acquisition, funnel conversion, automated ROAS telemetry, and tracking architectures.",
    skills: [
      { name: "Meta Ads Manager & CAPI", highlight: true },
      { name: "Audience Targeting & Retargeting", highlight: true },
      { name: "GA4 & Meta Pixel Tracking", highlight: true },
      { name: "Technical SEO & Structured Data", highlight: true },
      { name: "AI Copywriting Pipelines" },
      { name: "Conversion Funnel Optimization" },
      { name: "ROAS & CPA Telemetry" },
      { name: "Paymob & Courier API Integrations" },
    ],
  },
  {
    title: "Frontend & E-Commerce Engineering",
    icon: Code2,
    description: "Component systems, reactive architectures, and performance-first interfaces.",
    skills: [
      { name: "Next.js 16 (App Router)", highlight: true },
      { name: "React 19", highlight: true },
      { name: "TypeScript (Strict)", highlight: true },
      { name: "Tailwind CSS v4" },
      { name: "Framer Motion / motion" },
      { name: "Server Actions & RSC" },
      { name: "WebSockets & Streaming UI" },
      { name: "Bilingual (RTL / LTR)" },
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    description: "High-concurrency microservices, streaming gateways, and idempotent APIs.",
    skills: [
      { name: "Python (FastAPI / Flask)", highlight: true },
      { name: "Node.js & Express" },
      { name: "WebSockets & FastStream", highlight: true },
      { name: "RESTful API Architecture" },
      { name: "Multi-LLM Routing Cascades" },
      { name: "Authentication & JWT/OAuth" },
      { name: "Linux Systemd Daemons" },
      { name: "Nginx & Reverse Proxies" },
    ],
  },
  {
    title: "Databases & Data Infrastructure",
    icon: Database,
    description: "Transactional databases, zero-downtime migrations, and automated scrapers.",
    skills: [
      { name: "PostgreSQL (180+ Migrations)", highlight: true },
      { name: "Supabase (RLS & Realtime)", highlight: true },
      { name: "SQLite (WAL Concurrency)", highlight: true },
      { name: "Playwright Headless Daemons", highlight: true },
      { name: "Redis Cache & Queues" },
      { name: "Webhook Dispatch & Idempotency" },
      { name: "Rotating Proxies & Anti-Bot" },
      { name: "VPS Administration (SSH/Bash)" },
    ],
  },
];

const LEADERSHIP_QUALITIES = [
  {
    icon: Users2,
    title: "Engineering Leadership (Directed 22 Developers)",
    description:
      "Successfully directed an engineering team of 22 developers on the Massar AI platform, orchestrating sprints, conducting code reviews, and maintaining interface stability across multi-model releases.",
  },
  {
    icon: BrainCircuit,
    title: "Conversion-Obsessed Systems Thinking",
    description:
      "Bridging technical architecture and commercial revenue. Designing zero-dropoff checkout flows, automated courier manifests, and idempotent webhook dispatchers that protect customer conversion.",
  },
  {
    icon: Zap,
    title: "Pragmatic Problem-Solving & Rapid Triage",
    description:
      "Business-first engineering mindset: cutting through corporate fluff to deliver clean, maintainable code that resolves immediate operational bottlenecks in hours rather than weeks.",
  },
  {
    icon: Globe2,
    title: "Asynchronous Remote Execution",
    description:
      "Proven track record executing independently in async remote environments. Transparent communication, comprehensive documentation, and proactive status updates across US, European, and Gulf timezones.",
  },
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"tech" | "leadership">("tech");

  return (
    <section id="skills" className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-12 sm:py-24 border-t border-zinc-800/80">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
        <div>
          <div className="font-mono text-xs text-emerald-400 uppercase tracking-wider mb-2">
            Technical Arsenal & Capabilities
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Skills & Operational Strengths.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-2xl">
            End-to-end full-stack development, distributed architecture, and proven leadership across production software.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex w-full sm:w-auto rounded-lg border border-zinc-800 bg-zinc-950/70 p-1 font-mono text-xs">
          <button
            onClick={() => setActiveTab("tech")}
            className={`flex-1 sm:flex-initial text-center rounded-md px-3 sm:px-3.5 py-2 min-h-[38px] transition ${
              activeTab === "tech"
                ? "bg-zinc-800 text-white font-medium"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Technical Stack
          </button>
          <button
            onClick={() => setActiveTab("leadership")}
            className={`flex-1 sm:flex-initial text-center rounded-md px-3 sm:px-3.5 py-2 min-h-[38px] transition ${
              activeTab === "leadership"
                ? "bg-zinc-800 text-white font-medium"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Leadership & Strengths
          </button>
        </div>
      </div>

      {/* Tab 1: Technical Stack Grid */}
      {activeTab === "tech" && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {TECH_CATEGORIES.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -3 }}
                className="group rounded-xl border border-zinc-800 bg-[#121215] p-4 sm:p-6 hover:border-zinc-700 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-2 text-emerald-400 group-hover:border-emerald-500/30 transition-colors shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white truncate">{category.title}</h3>
                    <p className="text-xs text-zinc-400 mt-0.5 truncate">{category.description}</p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`rounded-md px-2.5 py-1 font-mono text-[11px] sm:text-xs transition-colors ${
                        skill.highlight
                          ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-medium"
                          : "border border-zinc-800 bg-zinc-900/80 text-zinc-300"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Tab 2: Leadership & Operational Strengths */}
      {activeTab === "leadership" && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {LEADERSHIP_QUALITIES.map((quality, idx) => {
            const Icon = quality.icon;
            return (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -3 }}
                className="group rounded-xl border border-zinc-800 bg-[#121215] p-4 sm:p-6 hover:border-zinc-700 transition-colors shadow-sm"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-2 sm:p-2.5 text-emerald-400 group-hover:border-emerald-500/30 shrink-0 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{quality.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                      {quality.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </section>
  );
}
