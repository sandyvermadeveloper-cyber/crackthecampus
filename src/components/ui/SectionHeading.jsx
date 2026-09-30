export default function SectionHeading({
  id,
  tag,
  title,
  subtitle,
  centered = false,
  className = '',
}) {
  return (
    <div
      className={`space-y-3 sm:space-y-4 ${
        centered ? 'mx-auto text-center max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      {tag && (
        <div className={centered ? 'flex justify-center' : ''}>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#C4B5FD]">
            <span className="size-1.5 rounded-full bg-[#7C3AED]" aria-hidden="true" />
            {tag}
          </span>
        </div>
      )}
      {title && (
        <h2
          id={id}
          className="text-balance text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl lg:text-4xl leading-tight"
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
