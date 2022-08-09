import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ImageLists from '../../atoms/BoardWrite,DetailPage/ImageLists';
import AccordionListText from '../../atoms/BoardModifyPage/AccordionListText';
import Button from '@mui/material/Button';

export default function ImageListAccordion(props) {
  const data = props.data;
  const [expand, setExpand] = React.useState(true);
  const imageInput = React.useRef();
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
    setChange({
      ...change,
      images : imageUrlLists
    })
  };

  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };

  const highFunction = (text) => {
    data.explanation = text;
  };

  React.useEffect(() => {}, [change]);

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
          <ImageLists data={change} />
        </AccordionSummary>
        <AccordionDetails>
          <AccordionListText propFunction={highFunction} data={data} />
          ID: {data.id}
          <Button onClick={onCickImageUpload} style={{ float: 'right', fontFamily: "SUIT-Regular" }}>
            사진 다시 선택
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
