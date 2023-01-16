
import classes from '@/styles/homepage/projects.module.css';

import Image from 'next/image';
import Link from 'next/link';

import projectsImage from '@/public/images/projects/projects.jpg'

export default function Projects() {
  return (
    <section className={classes.projects}>
      <div className={classes.image}>
        <Image 
          src={projectsImage}
          alt='Foto van een groep project'
          fill
        />
      </div>
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <h1>Bekijk al mijn projecten</h1>
        <Link href={'/projects'}>
          <span>&lt;Projecten /&gt;</span>
        </Link>
      </div>
    </section>
  );
}
