
import classes from '@/styles/layout/footer/socials.module.css';

import Link from 'next/link';
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

export default function Socials() {
  return (
    <div className={classes.socials}>
      <ul>
        <li className={classes.linkedin}>
          <Link target='_blank' href='https://www.linkedin.com/in/gijs-huitenga-2692b214a/'>
            <FaLinkedin /> <span>LinkedIn</span>
          </Link>
        </li>
        <li className={classes.github}>
          <Link target='_blank' href='https://github.com/GijsHuitenga'>
          <FaGithubSquare /> <span>Github</span>
          </Link>
        </li>
        <li className={classes.twitter}>
          <Link target='_blank' href='https://twitter.com/GHuitenga'>
          <FaTwitterSquare /> <span>Twitter</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
