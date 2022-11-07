  import NavComponent from './Components/nav-component';
  import HeroComponent from './Components/hero-component';
  import ProductComponent from './Components/products-component';
  import HowWeWorkComponent from './Components/how-we-work-component';
  import FooterComponent from './Components/footer-component';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <HeroComponent />
      <ProductComponent />
      <HowWeWorkComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
