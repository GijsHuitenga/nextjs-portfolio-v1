
import classes from '@/styles/projects/projects-list.module.css';

import ProjectItem from './project-item';

export default function ProjectsList(props) {

  const { items } = props;

  return (
    <section className={classes.projects}>
      <div className={classes.text}>
        <h1>&lt;Projecten /&gt;</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et 
          magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat 
          massa quis enim.
        </p>
      </div>
      <div className={classes.list}>
        <ul>
          {items
            .map((event) => 
              <ProjectItem 
                key={event.id}
                id={event.id}
                title={event.title} 
                description={event.description}
                date={event.date}
                image={event.image}
              />
            )
          }
        </ul>
      </div>
    </section>
  );
}
