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
                    <Route exact path={["/viz/", "/viz/home"]} component={Guide} />
                    <Route exact path={["/viz/vizlist", "/viz/newviz", "/viz/newviz/uploadData", "/viz/echarts"]} component={Home} />
                    <Route exact path="/viz/viz" component={VizPage} />
                    <Route exact path="/viz/vizdraggrid" component={VizDragGrid} />
                </Switch>
            </Router>
        );
    };
};
