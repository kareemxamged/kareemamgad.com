"use client";

import { motion, AnimatePresence } from "motion/react";
import { ArchitectureFlow } from "./ArchitectureFlow";
import {
  Zap,
  Terminal,
  Database,
  Layers,
  ExternalLink,
  Github,
  ShieldCheck,
  Lock,
} from "lucide-react";

interface ProjectCardData {
  id: string;
  badge: string;
  badgeColor: string;
  tech: string;
  title: string;
  description: string;
  metricValue: string;
  metricLabel: string;
  subMetric: string;
  liveUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
  steps: Array<{ name: string; tag: string; detail?: string }>;
}

const ALL_PROJECTS: Record<string, ProjectCardData[]> = {
  "tech-ops": [
    {
      id: "massar",
      badge: "LEADERSHIP & CONCURRENCY",
      badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      tech: "FastStream · WebSockets · Multi-LLM",
      title: "Massar: Distributed AI Platform",
      description:
        "Led 22 engineers to engineer a multi-model LLM orchestration gateway with resilient fallback cascades and streaming WebSockets.",
      metricValue: "22 Engineers",
      metricLabel: "Led & Architected",
      subMetric: "Token Latency: < 50ms · 99.9% Uptime",
      liveUrl: "https://massar.kareemamgad.com",
      githubUrl: "https://github.com/kareemxamged/massar-app",
      steps: [
        { name: "FastAPI / Python", tag: "Core Gateway", detail: "Multi-tenant API entry" },
        { name: "Multi-LLM", tag: "Smart Fallback", detail: "Cascading model router" },
        { name: "WebSockets", tag: "Streaming <50ms", detail: "Bi-directional socket" },
      ],
    },
    {
      id: "sh-bakhoor",
      badge: "PRODUCTION E-COMMERCE OPS",
      badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      tech: "Meta Ads · Next.js 16 · Paymob · Bolesa API",
      title: "SH Bakhoor: E-Commerce & Meta Ads Conversion Funnel",
      description:
        "Architected an end-to-end commerce funnel connecting Meta Ads campaigns to high-converting Next.js 16 checkout. Automated Paymob payment webhooks and Bolesa courier dispatch, slashing 95% manual fulfillment effort.",
      metricValue: "95%",
      metricLabel: "Manual Order Labor Eliminated",
      subMetric: "Zero Checkout Drop-Off Latency",
      liveUrl: "https://shbkhur.com",
      githubUrl: "https://github.com/kareemxamged/shbakhur",
      steps: [
        { name: "Meta Ads Inbound", tag: "Pixel / CAPI", detail: "Conversion-optimized traffic" },
        { name: "Next.js 16 Store", tag: "App Router", detail: "Sub-second checkout loading" },
        { name: "Paymob & Bolesa", tag: "Automated API", detail: "Instant AWB courier manifest" },
      ],
    },
    {
      id: "marketing-hub",
      badge: "AUTOMATED MARKETING OPS HUB",
      badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-400",
      tech: "Python · Meta Marketing API · AI Synthesizer",
      title: "Automated Marketing Ops & ROAS Hub",
      description:
        "Automated multi-campaign data extraction querying the Meta Graph API to aggregate spend, CPA, and ROAS. AI synthesizer generates executive performance dashboards in minutes, replacing manual spreadsheet reporting.",
      metricValue: "< 3 Mins",
      metricLabel: "Daily Telemetry Ingestion",
      subMetric: "Real-Time ROAS & CPA Calculation",
      githubUrl: "https://github.com/kareemxamged/CareerOps_Sys",
      steps: [
        { name: "Meta Graph API", tag: "Hourly Extraction", detail: "Ad performance metrics" },
        { name: "Python Telemetry", tag: "ROAS Engine", detail: "Spend & conversion calculation" },
        { name: "AI Brief Synthesis", tag: "Automated Insights", detail: "Executive action digest" },
      ],
    },
    {
      id: "rezgee",
      badge: "MULTI-TENANT RELATIONAL SAAS",
      badgeColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
      tech: "PostgreSQL · Supabase · RLS",
      title: "Rezgee: Restaurant POS & Fleet OS",
      description:
        "Architected strict tenant isolation, zero-downtime schema evolution, and real-time synchronization between kitchen tablets and cashiers across multi-branch restaurant operations.",
      metricValue: "180+",
      metricLabel: "Zero-Downtime DB Migrations",
      subMetric: "100% Relational Data Integrity",
      liveUrl: "https://rezgee.com",
      githubUrl: "https://github.com/kareemxamged/Rezgee",
      steps: [
        { name: "Tenant Isolation", tag: "PostgreSQL", detail: "Row Level Security" },
        { name: "Supabase", tag: "RLS & WAL", detail: "Streaming replication" },
        { name: "Realtime POS", tag: "Sync Engine", detail: "Sub-second tablet updates" },
      ],
    },
    {
      id: "radar",
      badge: "AUTONOMOUS OPS RADAR",
      badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-400",
      tech: "Playwright · SQLite WAL · Asyncio",
      title: "Autonomous Systems & Lead Radar",
      description:
        "Headless browser daemon scraping, deduplicating, and filtering 1,000+ international market vectors and tech postings daily with instant Telegram alerts.",
      metricValue: "1,000+",
      metricLabel: "Daily Vectors Scanned",
      subMetric: "< 60s Detection-to-Alert",
      isPrivate: true,
      githubUrl: "https://github.com/kareemxamged/CareerOps_Sys",
      steps: [
        { name: "Playwright", tag: "Headless Browser", detail: "Rotating proxies" },
        { name: "SQLite", tag: "WAL Cache", detail: "Deterministic deduplication" },
        { name: "Telegram Bot", tag: "Instant Ping", detail: "Direct dispatch" },
      ],
    },
  ],
  "growth-marketing": [
    {
      id: "sh-bakhoor",
      badge: "E-COMMERCE & META ADS CONVERSION FUNNEL",
      badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      tech: "Meta Ads · Next.js 16 · Paymob · Bolesa API",
      title: "SH Bakhoor: E-Commerce & Meta Ads Conversion Funnel",
      description:
        "Integrated Meta Ads traffic directly into Next.js 16 e-commerce store with Paymob payment gateway and automated Bolesa shipping dispatch. Eliminated 95% of manual operational friction and maximized checkout conversion rate.",
      metricValue: "95%",
      metricLabel: "Manual Order Labor Eliminated",
      subMetric: "Zero Checkout Drop-off Latency",
      liveUrl: "https://shbkhur.com",
      githubUrl: "https://github.com/kareemxamged/shbakhur",
      steps: [
        { name: "Meta Ads Campaigns", tag: "Ad Manager", detail: "Conversion-optimized ad sets" },
        { name: "Next.js 16 Store", tag: "Speed Optimization", detail: "High-converting checkout UX" },
        { name: "Bolesa Courier API", tag: "Automated Logistics", detail: "Real-time airway bills" },
      ],
    },
    {
      id: "marketing-hub",
      badge: "AUTOMATED MARKETING OPS HUB",
      badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-400",
      tech: "Python · Meta Marketing API · AI Telemetry",
      title: "Marketing Ops Hub: Automated ROAS Telemetry",
      description:
        "Python pipelines and AI models that extract Meta Ads campaign performance daily, synthesizing ROAS, CPA, and CTR variance into executive dashboards in minutes without human spreadsheet overhead.",
      metricValue: "< 3 Mins",
      metricLabel: "Automated Daily ROAS Intelligence",
      subMetric: "100% Automated Reporting",
      githubUrl: "https://github.com/kareemxamged/CareerOps_Sys",
      steps: [
        { name: "Meta Marketing API", tag: "Automated Pull", detail: "Spend, CTR, CPA & ROAS" },
        { name: "Python ETL", tag: "Data Normalization", detail: "Attribution anomaly detection" },
        { name: "AI Ops Digest", tag: "Executive Insights", detail: "Direct scaling recommendations" },
      ],
    },
    {
      id: "radar",
      badge: "AUTONOMOUS LEAD & MARKET RADAR",
      badgeColor: "border-purple-500/30 bg-purple-500/10 text-purple-400",
      tech: "Playwright · SQLite WAL · Multi-Vector",
      title: "Autonomous Lead & Opportunity Radar",
      description:
        "Continuous discovery engine monitoring global and Gulf market vectors, extracting high-intent leads and founder technical challenges with automated qualification scoring.",
      metricValue: "1,000+",
      metricLabel: "Daily Market Signals Evaluated",
      subMetric: "< 60s Detection-to-Alert",
      isPrivate: true,
      githubUrl: "https://github.com/kareemxamged/CareerOps_Sys",
      steps: [
        { name: "Vector Crawl", tag: "Playwright Headless", detail: "Multi-platform monitoring" },
        { name: "Lead Qualification", tag: "Rule Scoring", detail: "Precision fit filter" },
        { name: "Telegram Bot", tag: "Instant Outreach Alert", detail: "Direct founder notification" },
      ],
    },
    {
      id: "rezgee",
      badge: "COMMERCE & CUSTOMER RETENTION",
      badgeColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
      tech: "PostgreSQL · Supabase · Multi-Tenant",
      title: "Rezgee: Multi-Tenant Commercial POS",
      description:
        "Engineered multi-tenant restaurant system driving customer retention, order loyalty telemetry, and real-time sales reporting across distributed dining venues.",
      metricValue: "180+",
      metricLabel: "Zero-Downtime DB Migrations",
      subMetric: "100% Relational Data Isolation",
      liveUrl: "https://rezgee.com",
      githubUrl: "https://github.com/kareemxamged/Rezgee",
      steps: [
        { name: "Multi-Tenant POS", tag: "PostgreSQL RLS", detail: "Secure merchant separation" },
        { name: "Realtime Sync", tag: "Supabase Realtime", detail: "Sub-second order flow" },
        { name: "Retention Metrics", tag: "Analytics", detail: "Daily sales & margin tracking" },
      ],
    },
  ],
  "data-pipelines": [
    {
      id: "marketing-hub",
      badge: "MARKETING DATA INGESTION",
      badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-400",
      tech: "Python · Meta Marketing API · JSON ETL",
      title: "Marketing Ops: Automated Meta Ads Ingestion",
      description:
        "Continuous data extraction pipeline pulling hourly campaign metrics from Meta Graph API, normalizing spend arrays and computing ROAS variances.",
      metricValue: "< 3 Mins",
      metricLabel: "Automated Data Ingestion Pipeline",
      subMetric: "Multi-Account Sync",
      githubUrl: "https://github.com/kareemxamged/CareerOps_Sys",
      steps: [
        { name: "Meta Graph API", tag: "Extraction", detail: "Campaign & adset telemetry" },
        { name: "Normalization Engine", tag: "Python Async", detail: "Spend & attribution models" },
        { name: "Telemetry Export", tag: "Dashboard Ingest", detail: "Instant visual reporting" },
      ],
    },
    {
      id: "radar",
      badge: "HIGH-FREQUENCY SCRAPING DAEMON",
      badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-400",
      tech: "Playwright · SQLite WAL · Anti-Bot",
      title: "Autonomous Data Extraction Radar",
      description:
        "Continuous extraction pipeline bypassing anti-bot blocks using residential rotating proxies, WAL caching, and deterministic deduplication.",
      metricValue: "1,000+",
      metricLabel: "Clean Records Extracted Daily",
      subMetric: "Zero Cloudflare Ban Interruptions",
      isPrivate: true,
      githubUrl: "https://github.com/kareemxamged/CareerOps_Sys",
      steps: [
        { name: "Playwright Daemon", tag: "Headless Engine", detail: "DOM crawler" },
        { name: "SQLite WAL", tag: "Local Cache", detail: "Concurrent multi-process" },
        { name: "Parser & Classifier", tag: "AI Cleaned", detail: "JSON structured" },
      ],
    },
    {
      id: "massar",
      badge: "LLM DATA ROUTING",
      badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      tech: "Python Async · FastStream",
      title: "Massar: Multi-LLM Data Routing",
      description:
        "Low-latency token streaming and vector retrieval pipeline serving AI evaluations across concurrent user sessions.",
      metricValue: "< 50ms",
      metricLabel: "Time to First Token",
      subMetric: "99.9% Route Failover Resilience",
      liveUrl: "https://massar.kareemamgad.com",
      githubUrl: "https://github.com/kareemxamged/massar-app",
      steps: [
        { name: "Client Stream", tag: "WebSocket", detail: "Async event loop" },
        { name: "FastStream Router", tag: "Python Core", detail: "Dynamic load balancing" },
        { name: "Multi-LLM Matrix", tag: "Cascaded", detail: "Instant fallback" },
      ],
    },
    {
      id: "sh-bakhoor",
      badge: "LOGISTICS DATA PIPELINE",
      badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      tech: "Next.js 16 · Bolesa REST API",
      title: "SH Bakhoor: Courier Manifest Pipeline",
      description:
        "Transforms high-velocity shopping cart webhooks into validated shipping manifests, tracking numbers, and SMS dispatch triggers.",
      metricValue: "100%",
      metricLabel: "Automated Data Ingestion",
      subMetric: "Response: < 180ms",
      liveUrl: "https://shbkhur.com",
      githubUrl: "https://github.com/kareemxamged/shbakhur",
      steps: [
        { name: "Checkout Event", tag: "JSON Payload", detail: "Order payload validated" },
        { name: "Address Normalizer", tag: "Regex/API", detail: "Courier schema mapping" },
        { name: "Bolesa Courier API", tag: "AWB Manifest", detail: "Waybill created" },
      ],
    },
    {
      id: "rezgee",
      badge: "WAL REPLICATION & ANALYTICS",
      badgeColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
      tech: "PostgreSQL · Supabase Webhooks",
      title: "Rezgee: Realtime Event Sync",
      description:
        "Relational event emitter streaming live table updates, order dispatch events, and inventory consumption across multi-tenant locations.",
      metricValue: "Sub-Second",
      metricLabel: "Cross-Device Data Propagation",
      subMetric: "Zero Lost Orders",
      liveUrl: "https://rezgee.com",
      githubUrl: "https://github.com/kareemxamged/Rezgee",
      steps: [
        { name: "Kitchen POS Event", tag: "Database Insert", detail: "Atomic transaction" },
        { name: "Supabase Realtime", tag: "CDC Stream", detail: "Logical decoding" },
        { name: "Tablet UI", tag: "Reactive State", detail: "Zero refresh required" },
      ],
    },
  ],
  "integration-qa": [
    {
      id: "sh-bakhoor",
      badge: "IDEMPOTENT PAYMENT & LOGISTICS BRIDGE",
      badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      tech: "Paymob · Webhooks · Bolesa API",
      title: "SH Bakhoor: Idempotent Payment & Logistics Bridge",
      description:
        "Secured e-commerce webhooks against duplicate orders and race conditions with HMAC signature validation and idempotent dispatch workers.",
      metricValue: "0%",
      metricLabel: "Duplicate Charge / Order Errors",
      subMetric: "HMAC Cryptographic Validation",
      liveUrl: "https://shbkhur.com",
      githubUrl: "https://github.com/kareemxamged/shbakhur",
      steps: [
        { name: "Paymob Webhook", tag: "HMAC Check", detail: "Cryptographic signature" },
        { name: "Idempotency Lock", tag: "Redis/DB", detail: "Unique key latch" },
        { name: "Fulfillment Job", tag: "Dispatched", detail: "Safe single execution" },
      ],
    },
    {
      id: "marketing-hub",
      badge: "API INTEGRATION & TELEMETRY QA",
      badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-400",
      tech: "Meta Marketing API · Python · Automated Assertions",
      title: "Marketing Ops: Graph API Integration QA",
      description:
        "Engineered automated retry logic, token refresh handling, and schema validation ensuring 100% data integrity when pulling complex Meta campaign structures.",
      metricValue: "99.9%",
      metricLabel: "API Ingestion Reliability",
      subMetric: "Self-Refreshing Token Handlers",
      githubUrl: "https://github.com/kareemxamged/CareerOps_Sys",
      steps: [
        { name: "Graph API Handshake", tag: "Auth / Rate Limit", detail: "Backoff & retry" },
        { name: "Data Schema QA", tag: "Pydantic Models", detail: "Strict type validation" },
        { name: "Alert Trigger", tag: "Error Boundary", detail: "Instant anomaly notification" },
      ],
    },
    {
      id: "rezgee",
      badge: "SCHEMA MIGRATIONS & QA SUITE",
      badgeColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
      tech: "PostgreSQL · 180+ Migrations · E2E",
      title: "Rezgee: 180+ Relational Migrations & QA",
      description:
        "Engineered zero-downtime transactional database migrations and rigorous automated test suites safeguarding complex restaurant finances.",
      metricValue: "180+",
      metricLabel: "Zero-Downtime Migrations",
      subMetric: "Automated Regression Pass: 100%",
      liveUrl: "https://rezgee.com",
      githubUrl: "https://github.com/kareemxamged/Rezgee",
      steps: [
        { name: "Schema Versioning", tag: "Transactional", detail: "Strict migration locks" },
        { name: "Dry-Run CI Check", tag: "Regression Test", detail: "Automated assertions" },
        { name: "Production Deploy", tag: "Zero-Locking", detail: "Concurrently applied" },
      ],
    },
    {
      id: "massar",
      badge: "FAILOVER CASCADE & INTEGRATION",
      badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      tech: "FastAPI · Python · WebSocket QA",
      title: "Massar: Multi-Model Failover Resilience",
      description:
        "Integrated multi-provider LLM fallbacks (OpenAI, Anthropic, local) ensuring uninterrupted streaming even during upstream provider outages.",
      metricValue: "99.9%",
      metricLabel: "Failover Resilience Rate",
      subMetric: "Auto Cascade in < 200ms",
      liveUrl: "https://massar.kareemamgad.com",
      githubUrl: "https://github.com/kareemxamged/massar-app",
      steps: [
        { name: "Primary Model Request", tag: "Streaming", detail: "Live response buffer" },
        { name: "Circuit Breaker", tag: "Timeout <300ms", detail: "Error trip detected" },
        { name: "Fallback Model", tag: "Seamless Switch", detail: "Token stream resumed" },
      ],
    },
    {
      id: "radar",
      badge: "E2E RESILIENCE & TELEGRAM QA",
      badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-400",
      tech: "Playwright · Asyncio · Telegram Bot",
      title: "Autonomous Radar: Self-Healing Ingestion",
      description:
        "Engineered automatic retry cascades, dynamic selector fallback, and real-time alert dispatch to Telegram with deep logging.",
      metricValue: "24/7",
      metricLabel: "Unsupervised Autonomous Runtime",
      subMetric: "Self-Healing Selector Fallbacks",
      isPrivate: true,
      githubUrl: "https://github.com/kareemxamged/CareerOps_Sys",
      steps: [
        { name: "Target Platform Ingest", tag: "Dynamic DOM", detail: "Playwright headless" },
        { name: "Self-Healing Engine", tag: "Fallback Selector", detail: "Resilient parsing" },
        { name: "Telegram Bot", tag: "Dispatched", detail: "Immediate mobile notice" },
      ],
    },
  ],
};

