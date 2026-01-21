import type { Metadata } from 'next';
import { Row, Column, Heading2 } from '../../styles/styled';
import { Page, Project, ProjectImage } from '../page.styles';

export const metadata: Metadata = {
  title: 'Greg Duncan | U.I Developer | Projects',
  description:
    'U.I and software development specialist – View latest projects. Greg Duncan U.I Developer.',
};

export default function Projects() {
  return (
    <Page>
      <Heading2 className="margin-bottom-30">Projects</Heading2>

      <Row>
        <Column $span={6}>
          <Project className="full">
            <Row>
              <Column $span={5}>
                <ProjectImage $variant="gigraptor" />
              </Column>
              <Column $span={7}>
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
              </Column>
            </Row>
          </Project>
        </Column>
        <Column $span={6}>
          <Project className="full">
            <Row>
              <Column $span={5}>
                <ProjectImage $variant="adaptjs" />
              </Column>
              <Column $span={7}>
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
              </Column>
            </Row>
          </Project>
        </Column>
      </Row>

      <Row>
        <Column $span={6}>
          <Project className="full">
            <Row>
              <Column $span={5}>
                <ProjectImage $variant="segmantics" />
              </Column>
              <Column $span={7}>
                <h3>Segmantics</h3>
                <p>
                  The world's first software as a service risk management webapp. Built as a single
                  page application, MVC5, Knockout.js, Web API, Require.js and Grunt. Integrated
                  unit testing with Jasmine. SignalR, Bootstrap and Angular.js also included. Open
                  authentication with Facebook, Google, Twitter and LinkedIn.
                </p>
                <a className="external" target="_blank" href="http://www.segmantics.com">
                  www.segmantics.com
                </a>
              </Column>
            </Row>
          </Project>
        </Column>
        <Column $span={6}>
          <Project className="full">
            <Row>
              <Column $span={5}>
                <ProjectImage $variant="aqua" />
              </Column>
              <Column $span={7}>
                <h3>Aqua Cars</h3>
                <p>
                  Both Mobile and Desktop applications for the UK's third largest taxi company were
                  built using HTML5, CSS3 and jQuery. The cross platform mobile website built in
                  jQuery Mobile and gives the full functionality of a native app but with higher
                  accessibility. Servers side the applications use .NET Webmatrix infrastructure.
                </p>
                <a className="external" target="_blank" href="http://www.aquacars.co.uk">
                  www.aquacars.co.uk
                </a>
              </Column>
            </Row>
          </Project>
        </Column>
      </Row>

      <Row>
        <Column $span={6}>
          <Project className="full">
            <Row>
              <Column $span={5}>
                <ProjectImage />
              </Column>
              <Column $span={7}>
                <h3>Target Offices</h3>
                <p>
                  Target Offices is a multi-tiered ASP.Net application built in C# with an
                  Object-Oriented Programming (OOP) design. The website incorporates unique User
                  Interface (UI), Business Logic (BLL) and Data Access (DAL) layers. Ajax, XML,
                  Linq, XHTML, CSS, and JavaScript are also used throughout the project.
                </p>
                <a className="external" target="_blank" href="http://www.targetoffices.com">
                  www.targetoffices.com
                </a>
              </Column>
            </Row>
          </Project>
        </Column>
        <Column $span={6}>
          <Project className="full">
            <Row>
              <Column $span={5}>
                <ProjectImage $variant="instant" />
              </Column>
              <Column $span={7}>
                <h3>Instant Offices</h3>
                <p>
                  A complete front-end re-skin, updating HTML, CSS and javaScript. This was a
                  massive project integrating a new design to a bespoke content management system
                  that produces thousands of pages. The project was completed on time, and under
                  budget. Visual Basic programming was also involved.
                </p>
                <a className="external" target="_blank" href="http://www.instantoffices.com">
                  www.instantoffices.com
                </a>
              </Column>
            </Row>
          </Project>
        </Column>
      </Row>
    </Page>
  );
}
