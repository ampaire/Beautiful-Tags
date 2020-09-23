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
            <h1 className="mt-4 bg-dark"> BEAUTIFUL TAGS</h1>
            <Slider />
            <Link to="/shopping">
              <Button size="md" className="mt-4">
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
