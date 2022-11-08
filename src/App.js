import { useEffect, useState } from 'react';
import NavComponent from './Components/nav-component';
import HeroComponent from './Components/hero-component';
import ProductComponent from './Components/products-component';
import HowWeWorkComponent from './Components/how-we-work-component';
import FooterComponent from './Components/footer-component';

import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const clickHandler = () => {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    if(showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showMenu])

  return (
    <div className="App">
      <NavComponent showMenu={showMenu} clickHandler={clickHandler} />
      <div className='container'>

        <HeroComponent />
        <ProductComponent />
        <HowWeWorkComponent />
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
