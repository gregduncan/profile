'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavMenu = () => {
  const pathname = usePathname();
  return (
    <ul className="nav overflow">
      <li className={pathname === '/' ? 'active' : ''}>
        <Link href="/">home</Link>
      </li>
      <li className={pathname === '/projects' ? 'active' : ''}>
        <Link href="/projects">projects</Link>
      </li>
      <li className={pathname === '/skills' ? 'active' : ''}>
        <Link href="/skills">skills</Link>
      </li>
      <li className={pathname?.includes('gdcd') ? 'active' : ''}>
        <Link href="/gdcd/2025">gdcd</Link>
      </li>
    </ul>
  );
};
