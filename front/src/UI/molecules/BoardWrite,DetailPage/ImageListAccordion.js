import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ImageLists from '../../atoms/BoardWrite,DetailPage/ImageLists';
import AccordionListText from '../../atoms/BoardWrite,DetailPage/AccordionListText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddToPhotosRoundedIcon from '@mui/icons-material/AddToPhotosRounded';
import ContentText from '../../atoms/BoardWrite,DetailPage/ContentText';
export default function ImageListAccordion(props) {
  const data = props.data;
  const board = data.board;
  const [expand, setExpand] = React.useState(true);
  const imageInput = React.useRef();
  const [image, setImage] = React.useState(board);
  const [change, setChange] = React.useState(data);

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

    data.images = imageUrlLists;
    if (data.images[0] != null) {
      setImage(true);
      setChange({
        ...change,
        images: imageUrlLists,
      });
    }
  };

  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };

  const highFunction = (text) => {
    data.explanation = text;
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
          <input
            type="file"
            style={{ display: 'none' }}
            multiple="multiple"
            ref={imageInput}
            onChange={ImageChange}
            accept="image/*"
          />
          {image == false ? (
            <Box>
              <AddToPhotosRoundedIcon
                style={{ width: data.width - 50, height: data.height - 170 }}
                onClick={onCickImageUpload}
              />
            </Box>
          ) : (
            <ImageLists data={change} />
          )}
        </AccordionSummary>
        <AccordionDetails>
          {board == true ? (
            <ContentText data={data} />
          ) : (
            <Box>
              <AccordionListText data={data} propFunction={highFunction} />
              ID: {data.id}
              <Button onClick={onCickImageUpload} style={{ float: 'right', fontFamily: "KOTRAHOPE"}}>
                사진 다시 선택
              </Button>
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
