//目标区target
import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Item from './Item.js';

class Target extends Component {
    render() {
        const { connectDropTarget, components, itemindex } = this.props;
        return connectDropTarget(
            <div className="target-area">
                {/* 根据当前Target中是否有组件显示内容 */}
                {components.length === 0 && <div>还没有任何组件，尝试从组件库拖拽组件到这里</div>}
                {
                    components.map(({ fileName, position, location, pointer, scrolltop, scrollleft }, index) => {
                        return (
                            <div key={index}
                                style={{
                                    position: 'absolute',
                                    left: position.x - (pointer.x - location.x) + scrollleft >= 380 ? position.x - (pointer.x - location.x) + scrollleft : 380,
                                    top: position.y - (pointer.y - location.y) + scrolltop >= 75 ? position.y - (pointer.y - location.y) + scrolltop : 75,
                                    width: 300,
                                    height: 300,
                                    
                                }}
                            >
                                <Item
                                    index={index}
                                    itemindex={itemindex}
                                    fileName={fileName}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )

    }
}

const spec = {
    /**
    * 拖拽开始时触发当前函数
    * @param {*} props 当前组件的 props
    * @param {*} monitor DropTargetMonitor 对象
    * @param {*} component Target 对象
    * @returns {*} item
    */
    drop(props, monitor, component) {
        const item = monitor.getItem()
        props.onDrop(item)
        props.moveItem(item.index)
        return item;
    }
}
/**
   * 收集功能函数，包含 connect 和 monitor 参数
	 * @param {*} connect 里面的函数用来将 DOM 节点与 react-dnd 的 backend 建立联系
	 * @param {*} monitor DragSourceMonitor 对象
     * @returns {*} 这里返回一个对象，会将对象的属性都赋到组件的 props 中去。这些属性需要自己定义
	 */
const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
    };
}


export default DropTarget('drag-items', spec, collect)(Target);