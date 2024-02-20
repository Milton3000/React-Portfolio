import React from 'react';
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";

const Contact = () => {
  return (
   <section id="contactPage">
<div id="clients">
<h1 className="contactPageTitle">My Clients</h1>
<p className="clientDesc">
  I have the opportunity to work with a diverse group of companies.
  Some of the notable companies I have worked with includes
</p>
<div className="clientImgs">

  {/* ÄNDRA TILL PALLPOOLEN SENARE */}
  <img src={Walmart} alt="Clients" className="clientImg" />
  <img src={Adobe} alt="Clients" className="clientImg" />
  <img src={Microsoft} alt="Clients" className="clientImg" />
  <img src={Facebook} alt="Clients" className="clientImg" />
</div>
</div>
<div id="contact">
<h1 className="contactPageTitle"> Contact Me </h1>
<span className="contactDesc">Please fill out the form below to discuss any work opportunities. </span>
<form className="contactForm">
  <input type="text" className="name" placeholder='Your Name' />
  <input type="email" className="email" placeholder='Your Email' />
  <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
  <button type='submit' value='Send' className="submitBtn">Submit</button>
  <div className="links">

    {/* Ändra till GITHUB SENARE */}
    <img src={FacebookIcon} alt="Facebook" className="link" />
    <img src={TwitterIcon} alt="Twitter" className="link" />
    <img src={YouTubeIcon} alt="Youtube" className="link" />
    <img src={InstagramIcon} alt="Instagram" className="link" />
  </div>
</form>
</div>
   </section>
  );
}

export default Contact