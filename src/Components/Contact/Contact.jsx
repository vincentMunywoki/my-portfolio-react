import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [alertMessage, setAlertMessage] = useState(null);

  // Integrate contact form with React and Web3Forms
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c3072a35-3a14-4acf-ae78-7bf77069a020");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setAlertMessage({ type: 'success', text: res.message });
    } else {
      setAlertMessage({ type: 'error', text: "There was an error submitting your form." });
    }

    // Clear alert after 3 seconds
    setTimeout(() => setAlertMessage(null), 3000);
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      
      {/* Display alert message */}
      {alertMessage && (
        <div className={`alert ${alertMessage.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'} p-3 mb-4 rounded`}>
          {alertMessage.text}
        </div>
      )}

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I am currently available to take on a new frontend role or project, so feel free to send me a message about anything that you want me to work on.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>vincentmunywoki12@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+254702463477</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
