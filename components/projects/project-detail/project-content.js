
import classes from '@/styles/projects/project-detail/project-content.module.css';

export default function ProjectContent(props) {

  const { date, text } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('nl', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <section className={classes.content}>
      <div className={classes.date}>
        <time>{ humanReadableDate }</time>
      </div>
      <div className={classes.text}>
        <p>
          { text }
        </p>
      </div>
    </section>
  );
}
