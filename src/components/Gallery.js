import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const imagePaths = [
    require("../images/img-gallery-01.jpg"),
    require("../images/img-gallery-02.jpg"),
    require("../images/img-gallery-03.jpg"),
    require("../images/img-gallery-04.jpg"),
    require("../images/img-gallery-05.jpg"),
    require("../images/img-gallery-06.jpg"),

];

function Gallery() {

    const images = imagePaths.map((path, index) =>({
        id: index +1,
        src: path,
        alt: `image-0${index+1}`,
    }));

    return (
        <section className="gallery">
            <Container>
                <Row>
                    <Col>
                        <div className="gallery__container">
                            <div className="gallery__header">
                                <h3 className="text--subtitle text--subtitle-light">
                                    Algunos de nuestros proyectos
                                </h3>
                            </div>
                            <div className="gallery__content">
                                <ul className="gallery__list">
                                    {images.map((image) => (
                                        <li key={image.id} className="gallery__item">
                                            <img className="gallery__img" src={image.src} alt={image.alt} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Gallery;