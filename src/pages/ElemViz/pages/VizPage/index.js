/*
 *文件名 : index.js
 *作者 : 刘哲
 *创建时间 : 2020/8/24
 *文件描述 : 可视化产品项目详情渲染页面
 */

import React, { Component } from 'react';
import "./index.less"
import { Layout, Drawer, Switch } from 'antd';
import IconFont from "../../components/IconFont";
import { Link } from 'react-router-dom';
import axios from "axios";
import { baseUrl, vizUrl, echartsUrl } from "../../assets/url";

const { Header } = Layout;

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            title: "新建",
            fileName: null,
            echartsFile: null,
            showData: true
        }
    }
    // 获取项目的文件列表
    componentDidMount() {
        let _this = this;
        axios.get(baseUrl + "/vtkFile", {
            params: {
                projectName: localStorage.getItem("projectName")
            }
        }).then(function (response) {
            _this.setState({
                fileList: response.data.data,
                fileName: response.data.data[0],

            });
        }).catch(function (error) {
        });
    }
    // 控制抽屉的显示
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    // 控制抽屉的隐藏
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    // 选择新建或打开时显示对应内容
    changeBody(i) {
        let title = ["新建", "打开"];
        this.setState({
            title: title[i]
        })
    }
    // 切换文件时调用
    changeIframe(item) {
        this.setState({ fileName: item, visible: false, });
    }
    // 控制是否显示echarts数据可视化
    handleChange = () => {
        let { showData } = this.state;
        this.setState({
            showData: !showData,
        });
    }
    render() {
        let { visible, title, fileList, fileName, showData } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header id="viz-header">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="logo" onClick={this.showDrawer}>
                            <img src={require("../../../../assets/images/logo.png")} alt="logo" />
                        </div>
                        <span style={{ color: "#fff", marginRight: "10px" }}>是否显示数据可视化</span>
                        <Switch defaultChecked onChange={this.handleChange} />
                    </div>
                    <Drawer
                        placement="left"
                        closable={false}
                        onClose={this.onClose}
                        visible={visible}
                        maskStyle={{ background: "transparent" }}
                        width={720}
                        bodyStyle={{ padding: 0, display: "flex" }}
                    >
                        <ul className="drawer-left">
                            <li className="close-menu" onClick={this.onClose}>
                                <IconFont type="vizquit" style={{ position: "relative", top: "-3px" }} />
                            </li>
                            <li onClick={this.changeBody.bind(this, "0")}>新建</li>
                            <li onClick={this.changeBody.bind(this, "1")}>打开</li>
                        </ul>
                        <div className="drawer-right">
                            <div className="title">{title}</div>
                            <div className="content">
                                {title === "新建" ?
                                    <div>
                                        <ul>
                                            <Link to="/newviz">
                                                <li className="template-item">
                                                    <span>可视化项目</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>
                                    :
                                    <div>
                                        <h3 className="files-title">文件列表</h3>
                                        <ul className="file-list">
                                            {fileList ? fileList.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <IconFont type="vizfile" className="icon" /><span style={{ cursor: "pointer", color: "#1088e4" }} onClick={this.changeIframe.bind(this, item)}>{item}</span>
                                                    </li>
                                                )
                                            }) : null}
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                    </Drawer>
                    <IconFont type="vizfanhui" className="back" onClick={() => { this.props.history.goBack() }} />
                </Header>
                <Layout>
                    {showData && fileName ?
                        <div className="two-iframe">
                            <iframe title="iframe" src={vizUrl + "/vtk/" + localStorage.getItem("projectName") + "/" + fileName} frameBorder="0"></iframe>
                            <iframe title="iframe" src={echartsUrl + "/echarts/" + fileName} frameBorder="0"></iframe>
                        </div>
                        :
                        <iframe title="iframe" src={vizUrl + "/vtk/" + localStorage.getItem("projectName") + "/" + fileName} frameBorder="0"></iframe>
                    }
                </Layout>
            </Layout >
        )
    }
}