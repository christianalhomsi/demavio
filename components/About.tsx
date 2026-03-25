'use client';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');
  const stats = t.raw('stats') as { value: string; label: string }[];

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="section-line" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t('title')}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="glow-card p-8 text-center group">
              <div className="stat-number mb-2">{stat.value}</div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
