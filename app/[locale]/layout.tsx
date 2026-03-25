import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Marhey, Roboto_Slab } from 'next/font/google';
import '../globals.css';

const cairo = Marhey({ subsets: ['arabic'], variable: '--font-cairo', weight: ['300', '400', '500', '600', '700'] });
const sora = Roboto_Slab({ subsets: ['latin'], variable: '--font-inter', weight: ['300', '400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: 'Demavio | Creative Digital Agency',
  description: 'Demavio - Creative Digital Agency',
  icons: {
    icon: '/images/demavio.png',
    apple: '/images/demavio.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const isAr = locale === 'ar';

  return (
    <html lang={locale} dir={isAr ? 'rtl' : 'ltr'} style={{ overflowX: 'hidden' }} data-scroll-behavior="smooth">
      <body className={`${cairo.variable} ${sora.variable} ${isAr ? 'font-cairo' : 'font-inter'} bg-[#02040a] text-white w-full overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
