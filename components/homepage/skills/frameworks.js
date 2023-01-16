
import classes from '@/styles/homepage/skills/frameworks.module.css';

import Image from 'next/image';

import nextjsLogo from '@/public/images/skills/nextjs.png';
import reactjsLogo from '@/public/images/skills/reactjs.png';

export default function Frameworks() {
  return (
    <div className={classes.frameworks}>
      <h1>&lt;Skills type="Frameworks" /&gt;</h1>
      <section>
        <div className={classes.item}>
          <div className={classes.image}>
            <Image 
              src={nextjsLogo}
              alt='Het NextJS logo'
              width={150}
              height={90}
              placeholder='blur'
            />
          </div>
          <div className={classes.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
              natoque penatibus et magnis dis parturient montes, nascetur 
              ridiculus mus.
            </p>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.image}>
            <Image 
              src={reactjsLogo}
              alt='Het ReactJS logo'
              width={270}
              height={91}
              placeholder='blur'
            />
          </div>
          <div className={classes.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
              natoque penatibus et magnis dis parturient montes, nascetur 
              ridiculus mus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
