import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaWhatsappSquare} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  
  
  
  
  /*function Form() {
    const [isSubmitted, setIsSubmitted] = useRef(false);
  
    function handleSubmit(event) {
      event.preventDefault();
      setIsSubmitted(true);
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <button type="submit" className>Submit</button>
        </form>
        {isSubmitted && <p>Thank you for submitting the form!</p>}
      </div>
    );
  }*/








  
  /*function Mycomponent() {
    const messageRef = useRef(null);
    
    function handleSubmit(event){
      event.preventDefault();


      messageRef.current.innerText = "Thanks..will reach you soon";
    }

  }*/






  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_o7r****', 'template_j0f****', form.current, 'uIFYstmoZ********')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()

  };
  return (
    <section id='contact'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__option">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rrajanand4@gmail.com</h5>
            <a href='mailto.**************@gmail.com'>Send a Message</a>
          </article>

          

          <article className='contact__option'>
            <FaWhatsappSquare className='contact__option-icon'/>
            <h4>Whatsapp</h4>
        
            <a href='https://api.whatsapp.com/send?phone+*************'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Mesaage' required></textarea>
          <button type='sumbit' className='btn-primary'>Send Message</button>


        </form>
      </div>


    </section>
  )
}

export default Contact