import TextField from '../../atoms/LayoutPage/BasicTextFields';
import { Box } from '@mui/system';

export default function TextFields(props) {
  const title = props;
  return (
    <Box>
      <TextField title={title['title']}/>
    </Box>
  );
}
