/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Navbar,
  Nav,
  Button,
} from 'react-bootstrap';
import Register from '../../Auth/Register';
import { open_registration, open_login, logout } from '../../../Actions/authActions';
import Login from '../../Auth/Login';

const AppHeader = ({
  close_modal_register, open_registration,
  open_login, close_modal_login, logout,
}) => {
  const [scroll, setScroll] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const data = (localStorage.getItem('user') != null) ? JSON.parse(localStorage.getItem('user')).data : null;

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  useEffect(() => {
    setModalShow(close_modal_register);
  }, [close_modal_register]);

  useEffect(() => {
    setLoginShow(close_modal_login);
  }, [close_modal_login]);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className={
          scroll
            ? 'navbar-custom fixed-top bg-dark'
            : 'navbar-custom fixed-top scrolled-nav bg dark'
        }
      >
        <Navbar.Brand href="/" className={scroll ? null : 'scrolled-nav-items'}>
          <p className="mt-4 title">
            {' '}
            BEAUTIFUL TAGS
          </p>
        </Navbar.Brand>
        <div className="custom-color d-lg-none d-xl-none">
          Welcome:
          {' '}
          <strong className="custom-color">
            {data != null
              ? data.user.name != null
                ? data.user.name
                : null
              : null}
          </strong>
        </div>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav bg-dark"
          className={scroll ? null : 'scrolled-nav-items'}
        />
        <Navbar.Collapse id="responsive-navbar-nav bg-dark">
          <Nav className="ml-auto mr-4 nav-bar-custom font-14">
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="/aboutpage">ABOUT US</Nav.Link>
            <Nav.Link href="/contactUs">CONTACT US</Nav.Link>
            {data != null ? (
              data.user.name != null ? (
                <>
                  <Nav.Link href="/allhotels">HOTELS</Nav.Link>
                  <Nav.Link href="/flights">FLIGHTS</Nav.Link>
                  <Nav.Link href="/" className="custom-color">
                    HELLO:
                    {' '}
                    <strong className="custom-color">{data.user.name}</strong>
                  </Nav.Link>
                  <Nav.Link
                    href="/"
                    onClick={e => {
                      e.preventDefault();
                      logout();
                    }}
                    className="color-primary"
                  >
                    logout
                    {' '}
                    <i
                      className="fa fa-arrow-circle-o-right"
                      aria-hidden="true"
                    />
                  </Nav.Link>
                </>
              ) : null
            ) : (
              <div className="btn-holder">
                <Button
                  size="sm"
                  className="mr-4 btn-custom font-12 custom-purple"
                  onClick={() => open_login()}
                >
                  SIGN IN
                </Button>
                <Button
                  variant="outline-info"
                  size="sm"
                  className="mr-4  btn-custom font-12"
                  onClick={() => open_registration()}
                >
                  JOIN
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Registration Modal */}
      <Register show={modalShow} onHide={() => setModalShow(false)} />
      {/* Login Modal */}
      <Login show={loginShow} onHide={() => setLoginShow(false)} />
    </>
  );
};

const mapStateToProps = ({ Auth }) => {
  const { close_modal_register, close_modal_login } = Auth;
  return { close_modal_register, close_modal_login };
};

export default connect(mapStateToProps, { open_registration, open_login, logout })(AppHeader);
