//组件拖拽页面/*"react-dnd": "^7.7.0",*/"react-dnd-html5-backend": "^9.5.1",
import React, { Component } from "react";
import Source from "./Source.js";
import Target from "./Target.js";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { Layout } from "antd";
import _ from "lodash";
import axios from "axios";
import "./index.css";
import { baseUrl } from "../../assets/url";

const { Content } = Layout;

class DragPage extends Component {
  constructor() {
    super();
    this.state = {
      components: [],
      itemindex: null,
      fileList: []
    };
    this.onDrop = this.onDrop.bind(this);
    this.moveItem = this.moveItem.bind(this);
  }
  componentDidMount() {
    let _this = this;
    axios.get(baseUrl + "/vtkFile", {
      params: {
        projectName: localStorage.getItem("projectName")
      }
    }).then(function (response) {
      _this.setState({
        fileList: response.data.data,
      });
    }).catch(function (error) {
    });
  }
  //控制侧边栏缩放
  /**
   * 有组件落到target区时调用
   * @param {*} component 拖动的组件
   */
  onDrop(component) {
    const { components } = this.state;
    const newComponentsList = _.concat([], components, component);
    this.setState({
      components: newComponentsList,
      itemindex: components.length
    });
  }
  /**
   * 移动组件、新组件落到target时时调用
   * @param {*} itemindex 当前组件的序号
   */
  moveItem(itemindex) {
    const components = _.concat([], this.state.components);
    const _this = this;
    _.remove(components, function (n, index) {
      //判断是新组件还是再次移动
      if (index === itemindex) {
        _this.setState({
          itemindex: _this.state.itemindex - 1
        });
        return true;
      }
      return false;
    });
    this.setState({
      components: components
    });
  }

  /**
   * 有组件落到target区时调用
   * @param {*} key 修改的属性名
   * @param {*} value 修改的值，当修改颜色时，值为value.hex。修改文本和选项时为当前事件event
   */

  render() {
    const { components, itemindex, fileList } = this.state;
    return (
      <div className="dragpage">
        <Content className="drag-content">
          <div className="item-panel">
            <Source data={fileList}/>
          </div>
          <div className="content-panel">
            <div className="target-panel">
              <Target onDrop={this.onDrop} components={components} moveItem={this.moveItem} itemindex={itemindex} />
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DragPage);
