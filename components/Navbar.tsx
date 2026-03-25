'use client';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === 'en' ? 'ar' : 'en';
    router.push(pathname.replace(`/${locale}`, `/${next}`));
  };

  const links = ['home', 'services', 'about', 'team', 'projects', 'contact'] as const;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#02040a]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)]' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-md group-hover:blur-lg transition-all" />
            <Image src="/images/demavio.png" alt="Demavio" width={38} height={38} className="relative object-contain" />
          </div>
          <span className="text-lg font-bold tracking-tight grad-text">demavio</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className="px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={switchLocale}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:border-cyan-500/40 hover:text-cyan-400"
            style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(156,163,175,1)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {locale === 'en' ? 'عربي' : 'EN'}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 relative overflow-hidden group"
            style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(37,99,235,0.15))', border: '1px solid rgba(6,182,212,0.25)' }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(37,99,235,0.25))' }} />
            <span className="relative">{t('contact')}</span>
          </a>
          <button className="md:hidden text-gray-400 hover:text-white transition-colors" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mx-4 mb-4 rounded-2xl bg-[#0a0f1e] border border-white/8 overflow-hidden">
          {links.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setOpen(false)}
              className="flex items-center px-5 py-3.5 text-gray-400 hover:text-white hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
            >
              {t(key)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
