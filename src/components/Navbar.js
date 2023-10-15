import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

// import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Container>
                <Row>
                    <Col>
                        <div className="navbar__container">
                            <div className="navbar__col">
                                <img className="navbar__logo" src="null" alt="logo" />
                            </div>
                            <div className="navbar__col">
                                <ul className="navbar__nav">
                                    <li className="navbar__nav__item"><a href="/" exact activeClassName="active">inicio</a></li>
                                    <li className="navbar__nav__item"><a href="/">nosotros</a></li>
                                    <li className="navbar__nav__item"><a href="/">servicios</a></li>
                                    <li className="navbar__nav__item"><a href="/">galeria</a></li>
                                    <li className="navbar__nav__item"><a href="/">contacto</a></li>
                                </ul>
                            </div>
                            {/* <div className="navbar__col">
                                <button className="navbar__toggle">
                                    <span className="navbar__toggle__icon"></span>
                                    <span className="navbar__toggle__icon"></span>
                                    <span className="navbar__toggle__icon"></span>
                                </button>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    ) 
}
export default Navbar;