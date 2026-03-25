'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="relative px-6 py-10">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-sm group-hover:blur-md transition-all" />
            <Image src="/images/demavio.png" alt="Demavio" width={26} height={26} className="relative object-contain" />
          </div>
          <span className="text-sm font-bold grad-text">demavio</span>
        </a>
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Demavio. {t('rights')}
        </p>
      </div>
    </footer>
  );
}
