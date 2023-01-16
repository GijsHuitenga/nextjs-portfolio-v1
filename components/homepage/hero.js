
import classes from '@/styles/homepage/hero.module.css';

import Image from 'next/image';

import profilePic from '@/public/images/me.jpg';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={profilePic} 
          alt='Foto van Gijs Huitenga'
          width={300}
          height={300}
          placeholder='blur'
        />
      </div>
      <div className={classes.content}>
        <h1>Gijs Huitenga</h1>
        <p>
          Front-end developer en Informatica <br />
          student aan de Hogeschool Leiden.
        </p>
      </div>
    </section>
  );
}
