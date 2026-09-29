import Link from 'next/link';

export default function ButtonLink({
  href,
  children,
  variant = 'primary', // primary | secondary | outline | ghost
  size = 'md', // sm | md | lg
  className = '',
  icon = null,
  external = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0E] active:translate-y-px touch-manipulation cursor-pointer';

  const sizeStyles = {
    sm: 'px-4 py-1.5 text-xs gap-1.5 min-h-[36px]',
    md: 'px-6 py-2.5 text-sm gap-2 min-h-[44px]',
    lg: 'px-8 py-3.5 text-base gap-2.5 min-h-[50px]',
  };

  const variantStyles = {
    primary:
      'bg-[#7C3AED] text-white shadow-[0_0_0_1px_rgba(124,58,237,0.45),0_10px_30px_-8px_rgba(124,58,237,0.5)] hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(124,58,237,0.6),0_14px_36px_-6px_rgba(124,58,237,0.65)]',
    secondary:
      'border border-white/20 bg-white/[0.08] text-white backdrop-blur-md hover:bg-white/[0.14] hover:border-white/35 shadow-[0_4px_20px_rgba(0,0,0,0.3)]',
    outline:
      'border border-[#26262A] bg-[#141418]/80 text-[#F4F4F5] hover:border-[#3F3F46] hover:bg-[#141418]',
    ghost:
      'text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#141418]',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (external || href.startsWith('http') || href.startsWith('mailto')) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={combinedClass}
        {...props}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClass} {...props}>
      {children}
      {icon}
    </Link>
  );
}
