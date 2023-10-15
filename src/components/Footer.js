import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import logo from "../images/logo-negro.png";

function Footer() {
  return (
    <section className="footer">
        <Container>
            <Row>
                <Col>
                    <div className="footer__container">
                        <div className="footer__header">
                            <img className="footer__logo" src={logo} alt="logo footer" />
                        </div>
                        <div className="footer__content">
                            <p className="footer__text">
                                SAHE tu hogar :: Todos los Derechos Reservados
                            </p>
                            <p className="footer__text">
                                Sitio Desarrollado por: Eureka Marketing Digital
                            </p>
                            
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer;