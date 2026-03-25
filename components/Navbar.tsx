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
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10 text-gray-400 hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
          >
            {locale === 'en' ? 'عربي' : 'EN'}
          </button>
          <a href="#contact" className="hidden md:flex btn-primary text-sm py-2 px-5">
            {t('contact')}
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
