
import classes from '@/styles/projects/project-item.module.css';

import Image from "next/image";
import Link from "next/link";

export default function ProjectItem(props) {

  const { title, slug, description, date, image } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('nl', {
    month: 'long',
    year: 'numeric'
  });

  const projectLink = `/projects/${slug}`;

  return (
    <li className={classes.project}>
      <div className={classes.image}>
        <Image 
          src={'/' + image} 
          alt={title}
          fill
          sizes='(min-width: 1250px) 600px,
          1000px'
          // width={600}
          // height={297}
        />
      </div>
      <div className={classes.content}>
        <h2>{ title }</h2>
        <div className={classes.date}>
          <time>{ humanReadableDate }</time>
        </div>
        <p>
          { description }
        </p>
        <div className={classes.button}>
          <Link href={projectLink}>Bekijk Project</Link>
        </div>
      </div>
    </li>
  );
}
