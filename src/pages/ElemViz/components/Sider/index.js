import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import IconFont from '../IconFont';
import { Link } from "react-router-dom";
import "./index.css";

const { Sider } = Layout;

export default class index extends Component {
    state = {
        collapsed: false,
    };
    // componentDidMount() {
    //     let oDiv = document.getElementById("sider-menu"),
    //         H = 0,
    //         Y = oDiv;
    //     while (Y) {
    //         H += Y.offsetTop;
    //         Y = Y.offsetParent;
    //     }
    //     window.onscroll = function () {
    //         var s = document.body.scrollTop || document.documentElement.scrollTop
    //         if (s > H) {
    //             oDiv.style = "position:fixed;top:0;"
    //         } else {
    //             oDiv.style = ""
    //         }
    //     }
    // }
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    render() {
        return (
            <Sider id="sider" collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <Menu mode="inline" id="sider-menu">
                    <Menu.Item key="0">
                        <IconFont type="vizhome1" />
                        <Link to="/home">首页</Link>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <IconFont type="vizall" />
                        <Link to="/vizlist">所有项目</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <IconFont type="viznewtype" />
                        <Link to="/newviz">新建项目</Link>
                    </Menu.Item>
                    {/* <Menu.Item key="3">
                        <DesktopOutlined />
                        <Link to="/vizdrag">拖拽</Link>
                    </Menu.Item> */}
                    <Menu.Item key="3">
                        <IconFont type="vizhand" />
                        <Link to="/vizdraggrid">拖拽</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <IconFont type="vizdizhi" />
                        <Link to="/echarts">疫情地图</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
