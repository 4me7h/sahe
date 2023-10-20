import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

const Topbar = () => {
    return (
        <section className="topbar">
            <Container>
                <Row>
                    <Col>
                        <div className="topbar__container">
                            <div className="topbar__content">
                                <ul className="topbar__grid">
                                    <li className="topbar__item">
                                        CONOCE NUESTRO NUEVO DESARROLLO EN PREVENTA
                                    </li>
                                    <li className="topbar__item">
                                        <a href="mailto:house@btu.com.mx" target="_blank" rel="noreferrer">house@btu.com.mx</a>
                                    </li>
                                    <li className="topbar__item">
                                        WhatsApp: <a href="https://wa.me/527441359781" target="_blank" rel="noreferrer">744 135 97 81</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    ) 
}

export default Topbar