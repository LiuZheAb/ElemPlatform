// 流程化路由控制
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