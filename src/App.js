import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Mision from './components/Mision';
import Desarrollos from './components/Desarrollos';
import Preventa from './components/Preventa';
import Servicios from './components/Servicios';
import Productos from './components/Productos';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

import imgBackgroundPortada from "./images/img-portada.jpg";
import imgBackgroundMision from "./images/img-mision.jpg";

// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Hero 
        imgBackground = {imgBackgroundPortada}
        text = {["Diseñamos espacios",<br />,<strong>Construimos emociones</strong>]}
      />
      <Nosotros />
      <Mision 
        imgBackground= {imgBackgroundMision}
      />
      <Desarrollos />
      <Preventa />
      <Servicios />
      <Productos />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
