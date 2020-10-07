import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';
import tag from '../Assets/tag-309129.svg';
import Slider from './slider';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" className="typo">
      {'Copyright © '}
      <Router>
        <a href="https://github.com/ampaire">Phemia Ampaire</a>
      </Router>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const Home = () => (
  <>
    <div className="home">
      <div className="top-nav">
        <p className="app-name">Beautiful Tags</p>
        <div className="btn-cont">
          <button type="button" className="button is-black is-outlined is-rounded"><Link to="/login">LOGIN</Link></button>
          <button type="button" className="button is-black is-outlined is-rounded"><Link to="/signup">SIGNUP</Link></button>
        </div>
      </div>
      <Slider />
      <div className="desc">
        <h4>Beautiful Tags</h4>
        <div className="desc-sect">
          <img src={tag} alt="Logo-img" className="logo-section" />
          <p className="sect-parag">
            Make your shopping spree for all ladies clothes, shoes and handbags
            <br />
            The prices are very friendly and you can always contact
            the sellers for your favorite items.
            <br />
            signup to get started!
          </p>
        </div>
      </div>
      <div className="footer" />
      <div className="dark-nav-bar">
        <Container>
          <Row>
            <Col sm>
              <ul className="list-unstyled">
                <li><a href="/">Privacy policy</a></li>
                <li><a href="/">Terms of use</a></li>
                <li><a href="/">Site map</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-bottom">
          <Copyright />
        </div>
      </div>
    </div>
  </>
);

export default Home;
