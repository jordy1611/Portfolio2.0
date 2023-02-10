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
      <form>
        <label>Name</label>
        <input></input>
        <label>Email</label>
        <input></input>
        <label>Message</label>
        <textarea></textarea>
      </form>
    </div>
  );
}

export default About;
