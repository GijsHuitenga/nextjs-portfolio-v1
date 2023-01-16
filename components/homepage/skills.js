
import classes from '@/styles/homepage/skills.module.css';

import Frameworks from './skills/frameworks';
import Languages from './skills/languages';
import Learning from './skills/learning';

export default function Skills() {
  return (
    <section className={classes.skills}>
      <Frameworks />
      <hr />
      <Languages />
      <hr />
      <Learning />
    </section>
  );
}
