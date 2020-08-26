/*
 *文件名 : index.js
 *作者 : 刘哲
 *创建时间 : 2020/8/24
 *文件描述 : 可视化产品侧边栏组件
 */

import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import IconFont from '../IconFont';
import { Link, withRouter } from "react-router-dom";
import "./index.less";

const { Sider } = Layout;

class index extends Component {
    render() {
        // 根据当前路由判断要选择的菜单项
        let pathSnippets = this.props.location.pathname.split('/').filter(i => i);
        let defaultSelectedKeys = "viz";
        if (pathSnippets.length !== 1) {
            defaultSelectedKeys = pathSnippets[1]
        }
        return (
            <Sider id="viz-sider">
                <Menu mode="inline" defaultSelectedKeys={defaultSelectedKeys}>
                    <Menu.Item key="vizlist">
                        <IconFont type="vizall" />
                        <Link to="/viz/vizlist">所有项目</Link>
                    </Menu.Item>
                    <Menu.Item key="newviz">
                        <IconFont type="viznewtype" />
                        <Link to="/viz/newviz">新建项目</Link>
                    </Menu.Item>
                    <Menu.Item key="vizdraggrid">
                        <IconFont type="vizhand" />
                        <Link to="/viz/vizdraggrid">拖拽</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(index);