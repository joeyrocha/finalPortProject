import React from 'react'

export default function ContactMe() {
  return (
<div className= 'cm-container'>

<section className='contact'>
    
        <h2>Contact Me!</h2>
        
        <form action="#">
            <div className='input-box'>
                <div className='input-field field'>
                    <input type="text" placeholder='Full Name' id='name' className='item' autoComplete='off'/>
                </div>
                <div className='input-field field'>
                    <input type="text" placeholder='Email' id='email' className='item' autoComplete='off'/>
                </div>
                <div className='input-field field'>
                    <input type="text" placeholder='subject' id='subject' className='item' autoComplete='off'/>
                </div>
            </div>

            <div className='textarea-field field'>
                <textarea name="" id="message" cols="30" rows="10"
                placeholder='Your Message' className='item' autoComplete='off'></textarea>
            </div>
            <button type='submit'>Send Message</button>

        </form>

    </section>
</div>
  )
}