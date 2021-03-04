import React, { useState } from 'react';
import env from 'react-dotenv';

const ContactMe = () => {
  const [userEmail, setUserEmail] = useState();
  const [subject, setSubject] = useState();
  const [emailBody, setEmailBody] = useState(); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        from: userEmail,
        to: env.SENDER_EMAIL,
        subject: subject,
        html: emailBody
      })
    }).then(res => {
      if(res.status === 200) {
        alert('Email Sent!');
      } else if(res.status !== 200) {
        alert('Something went wrong, please try again');
      }
    });
  };

  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleEmailBodyChange = (event) => {
    setEmailBody(event.target.value);
  };
  
  return (
    <section>
      <h1>Contact Me!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type='text' placeholder='Enter Your Email Address' onChange={handleUserEmailChange} />
          <input type='text' placeholder='Enter Email Subject' onChange={handleSubjectChange} />
          <input type='text' placeholder='Enter Body of Email' onChange={handleEmailBodyChange} />
          <button>Send Email!</button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
