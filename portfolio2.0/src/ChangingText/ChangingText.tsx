import React from 'react';

function ChangingText() {
  // also do a loading animation when logging in
  return (
    <div className="changing-text">
      <p>System<span>.<span>out</span>.</span><span>println</span>("</p>
      <div className="string">
        <p className="greeting en">Hello World!</p>
        <p className="greeting es">¡Hola Mundo!</p>
        <p className="greeting de">Hallo Welt!</p>
        <p className="greeting it">Ciao Mondo!</p>
      </div>
      <p className="closure">");</p>
    </div>

    // loading screen is animated console.log or whatever maybe constantly changing based on different langauges?
    /// says hello world in different programming languages
  );
}

export default ChangingText;
