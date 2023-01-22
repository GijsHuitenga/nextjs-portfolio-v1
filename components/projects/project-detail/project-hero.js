
import classes from '@/styles/projects/project-detail/project-hero.module.css';

import Image from 'next/image';

export default function ProjectHero(props) {

  const { title, image } = props;

  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
          src={'/' + image}
          alt={title}
          fill 
        />
      </div>
      <div className={classes.overlay}></div>
      <div className={classes.title}>
        <h1>{ title }</h1>
      </div>
    </section>
  );
}
