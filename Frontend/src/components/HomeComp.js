import './HomeComp.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeComp(props) {
  return (
    <Col className="parent" sm={12} md={6} lg={4} xl={3}>
      <Image
        className="rectangle"
        src={props.imageSrc}
        alt={props.altName}
        fluid
      ></Image>
      <div className="center">
        <h1>{props.heading1}</h1>
        <h2>{props.heading2}</h2>
        <div className="buttondiv">
          <Link to={props.pageTag} className="btn button">
            <ArrowForwardIcon className="arrow" />
          </Link>
        </div>
      </div>
    </Col>
  );
}

export default HomeComp;
