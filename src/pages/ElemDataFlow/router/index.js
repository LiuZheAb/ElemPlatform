/*
 *文件名 : index.js
 *作者 : 刘哲
 *创建时间 : 2020/8/24
 *文件描述 : 流程化产品路由控制
 */


import React, { lazy } from 'react';
import { Switch, HashRouter as Router, Route } from "react-router-dom";

const Guide = lazy(() => import('../pages/Guide'));
const Home = lazy(() => import('../pages/Home'));

export default class EarthRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/dataflow" component={Guide} />
                    <Route exact path="/dataflow/home" component={Home} />
                </Switch>
            </Router>
        );
    };
};