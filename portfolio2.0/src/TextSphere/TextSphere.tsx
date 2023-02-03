import { useEffect } from "react";

const TextSphere = () => {

  const texts = ['React', 'Hooks', 'Angular', 'JavaScript',
    'Typescript', 'Redux', 'ASP.NET', 'Jasmine', 'Node', 'Jest',
    'Linq', 'EF Core', 'SQL', 'Unit Testing', 'GraphQL'
  ];

  useEffect(() => {
    const tagCloud = document.querySelector('.tagcloud');
    if (!tagCloud) {
      const TagCloud = require("TagCloud");
      const container = ".content";
      TagCloud(container, texts, {
        radius: 320,
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