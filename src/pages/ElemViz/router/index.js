/*
 *文件名 : index.js
 *作者 : 刘哲
 *创建时间 : 2020/8/24
 *文件描述 : 可视化产品路由控制文件
 */

import React, { lazy } from 'react';
import { Switch, HashRouter as Router, Route } from "react-router-dom";

const Guide = lazy(() => import('../pages/Guide'));
const Home = lazy(() => import('../pages/Home'));
const VizPage = lazy(() => import('../pages/VizPage'));
const VizDragGrid = lazy(() => import('../pages/VizDragGrid'));

export default class EarthRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/viz" component={Guide} />
                    <Route exact path={["/viz/vizlist", "/viz/newviz", "/viz/newviz/uploadData", "/viz/echarts"]} component={Home} />
                    <Route exact path="/viz/viz" component={VizPage} />
                    <Route exact path="/viz/vizdraggrid" component={VizDragGrid} />
                </Switch>
            </Router>
        );
    };
};