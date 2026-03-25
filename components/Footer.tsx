'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="relative px-5 sm:px-8 py-8">
      <div className="section-divider absolute top-0 inset-x-0" />
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all" />
            <Image src="/images/demavio.png" alt="Demavio" width={34} height={34} className="relative object-contain" />
          </div>
          <span className="text-sm font-bold grad-text">Demavio</span>
        </a>
        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} Demavio. {t('rights')}
        </p>
      </div>
    </footer>
  );
}
