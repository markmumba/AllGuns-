import Navigation from "./components/navigation";
import Hero from "./components/hero";
import Catalogue from "./components/catalogue";
import Contact from "./components/contact";


import 'bootstrap/dist/css/bootstrap.css';


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
