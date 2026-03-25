'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-white/5 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/images/demavio.png" alt="Demavio" width={28} height={28} className="object-contain" />
          <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            demavio
          </span>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Demavio. {t('rights')}
        </p>
      </div>
    </footer>
  );
}
