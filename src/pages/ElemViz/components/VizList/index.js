import React, { Component } from 'react';
import { List, message } from 'antd';
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../assets/url";
import './index.css';

export default class index extends Component {
    state = {
        projectList: []
    }
    componentDidMount() {
        let _this = this;
        axios.get(baseUrl + "/vtkPro")
            .then(function (response) {
                console.log(response.data.data)
                _this.setState({
                    projectList: response.data.data === null ? [] : response.data.data
                });
            })
            .catch(function (error) {
                message.error("服务器无响应", 2);
            });
    }
    storageProject(project) {
        localStorage.setItem("projectName", project)
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
                    <List.Item key={item.projectName} className="list-item">
                        <Link to={"/viz"} onClick={this.storageProject.bind(this, item.projectName)}>
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
