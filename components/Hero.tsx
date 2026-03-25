'use client';
import { useTranslations } from 'next-intl';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <HeroGeometric
      badge={t('badge')}
      title1={t('title')}
      title2={t('titleHighlight')}
      subtitle={t('subtitle')}
      cta={t('cta')}
      ctaSecondary={t('ctaSecondary')}
    />
  );
}
