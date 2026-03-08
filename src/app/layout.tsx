import type { Metadata } from "next";
import { Hind, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/i18n/context";

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astha Gurukul | Vedic Sciences Education",
  description: "Master the ancient wisdom of Jyotish (Astrology), Vastu Shastra, Numerology & Palmistry from expert Acharyas. 22+ years of researched curriculum with lifetime support.",
  keywords: [
    "Vedic Astrology", 
    "Jyotish", 
    "Vastu Shastra", 
    "Numerology", 
    "Palmistry", 
    "Astrology Course",
    "Vedic Sciences",
    "Indian Astrology",
    "Kundali",
    "Astha Gurukul",
    "ज्योतिष",
    "वास्तु शास्त्र",
    "अंक ज्योतिष",
    "हस्तरेखा"
  ],
  authors: [{ name: "Astha Gurukul" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Astha Gurukul | Where Science Meets Spirituality",
    description: "Study Vedic Astrology, Vastu Shastra, Numerology & Palmistry from expert Acharyas",
    url: "https://asthagurukul.com",
    siteName: "Astha Gurukul",
    type: "website",
    locale: "en_IN",
    alternateLocale: "hi_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astha Gurukul - Vedic Sciences Education",
    description: "Master the ancient wisdom of Vedic sciences from expert Acharyas",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      'en-IN': 'https://asthagurukul.com/en',
      'hi-IN': 'https://asthagurukul.com/hi',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hind.variable} ${poppins.variable} font-sans antialiased bg-background text-foreground`}
      >
        <I18nProvider>
          {children}
          <Toaster />
        </I18nProvider>
      </body>
    </html>
  );
}
