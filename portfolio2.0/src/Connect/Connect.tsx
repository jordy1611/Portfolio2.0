import React, { useEffect } from 'react';

type ConnectProps = {
}
function About(props: ConnectProps) {
  return (
    <div className="connect sliding-page">
      <div className="connect-info">
        <h3>Connect</h3>
        <h2>Sophisticated AF</h2>
        <p>Whether I'm seeking opportunities or not, I'm always open to making new connections! 
          <br/>
          Please reach out if you have any questions or just want to say hi.
        </p>

      </div>
      <form className='connect-form'>
        <label htmlFor='name-input'>Name</label>
        <input id='name-input'></input>
        <label htmlFor='email-input'>Email</label>
        <input id='email-input'></input>
        <label htmlFor='message-input'>Message</label>
        <textarea id='message-input'></textarea>
      </form>
    </div>
  );
}

export default About;
