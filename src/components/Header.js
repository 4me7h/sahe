import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Header = () => {
  return (
    <section className="header">
        <Container>
            <Row>
                <Col>
                    <p className="text-center">Sahe Website</p>
                </Col>
            </Row>
        </Container>
        
    </section>
  )
}

export default Header