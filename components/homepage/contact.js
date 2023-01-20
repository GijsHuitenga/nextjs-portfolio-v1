
import classes from '@/styles/homepage/contact.module.css';

import ContactForm from './contact-form';

export default function Contact() {
  return (
    <section className={classes.contact}>
      <h1>&lt;Contact /&gt;</h1>
      <ContactForm />
    </section>
  );
}
