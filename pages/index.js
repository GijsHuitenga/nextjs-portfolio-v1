
import classes from '@/styles/homepage/homepage.module.css';

import { Fragment } from 'react';

import Container from '@/components/layout/container';
import Hero from '@/components/homepage/hero';
import About from '@/components/homepage/about';
import Projects from '@/components/homepage/projects';
import Skills from '@/components/homepage/skills';
import Contact from '@/components/homepage/contact';

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Container>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Container>
    </Fragment>
  );
}
