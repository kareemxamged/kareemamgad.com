"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TerminalDrawer({ isOpen, onClose }: TerminalDrawerProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: "kareem --status",
      output:
        "STATUS: Open to Select Projects & Global Remote Roles\nENGINEERING ROLE: Full-Stack Engineer & Systems Architect\nCORE STACK: Next.js 16, React 19, TypeScript, Python (FastAPI), PostgreSQL, Playwright\nTIMEZONE: Cairo (UTC+2) | Full Professional English & Native Arabic",
    },
    {
      cmd: "help",
      output:
        "Available commands:\n  • projects      - List production systems with live preview & GitHub links\n  • skills        - Detailed technical stack breakdown & leadership metrics\n  • education     - Academic degree & official government/Meta certifications\n  • contact       - Direct communication channels (Email, WhatsApp, LinkedIn)\n  • clear         - Clear terminal screen\n  • exit          - Close terminal window",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    let reply = "";
    switch (cleanCmd) {
      case "help":
        reply =
          "Commands:\n  • projects   - 5 Verified production systems & commerce engines\n  • skills     - Technical & operational stack\n  • growth     - Meta Ads, conversion funnels & marketing telemetry\n  • education  - Degree & official certifications (Coursera / MCIT)\n  • contact    - Direct communication links (WhatsApp / Email)\n  • clear      - Clear terminal\n  • exit       - Close terminal";
        break;
      case "projects":
        reply =
          "1. SH Bakhoor (Next.js 16 E-Commerce + Meta Ads Conversion Funnel + Bolesa Shipping)\n   Live: https://shbkhur.com | Repo: https://github.com/kareemxamged/shbakhur\n2. Automated Marketing Ops Hub (Python + Meta Graph API + Real-Time ROAS Telemetry)\n   Status: Production Ingestion Pipeline | Repo: https://github.com/kareemxamged/CareerOps_Sys\n3. Massar (FastAPI + WebSockets + Multi-LLM Routing · 22 Engineers Led)\n   Live: https://massar.kareemamgad.com | Repo: https://github.com/kareemxamged/massar-app\n4. Rezgee (Multi-Tenant Restaurant SaaS · 180+ PostgreSQL Migrations)\n   Live: https://rezgee.com | Repo: https://github.com/kareemxamged/Rezgee\n5. Autonomous Ops Radar (Headless Playwright + SQLite WAL + Telegram Alerts)\n   Live: [Private / Internal System] | Repo: https://github.com/kareemxamged/CareerOps_Sys";
        break;
      case "growth":
        reply =
          "PAID ACQUISITION: Meta Ads Manager, Precision Audience Segmentation, Retargeting\nTRACKING & CAPI: GA4 Event Architecture, Meta Pixel & Conversions API\nFUNNEL OPS: High-Converting Next.js 16 Checkout, 95% Manual Ops Elimination\nTELEMETRY: Automated Python scripts pulling Meta Graph API metrics (<3 min ROAS reports)";
        break;
      case "skills":
        reply =
          "GROWTH & ADS: Meta Ads Manager, Audience Targeting, GA4 & Pixel, Technical SEO, AI Copywriting\nFRONTEND: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion\nBACKEND: Python (FastAPI/Flask), Node.js, WebSockets, FastStream, REST APIs\nDATABASES: PostgreSQL (180+ migrations), Supabase (RLS), SQLite (WAL), Redis\nAUTOMATION: Playwright Headless Daemons, Linux Systemd, Webhook Dispatchers\nLEADERSHIP: Directed 22 developers on Massar · Conversion & ROI-driven execution";
        break;
      case "education":
        reply =
          "ACADEMIC: B.Sc. in Information Systems (Delta Higher Institute, Class of 2026)\n• Meta Front-End Web Development:\n  Verify: https://www.coursera.org/account/accomplishments/verify/PWCRI9JRJGKV\n• Meta Back-End Development:\n  Verify: https://www.coursera.org/account/accomplishments/verify/1M7O1FYHXUD4\n• MCIT (DEPI) React Frontend Track (6-Month, 2024–2025):\n  Verified PDF: /certificates/mcit_react_cert.pdf";
        break;
      case "contact":
        reply =
          "EMAIL: kareem@kareemamgad.com\nWHATSAPP: +20 101 432 0839 (wa.me/201014320839)\nLINKEDIN: linkedin.com/in/kareemamgad\nGITHUB: github.com/kareemxamged";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "exit":
        onClose();
        setInput("");
        return;
      default:
        reply = `Command not recognized: '${cleanCmd}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: input, output: reply }]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl overflow-hidden rounded-xl border border-zinc-800 bg-[#09090b] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-4 py-3">
              <div className="flex items-center gap-2">
                <TerminalIcon className="h-4 w-4 text-emerald-400" />
                <span className="font-mono text-xs font-semibold text-zinc-200">
                  kareem-amged-systems-telemetry
                </span>
              </div>
              <button
                onClick={onClose}
                className="rounded p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="h-80 overflow-y-auto p-4 font-mono text-xs text-zinc-300 space-y-3">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <span className="text-zinc-500">$</span>
                    <span className="font-bold">{item.cmd}</span>
                  </div>
                  <pre className="whitespace-pre-wrap text-zinc-400 leading-relaxed pl-3 border-l border-zinc-800">
                    {item.output}
                  </pre>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Footer */}
            <form onSubmit={handleCommand} className="flex items-center border-t border-zinc-800 bg-zinc-950 px-4 py-2.5">
              <span className="font-mono text-xs text-emerald-400 mr-2">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'projects', 'skills', 'education', 'contact' or 'help'..."
                className="flex-1 bg-transparent font-mono text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none"
                autoFocus
              />
              <button
                type="submit"
                className="rounded p-1 text-zinc-500 hover:text-zinc-300 transition"
                title="Execute"
              >
                <CornerDownLeft className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
