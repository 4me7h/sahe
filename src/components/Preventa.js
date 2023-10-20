import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import logo from "../images/logo-preventa.png";


function Preventa({imgBackground}) {
    const backgroundImage = `url(${imgBackground})`;

    return (
        <section className="preventa" style={{backgroundImage: `${backgroundImage}`}}>
            <Container>
                <Row>
                    <Col>
                        <div className="preventa__container">
                            <div className="preventa__header">
                                <h3 className="text--subtitle">
                                    <span className="text--subtitle-light">Conoce Nuestro</span><br />
                                    <span>Nuevo Desarrollo</span><br />
                                    <span>En Preventa</span><br />
                                    <span className="text--subtitle-light">En Acapulco, Gro.</span><br />
                                </h3>
                            </div>
                            <div className="preventa__content">
                                <img className="preventa__logo" src={logo} alt="logo-preventa" />
                                <div>
                                    <a className="btn btn--preventa" href="https://www.youtube.com/@sahetuhogar" target="_blank" rel="noreferrer">Ver recorrido</a>
                                    <a className="btn btn--preventa" href="/">Ver catálogo</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Preventa;