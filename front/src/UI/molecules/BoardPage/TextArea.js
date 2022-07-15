import { useCallback, useEffect, useState } from 'react';
import { TextField } from '@mui/material';

export default function Text(props) {
  const data = useState(props.data);
  const [datas, setdatas] = useState({
    id: data[0].id,
    context: '',
    width: data[0]. width,
    height: data[0]. height,
    x: data[0].x,
    y: data[0].y,
    type: 1,
  });

  const onChange = useCallback((evt) => {
    const content = {
        id: datas.id,
        context: evt.target.value,
        width: datas.width,
        height: datas. height,
        x: datas.x,
        y: datas.y,
        type: 1,
      };
      setdatas(content)
  }, []);

  useEffect(() => {
  }, [datas]);

  return (
    <TextField
      multiline
      maxRows={100}
      onChange={onChange}
      style={{width: datas.width, marginLeft: 10, marginRight: 10}}
    />
  );
}
