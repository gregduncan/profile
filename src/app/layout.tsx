import type { Metadata } from 'next';
import Script from 'next/script';

import { ContactForm } from '../components/contact-form';
import { NavMenu } from '../components/nav-menu';
import '../styles/main.css';

export const metadata: Metadata = {
  title: 'Greg Duncan | Lead Frontend Developer',
  description:
    'U.I and software development specialist – JavaScript, React, Typescript, GraphQL, SEO and more... Greg Duncan U.I Developer.',
  robots: 'noodp',
  other: {
    'google-site-verification': 'b84CMr8_ggjKcJPuGtQiklwchKWu__crWBQRH9xk_qU',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
      </head>
      <body>
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
        <div className="container">
          <div className="navbar">
            <NavMenu />
          </div>

          <div className="content overflow">
            <div className="masthead">
              <a className="logo"></a>
            </div>
            <div className="row">
              <div className="col-md-9">
                <div className="content-inner overflow">{children}</div>
              </div>
              <div className="col-md-3">
                <div className="sidebar overflow">
                  <h2>
                    Welcome to my website. Here you can find info on my latest projects, previous
                    work, skills and the infamous GDCDs...
                  </h2>
                  <h3>recommends</h3>
                  <div className="recommends">
                    <a href="http://www.weareaugustines.com"></a>
                  </div>
                  <h3>get in contact</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
