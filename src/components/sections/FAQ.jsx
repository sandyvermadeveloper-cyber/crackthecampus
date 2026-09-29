'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { FAQ_CONTENT } from '@/data/siteContent';

export default function FAQ() {
  const [openId, setOpenId] = useState(FAQ_CONTENT.items[0].id);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative border-b border-[#26262A] bg-[#0B0B0E] py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          tag={FAQ_CONTENT.tag}
          title={FAQ_CONTENT.title}
          subtitle={FAQ_CONTENT.subtitle}
          centered
          className="mb-12 sm:mb-16"
        />

        <div className="mx-auto max-w-4xl space-y-4">
          {FAQ_CONTENT.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-[#26262A] bg-[#141418]/80 transition-colors hover:border-[#7C3AED]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-content`}
                  id={`${item.id}-button`}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-[#FAFAFA] transition-colors hover:text-[#C4B5FD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0E] rounded-xl cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{item.question}</span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#26262A] text-[#A1A1AA]">
                    <ChevronDown
                      size={16}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#7C3AED]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`${item.id}-content`}
                    role="region"
                    aria-labelledby={`${item.id}-button`}
                    className="border-t border-[#26262A] px-5 py-4 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
