import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout } from 'antd';
import "./../assets/auth.css";
import PublicHeader from "./layout/PublicHeader";
class PublicLayout extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        {/* <Layout style={{height:"100%"}}> */}
        {/* {!this.props.noHeader && <PublicHeader/>} */}
        <Layout style={{ height: "100%" }}>
          <div style={{
            height: "100%",
            backgroundImage: "url(" + "http://localhost:8888/api/image/view/common/auth-bg.jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            {this.props.children}
          </div>
        </Layout>
        {/* </Layout> */}
      </div>
    );
  }
}


PublicLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noHeader: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

PublicLayout.defaultProps = {
  noHeader: false,
  noFooter: false
};

export default PublicLayout;
