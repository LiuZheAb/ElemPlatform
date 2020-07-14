import React, { Component, lazy } from 'react';
import { Layout, Button, Modal } from 'antd';
import { getCookie, removeCookie } from '../../utils/cookies';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './index.less';

const { Header } = Layout;
const { confirm } = Modal;

const Login = lazy(() => import('../LoginForm'));
const Register = lazy(() => import('../RegisterForm'));

export default class index extends Component {
    state = {
        userName: getCookie("vizUsername") ? getCookie("vizUsername") : "",
        visible: false,
        isLogin: true
    };
    showConfirm = () => {
        let _this = this;
        confirm({
            title: '确定退出吗?',
            icon: <ExclamationCircleOutlined />,
            okText: "确定",
            cancelText: "取消",
            onOk() {
                sessionStorage.clear();
                removeCookie("vizUsername");
                setTimeout(() => {
                    _this.props.history.push("/login");
                }, 500);
            },
        });
    }
    showModal = () => {
        let { visible } = this.state;
        this.setState({
            visible: !visible
        })
    }
    changeForm = () => {
        let { isLogin } = this.state;
        this.setState({
            isLogin: !isLogin
        })
    }
    render() {
        let { visible, isLogin } = this.state;
        return (
            <Header className="header" id="header">
                <div className="header-content">
                    <div className="logo">
                        <img src={require("../../assets/images/logo-row.png")} alt="" />
                    </div>
                    <div className="logout">
                        {this.state.userName ?
                            <span>
                                欢迎，<span style={{ textDecoration: "underline", margin: "0 10px 0 0" }}>{this.state.userName}</span>
                                <Button onClick={this.showConfirm}>注销</Button>
                            </span>
                            :
                            <span onClick={this.showModal} className="throw-loginform">请登录</span>
                        }
                    </div>
                    <Modal visible={visible} onCancel={this.showModal} centered={true} footer={null}
                        style={{ width: 433, maxWidth: 433 }}
                        closable={false}
                        bodyStyle={{ padding: "24px 36px" }}
                        maskStyle={{ minHeight: "101vh" }}
                    >
                        {
                            isLogin ?
                                <>
                                    <label className="login-fun">登录</label>
                                    <span className="changeform" onClick={this.changeForm}>免费注册</span>
                                    <Login />
                                </>
                                :
                                <>
                                    <label className="register-fun">账号注册</label>
                                    <span className="changeform" onClick={this.changeForm}>已有账号，直接登陆</span>
                                    <Register />
                                </>
                        }
                    </Modal>
                </div>
            </Header>
        )
    }
}