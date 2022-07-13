import { useEffect, useState } from 'react';
import { TextareaAutosize } from '@mui/material';

export default function TextArea(props) {
  const list = props.list;
  const [data, setData] = useState({
    id: list.id,
    context: '',
    x: 0,
    y: 0,
    type: 1,
    width: '',
    height: '',
  });

  useEffect(() => {
    props.propsFunction(data);
  }, [data.height]);

  function handleEvent() {
    const width = document.getElementById(list.id).clientWidth;
    const height = document.getElementById(list.id).clientHeight;

    setData({
      id: data.id,
      context: data.context,
      x: data.x,
      y: data.y,
      type: data.type,
      width: width,
      height: height,
    });
    props.propsFunction(data);
  }

  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      id={list.id}
      onClick={handleEvent}
      value={data.content}
      onChange={(e) => {
        setData({
          id: data.id,
          context: e.target.value,
          x: data.x,
          y: data.y,
          type: data.type,
          width: data.width,
          height: data.height,
        });
        props.propsFunction(data);
      }}
      style={{
        position: 'absolute',
        width: list.width,
        minHeight: 50,
        top: list.y,
        left: list.x,
      }}
    />
  );
}
