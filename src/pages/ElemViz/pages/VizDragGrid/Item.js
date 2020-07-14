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
      <img src={require("../../assets/images/" + name + ".png")} alt="" className="source-img" />
      {name}
    </div>
  )
}

export default Item;