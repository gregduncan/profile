import type { Metadata } from 'next';
import { Column, Heading2 } from '../../styles/styled';
import { Page } from '../page.styles';
import { SkillsContainer } from './page.styles';

export const metadata: Metadata = {
  title: 'Greg Duncan | Lead Frontend Developer | Skills',
  description:
    'Lead Frontend Developer – React, TypeScript, Next.js, and modern web technologies. Greg Duncan.',
};

export default function Skills() {
  return (
    <Page>
      <Heading2 className="margin-bottom-30">Skills</Heading2>
      <SkillsContainer>
        <Column $span={4}>
          <h4>Frameworks</h4>
          <ul>
            <li>React 19</li>
            <li>Next.js 15</li>
            <li>Astro</li>
            <li>Vue 3</li>
            <li>Svelte 5</li>
            <li>Solid.js</li>
            <li>Qwik</li>
          </ul>
          <h4>Languages</h4>
          <ul>
            <li>TypeScript</li>
            <li>JavaScript (ES2024+)</li>
            <li>Rust</li>
            <li>Go</li>
            <li>Python</li>
          </ul>
          <h4>State Management</h4>
          <ul>
            <li>Zustand</li>
            <li>Jotai</li>
            <li>TanStack Query</li>
            <li>Redux Toolkit</li>
            <li>Signals</li>
          </ul>
          <h4>Styling</h4>
          <ul>
            <li>Tailwind CSS</li>
            <li>CSS Modules</li>
            <li>Panda CSS</li>
            <li>StyleX</li>
            <li>Vanilla Extract</li>
          </ul>
        </Column>
        <Column $span={4}>
          <h4>Build Tools</h4>
          <ul>
            <li>Vite</li>
            <li>Turbopack</li>
            <li>esbuild</li>
            <li>SWC</li>
            <li>Bun</li>
            <li>Rspack</li>
          </ul>
          <h4>Testing</h4>
          <ul>
            <li>Vitest</li>
            <li>Playwright</li>
            <li>Cypress</li>
            <li>Testing Library</li>
            <li>Storybook</li>
          </ul>
          <h4>APIs</h4>
          <ul>
            <li>GraphQL</li>
            <li>tRPC</li>
            <li>REST</li>
            <li>WebSockets</li>
            <li>Server-Sent Events</li>
          </ul>
          <h4>Databases</h4>
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>Prisma</li>
            <li>Drizzle ORM</li>
            <li>Supabase</li>
          </ul>
        </Column>
        <Column $span={4}>
          <h4>Cloud & Infrastructure</h4>
          <ul>
            <li>Vercel</li>
            <li>AWS (Lambda, CloudFront)</li>
            <li>Cloudflare Workers</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Terraform</li>
          </ul>
          <h4>AI & Tooling</h4>
          <ul>
            <li>Claude / Copilot</li>
            <li>LLM Integration</li>
            <li>RAG Pipelines</li>
            <li>Prompt Engineering</li>
          </ul>
          <h4>Mobile & Cross-platform</h4>
          <ul>
            <li>React Native</li>
            <li>Expo</li>
            <li>Tauri</li>
            <li>PWAs</li>
          </ul>
          <h4>Observability</h4>
          <ul>
            <li>Sentry</li>
            <li>DataDog</li>
            <li>OpenTelemetry</li>
            <li>LogRocket</li>
          </ul>
          <h4>Design</h4>
          <ul>
            <li>Figma</li>
            <li>Design Systems</li>
            <li>WCAG Accessibility</li>
          </ul>
        </Column>
      </SkillsContainer>
    </Page>
  );
}
