import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="U.I and software development specialist – JavaScript, Knockout, Angular, C#, HTML5, CSS3, SEO and more... Greg Duncan U.I Developer." />
                    <meta name="robots" content="noodp" />
                    <meta name="subject" content="Greg Duncan U.I Developer" />
                    <meta name="geography" content="" />
                    <meta name="language" content="English" />
                    <meta name="copyright" content="gregduncan.co.uk" />
                    <meta name="designer" content="gregduncan" />
                    <meta name="publisher" content="gregduncan" />
                    <meta name="distribution" content="Global" />
                    <meta name="city" content="London" />
                    <meta name="country" content="United Kingdom" />
                    <meta name="google-site-verification" content="b84CMr8_ggjKcJPuGtQiklwchKWu__crWBQRH9xk_qU" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                    <link href="https://fonts.googleapis.com/css?family=Archivo+Black" rel="stylesheet" type="text/css" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
                    <link href="./public/favicon.ico" rel="shortcut icon" />
                    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="./public/images/ico/apple-touch-icon-144-precomposed.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="./public/images/ico/apple-touch-icon-114-precomposed.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/ico/apple-touch-icon-72-precomposed.png" />
                    <link rel="apple-touch-icon-precomposed" href="./public/images/ico/apple-touch-icon-57-precomposed.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
