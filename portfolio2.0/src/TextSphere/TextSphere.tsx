import { useEffect } from "react";
import './TextSphere.scss';

const TextSphere = () => {

  const texts = ['React', 'Hooks', 'Angular', 'JavaScript',
    'Typescript', 'Redux', 'ASP.NET', 'Jasmine', 'Node', 'Jest',
    'Linq', 'EF Core', 'SQL', 'Unit Testing'
  ];

  useEffect(() => {
    const tagCloud = document.querySelector('.tagcloud');
    if (!tagCloud) {
      const TagCloud = require("TagCloud");
      const container = ".content";
      TagCloud(container, texts, {
        radius: 190,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
        keep: true
      });
    }

    // TagCloud('.content', texts);
  }, [])
  return (
    <span className="content"></span>
  )
}

export default TextSphere