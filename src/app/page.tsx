import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greg Duncan | Lead Frontend Developer',
  description:
    'U.I and software development specialist – JavaScript, React, Typescript, GraphQL, SEO and more... Greg Duncan U.I Developer.',
};

export default function Home() {
  return (
    <div className="page">
      <div className="row row-top">
        <h2 className="margin-bottom-30">&nbsp;&nbsp;Latest projects</h2>

        <div className="col-md-6">
          <div className="project full">
            <div className="row">
              <div className="col-md-5">
                <div className="project-image project-gigraptor"></div>
              </div>
              <div className="col-md-7">
                <h3>GigRaptor</h3>
                <p>
                  The ultimate gig finder app built with Next.js and React Server Components.
                  Features Turborepo monorepo architecture, TypeScript, Tailwind CSS, and
                  comprehensive testing with Vitest. Server-side rendering for optimal performance
                  and SEO, with real-time data synchronization and responsive design.
                </p>
                <a className="external" target="_blank" href="https://www.gigraptor.com">
                  www.gigraptor.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="project full">
            <div className="row">
              <div className="col-md-5">
                <div className="project-image project-adaptjs"></div>
              </div>
              <div className="col-md-7">
                <h3>Adapt.js</h3>
                <p>
                  An in-house component library, designed for building adaptive, responsive user
                  interfaces. Features a modular architecture with tree-shakeable components, full
                  Javascript support, comprehensive accessibility compliance, and seamless
                  integration with React and React Native.
                </p>
                <a className="external" target="_blank" href="https://github.com/gregduncan/adapt">
                  www.adaptjs.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="paper">
        <div className="row row-middle">
          <div className="col-md-7">
            <h2 className="margin-bottom-15 overflow">
              GDCD{' '}
              <a className="read pull-right margin-top-10" href="#/gdcd/2013">
                view
              </a>
            </h2>
            <div className="gdcd"></div>
          </div>
          <div className="col-md-5">
            <h2 className="margin-bottom-15">Technologies</h2>
            <div className="tech">
              <div className="row">
                <div className="col-md-3">React</div>
                <div className="col-md-6">
                  <span>Typescript</span>
                </div>
                <div className="col-md-3">Node</div>
              </div>
              <div className="row">
                <div className="col-md-2">C#</div>
                <div className="col-md-5">
                  <span>Graph QL</span>
                </div>
                <div className="col-md-5">Electron</div>
              </div>
              <div className="row">
                <div className="col-md-4">AI First</div>
                <div className="col-md-4">
                  <span>Knockout</span>
                </div>
                <div className="col-md-4">Redux</div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <span>Vue</span>
                </div>
                <div className="col-md-4">Svelte</div>
                <div className="col-md-4">
                  <span>Angular</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">React Native</div>
                <div className="col-md-6">
                  <span>Playwright</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-bottom">
        <div className="col-md-6">
          <h2>About</h2>
          <h4 className="margin-bottom-15">Web development plus stuff.</h4>
          <p className="p-default">
            Hi, my name is Greg Duncan and I'm a software developer from Portsmouth, UK. I have been
            working in application development for over 21 years, and have experience with a number
            of technologies listed above right.
          </p>
          <p className="p-default">
            Please feel free to contact me regarding any aspect of this site; it would be great to
            hear from you!
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="margin-bottom-15">Where's Greg?</h2>
          <iframe
            width="350"
            height="200"
            scrolling="no"
            src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=4-5+Bonhill+St,+London+EC2A+4BX&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=51.04407,93.076172&amp;ie=UTF8&amp;hq=&amp;hnear=5+Bonhill+St,+London+EC2A+4BX,+United+Kingdom&amp;t=h&amp;z=14&amp;ll=51.522651,-0.085768&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
