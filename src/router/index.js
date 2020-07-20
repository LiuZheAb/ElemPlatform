import React, { Component, Suspense, lazy } from 'react';
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import Loader from '../components/Loader';

const Platform = lazy(() => import('../pages/Platform'));
const ElemViz = lazy(() => import('../pages/ElemViz'));
const ElemDataFlow = lazy(() => import('../pages/ElemDataFlow'));
const Help = lazy(() => import('../pages/Help'));

export default class index extends Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route path="/platform">
                            <Platform />
                        </Route>
                        <Route path="/viz">
                            <ElemViz />
                        </Route>
                        <Route path="/dataflow">
                            <ElemDataFlow />
                        </Route>
                        <Route path="/help">
                            <Help />
                        </Route>
                        <Route exact path="/">
                            <Platform />
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        )
    }
}
