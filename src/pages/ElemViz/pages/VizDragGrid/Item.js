/*
 *文件名 : Item.js
 *作者 : 刘哲
 *创建时间 : 2020/8/24
 *文件描述 : 可视化产品侧边栏的可拖拽组件
 */

import React from 'react';
import { useDrag } from 'react-dnd';

const Item = ({ name, type, isDropped }) => {
  const [{ opacity }, drag] = useDrag({
    item: { name, type },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  })
  return (
    <div className="source-item" ref={drag} style={{ opacity }}>
      <img src={require("../../assets/images/" + name + ".png")} alt="item" className="source-img" />
      {name}
    </div>
  )
}

export default Item;