'use client';
import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

type Member = { name: string; role: string; img: string; whatsapp: string; linkedin: string };

export default function Team() {
  const t = useTranslations('team');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const members = t.raw('members') as Member[];
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState<'left' | 'right'>('right');
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = (next: number, direction: 'left' | 'right') => {
    if (animating) return;
    setDir(direction);
    setAnimating(true);
    timeout.current = setTimeout(() => {
      setActive(next);
      setAnimating(false);
    }, 300);
  };

  const prev = () => go((active - 1 + members.length) % members.length, isRTL ? 'right' : 'left');
  const next = () => go((active + 1) % members.length, isRTL ? 'left' : 'right');
  const getIndex = (offset: number) => (active + offset + members.length) % members.length;

  useEffect(() => () => { if (timeout.current) clearTimeout(timeout.current); }, []);

  return (
    <section id="team" className="py-20 sm:py-32 px-5 sm:px-8 relative overflow-hidden">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/4 rounded-full blur-[120px]" />
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .card-shimmer {
          background: linear-gradient(105deg,
            rgba(255,255,255,0.02) 0%,
            rgba(255,255,255,0.02) 40%,
            rgba(255,255,255,0.07) 50%,
            rgba(255,255,255,0.02) 60%,
            rgba(255,255,255,0.02) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        .slide-out-left  { animation: slideOutLeft  0.3s ease forwards; }
        .slide-out-right { animation: slideOutRight 0.3s ease forwards; }
        @keyframes slideOutLeft  { to { opacity: 0; transform: translateX(-32px); } }
        @keyframes slideOutRight { to { opacity: 0; transform: translateX(32px);  } }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="section-label"><span>{t('title')}</span></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            {t('subtitle')}
          </h2>
        </div>

        <div className="relative flex items-center justify-center h-[400px] sm:h-[440px]">

          <button onClick={prev} aria-label={isRTL ? 'التالي' : 'Previous'} className="absolute left-0 z-10 top-1/2 -translate-y-1/2 shrink-0 w-9 h-9 rounded-full flex items-center justify-center border border-white/10 bg-white/3 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all text-white/50 hover:text-white">
            {isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>

          <div className="flex items-center justify-center gap-4 w-full px-12">
            <div className="hidden sm:block w-48 shrink-0 opacity-30 scale-90 transition-all duration-500 rounded-3xl overflow-hidden">
              <MemberCard member={members[getIndex(-1)]} />
            </div>

            {/* Active */}
            <div
              key={active}
              className={`flex-1 sm:flex-none sm:w-72 rounded-3xl overflow-hidden ${animating ? (dir === 'right' ? 'slide-out-left' : 'slide-out-right') : ''}`}
              style={{ transition: 'opacity 0.3s, transform 0.3s' }}
            >
              <MemberCard member={members[active]} isActive />
            </div>

            <div className="hidden sm:block w-48 shrink-0 opacity-30 scale-90 transition-all duration-500 rounded-3xl overflow-hidden">
              <MemberCard member={members[getIndex(1)]} />
            </div>
          </div>

          <button onClick={next} aria-label={isRTL ? 'السابق' : 'Next'} className="absolute right-0 z-10 top-1/2 -translate-y-1/2 shrink-0 w-9 h-9 rounded-full flex items-center justify-center border border-white/10 bg-white/3 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all text-white/50 hover:text-white">
            {isRTL ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {members.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > active ? 'right' : 'left')}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? '24px' : '6px',
                height: '6px',
                background: i === active ? 'linear-gradient(90deg, #22d3ee, #3b82f6)' : 'rgba(255,255,255,0.15)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member, isActive = false }: { member: Member; isActive?: boolean }) {
  return (
    <div
      className={`relative p-5 text-center w-full rounded-3xl overflow-hidden ${isActive ? 'card-shimmer' : ''}`}
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {isActive && (
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), rgba(99,102,241,0.4), transparent)' }} />
      )}

      <div className="relative mx-auto mb-4 w-fit">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
          <Image src={member.img} alt={member.name} width={96} height={96} className="w-full h-full object-cover" />
        </div>
      </div>

      <h3 className="font-semibold text-white text-sm mb-1">{member.name}</h3>
      <p className="text-white/40 text-xs mb-4">{member.role}</p>

      <div className="flex justify-center gap-2">
        {/* WhatsApp */}
        <a href={member.whatsapp} target="_blank" rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/40">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        {/* LinkedIn */}
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/40">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>
    </div>
  );
}
