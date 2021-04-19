import React, { useState } from 'react';
import env from 'react-dotenv';
import styles from './ContactMeForm.module.css';

const ContactMe = () => {
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newSubject =  firstName + ' ' + lastName + ' - ' + subject;

    fetch('http://localhost:5000/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        from: userEmail,
        to: env.SENDER_EMAIL,
        subject: newSubject,
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

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  
  return (
    <div className={styles.ContactMeComponent}>
      <h1 id='Contact' className={styles.ContactTitle}>CONTACT</h1>
      <section className={styles.Form}>
        <form onSubmit={handleSubmit} >
          <div className={styles.InnerForm}>
            <div className={styles.NameContainer}>
              <input type='text' placeholder='First Name' onChange={handleFirstNameChange} className={styles.NameField} />
              <input type='text' placeholder='Last Name' onChange={handleLastNameChange} className={styles.NameField} />
            </div>
            <input type='text' placeholder='Enter Your Email Address' onChange={handleUserEmailChange} className={styles.Text}/>
            <input type='text' placeholder='Enter Email Subject' onChange={handleSubjectChange} className={styles.Text}/>
            <textarea placeholder='Enter Body of Email' onChange={handleEmailBodyChange} className={styles.TextArea}/>
            <button className={styles.Subscribe}>SUBMIT</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactMe;
