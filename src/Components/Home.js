/* eslint-disable jsx-a11y/alt-text */
import {
  Container, Row, Col,
} from 'react-bootstrap';
import React from 'react';
import AppHeader from './static/NavBar/index';
import Slider from './Slider';

const HomePage = () => (
  <>
    <div className="top-header">
      <AppHeader />
    </div>
    <section className="row landing-section">
      <Container className="mt-3">
        <Row>
          <Col sm={6} xs={6} className="landing-header">
            <div>
              <Slider />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

export default HomePage;
