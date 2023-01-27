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
      <h1>About Page</h1>
      {/* <span></span> */}
      <TextSphere />
    </div>
  );
}

export default About;
