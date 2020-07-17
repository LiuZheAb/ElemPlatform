import React, { Component } from 'react';
import { Modal, List, message } from 'antd';
import { getCookie, removeCookie } from '../../utils/cookies';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { baseUrl } from "../../assets/url";
import { Link } from "react-router-dom";
import Header from "../../../../components/Header";
import axios from "axios";
import "./index.less";

const { confirm } = Modal;

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
        let { projectList } = this.state;
        return (
            <div id="elemviz" style={{ minHeight: '100vh' }}>
                <Header></Header>
                <div className="banner">
                    <img className="name" src={require("../../assets/images/visualization.png")} alt="" />
                    <div className="animate-box">
                        <img src={require("../../assets/images/block2.png")} alt="" />
                        <img src={require("../../assets/images/block3.png")} alt="" />
                        <img src={require("../../assets/images/block4.png")} alt="" />
                    </div>
                    <Link to="/viz/vizlist">
                        <button class="btn btn-primary btn-ghost btn-shine">开始</button>
                    </Link>
                </div>
                <div className="guide-content">
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
                        renderItem={projectList !== null && projectList.length > 0 ? item => (
                            <List.Item key={item.projectName}>
                                <Link to={"/viz/viz"} onClick={this.storageProject.bind(this, item.projectName)}>
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
                </div>
            </div>
        )
    }
}