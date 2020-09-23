/* eslint-disable jsx-a11y/alt-text */
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';

const HomePage = () => (
  <section className="row landing-section">
    <Container className="mt-3">
      <Row>
        <Col sm={6} xs={6} className="landing-header">
          <div>
            <Slider />
            <Link to="/shopping">
              <Button size="md" className="mt-4 text-white">
                GET STARTED
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default HomePage;
