/*
 *文件名 : index.js
 *作者 : 刘哲
 *创建时间 : 2020/8/24
 *文件描述 : 路由控制文件
 */

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
                        <Route path="/">
                            <Platform />
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        )
    }
}
