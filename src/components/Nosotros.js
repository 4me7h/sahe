import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import imgNosotros from "../images/img-nosotros.png"


function Nosotros() {
  return (
    <section className="nosotros">
        <Container>
            <Row>
                <Col>
                    <div className="nosotros__container">
                        <div className="nosotros__header">
                            <h2 className="text--subtitle">Nosotros</h2>
                        </div>
                        <div className="nosotros__content">
                            <div className="nosotros__col">
                                <p className="text--content">
                                    En SAHE nos dedicadamos a la planificación, diseño, construcción y comercialización de condominios Turísticos y Residenciales que elevan la calidad de vida de nuestros clientes.
                                </p>
                                <p className="text--content">
                                    Nuestro liderazgo en construcción, inversión, financiamiento, diseño, comercialización, equipamiento y operación de proyectos integrales nos colocan entre las desarrolladoras inmobiliarias y de infraestructura más importantes de México.
                                </p>
                                <p className="text--content">
                                    El compromiso de SAHE está basado ayudar a alcanzar el sueño de nuestros clientes de tener una propiedad con plusvalía.
                                </p>
                            </div>
                            <div className="nosotros__col">
                                <img className="nosotros__img" src={imgNosotros} alt="nosotros-img" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Nosotros;