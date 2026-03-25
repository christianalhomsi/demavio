'use client';
import { useTranslations } from 'next-intl';

const colors = [
  'text-purple-400 bg-purple-400/10',
  'text-cyan-400 bg-cyan-400/10',
  'text-green-400 bg-green-400/10',
  'text-orange-400 bg-orange-400/10',
  'text-yellow-400 bg-yellow-400/10',
  'text-pink-400 bg-pink-400/10',
];

export default function Projects() {
  const t = useTranslations('projects');
  const items = t.raw('items') as { title: string; category: string; desc: string }[];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h2>
          <p className="text-gray-400 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${colors[i % colors.length]}`}>
                  {item.category}
                </span>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 group-hover:from-cyan-500/40 group-hover:to-blue-600/40 transition-all" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
