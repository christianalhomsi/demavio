'use client';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = () => {
    const next = locale === 'en' ? 'ar' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${next}`);
    router.push(newPath);
  };

  const links = ['home', 'services', 'about', 'contact'] as const;

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Demavio" width={36} height={36} />
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            demavio
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={switchLocale}
            className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Globe size={16} />
            {locale === 'en' ? 'عربي' : 'EN'}
          </button>
          <button className="md:hidden text-gray-400" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-gray-950 border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          {links.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {t(key)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
