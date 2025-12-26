import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Chennai Central Patna | Best South Indian Food Stall in Bihar | Authentic Dosa, Idli & Filter Coffee",
  description: "Experience authentic South Indian cuisine at Chennai Central, Patna's premier food stall. Fresh dosa, crispy idli, aromatic filter coffee & traditional Kerala meals. Open daily 6:30 AM - 1 AM. Located in Patna, Bihar.",
  keywords: "South Indian food Patna, dosa Patna, idli Patna, filter coffee Bihar, South Indian restaurant Patna, authentic Kerala food, traditional Tamil cuisine, best food stall Patna, breakfast Patna, dinner Patna",
  authors: [{ name: "Chennai Central Patna" }],
  creator: "Chennai Central",
  publisher: "Chennai Central Patna",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chennai-central-patna.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Chennai Central Patna | Best South Indian Food Stall in Bihar",
    description: "Authentic South Indian cuisine in Patna. Fresh dosa, idli, filter coffee & traditional meals. Open 6:30 AM - 1 AM daily.",
    url: 'https://chennai-central-patna.vercel.app',
    siteName: 'Chennai Central Patna',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chennai Central Patna - Authentic South Indian Food',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Chennai Central Patna | Best South Indian Food Stall in Bihar",
    description: "Authentic South Indian cuisine in Patna. Fresh dosa, idli, filter coffee & traditional meals.",
    images: ['/og-image.jpg'],
    creator: '@ChennaiCentralPatna',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2E5A39" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Patna, Bihar, India" />
        <meta name="geo.position" content="25.5941;85.1376" />
        <meta name="ICBM" content="25.5941, 85.1376" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Chennai Central Patna",
              "description": "Authentic South Indian food stall in Patna, Bihar serving fresh dosa, idli, filter coffee and traditional meals",
              "image": "https://chennai-central-patna.vercel.app/og-image.jpg",
              "url": "https://chennai-central-patna.vercel.app",
              "telephone": "+91-612-XXXX-XXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Road",
                "addressLocality": "Patna",
                "addressRegion": "Bihar",
                "postalCode": "800001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.5941,
                "longitude": 85.1376
              },
              "openingHours": [
                "Mo-Su 06:30-11:30",
                "Mo-Su 16:00-01:00"
              ],
              "servesCuisine": ["South Indian", "Tamil", "Kerala", "Karnataka"],
              "priceRange": "₹₹",
              "acceptsReservations": false,
              "hasMenu": "https://chennai-central-patna.vercel.app/our-menu",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              },
              "paymentAccepted": ["Cash", "UPI", "Card"],
              "currenciesAccepted": "INR"
            })
          }}
        />
        
        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://chennai-central-patna.vercel.app"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Menu",
                  "item": "https://chennai-central-patna.vercel.app/our-menu"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Contact",
                  "item": "https://chennai-central-patna.vercel.app/contact"
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <ErrorReporter />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
