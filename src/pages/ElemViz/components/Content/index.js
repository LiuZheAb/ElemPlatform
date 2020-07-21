// 可视化内容区
import React, { lazy, Component } from 'react';
import { Layout } from 'antd';
import { Switch, HashRouter as Router, Route } from "react-router-dom";
const { Content } = Layout;

const VizList = lazy(() => import('../VizList'));
const NewViz = lazy(() => import('../NewViz'));
const VizData = lazy(() => import('../NewViz/vizdata'));
const Echarts = lazy(() => import('../Echarts'));

export default class index extends Component {
    render() {
        return (
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                <Router>
                    <Switch>
                        <Route exact path="/viz/vizlist" component={VizList} />
                        <Route exact path="/viz/newviz" component={NewViz} />
                        <Route exact path="/viz/newviz/uploadData" component={VizData} />
                        <Route exact path="/viz/echarts" component={Echarts} />
                    </Switch>
                </Router>
            </Content>
        )
    }
}
