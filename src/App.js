  import NavComponent from './Components/nav-component';

import './App.css';
import HeroComponent from './Components/hero-component';
import ProductComponent from './Components/products-component';
import HowWeWorkComponent from './Components/how-we-work-component';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <HeroComponent />
      <ProductComponent />
      <HowWeWorkComponent />
    </div>
  );
}

export default App;
