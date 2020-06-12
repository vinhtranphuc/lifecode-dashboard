import React, { Component } from "react";
import PropTypes from "prop-types";
import {Layout} from 'antd';
import PublicHeader from "./layout/PublicHeader";
const { Content } = Layout;
class PublicLayout extends Component {
  render() {
    return(
      <>
        <Layout className="app-container">
          {!this.props.noHeader && <PublicHeader/>}
          <Content className="app-content">
            <div className="container">
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </>
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