export function BentoGridProof({ activeCluster }: { activeCluster: string }) {
  const currentProjects = ALL_PROJECTS[activeCluster] || ALL_PROJECTS["tech-ops"];

  return (
    <div className="mt-8 w-full">
      {/* Full-Width Project Cards Stack */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCluster}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 w-full"
        >
          {currentProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 350, damping: 25 },
              }}
              className="group relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-[#121215] p-4 sm:p-6 lg:p-8 transition-colors duration-300 hover:border-zinc-700 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Subtle hover gradient spotlight effect */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-b from-white/[0.04] to-transparent -z-10" />

              {/* Card Top Metadata Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/60 pb-4 sm:pb-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono font-medium ${project.badgeColor}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse shrink-0" />
                    <span>{project.badge}</span>
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-zinc-400 bg-zinc-900 px-2 sm:px-2.5 py-1 rounded-md border border-zinc-800">
                    {project.tech}
                  </span>
                </div>

                {/* External Action Links (Live Preview & GitHub) */}
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  {project.liveUrl ? (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-1.5 rounded-lg border border-zinc-700/80 bg-zinc-800/80 px-3 py-2 text-xs font-mono text-zinc-200 hover:border-emerald-500/50 hover:bg-zinc-800 hover:text-white transition shadow-sm min-h-[38px]"
                      title="Open Live Preview"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Live Preview</span>
                    </motion.a>
                  ) : project.isPrivate ? (
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs font-mono text-zinc-400 min-h-[38px]">
                      <Lock className="h-3 w-3 text-amber-400 shrink-0" />
                      <span>Private System</span>
                    </span>
                  ) : null}

                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/90 px-3 py-2 text-xs font-mono text-zinc-400 hover:border-zinc-700 hover:text-zinc-200 transition min-h-[38px]"
                      title="Inspect Source Code"
                    >
                      <Github className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                      <span>Repository</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Headline & Context */}
              <div className="mt-4 sm:mt-5">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm lg:text-base leading-relaxed text-zinc-400 max-w-4xl">
                  {project.description}
                </p>

                {/* Full-Width Realtime Architecture Flow Simulator */}
                <ArchitectureFlow steps={project.steps} />
              </div>

              {/* Bottom Verification & Quantitative ROI Bar */}
              <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-t border-zinc-800/80 pt-4 sm:pt-5">
                <div className="flex items-baseline gap-2.5 sm:gap-3">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                    {project.metricValue}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-zinc-400">
                    {project.metricLabel}
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-emerald-400/90 bg-emerald-500/5 border border-emerald-500/20 px-3 py-1.5 rounded-md self-start sm:self-auto">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>{project.subMetric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
