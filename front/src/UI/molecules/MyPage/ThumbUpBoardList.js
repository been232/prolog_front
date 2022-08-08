import { Grid } from '@mui/material';
import ThumbupAtoms from '../../atoms/MyPage/ThumbupAtoms';

const datas = {
    success: true,
    data: [
      {
        id: '1',
        title: 'title',
        written: '2022-06-07',
        member: 'memberName',
        memberImage: 'http://~',
        likes: '8',
        mainLayout: {
          type: '1',
          width: '12',
          height: '35',
          content: '어쩌구 저쩌구',
        },
      },
      {
        id: 'postId',
        title: 'title',
        content: '어쩌구 저쩌구',
        written: '2022-06-07',
        member: 'memberName',
        memberImage: 'http://~',
        likes: '8',
        mainLayout: {
          type: '1',
          width: '12',
          height: '35',
          content: '어쩌구 저쩌구',
        },
      },
    ],
  };

const ThumbUpBoardList = () => {
    return (
        <>
            <Grid container spacing={3}>
                {datas.data.map((data, i) => (
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