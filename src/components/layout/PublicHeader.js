/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom';
import {Layout, Menu, Dropdown } from 'antd';
import {HomeOutlined, UserOutlined, DownOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import {bindActionCreators } from "redux";
import {clearCurrentUser, getCurrentUser} from "../../actions/userAction";
import {notification } from 'antd';
import {clearToken} from '../../utils/TokenUtils';

const Header = Layout.Header;
    
class UserHeader extends Component {
    constructor(props) {
        super(props);  
        this.handleMenuClick = this.handleMenuClick.bind(this);   
    }

    componentDidMount(){
    }

    handleMenuClick({key, props}) {
      if(key === "logout") {
        clearToken();
        this.props.clearCurrentUser();
        this.props.history.push("/login");
        notification['success']({
          message: 'Life Code',
          description: "You're successfully logged out.",
        });
      }
    }

    render() {
        let menuItems;
        if(this.props.currentUser && Object.entries(this.props.currentUser).length !== 0) {
          menuItems = [
            <Menu.Item key="/">
              <Link to="/">
                <HomeOutlined className="nav-icon" />
              </Link>
            </Menu.Item>,
            <Menu.Item key="/profile" className="profile-menu">
                <ProfileDropdownMenu 
                  currentUser={this.props.currentUser} 
                  handleMenuClick={this.handleMenuClick}/>
            </Menu.Item>
          ]; 
        } else {
          menuItems = [
            <Menu.Item key="/login">
              <Link to="/login">Login</Link>
            </Menu.Item>,
            <Menu.Item key="/signup">
              <Link to="/signup">Signup</Link>
            </Menu.Item>                  
          ];
        }

        return (
            <Header className="app-header">
            <div className="container">
              <div className="app-title" >
                <img
                  id="main-logo"
                  className="d-inline-block align-top mr-1"
                  style={{ marginTop: "15px",maxWidth: "25px" }}
                  src={require("../../images/lifecoe-logo.svg")}
                  alt="Life Code"
                />
                <span className="d-none d-md-inline ml-1">
                  Life Code
                </span>
              </div>
              <Menu
                className="app-menu"
                mode="horizontal"
                selectedKeys={[this.props.location.pathname]}
                style={{ lineHeight: '64px' }} >
                  {menuItems}
              </Menu>
            </div>
          </Header>
        );
    }
}

function ProfileDropdownMenu(props) {
  const dropdownMenu = (
    <Menu onClick={props.handleMenuClick} className="profile-dropdown-menu">
      <Menu.Item key="user-info" className="dropdown-item" disabled>
        <div className="user-full-name-info">
          {props.currentUser.name}
        </div>
        <div className="username-info">
          @{props.currentUser.username}
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="profile" className="dropdown-item">
        <Link to={`/users/${props.currentUser.username}`}>Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout" className="dropdown-item">
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown 
      overlay={dropdownMenu} 
      trigger={['click']}
      getPopupContainer = { () => document.getElementsByClassName('profile-menu')[0]}>
      <a className="ant-dropdown-link">
         <UserOutlined  className="nav-icon" style={{marginRight: 0}} /> <DownOutlined />
      </a>
    </Dropdown>
  );
}
const mapStateToProps=(state) => {
  return {
      currentUser: Array.isArray(state.currentUser)?{}:state.currentUser
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({clearCurrentUser:clearCurrentUser, getCurrentUser:getCurrentUser},dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserHeader));