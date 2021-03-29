import React from 'react';
import styles from './News.module.css';


const News = () => {

  const title = '"Silence"';

  return (
    <section id='New'>
      <h1 className={styles.ComponentTitle}>News</h1>  
      <section className={styles.NewsContainer}>
        <img src='mickisilence.png' alt='Micki XO' className={styles.MickiImg}/>
        <div className={styles.BioContainer}>
          <h2 className={styles.Title}>{title}</h2>
          <p className={styles.Bio}>
            A sister song to her debut single, {title} showcases the side of toxic relationships from a more vulnerable and very personal place - while still delivering emotion and a catchy chorus. Micki XO wrote the lyrics to reflect how he felt silenced during her own toxic relationship. Where she was isolated from friends/family and felt like she was drowning in her silence, unable to reach out to those who she had pushed away. All money made from this single will be given to House of Ruth, a non-profit in Portland, OR, that aids victims of domestic abuse.
          </p>
          <button className={styles.ListenButton}>LISTEN NOW!</button>
        </div>
      </section>
    </section>
  );
};

export default News;
