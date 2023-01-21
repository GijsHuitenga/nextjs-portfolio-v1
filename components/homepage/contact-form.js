
import classes from '@/styles/homepage/contact-form.module.css';

import { useRef } from 'react';

export default function ContactForm() {

  const emailInputRef = useRef();
  const messageInputRef = useRef();

  function submitHandler(event) {

    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const reqBody = { email: enteredEmail, message: enteredMessage };

    if (!enteredEmail) {
      console.log('Email is undefined.');
    }

    if (!enteredMessage) {
      console.log('Message is undefined.');
    }

    fetch('/api/contact-form', {
      method: 'POST',
      body: JSON.stringify(reqBody)
    });

  }

  return (
    <form onSubmit={submitHandler} className={classes.contact_form}>
        <div className={classes.control}>
          <label htmlFor='email'>Email adres: *</label>
          <input 
            type='email' 
            name='email' 
            id='email' 
            required 
            minLength='6'
            maxLength='50'
            ref={emailInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Bericht: *</label>
          <textarea 
            name='message' 
            id='message' 
            rows={6} 
            cols={30} 
            required 
            minLength='4'
            maxLength='120'
            ref={messageInputRef}
          ></textarea>
        </div>
        <button className={classes.submit}>
          Verstuur
        </button>
      </form>
  );
}
