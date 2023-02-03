import React, { useEffect } from 'react';
import TextSphere from '../TextSphere/TextSphere';
// import TextSphere from '../Elements/TextSphere/TextSphere';

type AboutProps = {
}
function About(props: AboutProps) {

  // useEffect(() => {
  //   const tagCloud = document.querySelector('tagcloud');
  //   console.log(tagCloud)
  //   const TagCloud = require("TagCloud");
  //   const container = ".content";
  //   TagCloud(container, texts, {
  //     // radius: Screening(),
  //     maxSpeed: "normal",

  //   });

  //   // TagCloud('.content', texts);
  // },[])


  return (
    <div className="About">   
      <TextSphere />
      <article>
        <h2>About</h2>
        {/* sliding text animation */}
        <h3>sliding text here</h3>
        <p>Blah blah blah. I'm really neat. I like being neat in neat places. Blah blah blah blah blah blah blah blah blah blah blah. I'm a neat person. I like doing neat stuff.</p>
      </article>
    </div>
  );
}

export default About;
