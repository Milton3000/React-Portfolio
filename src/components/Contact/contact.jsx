import React, { useRef } from 'react';
import "./contact.css";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import GitHub3 from '../../assets/GitHub3.png';
import Linkedin from '../../assets/Linkedin.png';
import Motiv2 from '../../assets/Motiv2.png';
import Motiv6 from '../../assets/Motiv6.png';
import Motiv7 from '../../assets/Motiv7.png';
import Motiv5 from '../../assets/Motiv5.png';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i21zu9t', 'template_xp64a7x', form.current, {
        publicKey: 'zf-Cr-L9O9hJAJ0Ln',
      })
      .then(
        () => {
          alert("Email sent!")
          e.target.reset();
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          Unfortunately I haven't been able to work with any clients, being a student and all, so here are some images of my dog instead of my clients.
        </p>
        <div className="clientImgs">

          {/* ÄNDRA TILL PALLPOOLEN SENARE */}
          <img src={Motiv2} alt="Clients" className="clientImg" />
          <img src={Motiv6} alt="Clients" className="clientImg" />
          <img src={Motiv7} alt="Clients" className="clientImg" />
          <img src={Motiv5} alt="Clients" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle"> Contact Me </h1>
        <span className="contactDesc">Please fill out the form below if you have any questions or if you'd like to discuss any work opportunities. </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='from_name' required />
          <input type="email" className="email" placeholder='Your Email' name='your_email' required />
          <textarea className='msg' name="message" rows="5" placeholder='Your Message' required></textarea>
          <Button type='submit' className="submitBtn">Submit</Button>
          <div className="links">

            <a href="https://www.linkedin.com/in/milton-kristoffersson90" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin" className="link" /></a>
            <a href="https://github.com/Milton3000" target="_blank" rel="noopener noreferrer"><img src={GitHub3} alt="GitHub" className="link" /></a>
            <a href="https://www.instagram.com/miltonkristoffersson/" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Instagram" className="link" /></a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact