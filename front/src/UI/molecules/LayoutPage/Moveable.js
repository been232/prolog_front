import * as React from "react";
import { render } from "react-dom";
import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};
const dragHandleStyle = {
  display: 'inline-block',
  width: 25,
  height: 25,
  backgroundColor: 'teal',
  marginLeft: 5,
  borderRadius: '50%',
};
const Moveable = () => {
  const [width, setWidth] = React.useState(300);
  const [height, setHeight] = React.useState(200);
  return (
    <Resizable
      style={style}
      size={{ width, height }}
      onResizeStop={(e, direction, ref, d) => {
        setWidth(width + d.width);
        setHeight(height + d.height);
      }}
    >
      Only draggable here → <span className="custom-drag-handle" style={dragHandleStyle} />
    </Resizable>
  );
};

export default Moveable;