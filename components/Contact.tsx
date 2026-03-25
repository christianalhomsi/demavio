'use client';
import { useTranslations } from 'next-intl';
import { Send } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h2>
          <p className="text-gray-400 text-lg">{t('subtitle')}</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder={t('name')}
            className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
          <input
            type="email"
            placeholder={t('email')}
            className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
          <textarea
            rows={5}
            placeholder={t('message')}
            className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
          >
            {t('send')} <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
