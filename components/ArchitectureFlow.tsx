"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowDown, Activity } from "lucide-react";

interface FlowStep {
  name: string;
  tag: string;
  detail?: string;
}

export function ArchitectureFlow({
  steps,
  active = false,
}: {
  steps: FlowStep[];
  active?: boolean;
}) {
  return (
    <div className="relative my-4 sm:my-5 w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/70 p-3.5 sm:p-5 font-mono text-xs shadow-inner">
      <div className="mb-3.5 sm:mb-4 flex items-center justify-between text-[10px] sm:text-[11px] text-zinc-500 uppercase tracking-wider">
        <span className="flex items-center gap-1.5">
          <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse shrink-0" />
          <span className="text-zinc-400 font-semibold truncate">Realtime Pipeline Simulator</span>
        </span>
        <span className="flex items-center gap-1.5 text-emerald-400 shrink-0">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          </span>
          Deterministic Payload
        </span>
      </div>

      {/* Steps Container */}
      <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:gap-3 w-full">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row items-center gap-2.5 lg:gap-3 flex-1 min-w-0 w-full"
          >
            {/* Step Card */}
            <motion.div
              whileHover={{ scale: 1.015, borderColor: "rgba(52, 211, 153, 0.4)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group relative w-full flex-1 rounded-lg border border-zinc-800 bg-zinc-900/90 px-3.5 py-2.5 sm:px-4 sm:py-3 transition-shadow hover:shadow-[0_0_20px_rgba(16,185,129,0.08)] min-w-0"
            >
              <div className="flex items-center justify-between gap-2 min-w-0">
                <span className="font-semibold text-zinc-100 text-xs sm:text-sm truncate">
                  {step.name}
                </span>
                <span className="rounded bg-zinc-800/90 px-2 py-0.5 text-[10px] sm:text-[11px] font-mono text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 border border-transparent transition-all shrink-0">
                  {step.tag}
                </span>
              </div>
              {step.detail && (
                <div className="mt-1 text-[10px] sm:text-[11px] text-zinc-400 truncate">{step.detail}</div>
              )}
            </motion.div>

            {/* Connecting Beam between steps */}
            {idx < steps.length - 1 && (
              <div className="relative flex flex-col lg:flex-row items-center justify-center py-1 lg:py-0 lg:px-2 w-full lg:w-16 xl:w-24 shrink-0">
                {/* Desktop Track with moving horizontal beam */}
                <div className="hidden lg:block relative w-full h-[2px] bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                    animate={{
                      left: ["-30px", "100%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                      delay: idx * 0.35,
                    }}
                  />
                </div>
                <ArrowRight className="hidden lg:inline h-3.5 w-3.5 text-zinc-600 ml-1.5 shrink-0" />

                {/* Mobile Track with vertical moving beam & ArrowDown */}
                <div className="lg:hidden flex flex-col items-center gap-1 my-0.5">
                  <div className="relative h-4 w-[2px] bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute left-0 right-0 h-3 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
                      animate={{
                        top: ["-12px", "100%"],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear",
                        delay: idx * 0.35,
                      }}
                    />
                  </div>
                  <ArrowDown className="h-3 w-3 text-zinc-500" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
