'use client';
import { useTranslations } from 'next-intl';
import { Monitor, Palette, TrendingUp, Video, Share2, BarChart3 } from 'lucide-react';

const icons = [Monitor, Palette, TrendingUp, Video, Share2, BarChart3];
const accents = [
  { icon: 'text-cyan-400', glow: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.2)' },
  { icon: 'text-indigo-400', glow: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.2)' },
  { icon: 'text-blue-400', glow: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.2)' },
  { icon: 'text-violet-400', glow: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.2)' },
  { icon: 'text-cyan-300', glow: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.15)' },
  { icon: 'text-blue-300', glow: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.15)' },
];

export default function Services() {
  const t = useTranslations('services');
  const items = t.raw('items') as { title: string; desc: string }[];

  return (
    <section id="services" className="py-20 sm:py-32 px-5 sm:px-8 relative">
      <div className="section-divider absolute top-0 inset-x-0" />

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="section-label"><span>{t('title')}</span></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            {t('subtitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i];
            const a = accents[i];
            return (
              <div key={i} className="glass-card p-6 group">
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-px" style={{ background: `linear-gradient(90deg, transparent, ${a.border}, transparent)` }} />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: a.glow, border: `1px solid ${a.border}` }}
                >
                  <Icon size={18} className={a.icon} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>

                {/* Corner dot */}
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: a.border }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
