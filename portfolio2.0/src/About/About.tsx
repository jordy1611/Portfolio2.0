import React, { useEffect } from 'react';
import logo from './logo.svg';
import './About.scss';
import TextSphere from '../TextSphere/TextSphere';
// import TextSphere from '../Elements/TextSphere/TextSphere';

type AboutProps = {
}
function About(props: AboutProps) {
  
  const texts = ['3D', 'TagCloud', 'JavaScript',
    'CSS3', 'Animation', 'Interactive',
    'Mouse', 'Rolling', 'Sphere',
    '6KB', 'v2.x',
  ];

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
