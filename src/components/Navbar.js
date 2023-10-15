import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

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
                                    <li className="navBar__nav__item"><a href="/" exact activeClassName="active">inicio</a></li>
                                    <li className="navBar__nav__item"><a href="/">nosotros</a></li>
                                    <li className="navBar__nav__item"><a href="/">servicios</a></li>
                                    <li className="navBar__nav__item"><a href="/">galeria</a></li>
                                    <li className="navBar__nav__item"><a href="/">contacto</a></li>
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