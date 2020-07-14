import React, { Component, lazy } from 'react';
import { Layout, Button, Modal, List, message, Menu } from 'antd';
import { getCookie, removeCookie } from '../../utils/cookies';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { baseUrl } from "../../assets/url";
import { Link } from "react-router-dom";
import IconFont from "../../components/IconFont";
import axios from "axios";
import "./index.less";
const { Header } = Layout;
const { confirm } = Modal;

const Login = lazy(() => import('../../components/LoginForm'));
const Register = lazy(() => import('../../components/RegisterForm'));

export default class index extends Component {
    state = {
        userName: getCookie("vizUsername") ? getCookie("vizUsername") : "",
        projectList: [],
        visible: false,
        isLogin: true,
        collapsed: true,
    };
    componentDidMount() {
        let _this = this;
        axios.get(baseUrl + "/vtkPro")
            .then(function (response) {
                _this.setState({
                    projectList: response.data.data === null ? [] : response.data.data
                });
            })
            .catch(function (error) {
                message.error("服务器无响应", 2);
            });
    }
    storageProject(project) {
        localStorage.setItem("projectName", project)
    }
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
    toggleCollapsed = () => {
        let { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed,
        });
    };
    render() {
        let { projectList, visible, isLogin, userName, collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header className="guide-header" id="guide-header">
                    <div className="guide-header-content">
                        <div className="header-menu">
                            <div className="menu-btn" onClick={this.toggleCollapsed}>
                                <IconFont type="vizego-menu"></IconFont>
                            </div>
                            <Menu mode="inline" inlineCollapsed={collapsed}>
                                <Menu.Item key="1"><Link className="nav" to="/viz/home">首页</Link></Menu.Item>
                                <Menu.Item key="2"><Link className="nav" to="/viz/vizlist">所有项目</Link></Menu.Item>
                                <Menu.Item key="3"><Link className="nav" to="/viz/newviz">新建项目</Link></Menu.Item>
                                <Menu.Item key="4"><Link className="nav" to="/viz/vizdraggrid">拖拽</Link></Menu.Item>
                                <Menu.Item key="5"><Link className="nav" to="/viz/echarts">疫情地图</Link></Menu.Item>
                            </Menu>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", height: 50 }}>
                            <div className="logo">
                                <img src={require("../../assets/images/logo-row.png")} alt="" />
                            </div>
                            <div className="header-nav">
                                <Link className="nav" to="/viz/home">首页</Link>
                                <Link className="nav" to="/viz/vizlist">所有项目</Link>
                                <Link className="nav" to="/viz/newviz">新建项目</Link>
                                <Link className="nav" to="/viz/vizdraggrid">拖拽</Link>
                                <Link className="nav" to="/viz/echarts">疫情地图</Link>
                            </div>
                        </div>
                        <div className="logout">
                            {userName ?
                                <span>
                                    欢迎，<span style={{ textDecoration: "underline", margin: "0 10px 0 0" }}>{userName}</span>
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
                <div style={{ background: "#333" }}>
                    <div id="banner">
                        <img className="banner-name" src={require("../../assets/images/name.png")} alt="" />
                        <div className="animate-box">
                            <div className="logo">
                                <img src={require("../../assets/images/logo.png")} alt="" />
                            </div>
                            <img src={require("../../assets/images/block2.png")} alt="" />
                            <img src={require("../../assets/images/block3.png")} alt="" />
                            <img src={require("../../assets/images/block4.png")} alt="" />
                        </div>
                    </div>
                </div>
                <Layout className="guide-content">
                    <div className="show">
                        产品展示
                    </div>
                    <List
                        itemLayout="vertical"
                        size="large"
                        dataSource={projectList}
                        grid={{
                            gutter: 0,
                            xs: 1,
                            sm: 2,
                            md: 2,
                            lg: 3,
                            xl: 3,
                            xxl: 3,
                        }}
                        className="guide-list"
                        renderItem={projectList !== null && projectList.length > 0 ? item => (
                            <List.Item key={item.projectName} className="list-item">
                                <Link to={"/viz"} onClick={this.storageProject.bind(this, item.projectName)}>
                                    <div className="box">
                                        <img src={baseUrl + item.iconUrl} alt={item.projectName} />
                                        <div className="box-content">
                                            {item.projectName}
                                        </div>
                                    </div >
                                </Link>
                            </List.Item>
                        ) : null
                        }
                    />
                    <div className="footer">
                        <span>&copy;Copyright <a href="http://www.yuanjisuan.cn/">yuanjisuan.cn</a></span>
                    </div>
                </Layout>
            </Layout>
        )
    }
}