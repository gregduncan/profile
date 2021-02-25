import { ContactForm, NavMenu } from '../components';
import Head from 'next/head';

import '../styles/main.css';

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        </Head>
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
                        <div className="content-inner overflow">
                            <Component {...pageProps} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="sidebar overflow">
                            <h2>Welcome to my website. Here you can find info on my latest projects, previous work, skills and the infamous GDCDs...</h2>
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
    </>
);

export default App;
