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
                                ¿Tienes algún interés?<br />
                                Escríbenos
                            </h2>
                        </div>
                        <div className="contact__content">
                            <span className="contact__text"><a href="mailto:house@btu.com.mx">house@btu.com.mx</a></span>
                            <span className="contact__text"><a href="mailto:construccionesvxp@gmail.com">construccionesvxp@gmail.com</a></span>
                            <span className="contact__text">WhatsApp: <a href="https://wa.me/527441359781" target="_blank" rel="noreferrer">744 135 97 81</a></span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact;