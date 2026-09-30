import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { InstagramIcon, LinkedinIcon } from '@/components/ui/Icons';
import { FOOTER_CONTENT } from '@/data/siteContent';
import { SITE_LINKS } from '@/lib/links';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#26262A] bg-[#07070A] text-[#A1A1AA] pt-12 pb-8 sm:pt-16 sm:pb-12">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 mb-12">
          {/* Brand & Summary */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              aria-label="Crack The Campus home"
              href={SITE_LINKS.home}
              className="inline-block"
            >
              <Image
                src="/lightlogo.png"
                alt="Crack The Campus"
                width={200}
                height={50}
                className="h-8 w-auto"
              />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-[#A1A1AA]">
              {FOOTER_CONTENT.summary}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-lg border border-[#26262A] bg-[#141418] text-[#A1A1AA] transition-colors hover:border-[#7C3AED]/50 hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={SITE_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-lg border border-[#26262A] bg-[#141418] text-[#A1A1AA] transition-colors hover:border-[#7C3AED]/50 hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAFAFA]">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_CONTENT.productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAFAFA]">
              Contact
            </h3>
            <div className="space-y-2.5 text-sm">
              <div>
                <a
                  href={FOOTER_CONTENT.contact.emailHref}
                  className="font-medium text-[#C4B5FD] underline decoration-[#7C3AED]/50 underline-offset-2 hover:text-white"
                >
                  {FOOTER_CONTENT.contact.email}
                </a>
                <p className="text-xs text-[#A1A1AA]">
                  {FOOTER_CONTENT.contact.note}
                </p>
              </div>

              <div className="pt-2 text-xs leading-relaxed text-[#A1A1AA]">
                <p className="font-medium text-[#D4D4D8] mb-1">Campus Hub Address:</p>
                <p>{FOOTER_CONTENT.contact.address}</p>
                <a
                  href={FOOTER_CONTENT.contact.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 font-semibold text-[#A78BFA] hover:text-[#C4B5FD]"
                >
                  Larger map →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#1C1C22] pt-8 sm:flex-row text-xs text-[#A1A1AA]">
          <p>{FOOTER_CONTENT.copyright}</p>
          <div className="flex items-center gap-6">
            {FOOTER_CONTENT.legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-[#A1A1AA]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
