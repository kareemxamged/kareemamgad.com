"use client";

import { useState, useEffect } from "react";
import { Check, Copy, Terminal, ExternalLink } from "lucide-react";

export function SystemStatusBar({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const [copied, setCopied] = useState(false);
  const [cairoTime, setCairoTime] = useState("");

  const email = "kareem@kareemamgad.com";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCairoTime(new Intl.DateTimeFormat([], options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-[#09090b]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Status indicator */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 sm:px-3 py-1 text-xs shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono font-medium text-emerald-300 text-[11px] sm:text-xs">
              <span className="hidden sm:inline">ALL SYSTEMS & GROWTH ENGINES ACTIVE</span>
              <span className="sm:hidden">SYSTEMS ACTIVE</span>
            </span>
          </div>

          <div className="hidden items-center gap-2 font-mono text-xs text-zinc-400 lg:flex">
            <span className="text-zinc-700">|</span>
            <span>Cairo: <span className="text-zinc-200">{cairoTime || "UTC+2"}</span></span>
            <span className="text-zinc-700">|</span>
            <span className="text-emerald-400 font-medium tracking-wide">OPEN TO REMOTE CONTRACTS & PROJECTS</span>
          </div>
        </div>

        {/* Quick actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* WhatsApp Direct Link */}
          <a
            href="https://wa.me/201014320839"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xs:inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1.5 text-xs font-mono text-zinc-300 transition hover:border-emerald-500/40 hover:bg-zinc-900 hover:text-emerald-300 min-h-[36px]"
            title="Chat on WhatsApp"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenTerminal}
            className="hidden items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1.5 text-xs font-mono text-zinc-400 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-zinc-200 sm:inline-flex min-h-[36px]"
            title="Inspect System Telemetry (Press T)"
          >
            <Terminal className="h-3.5 w-3.5 text-zinc-400" />
            <span>Terminal</span>
            <kbd className="rounded border border-zinc-700 bg-zinc-950 px-1 py-0.2 text-[10px] text-zinc-400">T</kbd>
          </button>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 sm:px-3 py-1.5 text-xs font-mono text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800 active:scale-95 min-h-[36px]"
            aria-label="Copy direct email address"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-zinc-400" />
                <span className="hidden md:inline">{email}</span>
                <span className="md:hidden">Email</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
