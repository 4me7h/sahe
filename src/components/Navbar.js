import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

import {Link, animateScroll as scroll} from 'react-scroll';

import logo from "../images/logo-blanco.png";

const Navbar = () => {
    return (
        <nav className="navBar">
            <Container>
                <Row>
                    <Col>
                        <div className="navBar__container">
                            <div className="navBar__col">
                                <img className="navBar__logo" src={logo} alt="logo" />
                            </div>
                            <div className="navBar__col">
                                <ul className="navBar__nav">
                                    <li className="navBar__nav__item"><Link to="inicio" smooth={true} duration={500} exact activeClassName="active">inicio</Link></li>
                                    <li className="navBar__nav__item"><Link to="nosotros" smooth={true} duration={500}>nosotros</Link></li>
                                    <li className="navBar__nav__item"><Link to="servicios" smooth={true} duration={500}>servicios</Link></li>
                                    <li className="navBar__nav__item"><Link to="galeria" smooth={true} duration={500}>galeria</Link></li>
                                    <li className="navBar__nav__item"><Link to="contacto" smooth={true} duration={500}>contacto</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    ) 
}
export default Navbar;