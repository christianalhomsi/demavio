'use client';
import { useTranslations } from 'next-intl';
import { Monitor, Palette, TrendingUp, Video, Share2, BarChart3 } from 'lucide-react';

const icons = [Monitor, Palette, TrendingUp, Video, Share2, BarChart3];
const iconColors = [
  'text-cyan-400 bg-cyan-400/10',
  'text-purple-400 bg-purple-400/10',
  'text-green-400 bg-green-400/10',
  'text-orange-400 bg-orange-400/10',
  'text-pink-400 bg-pink-400/10',
  'text-yellow-400 bg-yellow-400/10',
];

export default function Services() {
  const t = useTranslations('services');
  const items = t.raw('items') as { title: string; desc: string }[];

  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="section-line" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t('title')}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="glow-card p-7 group">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${iconColors[i]}`}>
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
