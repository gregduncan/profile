import Link from 'next/link';

import '../styles/bootstrap.css';
import '../styles/site.css';
import '../styles/site-responsive.css';

const App = ({ Component, pageProps }) => (
    <div className="container">
        <div className="navbar">
            <ul className="nav overflow" nav-menu="active">
                <li>
                    <Link href="/">home</Link>
                </li>
                <li>
                    <Link href="/projects">projects</Link>
                </li>
                <li>
                    <Link href="/skills">skills</Link>
                </li>
                <li>
                    <Link href="/gdcd/2013">gdcd</Link>
                </li>
            </ul>
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
                        <form name="form">
                            <ul>
                                <li>
                                    <input type="text" placeholder="Name" className="form-control" required />
                                </li>
                                <li>
                                    <input type="text" placeholder="Email" className="form-control" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" className="form-control" required></textarea>
                                </li>
                                <li>
                                    <a className="btn btn-default">Send</a>
                                </li>
                            </ul>
                        </form>
                        {/* <div>
                            <h2 className="margin-bottom-15">Thank you!</h2>
                            <p className="p-default">Your enquiry has been received and Greg will be in contact within 24hrs.</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default App;
