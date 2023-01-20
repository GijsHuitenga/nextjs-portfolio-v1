
import classes from '@/styles/homepage/contact-form.module.css';

export default function ContactForm() {

  function submitHandler() {
    // handles subimt of form
  }

  return (
    <form onSubmit={submitHandler} className={classes.contact_form}>
        <div className={classes.control}>
          <label htmlFor='email'>Email adres: *</label>
          <input type='email' name='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Bericht: *</label>
          <textarea name='message' id='message' rows={6} cols={30} required ></textarea>
        </div>
        <button className={classes.submit}>
          Verstuur
        </button>
      </form>
  );
}
