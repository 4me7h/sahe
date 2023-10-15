import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";



function Gallery() {
  return (
    <section className="gallery">
        <Container>
            <Row>
                <Col>
                    <div className="gallery__container">
                        <div className="gallery__header">gallery__header</div>
                        <div className="gallery__content">
                            gallery__content
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Gallery;