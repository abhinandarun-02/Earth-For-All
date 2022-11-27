import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Hero from './Components/Home/Hero';
import Info from './Components/Home/Info';
import Services from './Components/Home/Services';
import Footer from './Components/Home/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Info />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
