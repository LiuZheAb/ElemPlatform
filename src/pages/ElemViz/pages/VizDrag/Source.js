//左侧拖动源
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

class Source extends Component {
  render() {
    let { data } = this.props;
    return (
      data.map((file, index) => {
        return (
          <Item fileName={file} key={index} />
        )
      })
    )
  }
}

const spec = {
  /**
	 * 拖拽开始时触发当前函数
	 * @param {*} props 当前组件的 props
	 * @param {*} monitor DragSourceMonitor 对象
   * @returns {*} item
	 */
  beginDrag(props, monitor) {
    //组件开始拖拽时滚动轴的位置
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
      component: props.component,
      fileName: props.fileName,
      position: null,  //鼠标松开时的位置
      pointer: monitor.getInitialClientOffset(),  //鼠标点击时的位置
      location: monitor.getInitialSourceClientOffset(),  //拖动源位置
      scrolltop: scrolltop,
      scrollleft: scrollleft,
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
      item.position = monitor.getClientOffset() //组件拖拽时鼠标相对于窗口的位置
    }
  }

};
/**
   * 收集功能函数，包含 connect 和 monitor 参数
	 * @param {*} connect 里面的函数用来将 DOM 节点与 react-dnd 的 backend 建立联系
	 * @param {*} monitor DragSourceMonitor 对象
   * @returns {*} 这里返回一个对象，会将对象的属性都赋到组件的 props 中去。这些属性需要自己定义
	 */
const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    item: monitor.getItem()
  };
}

const Item = DragSource("drag-items", spec, collect)(props => {
  const { connectDragSource, fileName } = props;
  return connectDragSource(
    <div key={fileName} className="component-box">
      <img src={require("../../assets/images/" + fileName + ".png")} alt="" className="source-img" />
      <p>{fileName}</p>
    </div>

  )
});

export default Source