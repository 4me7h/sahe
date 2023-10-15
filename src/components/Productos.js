import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";



function Productos() {
  return (
    <section className="productos">
        <Container>
            <Row>
                <Col>
                    <div className="productos__container">
                        <div className="productos__header">productos__header</div>
                        <div className="productos__content">
                            productos__content
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Productos;