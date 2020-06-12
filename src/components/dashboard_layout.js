import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "./layout/MainNavbar/MainNavbar";
import MainSidebar from "./layout/MainSidebar/MainSidebar";
import MainFooter from "./layout/MainFooter";

import { isEnableAccess } from '../utils/TokenUtils';
import { Redirect } from 'react-router';

const DefaultLayout = ({ children, noNavbar, noFooter }) => {
  if(isEnableAccess()) {
    return (
      <Container fluid>
        <Row>
          <MainSidebar />
          <Col
            className="main-content p-0"
            lg={{ size: 10, offset: 2 }}
            md={{ size: 9, offset: 3 }}
            sm="12"
            tag="main"
          >
            {!noNavbar && <MainNavbar />}
            {children}
            {!noFooter && <MainFooter />}
          </Col>
        </Row>
      </Container>
    );
  }
  return (<Redirect to="/login" />);
}

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
