/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import {
  Modal, Button, Form, Row, Col,
} from 'react-bootstrap';
import { register_user_request, close_registration } from '../../Actions/authActions';
import Loader from '../static/Loader';

const Register = props => {
  const {
    register_user_request, close_registration, loading, ...rest
  } = props;
  return (
    <Modal
      {...rest}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton onClick={() => props.close_registration()}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="custom-color"
        >
          Register
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md="8" className="ml-auto mr-auto">
            <Formik
              initialValues={{
                userName: '',
                email: '',
                password: '',
                passwordConfirmation: '',
              }}
              validationSchema={Yup.object({
                userName: Yup.string()
                  .min(2, 'tToo Short!')
                  .max(50, 'Too Long!')
                  .required('Enter your user name'),
                email: Yup.string()
                  .email('Invalid email')
                  .required('Enter your password'),
                password: Yup.string().required('Password is required').min(8, 'Atleast 8 Characters'),
                passwordConfirmation: Yup.string().oneOf(
                  [Yup.ref('password'), null],
                  'Passwords must match',
                ),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  register_user_request(values);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form className="register">
                  <Form.Group>
                    <Form.Label className="font-14 p-color">
                      User Name
                    </Form.Label>
                    <Form.Control
                      size="md"
                      type="text"
                      placeholder="Enter full name"
                      name="userName"
                      id="userName"
                      value={values.userName}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                          touched.userName && errors.userName
                            ? 'custom-input errorInput'
                            : 'custom-input'
                        }
                    />
                    {touched.userName && errors.userName ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.userName}
                      </div>
                    ) : null}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="font-14 p-color">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      size="md"
                      placeholder="Enter your email"
                      className={
                          touched.email && errors.email
                            ? 'custom-input errorInput'
                            : 'custom-input'
                        }
                      id="email"
                      name="email"
                      value={values.email}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.email}
                      </div>
                    ) : null}
                    <Form.Text className="custom-color font-12">
                      We&apos;ll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="font-14 p-color">
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      size="md"
                      placeholder="Password"
                      className={
                          touched.password && errors.password
                            ? 'custom-input errorInput'
                            : 'custom-input'
                        }
                      id="password"
                      name="password"
                      value={values.password}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.password}
                      </div>
                    ) : null}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="font-14 p-color">
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      size="md"
                      placeholder="Confirm Password"
                      className={
                          touched.passwordConfirmation && errors.passwordConfirmation
                            ? 'custom-input errorInput'
                            : 'custom-input'
                        }
                      id="passwordConfirmation"
                      name="passwordConfirmation"
                      value={values.passwordConfirmation}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.passwordConfirmation
                        && errors.passwordConfirmation ? (
                          <div className="text-danger mt-1 font-12">
                            {errors.passwordConfirmation}
                          </div>
                      ) : null}
                  </Form.Group>
                  <Button
                    size="md"
                    variant="outline-info"
                    className="outline-custom-purple float-right"
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {loading === 'registering'
                      ? (<Loader message="Registering..." />)
                      : (
                        <>
                          <i className="fa fa-check-circle-o" aria-hidden="true" />
                          {' '}
                          Register
                        </>
                      )}
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <p className="font-12">
          Have and account, click
          {' '}
          <a href="/" className="text-primary">
            here to login
          </a>
        </p>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = ({ Auth }) => {
  const { auth_error, user_details, loading } = Auth;
  return { auth_error, user_details, loading };
};

export default connect(mapStateToProps, { register_user_request, close_registration })(Register);
