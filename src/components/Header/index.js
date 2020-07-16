import React, { Component, lazy } from 'react';
import { Menu, Modal } from 'antd';
import { getCookie, removeCookie } from '../../utils/cookies';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import "./index.less";

const { confirm } = Modal;
const Login = lazy(() => import('../LoginForm'));
const Register = lazy(() => import('../RegisterForm'));
const { SubMenu } = Menu;

export default class index extends Component {
    state = {
        userName: getCookie("userName") ? getCookie("userName") : "",
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
                removeCookie("userName");
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
        const { userName, visible, isLogin } = this.state;
        return (
            <div className="header">
                <img className="logo" src={require("../../assets/images/logo-row.png")} alt="" />
                <Menu onClick={this.handleClick} mode="horizontal">
                    <Menu.Item key="Elem P">
                        Elem P
                    </Menu.Item>
                    <Menu.Item key="Elem V">
                        Elem V
                    </Menu.Item>
                    <Menu.Item key="Elem D">
                        Elem D
                    </Menu.Item>
                    <SubMenu title="帮助">
                        <Menu.Item key="Elem V文档">Elem V文档</Menu.Item>
                        <Menu.Item key="Elem D文档">Elem D文档</Menu.Item>
                    </SubMenu>
                </Menu>
                <div className="login-btn">
                    {userName ? userName : <span onClick={this.showModal}>登录</span>}
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
        )
    }
}