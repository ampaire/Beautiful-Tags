/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import {
  Modal, Button, Form, Row, Col,
} from 'react-bootstrap';
import {
  open_login,
  close_login,
  loginUser,
} from '../../Actions/authActions';
import { loadingIcon } from '../../constants/index';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // eslint-disable-next-line camelcase
  componentDidUpdate() {
    const { store, history, fetchUser } = this.props;
    if (store.user.auth_token !== '') {
      loadingIcon();
      fetchUser(store.user.auth_token);
      history.push('/items');
    }
  }

  handleSubmit(ev) {
    const { loginUser } = this.props;
    ev.preventDefault();
    loginUser(this.state);
    this.setState({ email: '', password: '' });
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
  }

  render() {
    return (
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton onClick={() => close_login()}>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="custom-color"
          >
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md="8" className="ml-auto mr-auto">
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email('Invalid email')
                    .required('Enter your email'),
                  password: Yup.string().required('Password is required').min(8, 'Atleast 8 Characters'),
                })}
                onSubmit={values => {
                  setTimeout(() => {
                    loginUser(values);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  isSubmitting,
                }) => (
                  <Form className="register">

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
                        onChange={this.handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email ? (
                        <div className="text-danger mt-1 font-12">
                          {errors.email}
                        </div>
                      ) : null}
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
                        onChange={this.handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.password && errors.password ? (
                        <div className="text-danger mt-1 font-12">
                          {errors.password}
                        </div>
                      ) : null}
                    </Form.Group>
                    <Button
                      size="md"
                      variant="outline-info"
                      className="outline-custom-purple float-right"
                      type="submit"
                      disabled={isSubmitting}
                      onClick={this.handleSubmit}
                    >
                      <i className="fa fa-check-circle-o" aria-hidden="true" />
                      {' '}
                      Login
                    </Button>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <p className="font-12">
            Have an account, click
            {' '}
            <a href="/" className="text-primary">
              here to login
            </a>
          </p>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = ({ Auth }) => {
  const { auth_error, user_details, loading } = Auth;
  return { auth_error, user_details, loading };
};
export default connect(
  mapStateToProps,
  {
    open_login,
    close_login,
    loginUser,
  },
)(LoginForm);
