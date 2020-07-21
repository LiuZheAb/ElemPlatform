// 可视化项目列表
import React, { Component } from 'react';
import { List, message } from 'antd';
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../assets/url";
import './index.less';

export default class index extends Component {
    state = {
        projectList: []
    }
    // 获取项目列表数据
    componentDidMount() {
        let _this = this;
        axios.get(baseUrl + "/vtkPro")
            .then(function (response) {
                _this.setState({
                    projectList: response.data.data === null ? [] : response.data.data
                });
            })
            .catch(function (error) {
                message.error("服务器无响应", 2);
            });
    }
    render() {
        let { projectList } = this.state;
        return (
            <List
                itemLayout="vertical"
                size="large"
                dataSource={projectList}
                grid={{
                    gutter: 0,
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 4,
                    xxl: 4,
                }}
                className="viz-list"
                renderItem={projectList !== null && projectList.length > 0 ? item => (
                    <List.Item key={item.projectName}>
                        <Link to={"/viz/viz"} onClick={() => { localStorage.setItem("projectName", item.projectName) }}>
                            <div className="box">
                                <img src={baseUrl + item.iconUrl} alt={item.projectName} />
                                <div className="box-content">
                                    {item.projectName}
                                </div>
                            </div >
                        </Link>
                    </List.Item>
                ) : null
                }
            />
        )
    }
}
