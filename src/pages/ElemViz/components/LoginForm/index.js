//前台登录页面
import React from 'react';
import { Form, Input, Button, message, Row, Col } from 'antd';
import axios from 'axios';
import './index.css';
import { UserOutlined, LockOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { baseUrl } from '../../assets/url';
import { setCookie } from '../../utils/cookies';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            captcha: '',
            value: '',
            captchaUrl: '',
            captchaId: '',
            isLoaded: false,
            message: '',
            loginState: 4,
        };
    };
    componentDidMount() {
        const _this = this;
        //获取验证码
        axios.get(baseUrl + '/vizGetCaptchaId')
            .then(function (response) {
                _this.setState({
                    captchaId: response.data["getCaptchaID"],
                    captchaUrl: baseUrl + "/vizCaptcha/" + response.data["getCaptchaID"] + '.png',
                    isLoaded: true,
                });
            })
            .catch(function (error) {
                message.error("验证码获取失败", 2);
                _this.setState({
                    isLoaded: false,
                });
            });
    };
    //点击验证码时调用，刷新验证码
    handleClick = () => {
        this.setState({ captchaUrl: baseUrl + "/vizCaptcha/" + this.state.captchaId + '.png?reload=' + (new Date()).getTime() });
    };
    //表单验证
    usernameValidator = (rule, value) => {
        if (!value) {
            return Promise.reject('用户名不能为空!');
        } else if (/^[0-9a-zA-Z]{4,16}$/.test(value) === false) {
            return Promise.reject('用户名由4-16位英文或数字组成！');
        } else if (this.state.loginState === 0) {
            return Promise.reject(this.state.message);
        } else {
            return Promise.resolve();
        };
    };
    passwordValidator = (rule, value) => {
        if (!value) {
            return Promise.reject('请输入密码!');
        } else if (/^[0-9a-zA-Z]{4,16}$/.test(value) === false) {
            return Promise.reject('请正确填写密码！');
        } else if (this.state.loginState === 1) {
            return Promise.reject(this.state.message);
        } else {
            return Promise.resolve();
        };
    };
    captchaValidator = (rule, value) => {
        if (!value) {
            return Promise.reject("验证码不能为空!");
        } else if (/^[0-9]{4,4}$/.test(value) === false) {
            return Promise.reject('验证码必须为4位数字!');
        } else if (this.state.loginState === 2) {
            return Promise.reject(this.state.message);
        } else {
            return Promise.resolve();
        };
    };
    //登录提交表单时调用
    onFinish = (values) => {
        const _this = this;
        let { username, password, captcha } = values;
        axios({
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            url: baseUrl + '/vtkLogin',
            responseType: 'json',
            data: {
                username: username,
                password: password,
                captcha: captcha,
                captcha_id: _this.state.captchaId,
            }
        })
            .then(function (response) {
                _this.setState({
                    loginState: response.data["status"],
                    message: response.data["message"]
                });
                _this.refs.Form.validateFields();
                switch (response.data["status"]) {
                    case 0: {
                        //若登陆失败，将登录状态重置为4，为了将错误信息重置
                        setTimeout(_this.setState({
                            loginState: 4,
                            captchaUrl: baseUrl + "/vizCaptcha/" + _this.state.captchaId + '.png?reload=' + (new Date()).getTime(),
                        }), 3000);
                        break;
                    }
                    case 1: {
                        setTimeout(_this.setState({
                            loginState: 4,
                            captchaUrl: baseUrl + "/vizCaptcha/" + _this.state.captchaId + '.png?reload=' + (new Date()).getTime(),
                        }), 3000);
                        break;
                    }
                    case 2: {
                        setTimeout(_this.setState({
                            loginState: 4,
                            captchaUrl: baseUrl + "/vizCaptcha/" + _this.state.captchaId + '.png?reload=' + (new Date()).getTime(),
                        }), 3000);
                        break;
                    }
                    case 3: {
                        setCookie("vizUsername", username);
                        _this.props.history.push('/home');
                        break;
                    }
                    default:
                        break;
                };
            })
            .catch(function (error) {
                message.error("登录失败", 2);
            });
    };
    render() {
        const { captchaUrl } = this.state;
        return (
            <div className="login">
                <Form onFinish={this.onFinish} className="login-form" ref="Form">
                    {/* hasFeedback为输入框尾部的小图标 */}
                    <Form.Item name="username" hasFeedback rules={[{ validator: this.usernameValidator }]}>
                        <Input prefix={<UserOutlined type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item name="password" hasFeedback rules={[{ validator: this.passwordValidator }]}>
                        <Input prefix={<LockOutlined type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    </Form.Item>
                    <Form.Item className="captcha">
                        <Row gutter={8}>
                            <Col span={16}>
                                <Form.Item name="captcha" rules={[{ validator: this.captchaValidator }]} style={{ margin: "0" }}>
                                    <Input prefix={<SafetyCertificateOutlined type="safety-certificate" style={{ color: 'rgba(0,0,0,.25)' }} />} type="captcha" placeholder="验证码" />
                                </Form.Item>
                            </Col>
                            <Col span={8} style={{ display: "flex", justifyContent: "center", padding: "4px" }}>
                                <img src={captchaUrl} alt="验证码" onClick={this.handleClick} />
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                                    </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    };
};