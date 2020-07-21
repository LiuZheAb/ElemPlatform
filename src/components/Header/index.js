// 顶部导航栏
import React, { Component, lazy } from 'react';
import { Menu, Modal } from 'antd';
import { getCookie, removeCookie } from '../../utils/cookies';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Link, withRouter } from "react-router-dom";
import IconFont from "../../components/IconFont";
import "./index.less";

const { confirm } = Modal;
const Login = lazy(() => import('../LoginForm'));
const Register = lazy(() => import('../RegisterForm'));
const { SubMenu } = Menu;

class index extends Component {
    state = {
        userName: getCookie("userName") ? getCookie("userName") : "",
        visible: false,
        isLogin: true,
        collapsed: true,
    };
    // 注销时确认对话框
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
    // 控制注册登录模态框的显示
    showModal = () => {
        let { visible } = this.state;
        this.setState({
            visible: !visible
        })
    }
    // 切换注册或登录表单
    changeForm = () => {
        let { isLogin } = this.state;
        this.setState({
            isLogin: !isLogin
        })
    }
    // 控制菜单的显示
    toggleCollapsed = () => {
        let { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed,
        });
    };
    render() {
        const { userName, visible, isLogin, collapsed } = this.state;
        let pathSnippets = this.props.location.pathname.split('/').filter(i => i);
        let defaultSelectedKeys = "platform";
        if (pathSnippets.length !== 0 && pathSnippets[0] !== "help") {
            defaultSelectedKeys = pathSnippets[0];
        } else if (pathSnippets[0] === "help") {
            defaultSelectedKeys = pathSnippets[1];
        }
        return (
            <div className="header">
                <div className="vertical-menu">
                    <div className="menu-btn" onClick={this.toggleCollapsed}>
                        <IconFont type="vizego-menu"></IconFont>
                    </div>
                    <Menu className={collapsed ? "ant-menu-inline-collapsed" : ""} mode="vertical" defaultSelectedKeys={defaultSelectedKeys}>
                        <Menu.Item key="platform">
                            <Link to="/platform">Elem P</Link>
                        </Menu.Item>
                        <Menu.Item key="viz">
                            <Link to="/viz">Elem V</Link>
                        </Menu.Item>
                        <Menu.Item key="dataflow">
                            <Link to="/dataflow">Elem D</Link>
                        </Menu.Item>
                        <SubMenu title="帮 助">
                            <Menu.Item key="helpv">
                                <Link to="/help/helpv">Elem V文档</Link>
                            </Menu.Item>
                            <Menu.Item key="helpd">
                                <Link to="/help/helpd">Elem D文档</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className="horizontal-menu">
                    <Link to="/platform"><img src={require("../../assets/images/logo.png")} alt="logo" /></Link>
                    <Menu mode="horizontal" defaultSelectedKeys={defaultSelectedKeys}>
                        <Menu.Item key="platform">
                            <Link to="/platform">Elem P</Link>
                        </Menu.Item>
                        <Menu.Item key="viz">
                            <Link to="/viz">Elem V</Link>
                        </Menu.Item>
                        <Menu.Item key="dataflow">
                            <Link to="/dataflow">Elem D</Link>
                        </Menu.Item>
                        <SubMenu title="帮 助">
                            <Menu.Item key="helpv">
                                <Link to="/help/helpv">Elem V文档</Link>
                            </Menu.Item>
                            <Menu.Item key="helpd">
                                <Link to="/help/helpd">Elem D文档</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className="login-btn">
                    {userName ? userName : <span onClick={this.showModal}>登 录</span>}
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
                                <label className="currentform">登录</label>
                                <span className="changeform" onClick={this.changeForm}>免费注册</span>
                                <Login />
                            </>
                            :
                            <>
                                <label className="currentform">账号注册</label>
                                <span className="changeform" onClick={this.changeForm}>已有账号，直接登陆</span>
                                <Register />
                            </>
                    }
                </Modal>
            </div>
        )
    }
}

export default withRouter(index);