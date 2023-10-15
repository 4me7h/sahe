import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";



function Contact() {
  return (
    <section className="contact">
        <Container>
            <Row>
                <Col>
                    <div className="contact__container">
                        <div className="contact__header">
                            <h2 className="text--title">
                                Contacto
                            </h2>
                        </div>
                        <div className="contact__content">
                            contact__content
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact;