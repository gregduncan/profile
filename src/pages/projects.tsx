import Head from 'next/head';

export default function Projects() {
    return (
        <>
            <Head>
                <title>Greg Duncan | U.I Developer | Projects</title>
                <meta name="description" content="U.I and software development specialist – View latest projects. Greg Duncan U.I Developer."></meta>
            </Head>
            <div className="page">
                <h2 className="margin-bottom-30">Projects</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="project full">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="project-image project-segmantics"></div>
                                </div>
                                <div className="col-md-7">
                                    <h3>Segmantics</h3>
                                    <p>
                                        The world's first software as a service risk management webapp. Built as a single page application, MVC5, Knockout.js, Web API, Require.js and Grunt. Integrated
                                        unit testing with Jasmine. SignalR, Bootstrap and Angular.js also included. Open authentication with Facebook, Google, Twitter and LinkedIn.
                                    </p>
                                    <a className="external" target="_blank" href="http://www.segmantics.com">
                                        www.segmantics.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="project full">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="project-image project-aqua"></div>
                                </div>
                                <div className="col-md-7">
                                    <h3>Aqua Cars</h3>
                                    <p>
                                        Both Mobile and Desktop applications for the UK's third largest taxi company were built using HTML5, CSS3 and jQuery. The cross platform mobile website built in
                                        jQuery Mobile and gives the full functionality of a native app but with higher accessibility. Servers side the applications use .NET Webmatrix infrastructure.
                                    </p>
                                    <a className="external" target="_blank" href="http://www.aquacars.co.uk">
                                        www.aquacars.co.uk
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="project full">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="project-image"></div>
                                </div>
                                <div className="col-md-7">
                                    <h3>Target Offices</h3>
                                    <p>
                                        Target Offices is a multi-tiered ASP.Net application built in C# with an Object-Oriented Programming (OOP) design. The website incorporates unique User
                                        Interface (UI), Business Logic (BLL) and Data Access (DAL) layers. Ajax, XML, Linq, XHTML, CSS, and JavaScript are also used throughout the project.
                                    </p>
                                    <a className="external" target="_blank" href="http://www.targetoffices.com">
                                        www.targetoffices.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="project full">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="project-image project-instant"></div>
                                </div>
                                <div className="col-md-7">
                                    <h3>Instant Offices</h3>
                                    <p>
                                        A complete front-end re-skin, updating HTML, CSS and javaScript. This was a massive project integrating a new design to a bespoke content management system that
                                        produces thousands of pages. The project was completed on time, and under budget. Visual Basic programming was also involved.
                                    </p>
                                    <a className="external" target="_blank" href="http://www.instantoffices.com">
                                        www.instantoffices.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
