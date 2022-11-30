import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Work from '../Work/Work';

function App() {

  const [scrollAtTop, setScrollAtTop] = useState(false)
  const topSectionRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const aboutRect = topSectionRef?.current?.getBoundingClientRect();
      setScrollAtTop(!!aboutRect && aboutRect.top <= 0);
    })
  }, [])

  return (
    <div className="App">
      <Header scrollAtTop={ scrollAtTop } />
      <Home />
      <div ref={topSectionRef}><About /></div>
      <Work />
    </div>
  );
}

export default App;
