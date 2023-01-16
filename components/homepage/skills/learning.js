
import classes from '@/styles/homepage/skills/learning.module.css';

import Image from 'next/image';

import tsLogo from '@/public/images/skills/typescript.png';
import remixLogo from '@/public/images/skills/remix.png';

export default function Learning() {
  return (
    <div className={classes.learning}>
      <h1>&lt;Skills type="Geïnteresseerd" / &gt;</h1>
      <section>
        <div className={classes.item}>
          <div className={classes.image}>
            <Image 
              src={tsLogo}
              alt='Het TypeScript logo'
              width={130}
              height={130}
              placeholder='blur'
            />
          </div>
          <div className={classes.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor.
            </p>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.image}>
            <Image 
              src={remixLogo}
              alt='Het Remix logo'
              width={400}
              height={126}
              placeholder='blur'
            />
          </div>
          <div className={classes.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
