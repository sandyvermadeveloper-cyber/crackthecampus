'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/siteContent';
import { SITE_LINKS } from '@/lib/links';
import AnnouncementBar from './AnnouncementBar';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Close menu on click/touch outside, Escape key, or screen resize
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-[#26262A] bg-[#0B0B0E]/90 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300"
    >
      <AnnouncementBar />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#7C3AED]/35 to-transparent" aria-hidden="true" />

      <div className="mx-auto flex min-h-[3.5rem] max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          className="group relative flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0E] rounded-md"
          aria-label="Crack The Campus home"
          href={SITE_LINKS.home}
        >
          <span className="absolute -inset-2 rounded-xl bg-[#7C3AED]/[0.06] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Image
            src="/lightlogo.png"
            alt="Crack The Campus"
            width={220}
            height={56}
            priority
            className="relative h-7 w-auto max-w-[12rem] sm:h-8 sm:max-w-[12rem] md:h-10"
          />
        </Link>

        {/* Desktop Primary Nav */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#A1A1AA] transition-colors duration-200 hover:text-[#F4F4F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0E] focus-visible:rounded-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={SITE_LINKS.signup}
            className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-[#A1A1AA] transition-colors hover:bg-[#141418] hover:text-[#F4F4F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/50"
          >
            Signup
          </Link>
          <Link
            href={SITE_LINKS.contact}
            className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-[#A1A1AA] transition-colors hover:bg-[#141418] hover:text-[#F4F4F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/50"
          >
            Contact
          </Link>
          <Link
            href={SITE_LINKS.login}
            className="ml-1.5 rounded-full bg-[#7C3AED] px-5 py-1.5 text-xs font-semibold text-white shadow-[0_0_0_1px_rgba(124,58,237,0.35),0_4px_16px_rgba(124,58,237,0.4)] transition-all duration-200 hover:brightness-110 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0E]"
          >
            Login
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#26262A] bg-[#141418]/80 text-[#F4F4F5] transition-colors hover:border-[#3F3F46] hover:bg-[#141418] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] lg:hidden touch-manipulation cursor-pointer"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? (
            <X size={20} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Menu size={20} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Floating Mobile Menu & Backdrop Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Full Screen Dim Backdrop Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Floating Mobile Drawer */}
          <nav
            id="mobile-nav"
            className="absolute top-full left-0 z-50 w-full border-b border-[#26262A] bg-[#0B0B0E] shadow-2xl lg:hidden"
            aria-label="Mobile Navigation"
          >
            <div className="space-y-3 px-4 py-6 sm:px-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-2 text-base font-medium text-[#D4D4D8] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-2 pb-1">
                <div className="h-px w-full bg-[#26262A]" aria-hidden="true" />
              </div>

              <Link
                href={SITE_LINKS.signup}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-xl border border-[#26262A] bg-[#141418]/60 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#141418] hover:border-[#3F3F46]"
              >
                Signup
              </Link>
              <Link
                href={SITE_LINKS.contact}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-xl border border-[#26262A] bg-[#141418]/60 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#141418] hover:border-[#3F3F46]"
              >
                Contact
              </Link>
              <Link
                href={SITE_LINKS.login}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-full bg-[#7C3AED] py-3.5 text-center text-sm font-semibold text-white shadow-[0_0_24px_rgba(124,58,237,0.5)] transition-transform hover:brightness-110 active:scale-[0.99]"
              >
                Login
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
