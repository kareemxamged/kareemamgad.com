"use client";

import { motion } from "motion/react";
import { ArrowDownRight, Mail, Zap, ShieldCheck, Cpu, Terminal, TrendingUp } from "lucide-react";

export function HeroSection({
  onViewWorks,
  onGetInTouch,
  onOpenTerminal,
}: {
  onViewWorks: () => void;
  onGetInTouch: () => void;
  onOpenTerminal: () => void;
}) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[360px] w-[580px] rounded-full bg-zinc-800/20 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 font-mono text-[11px] sm:text-xs text-zinc-400 mb-6 max-w-full"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="truncate">KAREEM AMGED · SYSTEMS, E-COMMERCE & GROWTH OPERATOR</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.1]"
          >
            Systems, E-Commerce & Growth Operator.
          </motion.h1>

          {/* Value Prop Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-zinc-300 font-normal"
          >
            I bridge the gap between technical systems and scalable revenue. From architecting full-stack web platforms and data pipelines to managing high-converting Meta Ads and automated marketing operations.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <motion.button
              onClick={onViewWorks}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 shadow-sm min-h-[44px]"
            >
              <span>View Selected Works</span>
              <ArrowDownRight className="h-4 w-4" />
            </motion.button>

            <motion.button
              onClick={onGetInTouch}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800 min-h-[44px]"
            >
              <Mail className="h-4 w-4 text-emerald-400" />
              <span>Get in Touch</span>
            </motion.button>

            <motion.button
              onClick={onOpenTerminal}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-950/60 px-3.5 py-3 text-xs font-mono text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition min-h-[44px]"
              title="Inspect Telemetry (Press T)"
            >
              <Terminal className="h-3.5 w-3.5 text-zinc-500" />
              <span>CLI Terminal</span>
            </motion.button>
          </motion.div>

          {/* Proof metrics ticker */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 sm:mt-12 grid grid-cols-2 gap-2.5 sm:gap-4 border-t border-zinc-800/80 pt-6 sm:pt-8 lg:grid-cols-4"
          >
            <div className="rounded-xl border border-zinc-800/50 bg-zinc-950/40 p-3 sm:border-0 sm:bg-transparent sm:p-0 space-y-1">
              <div className="flex items-center gap-1.5 font-mono text-xl sm:text-2xl font-bold text-white">
                <Zap className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>22 Eng</span>
              </div>
              <p className="font-mono text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">
                Led on Massar AI Platform
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/50 bg-zinc-950/40 p-3 sm:border-0 sm:bg-transparent sm:p-0 space-y-1">
              <div className="flex items-center gap-1.5 font-mono text-xl sm:text-2xl font-bold text-white">
                <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>95%</span>
              </div>
              <p className="font-mono text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">
                Checkout & Ops Slashed
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/50 bg-zinc-950/40 p-3 sm:border-0 sm:bg-transparent sm:p-0 space-y-1">
              <div className="flex items-center gap-1.5 font-mono text-xl sm:text-2xl font-bold text-white">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>180+</span>
              </div>
              <p className="font-mono text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">
                Zero-Downtime DB Migrations
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/50 bg-zinc-950/40 p-3 sm:border-0 sm:bg-transparent sm:p-0 space-y-1">
              <div className="flex items-center gap-1.5 font-mono text-xl sm:text-2xl font-bold text-white">
                <Cpu className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Meta Ops</span>
              </div>
              <p className="font-mono text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">
                Automated ROAS Telemetry
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
