import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {

    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f8tts9l', 'template_dky9218', form.current, 'RiQqBc8ajo6qR6_NH')
        .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
          form.current.reset();
        }, 
      (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='b-contain' id='contact'>
        <form className='decor' ref={form} onSubmit={sendEmail}>
            <div className='form-inner'>
                <h1 className='form-header'>Contact Me</h1>
                
                <input type="text" placeholder='Name' name='user_name'required/>
                
                <input type="email" placeholder='Email' name='user_email' required/>
                <textarea placeholder='Message...'  name='message' rows="5"></textarea>
                {isSubmitted && <p className='submission-message'>Message sent.</p>}
                <button type='submit' value="Send" href="/" className='form-button'>Submit</button>
            </div>
        </form>

    </div>
  )
}