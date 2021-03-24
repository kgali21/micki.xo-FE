import React, { useState } from 'react';
import styles from './Subscribe.module.css';

const Subscribe = () => {
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
    }).then(res => {
      if(res.status === 200) {
        alert('Subscribed!');
      } else if(res.status !== 400) {
        alert('Subscribe Unsuccessful, Please try again later');
      } else if(res.status === 400) {
        alert('Email Already Subscribed');
      }
    }).catch(err => console.log(err));
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section id='Subscribe' className={styles.Form}>
      <h1>CONNECT WITH MICKI</h1>
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
