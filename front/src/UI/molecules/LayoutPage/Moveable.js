import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { Resizable } from 're-resizable';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
};

const dragHandleStyle = {
  display: 'inline-block',
  width: 40,
  height: 40,
  backgroundColor: 'black',
  marginLeft: 5,
  borderRadius: '50%',
};
const Moveable = (props) => {
  const data = props;
  const [datas, setDatas] = React.useState({
    id: data.data.id,
    x: data.xPos,
    y: data.yPos,
    width: data.data.width,
    height: data.data.height,
    type: data.data.type,
  });
  const [width, setWidth] = React.useState(300);
  const [height, setHeight] = React.useState(200);

  useEffect(() => {
    setDatas({
      id: datas.id,
      x: datas.x,
      y: datas.y,
      width: width,
      height: height,
      type: datas.type,
    });
  }, [width, height]);

  function list() {
    switch (datas.type) {
      case 1:
        return <h5>TEXT BOX → </h5>;
      case 2:
        return <h5>IMAGE BOX → </h5>;
      case 3:
        return <h5>CODE BOX → </h5>;
      case 4:
        return <h5>HYPERLINK BOX → </h5>;
      case 5:
        return <h5>MATH BOX → </h5>;
      case 6:
        return <h5>VIDEO BOX → </h5>;
      case 7:
        return <h5>FILE BOX → </h5>;
      default:
        return <h5>ERROR BOX → </h5>;
    }
  }
  return (
    <Resizable
      style={style}
      size={{ width, height }}
      onResizeStop={(e, direction, ref, d) => {
        setWidth(width + d.width);
        setHeight(height + d.height);
      }}
    >
      {list()}
      <span className="custom-drag-handle" style={dragHandleStyle} />
    </Resizable>
  );
};

export default Moveable;
