'use client';
import { useTranslations } from 'next-intl';
import { Monitor, Palette, TrendingUp, Video, Share2, BarChart3 } from 'lucide-react';

const icons = [Monitor, Palette, TrendingUp, Video, Share2, BarChart3];

export default function Services() {
  const t = useTranslations('services');
  const items = t.raw('items') as { title: string; desc: string }[];

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h2>
          <p className="text-gray-400 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all">
                  <Icon size={22} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
