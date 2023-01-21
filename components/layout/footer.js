
import classes from '@/styles/layout/footer.module.css';

import Socials from './footer/socials';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <Socials />
        <div className={classes.info}>
          Deze website is gemaakt met NextJS 13.1.2.
        </div>
      </div>
    </footer>
  );
}
