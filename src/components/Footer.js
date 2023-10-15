import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";



function Footer() {
  return (
    <section className="footer">
        <Container>
            <Row>
                <Col>
                    <div className="footer__container">
                        <div className="footer__header">footer__header</div>
                        <div className="footer__content">
                            footer__content
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer;