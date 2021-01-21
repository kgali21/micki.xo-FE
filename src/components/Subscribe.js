import React from 'react';

const Subscribe = () => {
  //mailchimp subscribe logic

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id='Subscribe'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Email Address'/>
        <button>Subscribe</button>
      </form>
    </section>
  );
};

export default Subscribe;
