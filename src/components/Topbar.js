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
                                        house@btu.com.mx
                                    </li>
                                    <li className="topbar__item">
                                        Tel: 744 135 9781
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