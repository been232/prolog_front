import TextField from '../../molecules/LayoutPage/TextFields';
import { Box } from '@mui/system';

export default function Content(props) {
  const title = props;
  return (
    <Box sx={{marginTop: 3}}>
      <TextField title={title['title']}/>
    </Box>
  );
}
