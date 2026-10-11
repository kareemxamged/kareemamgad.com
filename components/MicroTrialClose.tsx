"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageSquare, Linkedin, Github, ArrowRight, ShieldCheck, Clock, Check } from "lucide-react";

export function MicroTrialClose() {
  const [selectedBottleneck, setSelectedBottleneck] = useState<string>("scraping");
  const [copied, setCopied] = useState(false);

  const email = "kareem@kareemamgad.com";
  const whatsappNumber = "201014320839";

  const bottlenecks = [
    {
      id: "scraping",
      title: "Broken Scrapers & Lead Extraction",
      description: "Our current scraping scripts keep breaking or getting blocked by Cloudflare/anti-bots.",
      solution: "Headless Playwright daemon with residential rotating proxies and SQLite WAL cache in 48h.",
    },
    {
      id: "webhooks",
      title: "Manual Data Entry & Webhook Glitches",
      description: "Our team spends hours copying payload data between Stripe, CRM, and internal databases.",
      solution: "Idempotent Webhook receiver and automated dispatch worker with zero data loss in 48h.",
    },
    {
      id: "realtime",
      title: "Realtime Data Sync & Database Migrations",
      description: "We struggle with slow queries, schema locking, or keeping UI in sync with backend events.",
      solution: "PostgreSQL query audit, zero-downtime migration plan, and WebSocket event bridge in 48h.",
    },
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Operational Micro-Trial: ${bottlenecks.find(b => b.id === selectedBottleneck)?.title}`);
    const body = encodeURIComponent(
      `Hi Kareem,\n\nWe would like to book a 48-hour paid micro-trial ($150–$250) for:\n${bottlenecks.find(b => b.id === selectedBottleneck)?.title}\n\nLooking forward to speaking.`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hi Kareem, I'd like to book a 48-hour operational micro-trial for: ${bottlenecks.find(b => b.id === selectedBottleneck)?.title}`
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  return (
    <footer id="contact" className="mt-24 border-t border-zinc-800/80 bg-[#0d0d10] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: The 48h Guarantee */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>THE ZERO-RISK MICRO-TRIAL</span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              No 3-Week Interview Bureaucracy.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Pick one broken operational bottleneck in your business. I will engineer, test, and deploy a robust solution in <span className="font-semibold text-white">48 hours</span> as a paid micro-trial (<span className="font-mono text-emerald-400">$150–$250</span>). Once satisfied, we activate the monthly retainer (<span className="font-mono text-white">$1,000–$2,000/mo</span>).
            </p>

            <div className="mt-8 space-y-3">
              <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                Select your bottleneck to test:
              </div>

              {bottlenecks.map((item) => {
                const isSelected = selectedBottleneck === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setSelectedBottleneck(item.id)}
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full text-left rounded-lg border p-4 transition-all duration-200 ${
                      isSelected
                        ? "border-emerald-500/60 bg-zinc-900/90 shadow-md ring-1 ring-emerald-500/20"
                        : "border-zinc-800/80 bg-zinc-950/40 hover:border-zinc-700 hover:bg-zinc-900/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-zinc-200">{item.title}</span>
                      {isSelected && (
                        <span className="flex items-center gap-1 font-mono text-[11px] text-emerald-400">
                          <Clock className="h-3 w-3" />
                          48h Turnaround
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">{item.description}</p>
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 rounded border border-zinc-800 bg-zinc-950/80 p-2.5 font-mono text-xs text-zinc-300"
                        >
                          <span className="text-emerald-400 font-semibold">Blueprint:</span> {item.solution}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Direct Channels */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#121215] p-6 sm:p-8 lg:col-span-5 shadow-xl">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                Direct Communication Hub
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Initiate in 60 Seconds
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                Direct channel with Kareem Amged. Zero recruiters or agency middle-men.
              </p>

              <div className="mt-6 space-y-3">
                <motion.a
                  href={getMailtoLink()}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Send Micro-Trial Brief</span>
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </motion.a>

                <motion.a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-emerald-400" />
                    <span>Direct WhatsApp Chat</span>
                  </span>
                  <span className="font-mono text-xs text-zinc-400">+20 101 432 0839</span>
                </motion.a>
              </div>
            </div>

            <div className="mt-8 border-t border-zinc-800/80 pt-6">
              <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
                <span>Direct Email:</span>
                <button
                  onClick={handleCopyEmail}
                  className="text-zinc-200 hover:text-white transition underline underline-offset-4 flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    email
                  )}
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-zinc-800/40 pt-4">
                <div className="flex items-center gap-4">
                  <a
                    href="https://linkedin.com/in/kareemamgad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/kareemxamged"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition"
                    title="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
                <span className="font-mono text-[11px] text-zinc-600">
                  © 2026 Kareem Amged · Cairo (UTC+2)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
