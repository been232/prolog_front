import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ImageLists from '../../atoms/BoardPage/ImageLists';
import ImageListText from '../../atoms/BoardPage/ImageListText';
import Box from '@mui/material/Box';
import AddToPhotosRoundedIcon from '@mui/icons-material/AddToPhotosRounded';

export default function ImageListAccordion(props) {
  const data = props.data;
  const [expand, setExpand] = React.useState(true);
  const imageInput = React.useRef();
  const [image, setImage] = React.useState(false);

  const onCickImageUpload = () => {
    imageInput.current.click();
  };

  const ImageChange = () => {
    const imageLists = imageInput.current.files;
    let imageUrlLists = [];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    data.image = imageUrlLists;
    if(data.image[0] != null){
      setImage(true)
    }
  }

  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };

  const highFunction = (text) => {
    data.content = text;
  };

  React.useEffect(() => {}, [image]);

  return (
    <div
      style={{
        width: data.width,
        height: data.height - 70,
      }}
    >
      <Accordion expanded={expand}>
        <AccordionSummary
          expandIcon={
            <KeyboardDoubleArrowDownIcon
              sx={{ fontSize: 'large' }}
              onClick={() => {
                toggleAcordion();
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {image == false ? (
            <Box>
              <input
                type="file"
                style={{ display: 'none' }}
                multiple="multiple"
                ref={imageInput}
                onChange={ImageChange}
                accept="image/*"
              />
              <AddToPhotosRoundedIcon
                style={{ width: data.width - 50, height: data.height - 170 }}
                onClick={onCickImageUpload}
              />
            </Box>
          ) : (
            <ImageLists data={data} />
          )}
        </AccordionSummary>
        <AccordionDetails>
          <ImageListText propFunction={highFunction} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
