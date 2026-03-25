import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Team from '@/components/Team';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default async function Home() {
  const t = await getTranslations('hero');

  return (
    <main>
      <Navbar />
      <HeroGeometric
        badge={t('badge')}
        title1={t('title')}
        title2={t('titleHighlight')}
        subtitle={t('subtitle')}
        cta={t('cta')}
        ctaSecondary={t('ctaSecondary')}
      />
      <Services />
      <About />
      <Team />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
