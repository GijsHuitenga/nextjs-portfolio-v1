
import classes from './styles/navbar.module.css';

import Link from "next/link";

export default function Navbar() {
  return (
    <header className={classes.header}>
      <div>
        <div className={classes.logo}>
          <Link href='/'>Gijs Huitenga</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href='/projects'>Projecten</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
