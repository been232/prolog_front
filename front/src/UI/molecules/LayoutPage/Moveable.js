import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { Resizable } from 're-resizable';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box } from '@mui/material';
import { data } from 'jquery';

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
  const [width, setWidth] = React.useState(300);
  const [height, setHeight] = React.useState(200);

  const remove = () => {
    data.data.remove = true;
  };

  useEffect(() => {
    data.data.width = width;
    data.data.height = height;
  }, [width, height]);

  function list() {
    switch (data.data.type) {
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
    <Box>
      <HighlightOffIcon onClick={remove} style={{ float: 'right' }} />
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
    </Box>
  );
};

export default Moveable;
