'use client';
import { useTranslations } from 'next-intl';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[90px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-indigo-600/10 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Badge */}
        <div className="badge mx-auto mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {t('badge')}
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 leading-[1.05] tracking-tight">
          <span className="text-white">{t('title')}</span>
          <br />
          <span className="grad-text">{t('titleHighlight')}</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          {t('subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn-primary">
            {t('cta')} <ArrowRight size={17} />
          </a>
          <a href="#projects" className="btn-secondary">
            {t('ctaSecondary')}
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
}
