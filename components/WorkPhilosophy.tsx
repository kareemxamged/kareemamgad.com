"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  MessageSquare,
  Linkedin,
  Github,
  ArrowRight,
  ShieldCheck,
  Check,
  Code2,
  GitPullRequest,
  Sparkles,
  TrendingUp,
  ShoppingBag,
} from "lucide-react";

export function WorkPhilosophy() {
  const [selectedModel, setSelectedModel] = useState<string>("ecommerce-web");
  const [copied, setCopied] = useState(false);

  const email = "kareem@kareemamgad.com";
  const whatsappNumber = "201014320839";

  const collaborationModels = [
    {
      id: "ecommerce-web",
      icon: ShoppingBag,
      title: "Full E-Commerce / Web Projects",
      description:
        "End-to-end web architecture from Next.js 16 storefront to payment gateway webhooks (Paymob), courier API fulfillment (Bolesa), and zero-downtime database deployment.",
      timeline: "Fixed scope milestones · Production launch within 1–3 weeks",
    },
    {
      id: "growth-retainer",
      icon: TrendingUp,
      title: "Meta Ads & Growth Ops Retainer",
      description:
        "Ongoing management of paid acquisition funnels, automated daily ROAS/CPA telemetry, CAPI tracking, technical SEO, and conversion rate optimization (CRO).",
      timeline: "Monthly retainer ($1,000 – $2,000/mo) · Hands-off growth",
    },
    {
      id: "systems-consulting",
      icon: GitPullRequest,
      title: "Systems Consulting & Architecture",
      description:
        "High-impact resolution of critical bottlenecks: multi-tenant database migrations (PostgreSQL), headless scraping daemons (Playwright), or multi-model AI routing.",
      timeline: "Weekly sprint sprints or fractional advisory",
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
    const active = collaborationModels.find((m) => m.id === selectedModel);
    const subject = encodeURIComponent(`Engagement Inquiry: ${active?.title}`);
    const body = encodeURIComponent(
      `Hi Kareem,\n\nI'm reaching out regarding:\n${active?.title}\n\nProject / Retainer details:\n\nLooking forward to speaking.\n`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppLink = () => {
    const active = collaborationModels.find((m) => m.id === selectedModel);
    const text = encodeURIComponent(
      `Hi Kareem, I'd like to discuss: ${active?.title}`
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  return (
    <footer id="contact" className="mt-16 sm:mt-24 border-t border-zinc-800/80 bg-[#0d0d10] py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-12">
          {/* Left Column: Engineering Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>HOW I COLLABORATE & BUILD</span>
            </div>

            <h2 className="mt-3.5 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Proof Over Bureaucracy.
            </h2>

            <p className="mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed text-zinc-400">
              I believe in practical proof and numerical ROI over bureaucracy and corporate fluff. Whether building high-converting e-commerce web applications, executing automated Meta Ads & growth marketing retainers, or consulting on complex systems architecture, I deliver deterministic software and measurable growth.
            </p>

            {/* Collaboration Model Selector */}
            <div className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3">
              <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                Select your preferred collaboration scope:
              </div>

              {collaborationModels.map((item) => {
                const isSelected = selectedModel === item.id;
                const Icon = item.icon;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setSelectedModel(item.id)}
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full text-left rounded-xl border p-3.5 sm:p-4 transition-all duration-200 min-h-[48px] ${
                      isSelected
                        ? "border-emerald-500/60 bg-zinc-900/90 shadow-md ring-1 ring-emerald-500/20"
                        : "border-zinc-800/80 bg-zinc-950/40 hover:border-zinc-700 hover:bg-zinc-900/40"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`rounded-md p-1.5 shrink-0 ${
                            isSelected
                              ? "bg-emerald-500/15 text-emerald-400"
                              : "bg-zinc-800/80 text-zinc-400"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-semibold text-xs sm:text-sm text-zinc-200 truncate">{item.title}</span>
                      </div>

                      {isSelected && (
                        <span className="font-mono text-[10px] sm:text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                          Active Scope
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-xs text-zinc-400 leading-relaxed sm:pl-8">
                      {item.description}
                    </p>

                    <div className="mt-2 text-[10px] sm:text-[11px] font-mono text-zinc-500 sm:pl-8">
                      Engagement: <span className="text-zinc-300">{item.timeline}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Direct Channels & Fast Action */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#121215] p-4 sm:p-6 lg:p-8 lg:col-span-5 shadow-xl">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                Direct Communication Hub
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                Start the Conversation
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                Direct communication with Kareem Amged. Quick responses via email or instant WhatsApp messaging.
              </p>

              <div className="mt-6 space-y-3">
                <motion.a
                  href={getMailtoLink()}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between rounded-lg bg-white px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 shadow-sm min-h-[48px]"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0" />
                    <span>Send Project Scope Email</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </motion.a>

                <motion.a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/80 px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800 min-h-[48px]"
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <MessageSquare className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span className="truncate">Direct WhatsApp Chat</span>
                  </span>
                  <span className="font-mono text-xs text-zinc-400 shrink-0 ml-1">+20 101 432 0839</span>
                </motion.a>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 border-t border-zinc-800/80 pt-5 sm:pt-6">
              <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
                <span>Official Email:</span>
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

              <div className="mt-5 flex items-center justify-between border-t border-zinc-800/40 pt-4">
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
                <span className="font-mono text-[10px] sm:text-[11px] text-zinc-600">
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
