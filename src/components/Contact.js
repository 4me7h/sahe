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
                                ¿Tienes algún interés escríbenos?<br />
                                Escríbenos
                            </h2>
                        </div>
                        <div className="contact__content">
                            <span className="contact__text">house@btu.com.mx</span>
                            <span className="contact__text">construccionesvxp@gmail.com</span>
                            <span className="contact__text">744 135 97 81</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact;