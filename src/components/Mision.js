import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Mision({imgBackground}) {
    const backgroundImage = `url(${imgBackground})`;

    return (
        <section className="mision" style={{backgroundImage: `${backgroundImage}`}}>
            <Container>
                <Row>
                    <Col>
                        <div className="mision__container">
                            <div className="mision__content">
                                <div className="mision__card">
                                    <h3 className="text--content text-uppercase"><strong>Misión</strong></h3>
                                    <p className="text--content">
                                        Como desarrollador de proyectos, buscamos generar valor a nuestros clientes, proveedores y socios.
                                    </p>
                                    <h3 className="text--content text-uppercase"><strong>Visión</strong></h3>
                                    <p className="text--content">
                                        Ser una de las principales desarrolladoras de vivienda en México y consolidarnos como la empresa preferida en calidad, solidez, servicio, agilidad y vanguardia ofreciendo proyectos funcionales, prácticos y exclusivos para vivir.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Mision;