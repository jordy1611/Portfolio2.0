import { useEffect } from 'react';
import Loading from '../Loading/Loading';

type WorkProps = {
}
function About(props: WorkProps) {
  return (
    <div className="work .sliding-page">
      <h1>Work Page</h1>
      <Loading />
    </div>
  );
}

export default About;
