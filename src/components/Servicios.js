import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import imgServicios from "../images/img-servicios.jpg";

function Servicios() {
  return (
    <section className="servicios">
        <Container>
            <Row>
                <Col>
                    <div className="servicios__container">
                        <div className="servicios__header">
                            <h2 className="text--subtitle">Servicios</h2>
                        </div>
                        <div className="servicios__content">
                            <div className="servicios__col">
                                <p className="text--content">
                                    Desarrollamos proyectos en tres áreas principales: Interiores, Comercial y Edificación. La especialización en cada una de estas áreas nos permite ofrecer, tanto a clientes como a inversionistas, la mayor calidad e innovación en la realización de cada proyecto.
                                </p>
                                <p className="text--content">
                                    Ofrecemos a los usuarios asesoría y acompañamiento en la puesta en marcha de sus nuevas instalaciones, con un enfoque personalizado. Nuestro equipo pone a disposición de todos los clientes una experiencia única, que refuerza la relación con transparencia y confianza.
                                </p>
                            </div>
                            <div className="servicios__col">
                                <img className="servicios__img" src={imgServicios} alt="nosotros-img" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Servicios;