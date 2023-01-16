
import classes from '@/styles/homepage/skills/languages.module.css';

import Image from 'next/image';

import jsLogo from '@/public/images/skills/javascript.png';
import htmlLogo from '@/public/images/skills/html5.png';
import cssLogo from '@/public/images/skills/css3.png';

export default function Languages() {
  return (
    <div className={classes.languages}>
      <h1>&lt;Skills type=&quot;Programmeertalen&quot; / &gt;</h1>
      <section>
        <div className={classes.item}>
          <div className={classes.image}>
            <Image 
              src={jsLogo}
              alt='Het Javascript logo'
              width={150}
              height={150}
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
              src={htmlLogo}
              alt='Het HTML5 logo'
              width={150}
              height={150}
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
              src={cssLogo}
              alt='Het CSS3 logo'
              width={110}
              height={155}
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
