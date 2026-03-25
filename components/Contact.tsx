'use client';
import { useTranslations } from 'next-intl';

const socials = [
  {
    label: 'Instagram',
    handle: '@demavio',
    href: 'https://instagram.com/demavio',
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.08)',
    border: 'rgba(244,114,182,0.2)',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    handle: 'Demavio',
    href: 'https://facebook.com/demavio',
    color: '#60a5fa',
    glow: 'rgba(96,165,250,0.08)',
    border: 'rgba(96,165,250,0.2)',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'Demavio Agency',
    href: 'https://linkedin.com/company/demavio',
    color: '#22d3ee',
    glow: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
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
    <section id="contact" className="py-20 sm:py-32 px-5 sm:px-8 relative">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="section-label"><span>{t('title')}</span></div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
          {t('title')}
        </h2>
        <p className="text-white/40 text-base mb-14 leading-relaxed">{t('subtitle')}</p>

        <p className="text-xs text-white/20 uppercase tracking-[0.25em] mb-6">{t('follow')}</p>

        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
          {socials.map(({ label, handle, href, color, glow, border, svg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 flex-1 px-5 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = glow;
                (e.currentTarget as HTMLElement).style.borderColor = border;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
              }}
            >
              <div className="transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = color}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'}
              >
                {svg}
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">{label}</div>
                <div className="text-xs text-white/30">{handle}</div>
              </div>
              <div className="ms-auto w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: color }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
