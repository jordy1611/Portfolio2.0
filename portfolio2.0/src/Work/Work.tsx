import { useEffect } from 'react';
import ChangingText from '../ChangingText/ChangingText';

type WorkProps = {
}
function About(props: WorkProps) {
  return (
    <div className="work .sliding-page">
      <ChangingText />
      <section style={{ width: "60%", height: "60%", background: "black"}}></section>
    </div>
  );
}

export default About;
