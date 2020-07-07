import React, { Component } from 'react';
import {withRouter, BrowserRouter as Router, Route} from 'react-router-dom';
import LoadingIndicator from './components/fragements/LoadingIndicator';
import withTracker from "./withTracker";
import routes from './routes';
import {notification } from 'antd';
import {createBrowserHistory } from "history";
import {connect} from "react-redux"
import {bindActionCreators } from "redux";
import {getCurrentUser} from "./actions/userAction";
import {isEnableAccess } from './utils/TokenUtils';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/lifecode.css";

export const history = createBrowserHistory(); 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });
  }
  componentDidMount() {
    if(isEnableAccess()) {
      this.props.getCurrentUser();
    }
  }

  render() {
    if(this.state.isLoading) {
      return <LoadingIndicator />
    }
    return (
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={withTracker(props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                })}
              />
            );
          })}
        </>
      </Router>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getCurrentUser:getCurrentUser},dispatch);
}
export default connect(null,mapDispatchToProps)(withRouter(App));
