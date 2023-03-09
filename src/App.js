import Navigation from "./components/navigation";
import Hero from "./components/hero";
import Catalogue from "./components/catalogue";
import Contact from "./components/contact";


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


function App() {
  return (

    <div className="container-fluid">
      <Navigation />
      <Hero />
      <Catalogue />
      <Contact />
    </div>
  )
}

export default App;
