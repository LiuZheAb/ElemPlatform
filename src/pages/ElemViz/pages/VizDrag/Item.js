//Target中组件
import React, { Component } from "react";
import { DragSource } from "react-dnd";
import { vizUrl } from "../../assets/url";

class Item extends Component {
  render() {
    const { connectDragSource, fileName } = this.props;
    return connectDragSource(
      <div style={{
        width: "100%", height: "100%", display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        cursor:"move"
      }}>
        <iframe id="myIframe" title="iframe" src={vizUrl + fileName} frameBorder="0" allowtransparency="true"></iframe>
      </div>
    );
    //根据传过来的componet参数渲染
  }
}
export default DragSource(
  "drag-items",
  {
    /**
     * 拖拽开始时触发当前函数
     * @param {*} props 当前组件的 props
     * @param {*} monitor DragSourceMonitor 对象
     * @returns {*} item
     */
    beginDrag(props, monitor, collect) {
      //组件再次拖拽时滚动条的位置
      let scrolltop, scrollleft;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrolltop = document.documentElement.scrollTop;
        scrollleft = document.documentElement.scrollLeft;
      } else if (document.body) {
        scrolltop = document.body.scrollTop;
        scrollleft = document.body.scrollLeft;
      }
      //返回item的属性
      return {
        ...props,
        position: monitor.getClientOffset(), //鼠标松开时的位置
        pointer: monitor.getInitialClientOffset(), //鼠标点击时的位置
        location: monitor.getInitialSourceClientOffset(), //拖动源位置
        scrolltop: scrolltop,
        scrollleft: scrollleft
      };
    },
    /**
     * 组件拖拽时触发当前函数
     * @param {*} props 当前组件的 props
     * @param {*} monitor DragSourceMonitor 对象
     */
    isDragging(props, monitor) {
      const item = monitor.getItem();
      if (monitor.getClientOffset() !== null) {
        item.position = monitor.getClientOffset();
      }
    }
  },
  /**
   * 收集功能函数，包含 connect 和 monitor 参数
   * @param {*} connect 里面的函数用来将 DOM 节点与 react-dnd 的 backend 建立联系
   * @param {*} monitor DragSourceMonitor 对象
   * @returns {*} 这里返回一个对象，会将对象的属性都赋到组件的 props 中去。这些属性需要自己定义
   */
  (connect, monitor) => {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging(),
      item: monitor.getItem()
    };
  }
)(Item);
