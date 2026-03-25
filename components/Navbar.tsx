'use client';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, useTransition } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('scrollPos');
      if (saved) {
        window.scrollTo({ top: parseInt(saved), behavior: 'instant' });
        sessionStorage.removeItem('scrollPos');
      }
    } catch {}
  }, []);

  const switchLocale = () => {
    const next = locale === 'en' ? 'ar' : 'en';
    try { sessionStorage.setItem('scrollPos', String(window.scrollY)); } catch {}
    startTransition(() => {
      router.replace(pathname.replace(`/${locale}`, `/${next}`));
    });
  };

  const links = ['home', 'services', 'about', 'team', 'projects', 'contact'] as const;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-2">

        {/* Bar */}
        <div className={`flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-500 ${scrolled ? 'bg-[#02040a]/80 backdrop-blur-xl border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'bg-white/3 backdrop-blur-md border border-white/6'}`}>

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-md group-hover:blur-lg transition-all" />
              <Image src="/images/demavio.png" alt="Demavio" width={38} height={38} className="relative object-contain" />
            </div>
            <span className="text-base font-bold tracking-tight grad-text">Demavio</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((key) => (
              <li key={key}>
                <a href={`#${key}`} className="px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200">
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={switchLocale}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer"
              style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(37,99,235,0.1))', border: '1px solid rgba(6,182,212,0.2)', color: 'rgba(255,255,255,0.7)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(37,99,235,0.25))';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.5)';
                (e.currentTarget as HTMLElement).style.color = 'white';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(37,99,235,0.1))';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.2)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)';
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {locale === 'en' ? 'عربي' : 'EN'}
            </button>

            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 relative overflow-hidden group"
              style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(37,99,235,0.15))', border: '1px solid rgba(6,182,212,0.25)' }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(37,99,235,0.25))' }} />
              <span className="relative">{t('contact')}</span>
            </a>

            <button className="md:hidden text-gray-400 hover:text-white transition-colors" onClick={() => setOpen(!open)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden rounded-3xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.95)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}>
            {links.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setOpen(false)}
                className="flex items-center px-5 py-3.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
              >
                {t(key)}
              </a>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}
