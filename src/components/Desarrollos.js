import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const imagePaths = [
    require("../images/img-desarrollo-01.png"),
    require("../images/img-desarrollo-02.png"),
    require("../images/img-desarrollo-03.png"),
    require("../images/img-desarrollo-04.png"),
    require("../images/img-desarrollo-05.png"),
    require("../images/img-desarrollo-06.png"),
    require("../images/img-desarrollo-07.png"),
    require("../images/img-desarrollo-08.png"),
];

function Desarrollos() {

    const images = imagePaths.map((path, index) =>({
        id: index +1,
        src: path,
        alt: `image-0${index+1}`,
    }));

  return (
    <section className="desarrollos">
        <Container>
            <Row>
                <Col>
                    <div className="desarrollos__container">
                        <div className="desarrollos__header">
                            <h2 className="text--subtitle">
                                Algunos de nuestros desarrollos
                            </h2>
                        </div>
                        <div className="desarrollos__content">
                            <ul className="desarrollos__list">
                                {images.map((image) => (
                                    <li key={image.id} className="desarrollos__list__item">
                                        <img className="desarrollos__list__img" src={image.src} alt={image.alt} />
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

export default Desarrollos;