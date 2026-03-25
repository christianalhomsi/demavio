'use client';
import { useTranslations } from 'next-intl';
import { User } from 'lucide-react';

export default function Team() {
  const t = useTranslations('team');
  const members = t.raw('members') as { name: string; role: string }[];

  return (
    <section id="team" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h2>
          <p className="text-gray-400 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mx-auto mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all">
                <User size={32} className="text-cyan-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
