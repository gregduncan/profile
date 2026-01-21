import type { Metadata } from 'next';
import { Row, Column, Heading2, Heading4, Paragraph } from '../styles/styled';
import {
  Page,
  RowTop,
  RowBottom,
  Paper,
  RowMiddle,
  GDCD,
  Tech,
  Project,
  ProjectImage,
  ReadLink,
} from './page.styles';

export const metadata: Metadata = {
  title: 'Greg Duncan | Lead Frontend Developer',
  description:
    'U.I and software development specialist – JavaScript, React, Typescript, GraphQL, SEO and more... Greg Duncan U.I Developer.',
};

export default function Home() {
  return (
    <Page>
      <RowTop>
        <Heading2 className="mb-30" style={{ gridColumn: 'span 12', paddingLeft: '15px' }}>
          &nbsp;&nbsp;Latest projects
        </Heading2>

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
      </RowTop>

      <Paper>
        <RowMiddle>
          <Column $span={7}>
            <Heading2 className="mb-15 overflow">
              GDCD{' '}
              <ReadLink className="mt-10" href="#/gdcd/2013">
                view
              </ReadLink>
            </Heading2>
            <GDCD />
          </Column>
          <Column $span={5}>
            <Heading2 className="mb-15">Technologies</Heading2>
            <Tech>
              <div className="row">
                <Column $span={3}>React</Column>
                <Column $span={6}>
                  <span>Typescript</span>
                </Column>
                <Column $span={3}>Node</Column>
              </div>
              <div className="row">
                <Column $span={2}>C#</Column>
                <Column $span={5}>
                  <span>Graph QL</span>
                </Column>
                <Column $span={5}>Electron</Column>
              </div>
              <div className="row">
                <Column $span={4}>AI First</Column>
                <Column $span={4}>
                  <span>Knockout</span>
                </Column>
                <Column $span={4}>Redux</Column>
              </div>
              <div className="row">
                <Column $span={4}>
                  <span>Vue</span>
                </Column>
                <Column $span={4}>Svelte</Column>
                <Column $span={4}>
                  <span>Angular</span>
                </Column>
              </div>
              <div className="row">
                <Column $span={6}>React Native</Column>
                <Column $span={6}>
                  <span>Playwright</span>
                </Column>
              </div>
            </Tech>
          </Column>
        </RowMiddle>
      </Paper>

      <RowBottom>
        <Column $span={6}>
          <Heading2>About</Heading2>
          <Heading4 className="mb-15">Web development plus stuff.</Heading4>
          <Paragraph>
            Hi, my name is Greg Duncan and I'm a software developer from Portsmouth, UK. I have been
            working in application development for over 21 years, and have experience with a number
            of technologies listed above right.
          </Paragraph>
          <Paragraph>
            Please feel free to contact me regarding any aspect of this site; it would be great to
            hear from you!
          </Paragraph>
        </Column>
        <Column $span={6}>
          <Heading2 className="mb-15">Where's Greg?</Heading2>
          <iframe
            width="350"
            height="200"
            scrolling="no"
            src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=4-5+Bonhill+St,+London+EC2A+4BX&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=51.04407,93.076172&amp;ie=UTF8&amp;hq=&amp;hnear=5+Bonhill+St,+London+EC2A+4BX,+United+Kingdom&amp;t=h&amp;z=14&amp;ll=51.522651,-0.085768&amp;output=embed"
          ></iframe>
        </Column>
      </RowBottom>
    </Page>
  );
}
