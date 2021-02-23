import React, { useState } from 'react';
import styles from './Subscribe.module.css';

// const url = 'https://us7.api.mailchimp.com/3.0/lists/5a1cf723a0/members';

const Subscribe = () => {
  //mailchimp subscribe logic
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();    
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed'
      })
    });
    console.log(email, 'email ====');
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };


  return (
    <section id='Subscribe' className={styles.Form}>
      <h1> Follow Along!</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.InnerForm}> 
          <input type='text' placeholder='Enter Email Address' className={styles.Text} onChange={handleChange} />
          <button className={styles.Subscribe}>Subscribe</button>
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
