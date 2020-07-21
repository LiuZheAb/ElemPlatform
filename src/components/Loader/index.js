// 渲染页面时的加载效果
import React, { Component } from 'react';
import "./index.less";

export default class index extends Component {
    render() {
        return (
            <div id="loader">
                <div className="loader-content">
                    <div className="outer"></div>
                    <div className="inner"></div>
                </div>
            </div>
        )
    }
}
