//前台注册页面
import React from 'react';
import { Form, Input, Button, Tooltip, AutoComplete, message, Row, Col } from 'antd';
import axios from 'axios';
import { baseUrl } from '../../assets/url';
import './index.css';
import { setCookie } from '../../utils/cookies';
import { UserOutlined, LockOutlined, MailOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            captchaUrl: '',
            captchaId: '',
            message: '',
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
            captcha: '',
            registerState: '',
            autoCompleteResult: [],
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
                message.error("服务器无响应", 2);
                _this.setState({
                    isLoaded: false,
                });
            });
    }
    //刷新验证码
    handleClick = () => {
        this.setState({ captchaUrl: baseUrl + "/vizCaptcha/" + this.state.captchaId + '.png?reload=' + (new Date()).getTime() });
    };
    //获取用户输入的各项信息
    handleChange(key, e) {
        this.setState({ [key]: e.target.value });
    };
    //表单验证
    usernameValidator = (rule, value) => {
        if (!value) {
            return Promise.reject('用户名不能为空!');
        } else if (this.state.registerState === 2) {
            return Promise.reject(this.state.message);
        } else if (/^[0-9a-zA-Z]{4,16}$/.test(value) === false) {
            return Promise.reject('用户名格式不符合要求！');
        } else {
            return Promise.resolve();
        };
    };

    emailValidator = (rule, value) => {
        if (!value) {
            return Promise.reject('邮箱不能为空!');
        } else if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value) === false) {
            return Promise.reject('请输入正确的邮箱格式！');
        } else {
            return Promise.resolve();
        };
    };
    //自动补全邮箱
    handleWebsiteChange = (value) => {
        if (!value || value.indexOf('@') >= 0) {
            this.setState({
                autoCompleteResult: [],
            })
        } else {
            this.setState({
                autoCompleteResult: !value ? [] : [{ value: value + '@qq.com' }, { value: value + '@163.com' }, { value: value + '@126.com' }, { value: value + '@gmail.com' }, { value: value + '@sina.com' }, { value: value + '@yahoo.com' }],
                email: value,
            })
        }
        this.setState({
            email: value,
        })
    };
    passwordValidator = (rule, value) => {
        if (!value) {
            return Promise.reject('请输入密码!');
        } else if (/^[0-9a-zA-Z]{4,16}$/.test(value) === false) {
            return Promise.reject('密码格式不符合要求');
        } else {
            return Promise.resolve();
        };
    };
    confirmPasswordValidator = (rule, value) => {
        if (!value) {
            return Promise.reject('请再次输入密码!');
        } else if (value !== this.state.password) {
            return Promise.reject('两次输入的密码不一致，请重新输入！');
        } else {
            return Promise.resolve();
        };
    };
    captchaValidator = (rule, value) => {
        if (!value) {
            return Promise.reject("验证码不能为空!");
        } else if (this.state.registerState === 3) {
            return Promise.reject(this.state.message);
        } else if (/^[0-9]{4,4}$/.test(value) === false) {
            return Promise.reject('验证码必须为4位数字!');
        } else {
            return Promise.resolve();
        };
    };
    checkboxValidator = (rule, e) => {
        if (!e) {
            return Promise.reject("请勾选同意协议");
        } else {
            return Promise.resolve();
        };
    };
    //注册提交表单时调用
    onFinish = (values) => {
        const _this = this;
        let { username, password, captcha, email } = values;
        axios({
            method: 'post',
            url: baseUrl + '/vtkRegist',
            responseType: 'json',
            data: {
                username: username,
                password: password,
                captcha: captcha,
                captcha_id: _this.state.captchaId,
                email: email
            },
            headers: { 'Content-Type': 'application/json' },
        })
            .then(function (response) {
                _this.setState({
                    registerState: response.data["status"],
                    message: response.data["message"]
                });
                _this.refs.Form.validateFields();
                switch (response.data["status"]) {
                    case 0: {
                        setTimeout(_this.setState({
                            registerState: 4,
                            captchaUrl: baseUrl + "/vizCaptcha/" + _this.state.captchaId + '.png?reload=' + (new Date()).getTime(),
                        }), 3000);
                        break;
                    }
                    case 1: {
                        message.success("注册成功", 1);
                        setCookie("vizUsername", username);
                        setTimeout(() => {
                            _this.props.history.push('/home');
                        }, 1000);
                        break;
                    }
                    case 2: {
                        setTimeout(_this.setState({
                            registerState: 4,
                            captchaUrl: baseUrl + "/vizCaptcha/" + _this.state.captchaId + '.png?reload=' + (new Date()).getTime(),
                        }), 3000);
                        break;
                    }
                    case 3: {
                        setTimeout(_this.setState({
                            registerState: 4,
                            captchaUrl: baseUrl + "/vizCaptcha/" + _this.state.captchaId + '.png?reload=' + (new Date()).getTime(),
                        }), 3000);
                        break;
                    }
                    default:
                        break;
                };
            })
            .catch(function (error) {
                message.error("注册失败", 2);
            });
    };
    render() {
        const { captchaUrl } = this.state;
        return (
            <div className="register">
                <Form onFinish={this.onFinish} className="register-form" ref="Form">
                    <Tooltip placement="top" title="用户名由4-16位英文或数字组成，不能包含特殊字符">
                        <Form.Item name="username" hasFeedback rules={[{ validator: this.usernameValidator }]}>
                            <Input prefix={<UserOutlined type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名"
                                onChange={this.handleChange.bind(this, 'username')} />
                        </Form.Item>
                    </Tooltip>
                    <Tooltip placement="top" title="请输入你的邮箱地址">
                        <Form.Item name="email" hasFeedback rules={[{ validator: this.emailValidator }]}>
                            <AutoComplete options={this.state.autoCompleteResult} onChange={this.handleWebsiteChange}>
                                <Input prefix={<MailOutlined type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="邮箱" />
                            </AutoComplete>
                        </Form.Item>
                    </Tooltip>
                    <Tooltip placement="top" title="密码由4-16位英文或数字组成，不能包含特殊字符">
                        <Form.Item name="password" hasFeedback rules={[{ validator: this.passwordValidator }]}>
                            <Input prefix={<LockOutlined type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码"
                                onChange={this.handleChange.bind(this, 'password')} />
                        </Form.Item>
                    </Tooltip>
                    <Tooltip placement="top" title="请再次输入密码">
                        <Form.Item name="confirmpassword" hasFeedback rules={[{ validator: this.confirmPasswordValidator }]}>
                            <Input prefix={<LockOutlined type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请再次输入密码"
                                onChange={this.handleChange.bind(this, 'confirmpassword')} />
                        </Form.Item>
                    </Tooltip>
                    <Form.Item className="captcha">
                        <Row gutter={8}>
                            <Col span={16}>
                                <Form.Item name="captcha" rules={[{ validator: this.captchaValidator }]} style={{ margin: "0" }}>
                                    <Input prefix={<SafetyCertificateOutlined type="safety-certificate" style={{ color: 'rgba(0,0,0,.25)' }} />} type="captcha" placeholder="验证码" onChange={this.handleChange.bind(this, 'captcha')} />
                                </Form.Item>
                            </Col>
                            <Col span={8} style={{ display: "flex", padding: "4px", justifyContent: "center" }}>
                                <img src={captchaUrl} alt="验证码" onClick={this.handleClick} />
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="register-form-button">
                            注册
                                    </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}