'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavList, NavItem } from './nav-menu.styles';

export const NavMenu = () => {
  const pathname = usePathname();
  return (
    <NavList className="overflow">
      <NavItem $active={pathname === '/'}>
        <Link href="/">home</Link>
      </NavItem>
      <NavItem $active={pathname === '/projects'}>
        <Link href="/projects">projects</Link>
      </NavItem>
      <NavItem $active={pathname === '/skills'}>
        <Link href="/skills">skills</Link>
      </NavItem>
      <NavItem $active={pathname?.includes('gdcd') ?? false}>
        <Link href="/gdcd/2025">gdcd</Link>
      </NavItem>
    </NavList>
  );
};
