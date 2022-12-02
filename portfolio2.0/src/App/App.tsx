import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Work from '../Work/Work';
import Connect from '../Connect/Connect';

function App() {

  const [scrollAtTop, setScrollAtTop] = useState(false)
  const homeRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLInputElement>(null)
  const workRef = useRef<HTMLInputElement>(null);
  const connectRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const topRect = aboutRef?.current?.getBoundingClientRect();
      setScrollAtTop(!!topRect && topRect.top <= 100);
    })
  }, [])

  const scrollToSection= (section: string) => {
    switch (section) {
      case 'Home':
        homeRef.current?.scrollIntoView();
        break
      case 'About':
        aboutRef.current?.scrollIntoView();
        break;
      case 'Work':
        workRef.current?.scrollIntoView();
        break;
      case 'Connect':
        connectRef.current?.scrollIntoView();
        break;
      default: 
        console.error(`Section ${section} does not exist`)
    }
  }

  return (
    <div className="App">
      <Header scrollAtTop={scrollAtTop} scrollToSection={scrollToSection} />
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={workRef}><Work /></div>
      <div ref={connectRef}><Connect /></div>
    </div>
  );
}

export default App;
