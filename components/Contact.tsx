'use client';
import { useTranslations } from 'next-intl';

const socials = [
  {
    label: 'Instagram',
    handle: '@demavio',
    href: 'https://instagram.com/demavio',
    hoverBorder: 'hover:border-pink-500/40',
    hoverBg: 'hover:bg-pink-500/5',
    hoverText: 'group-hover:text-pink-400',
    dot: 'bg-pink-400',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    handle: 'Demavio',
    href: 'https://facebook.com/demavio',
    hoverBorder: 'hover:border-blue-500/40',
    hoverBg: 'hover:bg-blue-500/5',
    hoverText: 'group-hover:text-blue-400',
    dot: 'bg-blue-400',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'Demavio Agency',
    href: 'https://linkedin.com/company/demavio',
    hoverBorder: 'hover:border-cyan-500/40',
    hoverBg: 'hover:bg-cyan-500/5',
    hoverText: 'group-hover:text-cyan-400',
    dot: 'bg-cyan-400',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-blue-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="section-line" />
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t('title')}</h2>
        <p className="text-gray-500 text-lg mb-16 max-w-xl mx-auto">{t('subtitle')}</p>

        <p className="text-xs text-gray-600 uppercase tracking-[0.2em] mb-8">{t('follow')}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {socials.map(({ label, handle, href, hoverBorder, hoverBg, hoverText, dot, svg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 w-full sm:w-auto px-6 py-4 rounded-2xl border border-white/6 bg-white/2 transition-all duration-300 ${hoverBorder} ${hoverBg} hover:-translate-y-1`}
            >
              <div className={`text-gray-400 transition-colors ${hoverText}`}>{svg}</div>
              <div className="text-left">
                <div className={`text-sm font-semibold text-white transition-colors ${hoverText}`}>{label}</div>
                <div className="text-xs text-gray-600">{handle}</div>
              </div>
              <div className={`ms-auto w-2 h-2 rounded-full ${dot} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
