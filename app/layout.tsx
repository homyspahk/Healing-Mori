import type { Metadata, Viewport } from 'next'
import { Noto_Serif_TC, Noto_Serif_SC, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n/context'
import './globals.css'

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

export const metadata: Metadata = {
  title: '上門按摩服務 | 香港',
  description: '香港男按摩師，六年以上經驗，提供正規推油按摩及密宗按摩。上門服務，私隱保密，只限女賓。',
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
}

export const viewport: Viewport = {
  themeColor: '#f5f0eb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-HK" className="bg-background">
      <body className={`${notoSerifTC.variable} ${notoSerifSC.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
