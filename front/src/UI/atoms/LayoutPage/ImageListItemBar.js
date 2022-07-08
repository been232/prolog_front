import ImageListItemBar from '@mui/material/ImageListItemBar';

export default (props) => (
  <ImageListItemBar
    content={props.content}
    source={<span>출처: {props.source}</span>}
    position="below"
  />
);