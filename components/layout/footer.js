
import classes from './styles/footer.module.css';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <div className={classes.socials}>
          <ul>
            <li>
              <Link href='/'>
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href='/'>
                Github
              </Link>
            </li>
            <li>
              <Link href='/'>
                Instagram
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.info}>
          Deze website is gemaakt met NextJS 13.1.2
        </div>
      </div>
    </footer>
  );
}
