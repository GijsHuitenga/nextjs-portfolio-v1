
import classes from '@/styles/homepage.module.css';

import Container from '@/components/layout/container';

export default function HomePage() {
  return (
    <Container>
      <h1>Home page</h1>
      <div className={classes.height}></div>
    </Container>
  );
}
