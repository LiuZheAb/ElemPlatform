import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import IconFont from '../IconFont';
import { Link, withRouter } from "react-router-dom";
import "./index.less";

const { Sider } = Layout;

class index extends Component {
    render() {
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
                    {/* <Menu.Item key="3">
                        <DesktopOutlined />
                        <Link to="/viz/vizdrag">拖拽</Link>
                    </Menu.Item> */}
                    <Menu.Item key="vizdraggrid">
                        <IconFont type="vizhand" />
                        <Link to="/viz/vizdraggrid">拖拽</Link>
                    </Menu.Item>
                    {/* <Menu.Item key="echarts">
                        <IconFont type="vizdizhi" />
                        <Link to="/viz/echarts">疫情地图</Link>
                    </Menu.Item> */}
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(index);