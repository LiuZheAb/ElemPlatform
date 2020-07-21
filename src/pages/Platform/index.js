// 平台首页
import React, { Component } from 'react';
import Header from "../../components/Header";
import { withRouter } from "react-router-dom";
import "./index.less";

class index extends Component {
    render() {
        return (
            <div id="platform">
                <Header></Header>
                <div style={{ margin: "0 auto" }}>
                    <div className="name">
                        <img src={require("../../assets/images/logo-b.png")} alt="logo" style={{ width: "106px" }} />
                        <img src={require("../../assets/images/platform.png")} alt="Elem Platform" />
                    </div>
                    <div className="product-block">
                        <div className="product" onClick={() => { this.props.history.push("/viz/vizlist") }}>
                            <div className="animate-box">
                                <img src={require("../../assets/images/block2.png")} alt="block" />
                                <img src={require("../../assets/images/block3.png")} alt="block" />
                                <img src={require("../../assets/images/block4.png")} alt="block" />
                            </div>
                            <div className="product-name elemv-name" />
                        </div>
                        <div className="product" onClick={() => { this.props.history.push("/dataflow/home") }}>
                            <div className="animate-box2">
                                <div className="animate-block" />
                                <div className="animate-block" />
                                <div className="animate-block" />
                                <div className="animate-block" />
                            </div>
                            <div className="product-name elemd-name" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(index)