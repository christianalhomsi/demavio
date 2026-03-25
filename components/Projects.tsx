'use client';
import { useTranslations } from 'next-intl';

const tagColors = [
  'text-purple-400 bg-purple-400/8 border border-purple-400/20',
  'text-cyan-400 bg-cyan-400/8 border border-cyan-400/20',
  'text-green-400 bg-green-400/8 border border-green-400/20',
  'text-orange-400 bg-orange-400/8 border border-orange-400/20',
  'text-yellow-400 bg-yellow-400/8 border border-yellow-400/20',
  'text-pink-400 bg-pink-400/8 border border-pink-400/20',
];

export default function Projects() {
  const t = useTranslations('projects');
  const items = t.raw('items') as { title: string; category: string; desc: string }[];

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="section-line" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t('title')}</h2>
          <p className="text-gray-500 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div key={i} className="glow-card p-7 group flex flex-col gap-4">
              {/* Top bar */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${tagColors[i % tagColors.length]}`}>
                  {item.category}
                </span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
              </div>
              {/* Placeholder image area */}
              <div className="h-28 rounded-xl bg-gradient-to-br from-white/3 to-white/1 border border-white/5 flex items-center justify-center">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${['from-cyan-500/30 to-blue-600/30', 'from-purple-500/30 to-pink-600/30', 'from-green-500/30 to-teal-600/30', 'from-orange-500/30 to-red-600/30', 'from-yellow-500/30 to-orange-600/30', 'from-pink-500/30 to-rose-600/30'][i % 6]}`} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
