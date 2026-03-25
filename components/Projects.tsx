'use client';
import { useTranslations } from 'next-intl';

const accents = [
  { tag: 'text-cyan-400', tagBg: 'rgba(6,182,212,0.08)', tagBorder: 'rgba(6,182,212,0.2)', preview: 'from-cyan-500/10 to-blue-600/10', dot: '#22d3ee' },
  { tag: 'text-indigo-400', tagBg: 'rgba(99,102,241,0.08)', tagBorder: 'rgba(99,102,241,0.2)', preview: 'from-indigo-500/10 to-violet-600/10', dot: '#818cf8' },
  { tag: 'text-blue-400', tagBg: 'rgba(59,130,246,0.08)', tagBorder: 'rgba(59,130,246,0.2)', preview: 'from-blue-500/10 to-cyan-400/10', dot: '#60a5fa' },
  { tag: 'text-violet-400', tagBg: 'rgba(139,92,246,0.08)', tagBorder: 'rgba(139,92,246,0.2)', preview: 'from-violet-500/10 to-indigo-400/10', dot: '#a78bfa' },
  { tag: 'text-cyan-300', tagBg: 'rgba(6,182,212,0.06)', tagBorder: 'rgba(6,182,212,0.15)', preview: 'from-cyan-400/10 to-blue-500/10', dot: '#67e8f9' },
  { tag: 'text-blue-300', tagBg: 'rgba(59,130,246,0.06)', tagBorder: 'rgba(59,130,246,0.15)', preview: 'from-blue-400/10 to-indigo-500/10', dot: '#93c5fd' },
];

export default function Projects() {
  const t = useTranslations('projects');
  const items = t.raw('items') as { title: string; category: string; desc: string }[];

  return (
    <section id="projects" className="py-20 sm:py-32 px-5 sm:px-8 relative">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[90px]" />
        <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-cyan-600/4 rounded-full blur-[70px]" />
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
            const a = accents[i % accents.length];
            return (
              <div key={i} className="glass-card p-5 group flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-md ${a.tag}`}
                    style={{ background: a.tagBg, border: `1px solid ${a.tagBorder}` }}
                  >
                    {item.category}
                  </span>
                  <div className="flex gap-1">
                    {[0,1,2].map(j => <div key={j} className="w-1.5 h-1.5 rounded-full bg-white/10" />)}
                  </div>
                </div>

                {/* Preview */}
                <div className={`h-24 rounded-xl bg-gradient-to-br ${a.preview} flex items-center justify-center`} style={{ border: '1px solid rgba(255,255,255,0.04)' }}>
                  <div className="w-8 h-8 rounded-lg" style={{ background: a.tagBg, border: `1px solid ${a.tagBorder}` }} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, transparent, ${a.tagBorder}, transparent)` }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
