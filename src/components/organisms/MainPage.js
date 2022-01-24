import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MidContent from "../molecules/MidContent";
import TopLogo from "../molecules/TopLogo";
import FootButton from "../molecules/FootButton";

const MainPageOrganisms = ({ data }) => {
  return (
    <Container>
      <Row>
        <Col xs={1} md={1}></Col>
        <Col xs={10} md={10} className="mid-content">
          <Row>
            <TopLogo item={data} />
          </Row>
          <Row>
            <MidContent item={data} />
          </Row>
          <Row>
            <div className="d-flex justify-content-center">
            {
              data.buttonList && data.buttonList.length > 0
              ? 
              data.buttonList.map((button) => {
                return (
                  <FootButton item={button}/>
                )
              })
              : '123'
            }
            </div>
          </Row>
        </Col>
        <Col xs={1} md={1}></Col>
      </Row>
    </Container>
  );
};

export default MainPageOrganisms;
