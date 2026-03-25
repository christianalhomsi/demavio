'use client';
import { useTranslations } from 'next-intl';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
          {t('badge')}
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {t('title')}{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            {t('titleHighlight')}
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('subtitle')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
          >
            {t('cta')} <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/10 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
          >
            <Play size={16} /> {t('ctaSecondary')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-cyan-500" />
      </div>
    </section>
  );
}
