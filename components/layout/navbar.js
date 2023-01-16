
import classes from '@/styles/layout/navbar.module.css';

import Link from 'next/link';

import Logo from './header/logo';

export default function Navbar() {
  return (
    <header className={classes.header}>
      <div>
        <Link href='/'>
          <Logo />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href='/projects'>&lt;Projecten /&gt;</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
