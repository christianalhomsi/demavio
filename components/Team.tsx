'use client';
import { useTranslations } from 'next-intl';

const avatarGradients = [
  'from-cyan-500 to-blue-600',
  'from-purple-500 to-pink-600',
  'from-green-500 to-teal-600',
  'from-orange-500 to-red-600',
];

export default function Team() {
  const t = useTranslations('team');
  const members = t.raw('members') as { name: string; role: string }[];

  return (
    <section id="team" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="section-line" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t('title')}</h2>
          <p className="text-gray-500 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map((member, i) => (
            <div key={i} className="glow-card p-7 text-center group">
              {/* Avatar */}
              <div className="relative mx-auto mb-5 w-fit">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} flex items-center justify-center text-2xl font-bold text-white shadow-lg`}>
                  {member.name.charAt(0)}
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-[#02040a]" />
              </div>
              <h3 className="font-semibold text-white mb-1 text-sm">{member.name}</h3>
              <p className="text-xs text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
