import React, { Component, Suspense, lazy } from 'react';
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import Loader from '../components/Loader';

const Home = lazy(() => import('../pages/Home'));
const ElemViz = lazy(() => import('../pages/ElemViz'));
const ElemStream = lazy(() => import('../pages/ElemStream'));

export default class index extends Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route path="/platform">
                            <Home />
                        </Route>
                        <Route path="/viz">
                            <ElemViz />
                        </Route>
                        <Route path="/stream">
                            <ElemStream />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        )
    }
}
