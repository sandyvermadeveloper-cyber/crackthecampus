'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, X } from 'lucide-react';
import { PROMO_BANNER } from '@/data/siteContent';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Promotion"
      className="relative flex w-full items-center justify-center gap-2.5 border-b border-[#2D1B4E]/80 bg-gradient-to-r from-[#110726] via-[#1C0B3C] to-[#110726] py-2.5 px-4 text-xs sm:text-sm text-white transition-all duration-300"
    >
      {/* Golden Sparkle Star Icon */}
      <Sparkles
        size={17}
        strokeWidth={2}
        className="shrink-0 text-[#FACC15]"
        aria-hidden="true"
      />

      {/* Main Banner Text */}
      <p className="min-w-0 flex-1 text-center leading-snug sm:flex-none">
        <span className="font-bold text-white">Summer coupon</span>
        <span className="text-[#E2D9F3]"> — Get your discount now. </span>
        <Link
          className="font-bold text-white underline underline-offset-4 decoration-[#8B5CF6]/80 transition-colors hover:text-white hover:decoration-white"
          href={PROMO_BANNER.ctaHref}
        >
          {PROMO_BANNER.ctaText}
        </Link>
      </p>

      {/* Dismiss Button */}
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-md text-purple-300/60 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] cursor-pointer sm:right-3"
        aria-label="Dismiss promotion"
      >
        <X size={15} strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  );
}
