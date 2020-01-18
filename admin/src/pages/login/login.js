import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import './login.css';

import axios from 'axios';
import md5 from 'blueimp-md5';

class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                console.log(md5(values.password), 'md5_value');
                let usernameMd5 = md5(values.username);
                let passwordMd5 = md5(values.password);
                passwordMd5 = md5(passwordMd5);
                // axios.post('https://mingmingzhang.com/api/login', {
                axios.post('http://localhost:3001/api/login', {
                    username: usernameMd5,
                    password: passwordMd5
                }).then((data) => {
                        console.log(data);
                    })
            }
        });
    };

    render() {
        // let params = useParams();
        // let history = useHistory();
        // let location = useLocation();
    
        // let { from } = location.state || { from: { pathname: '/'} };
        // console.log(location, 'location');
    
        // let login = () => {
        //     props.loginObj.signin(() => {
        //         history.replace(from);
        //     });
        // };

        const { getFieldDecorator } = this.props.form;

        return (
            <div id="login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const WrappedLogin = Form.create({ name: 'normal_login' })(Login);

export default WrappedLogin;