import "../../App.css";
import { Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MidContent from "../molecules/MidContent"

const MainPageOrganisms = ({data}) => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={1}>
          1 of 3
        </Col>
        <Col xs={6} md={10}>
          <MidContent item={data} />
        </Col>
        <Col xs={6} md={1}>
          3 of 3
        </Col>
      </Row>
    </Container>
  );
};

export default MainPageOrganisms;
