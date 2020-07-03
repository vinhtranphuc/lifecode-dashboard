import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, Input, Button, notification } from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {connect} from "react-redux"
import { bindActionCreators } from "redux";
import {login, getCurrentUser} from "../../../actions/userAction";
import { saveToken,clearToken } from '../../../utils/TokenUtils';
import './Login.css';
import "antd/dist/antd.css";

const FormItem = Form.Item;

const mapStateToProps=(state) => {
    return {
        accessToken: state.accessToken
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({login:login, getCurrentUser:getCurrentUser},dispatch);
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.goHome = this.goHome.bind(this);
    }
    goHome () {
        this.props.history.push("/overview");
    }
    render() {
        const AntWrappedLoginForm = connect(mapStateToProps,mapDispatchToProps)(LoginForm)
        return (
            <div className="login-container">
                <h4 className="page-title">Login</h4>
                <div className="login-content">
                    <AntWrappedLoginForm goHome={this.goHome}/>
                </div>
            </div>
        );
    }
}

class LoginForm extends Component {
    formRef = React.createRef();

    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
    }
    
    static getDerivedStateFromProps(nextProps) {
        if(nextProps.accessToken) {
            saveToken(nextProps.accessToken);
        }
    }

    onFinish = ({ errorFields }) => {
        this.formRef.current.validateFields().then(values => {
            const loginRequest = Object.assign({}, values);
            this.props.login(loginRequest).then(() => {
            notification.success({
                message: 'Life Code',
                description: "You're successfully logged in.",
            });
            this.props.getCurrentUser();
            this.props.goHome();
            }).catch(function (error) {
                if(error.response && error.response.status === 401) {
                    clearToken();
                    notification.error({
                        message: 'Life Code',
                        description: 'Your Username or Password is incorrect. Please try again!'
                    });
                    return;          
                }

                if(error.response && error.response.status === 403) {
                    clearToken();
                    notification.error({
                        message: 'Life Code',
                        description: error.response.data.message
                    });
                    return;          
                }

                notification.error({
                    message: 'Life Code',
                    description: error.message || 'Sorry! Something went wrong. Please try again!'
                });                                            
            });
        });
    };

    render() {
        return (
            <Form  ref={this.formRef} onFinish={this.onFinish} className="login-form">
                <FormItem name="usernameOrEmail" rules={[{ required: true, message: 'Please input your username or email!' }]} >
                    <Input 
                            prefix={<UserOutlined/>}
                            size="large"
                            name="usernameOrEmail" 
                            placeholder="Username or Email" />
                </FormItem>
                <FormItem name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input 
                        prefix={<LockOutlined />}
                        size="large"
                        name="password" 
                        type="password" 
                        placeholder="Password"  />
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
                    Or <Link to="/signup">register now!</Link>
                </FormItem>
            </Form>
        );
    }
}
export default withRouter(Login);

