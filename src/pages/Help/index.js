// 帮助文档
import React, { Component, lazy } from 'react'
import { Route } from "react-router-dom";
import Header from "../../components/Header";
import "./index.less";
import background from "../../assets/images/background.png";

const Viz = lazy(() => import('./viz'));
const Dataflow = lazy(() => import('./dataflow'));

export default class index extends Component {
    render() {
        return (
            <div style={{ background: `url(${background}) no-repeat center`, paddingTop: "50px" }}>
                <Header></Header>
                <Route exact path="/help/helpv" component={Viz} />
                <Route exact path="/help/helpd" component={Dataflow} />
            </div>
        )
    }
}
