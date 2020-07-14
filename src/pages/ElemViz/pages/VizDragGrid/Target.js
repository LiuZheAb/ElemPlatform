import React from 'react';
import { useDrop } from 'react-dnd';
import { vizUrl, echartsUrl } from "../../assets/url";

const Target = ({ accept, lastDroppedItem, onDrop, targetWidth, targetHeight }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver;
  let backgroundColor = '#333';
  if (isActive) {
    backgroundColor = '#555'
  } else if (canDrop) {
    backgroundColor = '#222'
  }
  let width = targetWidth, height = targetHeight;
  return (
    <div className="target-box" ref={drop} style={{ backgroundColor, width, height }}>
      <div className="dragbar"></div>
      {isActive
        ? <div style={{ width: "100%", height: "100%", position: "absolute" }}>Release to drop</div>
        : null}
      {lastDroppedItem && (
        lastDroppedItem.type === "vtk" ?
          <iframe id="myIframe" title="iframe" src={vizUrl + "3/" + lastDroppedItem.name} frameBorder="0" allowtransparency="true" style={{ width: "99%", height: "99%" }}></iframe>
          :
          lastDroppedItem.type === "echarts" ?
            <iframe id="myIframe" title="iframe" src={echartsUrl + lastDroppedItem.name} frameBorder="0" allowtransparency="true" style={{ width: "99%", height: "99%" }}></iframe>
            : null
      )}
    </div>
  )
}

export default Target;