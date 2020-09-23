/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <footer className="mt-auto">
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
            <p id="copyright" className="text-xs-centre">
              {' '}
              &copy;
              {new Date().getFullYear()}
              {' '}
              Phemia Ampaire. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
