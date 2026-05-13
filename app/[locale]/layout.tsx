// Locale-specific layout with i18n support
import type { Metadata, Viewport } from 'next'
import { Noto_Serif_TC, Noto_Serif_SC, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n/context'
import { locales, type Locale, isValidLocale } from '@/lib/i18n/config'
import { translations } from '@/lib/i18n/context'
import { notFound } from 'next/navigation'
import '../globals.css'

const notoSerifTC = Noto_Serif_TC({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-tc"
});

const notoSerifSC = Noto_Serif_SC({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-sc"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    return {};
  }

  const t = translations[locale];
  
  return {
    title: t.metadata.title,
    description: t.metadata.description,
    generator: 'v0.app',
    icons: {
      icon: [
        {
          url: '/icon-light-32x32.png',
          media: '(prefers-color-scheme: light)',
        },
        {
          url: '/icon-dark-32x32.png',
          media: '(prefers-color-scheme: dark)',
        },
        {
          url: '/icon.svg',
          type: 'image/svg+xml',
        },
      ],
      apple: '/apple-icon.png',
    },
    alternates: {
      languages: {
        'zh-TW': '/zh-TW',
        'zh-CN': '/zh-CN',
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#f5f0eb',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    notFound();
  }

  const langCode = locale === 'zh-TW' ? 'zh-Hant-HK' : 'zh-Hans-CN';

  return (
    <html lang={langCode} className="bg-background">
      <body className={`${notoSerifTC.variable} ${notoSerifSC.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider locale={locale}>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
