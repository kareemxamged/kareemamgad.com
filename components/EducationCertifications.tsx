"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  Award,
  FileText,
  ExternalLink,
  Calendar,
  X,
  ShieldCheck,
  Download,
  Maximize2,
} from "lucide-react";

export function EducationCertifications() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const certPdfUrl = "/certificates/mcit_react_cert.pdf";

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isPdfModalOpen) {
        setIsPdfModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPdfModalOpen]);

  return (
    <section id="credentials" className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-12 sm:py-24 border-t border-zinc-800/80">
      <div className="mb-8 sm:mb-10">
        <div className="font-mono text-xs text-emerald-400 uppercase tracking-wider mb-2">
          Academic Foundations & Accredited Proof
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Education & Certifications.
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-2xl">
          Formal academic training in information systems paired with intensive governmental and industry certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Card 1: Academic Degree */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.35 }}
          className="group rounded-2xl border border-zinc-800 bg-[#121215] p-4 sm:p-6 lg:p-7 flex flex-col justify-between hover:border-zinc-700 transition shadow-sm"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-2 text-emerald-400 group-hover:border-emerald-500/30 transition-colors shrink-0">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-zinc-500 flex items-center gap-1.5">
                <Calendar className="h-3 w-3" />
                <span>Class of 2026</span>
              </span>
            </div>

            <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-white">
              B.Sc. in Information Systems
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-medium text-emerald-400/90">
              Delta Higher Institute
            </p>
            <p className="mt-2.5 sm:mt-3 text-xs leading-relaxed text-zinc-400">
              Rigorous curriculum focusing on relational database architecture, distributed systems, software engineering methodologies, and systems analysis.
            </p>
          </div>

          <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-800/80 flex items-center justify-between font-mono text-[11px] sm:text-xs text-zinc-500">
            <span>Specialization: Software Systems</span>
            <span className="text-emerald-400 font-medium">Active Senior</span>
          </div>
        </motion.div>

        {/* Card 2: Meta Professional Certification */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="group rounded-2xl border border-zinc-800 bg-[#121215] p-4 sm:p-6 lg:p-7 flex flex-col justify-between hover:border-zinc-700 transition shadow-sm"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-2 text-sky-400 group-hover:border-sky-500/30 transition-colors shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <span className="font-mono text-[11px] sm:text-xs text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
                <span>2 Verified Credentials</span>
              </span>
            </div>

            <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-white">
              Meta Certified Developer
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-medium text-sky-400/90">
              Front-End & Back-End Professional Credentials
            </p>
            <p className="mt-2.5 sm:mt-3 text-xs leading-relaxed text-zinc-400">
              Dual professional specializations authenticated by Meta on Coursera, verifying production React architecture, client-side state handling, REST APIs, and backend system engineering.
            </p>
          </div>

          <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-800/80 flex flex-col gap-2">
            {/* Meta Front-End Credential Button */}
            <motion.a
              href="https://www.coursera.org/account/accomplishments/verify/PWCRI9JRJGKV"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-between rounded-lg bg-sky-500/15 border border-sky-500/30 px-3 py-2.5 text-xs font-mono font-medium text-sky-300 hover:bg-sky-500/25 transition shadow-sm group/btn min-h-[44px]"
              title="Verify Meta Professional Program in Front-End Web Development on Coursera"
            >
              <div className="flex items-center gap-2 min-w-0">
                <ShieldCheck className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <span className="truncate">Verify Meta Front-End</span>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-sky-400 shrink-0 ml-1.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </motion.a>

            {/* Meta Back-End Credential Button */}
            <motion.a
              href="https://www.coursera.org/account/accomplishments/verify/1M7O1FYHXUD4"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-between rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2.5 text-xs font-mono font-medium text-zinc-300 hover:border-sky-500/40 hover:text-sky-300 hover:bg-zinc-850 transition shadow-sm group/btn min-h-[44px]"
              title="Verify Meta Introduction to Back-End Development on Coursera"
            >
              <div className="flex items-center gap-2 min-w-0">
                <ShieldCheck className="h-3.5 w-3.5 text-zinc-400 group-hover/btn:text-sky-400 shrink-0 transition-colors" />
                <span className="truncate">Verify Meta Back-End</span>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-zinc-500 group-hover/btn:text-sky-400 shrink-0 ml-1.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Card 3: MCIT - DEPI 6-Month Track (With PDF Viewer) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="group rounded-2xl border border-emerald-500/30 bg-[#121215] p-4 sm:p-6 lg:p-7 flex flex-col justify-between hover:border-emerald-500/50 transition shadow-sm relative overflow-hidden"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl" />

          <div>
            <div className="flex items-center justify-between">
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-400 transition-colors shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <span className="font-mono text-[11px] sm:text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                6-Month Track (2024–2025)
              </span>
            </div>

            <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-white">
              Certified React Frontend Developer
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-medium text-emerald-400">
              Ministry of Communications (MCIT - DEPI)
            </p>
            <p className="mt-2.5 sm:mt-3 text-xs leading-relaxed text-zinc-400">
              Intensive governmental scholarship awarded by Digital Egypt Pioneers Initiative (DEPI). 600+ hours of advanced React engineering, Next.js architecture, and agile project delivery.
            </p>
          </div>

          <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-800/80 flex items-center gap-2">
            {/* View In Modal Button */}
            <motion.button
              onClick={() => setIsPdfModalOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-2.5 text-xs font-mono font-semibold text-emerald-300 hover:bg-emerald-500/25 transition shadow-sm flex-1 min-h-[44px]"
            >
              <FileText className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>View Verified PDF / Proof</span>
            </motion.button>

            {/* Direct Open in New Tab Button */}
            <motion.a
              href={certPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/90 p-2.5 text-zinc-400 hover:border-zinc-700 hover:text-white transition min-h-[44px] min-w-[44px]"
              title="Open Certificate PDF in New Tab"
            >
              <ExternalLink className="h-4 w-4 text-zinc-400" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Interactive PDF Certificate Modal */}
      <AnimatePresence>
        {isPdfModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative flex flex-col w-full max-w-5xl h-[88vh] rounded-2xl border border-zinc-800 bg-[#0d0d10] shadow-2xl overflow-hidden"
            >
              {/* Modal Top Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-4 sm:px-6 py-3.5">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-emerald-500/10 border border-emerald-500/20 p-1.5 text-emerald-400">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      Kareem Amged — MCIT (DEPI) React Web Developer Certification
                    </h4>
                    <p className="text-[11px] font-mono text-zinc-400">
                      Official Government Scholarship Credential · Ministry of Communications
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Open in full tab */}
                  <a
                    href={certPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700/80 bg-zinc-800 px-3 py-1.5 text-xs font-mono text-zinc-200 hover:bg-zinc-700 hover:text-white transition"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Open Full Tab</span>
                  </a>

                  {/* Download */}
                  <a
                    href={certPdfUrl}
                    download="Kareem_Amged_MCIT_DEPI_Certificate.pdf"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700/80 bg-zinc-800 px-3 py-1.5 text-xs font-mono text-zinc-200 hover:bg-zinc-700 hover:text-white transition"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>

                  {/* Close button */}
                  <button
                    onClick={() => setIsPdfModalOpen(false)}
                    className="rounded-lg border border-zinc-800 bg-zinc-900 p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition ml-1"
                    title="Close (Esc)"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Modal PDF Viewer Body */}
              <div className="relative flex-1 w-full h-full bg-[#18181b]">
                <iframe
                  src={`${certPdfUrl}#view=FitH`}
                  className="w-full h-full border-0"
                  title="Kareem Amged Official Certificate PDF"
                />
              </div>

              {/* Modal Footer info */}
              <div className="flex items-center justify-between border-t border-zinc-800 bg-zinc-950 px-4 py-2 text-[11px] font-mono text-zinc-500">
                <span>File: 167 Kareem Amged Abdulhady.pdf</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Cryptographically Verified Credential
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
