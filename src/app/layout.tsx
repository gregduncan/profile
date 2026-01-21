import type { Metadata } from 'next';
import Script from 'next/script';

import { ContactForm } from '../components/contact-form';
import { NavMenu } from '../components/nav-menu';
import StyledComponentsRegistry from '../lib/registry';
import { Providers } from '../lib/providers';
import {
  StyledContainer,
  NavWrapper,
  Content,
  Masthead,
  Logo,
  StyledRow,
  MainColumn,
  SidebarColumn,
  Sidebar,
  Recommends,
  ContentInner,
} from './layout.styles';

export const metadata: Metadata = {
  metadataBase: new URL('https://gregduncan.co.uk'),
  title: {
    default: 'Greg Duncan | Lead Frontend Developer',
    template: '%s | Greg Duncan',
  },
  description:
    'Lead Frontend Developer with 21+ years experience. Specializing in React, TypeScript, Next.js, and modern web technologies. Based in London, UK.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'TypeScript',
    'Next.js',
    'JavaScript',
    'UI Developer',
    'Web Development',
    'London Developer',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Greg Duncan' }],
  creator: 'Greg Duncan',
  publisher: 'Greg Duncan',
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
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://gregduncan.co.uk',
    title: 'Greg Duncan | Lead Frontend Developer',
    description:
      'Lead Frontend Developer with 21+ years experience. Specializing in React, TypeScript, Next.js, and modern web technologies.',
    siteName: 'Greg Duncan Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Greg Duncan - Lead Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greg Duncan | Lead Frontend Developer',
    description:
      'Lead Frontend Developer with 21+ years experience. Specializing in React, TypeScript, Next.js, and modern web technologies.',
    images: ['/images/og-image.png'],
  },
  verification: {
    google: 'b84CMr8_ggjKcJPuGtQiklwchKWu__crWBQRH9xk_qU',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Greg Duncan',
    jobTitle: 'Lead Frontend Developer',
    description:
      'Lead Frontend Developer with 21+ years experience. Specializing in React, TypeScript, Next.js, and modern web technologies.',
    url: 'https://gregduncan.co.uk',
    image: 'https://gregduncan.co.uk/images/og-image.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'United Kingdom',
    },
    knowsAbout: [
      'React',
      'TypeScript',
      'Next.js',
      'JavaScript',
      'Frontend Development',
      'Web Development',
      'UI Development',
      'Full Stack Development',
    ],
    sameAs: ['https://github.com/gregduncan'],
  };

  return (
    <html lang="en">
      <head>
        <meta name="subject" content="Greg Duncan U.I Developer" />
        <meta name="language" content="English" />
        <meta name="copyright" content="gregduncan.co.uk" />
        <meta name="designer" content="gregduncan" />
        <meta name="publisher" content="gregduncan" />
        <meta name="distribution" content="Global" />
        <meta name="city" content="London" />
        <meta name="country" content="United Kingdom" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link
          href="https://fonts.googleapis.com/css?family=Archivo+Black"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
          type="text/css"
        />
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/images/ico/apple-touch-icon-144-precomposed.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/images/ico/apple-touch-icon-114-precomposed.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/images/ico/apple-touch-icon-72-precomposed.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="/images/ico/apple-touch-icon-57-precomposed.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=UA-29473761-12"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-29473761-12');
                    `}
            </Script>
            <StyledContainer>
          <NavWrapper>
            <NavMenu />
          </NavWrapper>

          <Content className="overflow">
            <Masthead>
              <Logo />
            </Masthead>
            <StyledRow>
              <MainColumn>
                <ContentInner className="overflow">{children}</ContentInner>
              </MainColumn>
              <SidebarColumn>
                <Sidebar className="overflow">
                  <h2>
                    Welcome to my website. Here you can find info on my latest projects, previous
                    work, skills and the infamous GDCDs...
                  </h2>
                  <h3>recommends</h3>
                  <Recommends>
                    <a href="http://www.weareaugustines.com"></a>
                  </Recommends>
                  <h3>get in contact</h3>
                  <ContactForm />
                </Sidebar>
              </SidebarColumn>
            </StyledRow>
          </Content>
        </StyledContainer>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
