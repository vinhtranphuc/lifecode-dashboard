import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {getCurrentUser} from "../../../../actions/userAction";

class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentUser();
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const {currentUser} = this.props;
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={currentUser.avatar_uri}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">{currentUser.name}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/logout" className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}


const mapSateToProps = (state) => {
  return {
    currentUser: Array.isArray(state.currentUser)?{}:state.currentUser
}
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getCurrentUser:getCurrentUser},dispatch);
} 

export default connect(mapSateToProps,mapDispatchToProps)(UserActions);
