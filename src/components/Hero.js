import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const Hero = ({imgBackground, text}) => {
    const backgroundImage = `url(${imgBackground})`;

    return(
        <section className="hero hero--bgimg" style={{backgroundImage: `${backgroundImage}`}}>
            <div className="hero__filter"></div>
            {text && (
                <Container>
                    <Row>
                        <Col>
                            <div className="hero__container">
                                <div className="hero__content">
                                    <h1 className="hero__title text--title">{text}</h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )}
        </section>
    );
}

export default Hero;