import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import imgProducto01 from "../images/img-productos-01.png";
import imgProducto02 from "../images/img-productos-02.png";
import imgProducto03 from "../images/img-productos-03.png";

function Productos() {
  return (
    <section className="productos">
        <Container>
            <Row>
                <Col>
                    <div className="productos__container">
                        <div className="productos__header">
                            <ul className="productos__list">
                                <li className="productos__list__item">
                                    <img className="productos__list__img" src={imgProducto01} alt="img-productos" />
                                    <span className="productos__list__title">
                                        Interiores
                                    </span>
                                    <span className="productos__list__text">
                                        Liderazgo en construcción de interiores corporativos de alto nivel
                                    </span>
                                </li>
                                <li className="productos__list__item">
                                    <img className="productos__list__img" src={imgProducto02} alt="img-productos" />
                                    <span className="productos__list__title">
                                        Edificación
                                    </span>
                                    <span className="productos__list__text">
                                        Construcción residencial, industrial ligero, hotelería, comercial y servicios con garantía impecable.
                                    </span>
                                </li>
                                <li className="productos__list__item">
                                    <img className="productos__list__img" src={imgProducto03} alt="img-productos" />
                                    <span className="productos__list__title">
                                        Comercial
                                    </span>
                                    <span className="productos__list__text">
                                        Construcción de espacios de alta calidad en los sectores hotelería, restaurantero y locales comerciales
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="productos__content">
                            <h3 className="text--title productos__title">Así como...</h3>
                            <ul className="productos__list--description">
                                <li className="productos__list--description__item">
                                    <span className="productos__list--description__title">
                                        Gerencia de Construcción
                                    </span>
                                    <span className="productos__list--description__text">
                                        Supervisamos a detalle la obra y coordinamos contratistas. Asumimos el riesgo por medio del cobro de una comisión fija.
                                    </span>
                                </li>
                                <li className="productos__list--description__item">
                                    <span className="productos__list--description__title">
                                        Contratista General
                                    </span>
                                    <span className="productos__list--description__text">
                                        Gestionamos el proyecto de forma integral a través de nuestro esquema que se basa en tiempo determinado y precio máximo garantizado.
                                    </span>
                                </li>
                                <li className="productos__list--description__item">
                                    <span className="productos__list--description__title">
                                        Diseño y Construcción
                                    </span>
                                    <span className="productos__list--description__text">
                                        Trabajamos de la mano con firmas de arquitectura para entregar el proyecto según las necesidades de tiempo, costo y calidad.
                                    </span>
                                </li>
                                <li className="productos__list--description__item">
                                    <span className="productos__list--description__title">
                                        Llave en Mano
                                    </span>
                                    <span className="productos__list--description__text">
                                        Con la mínima involucración de nuestros clientes, entregamos el resultado final con garantía de uso según requerimientos y disponibilidades.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Productos;