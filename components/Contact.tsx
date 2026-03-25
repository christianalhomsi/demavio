'use client';
import { useTranslations } from 'next-intl';

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/demavio',
    color: 'hover:text-pink-400 hover:border-pink-400/40',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/demavio',
    color: 'hover:text-blue-400 hover:border-blue-400/40',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/demavio',
    color: 'hover:text-cyan-400 hover:border-cyan-400/40',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h2>
        <p className="text-gray-400 text-lg mb-12">{t('subtitle')}</p>

        <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">{t('follow')}</p>

        <div className="flex items-center justify-center gap-8">
          {socials.map(({ label, href, svg, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 group"
            >
              <div className={`w-16 h-16 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 ${color} group-hover:scale-110`}>
                {svg}
              </div>
              <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
