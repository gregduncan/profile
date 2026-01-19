import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavMenu = () => {
  const router = useRouter();
  return (
    <ul className="nav overflow">
      <li className={router.pathname === '/' ? 'active' : ''}>
        <Link href="/">home</Link>
      </li>
      <li className={router.pathname === '/projects' ? 'active' : ''}>
        <Link href="/projects">projects</Link>
      </li>
      <li className={router.pathname === '/skills' ? 'active' : ''}>
        <Link href="/skills">skills</Link>
      </li>
      <li className={router.pathname.includes('gdcd') ? 'active' : ''}>
        <Link href="/gdcd/2013">gdcd</Link>
      </li>
    </ul>
  );
};
