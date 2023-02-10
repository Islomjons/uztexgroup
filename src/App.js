import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import { Overlay } from "./utils"
import Routes from "./routes"
import Hamburger from './components/hamburger/Hamburger';

function App() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false)
  const [isHamburgerEnter, setIsHamburgerEnter] = useState(false)

  useEffect(() => {
    if (isHamburgerActive) {
        document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = "auto"
    }
  }, [isHamburgerActive])
  return (
    <div>
        <Header setIsHamburgerActive={setIsHamburgerActive} setIsHamburgerEnter={setIsHamburgerEnter}/>
        <Hamburger isHamburgerActive={isHamburgerActive} setIsHamburgerActive={setIsHamburgerActive} isHamburgerEnter={isHamburgerEnter} setIsHamburgerEnter={setIsHamburgerEnter}/>
        <Routes />
        {
          isHamburgerActive && <Overlay type="humburger" state={isHamburgerActive} callback={setIsHamburgerActive}/>
        }
    </div>
  );
}

export default App;
