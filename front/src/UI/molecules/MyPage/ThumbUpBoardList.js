import { Grid } from '@mui/material';
import ThumbupAtoms from '../../atoms/MyPage/ThumbupAtoms';

const ThumbUpBoardList = (props) => {
  const thumbUpBoardList = props.thumbUpBoardList;

  return (
    <>
      <Grid container spacing={3}>
        {thumbUpBoardList.data.data.map((data, i) => (
          <Grid
            item
            xl={4}
            lg={6}
            sm={6}
            id={data.id}
            key={i}
          >
            <ThumbupAtoms data={data}></ThumbupAtoms>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default ThumbUpBoardList