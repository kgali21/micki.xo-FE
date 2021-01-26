import React from 'react';
import styles from './Subscribe.module.css';

const Subscribe = () => {
  //mailchimp subscribe logic

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id='Subscribe' className={styles.Form}>
      <h1> Follow Along!</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.InnerForm}> 
          <input type='text' placeholder='Enter Email Address' className={styles.Text}/>
          <button className={styles.Subscribe}>Subscribe</button>
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
