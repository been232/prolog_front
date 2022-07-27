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
  }

  const ChangeType = () => {

  }

  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };

  const highFunction = (text) => {
    data.explanation = text;
  };

  React.useEffect(() => {}, []);

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
            <ImageLists data={data} />
        </AccordionSummary>
        <AccordionDetails>
              <AccordionListText propFunction={highFunction} data={data}/>
              <Button onClick={ChangeType} style={{float:'right'}}>사진 다시 선택</Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
