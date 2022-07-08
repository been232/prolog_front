import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '../../atoms/LayoutPage/ImageListItemBar';
import { Box } from '@mui/system';

export default () => (
  <Box sx={{width: 500, height:400}}>
    <ImageListItem>
      {/* <img
        src={`${itemData['list'][0].img}?w=248&fit=crop&auto=format`}
        srcSet={`${itemData['list'].img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt="불러올 수 없습니다."
        loading="lazy"
      /> */}
      <ImageListItemBar
        content={itemData['content']}
        source={<span>by: {itemData['source']}</span>}
        position="below"
      />
    </ImageListItem>
  </Box>
);

//지울거임
const itemData = {
  content: 'Breakfast',
  source: '@bkristastucchio',
  list: [
    { img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' },
    { img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d' },
    { img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45' },
    { img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c' },
    { img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8' },
    { img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62' },
    { img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6' },
    { img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' },
    { img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25' },
    { img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af' },
    { img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1' },
    { img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6' },
  ],
};
