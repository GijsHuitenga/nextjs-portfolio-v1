
import classes from '@/styles/homepage/contact.module.css';

export default function Contact() {

  function submitHandler() {
    // Handles the form submission
  }

  return (
    <section className={classes.contact}>
      <h1>&lt;Contact /&gt;</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Email adres: *</label>
          <input type='email' name='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Bericht: *</label>
          <textarea name='message' id='message' rows={6} cols={30} required ></textarea>
        </div>
        <div className={classes.submit}>
          <input type='submit' value='Verstuur' />
        </div>
      </form>
    </section>
  );
}
