import React, { Component } from 'react';
import "./index.less"
import { Layout, Drawer } from 'antd';
import IconFont from "../../components/IconFont";
import { Link } from 'react-router-dom';
import axios from "axios";
import { baseUrl, vizUrl } from "../../assets/url";

const { Header } = Layout;

export default class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projectName: localStorage.getItem("projectName"),
            visible: false,
            title: "新建",
        }
    }

    componentDidMount() {
        let _this = this;
        axios.get(baseUrl + "/vtkFile", {
            params: {
                projectName: localStorage.getItem("projectName")
            }
        }).then(function (response) {
            _this.setState({
                fileList: response.data.data,
            });
        }).catch(function (error) {
        });
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    changeBody(i) {
        let title = ["新建", "打开"];
        this.setState({
            title: title[i]
        })
    }
    changeIframe(item) {
        this.setState({ visible: false, });
        localStorage.setItem("fileName", item)
    }
    render() {
        let { visible, title, fileList } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header className="viz-header" id="viz-header">
                    <div className="logo" onClick={this.showDrawer}>
                        <img src={require("../../assets/images/logo-row.png")} alt="" />
                    </div>
                    <span></span>
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
                            <li ><Link to="/home" style={{ color: "#fff" }}>返回首页</Link></li>
                        </ul>
                        <div className="drawer-right">
                            <div className="title">{title}</div>
                            <div className="content">{title === "新建" ?
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
                                                    <IconFont type="vizfile" className="icon" /><Link target="_blank" rel="noopener noreferrer" to="/viz" style={{ cursor: "pointer", color: "#1088e4" }} onClick={this.changeIframe.bind(this, item)}>{item}</Link>
                                                </li>
                                            )
                                        }) : null}
                                    </ul>
                                </div>}</div>
                        </div>
                    </Drawer>
                </Header>
                <Layout>
                    <iframe id="myIframe" title="iframe" src={vizUrl + localStorage.getItem("fileName")} frameBorder="0"></iframe>
                </Layout>
            </Layout >
        )
    }
}
