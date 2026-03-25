'use client';
import { useTranslations } from 'next-intl';
import { Calendar, Code, FileText, User, Clock } from 'lucide-react';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';

const processIcons = [Calendar, FileText, Code, User, Clock];

export default function About() {
  const t = useTranslations('about');
  const stats = t.raw('stats') as { value: string; label: string }[];
  const processRaw = t.raw('process') as { title: string; date: string; content: string; status: 'completed' | 'in-progress' | 'pending' }[];

  const processData = processRaw.map((item, i) => ({
    id: i + 1,
    ...item,
    category: item.title,
    icon: processIcons[i],
    relatedIds: i === 0 ? [2] : i === processRaw.length - 1 ? [i] : [i, i + 2],
    energy: 100 - i * 20,
  }));

  return (
    <section id="about" className="py-20 sm:py-32 px-5 sm:px-8 relative">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-cyan-700/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Mobile: stacked. Desktop: side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: text + stats */}
          <div>
            <div className="section-label justify-start"><span>{t('title')}</span></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              {t('heading')}
            </h2>
            <div className="relative pl-4 border-l-2 border-cyan-500/40 mt-6">
              <p className="text-white/55 text-base sm:text-lg leading-relaxed font-light">
                {t('subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-10">
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <div className="stat-number mb-1">{stat.value}</div>
                  <div className="text-white/40 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: orbital — fixed height, self-contained */}
          <div className="w-full h-[420px] sm:h-[480px]">
            <RadialOrbitalTimeline timelineData={processData} />
          </div>

        </div>
      </div>
    </section>
  );
}
