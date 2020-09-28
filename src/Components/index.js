import React, { Component, Suspense, lazy } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Jumbotron, Container } from "react-bootstrap";
import { history } from "../store";
import Footer from "./static/Footer";
import Notification from "./static/Notification";
import Home from './Views/Home';

const ItemPreview = lazy(() => import("./Views/Landingpage"));

//for skipping authentication for development uncomment the line below.
// const Skip = true;
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      JSON.parse(localStorage.getItem("user")) &&
      (JSON.parse(localStorage.getItem("user")).data.token ? true : false) ? (
        //for development, if you want to skip Authentication please uncomment the line below and comment the one up.
        // (Skip)?(
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

class MainApp extends Component {
  render() {
    return (
      <>
        <Home />
        <div className="main-container">
          <Notification
            notifyType={this.props.notifier.type}
            notifySms={this.props.notifier.sms}
          />
          <Suspense
            fallback={
              <Jumbotron fluid className="top-section mb-4 mr-auto ml-auto">
                <Container>
                  <h1>Loading......</h1>
                  <p>Please wait</p>
                </Container>
              </Jumbotron>
            }
          >
            <Switch>
              <Router history={history}>
                <Route exact path="/" component={ItemPreview} />
              </Router>
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = ({ Auth }) => {
  const { notifier } = Auth;
  return { notifier };
};
export default connect(mapStateToProps, {})(MainApp);