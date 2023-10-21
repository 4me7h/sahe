import 'bootstrap/dist/css/bootstrap.min.css';
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

import { Element } from 'react-scroll';

import imgBackgroundPortada from "./images/img-portada.jpg";
import imgBackgroundMision from "./images/img-mision.jpg";
import imgBackgroundPreventa from "./images/img-preventa-desktop.jpg";

// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Element name="inicio">
        <Hero 
          imgBackground = {imgBackgroundPortada}
          text = {["Diseñamos espacios",<br />,<strong>Construimos emociones</strong>]}
        />
      </Element>
      <Element name="nosotros">
        <Nosotros />
      </Element>
      
        <Mision 
          imgBackground= {imgBackgroundMision}
        />
      
      
      <Desarrollos />
      <Preventa 
        imgBackground={imgBackgroundPreventa}
      />
      <Element name="servicios">
        <Servicios />
      </Element>
      <Productos />
      <Element name="galeria">
        <Gallery />
      </Element>
      <Element name="contacto">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
