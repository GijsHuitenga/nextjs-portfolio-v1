
import classes from '@/styles/homepage/homepage.module.css';

import { Fragment } from 'react';

import Container from '@/components/layout/container';
import Hero from '@/components/homepage/hero';

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Container>
        <h1>Home page</h1>
        <div className={classes.height}></div>
      </Container>
    </Fragment>
  );
}
