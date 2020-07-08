
import React from "react";
import { clearCurrentUser } from "../../../actions/userAction";
import { clearToken } from '../../../utils/TokenUtils';
import { notification } from 'antd';
class Logout extends React.Component {

    componentDidMount() {
        clearCurrentUser();
        clearToken();
        this.props.history.push("/login");
        notification['success']({
            message: 'Life Code',
            description: "You're successfully logged out.",
        });
    }

    render() {
        return <></>
    }
}

export default Logout;