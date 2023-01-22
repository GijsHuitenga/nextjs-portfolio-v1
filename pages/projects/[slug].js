
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import { getProjectBySlug } from '@/dummy-data';
import Container from '@/components/layout/container';
import ProjectHero from '@/components/projects/project-detail/project-hero';
import ProjectContent from '@/components/projects/project-detail/project-content';

export default function ProjectPage() {

  const router = useRouter();
  const projectSlug = router.query.slug;
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return (
      <p 
        style={
          { 
            width: '100%', 
            height: '85vh', 
            'padding-top': '12.5rem', 
            'padding-bottom': '12.5rem', 
            'text-align': 'center'
          }
        }
      >
        Sorry, het project dat u zoekt bestaat helaas niet.
      </p>
    );
  }

  return (
    <Fragment>
      <Container>
        <ProjectHero 
          title={project.title} 
          image={project.image} 
        />
        <ProjectContent 
          date={project.date}
          text={project.text}
        />
      </Container>
    </Fragment>
  );
}
