import { Box } from '@mui/material';
import OutlinedButton from '../../atoms/Commons/OutlinedButton';
import { Link } from 'react-router-dom';

export default function UnderButtons2(props) {
  const data = props.data;
  const datas = [];
  const Usets = {

  };   
  const handleClick = () => {
    data.map((dataitem) => {
      datas.push({
        height: dataitem.height,
        width: dataitem.width,
        coordinateX: dataitem.position.x,
        coordinateY: dataitem.position.y,
        type: dataitem.data.type,
      });
    });
    console.log(datas);
  };

  return (
    <Box onClick={handleClick} sx={{ float: 'right' }}>
      <Link to="/">
      <OutlinedButton
        content="작성하기"
        style={{ marginTop: 5, marginBottom: 3 }}
      />
      </Link>
    </Box>
  );
}
