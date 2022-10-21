import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ImageLists from '../../atoms/BoardWrite,DetailPage/ImageLists';
import AccordionListText from '../../atoms/BoardModifyPage/AccordionListText';
import Button from '@mui/material/Button';
import Api from '../../../api/Api';

export default function ImageListAccordion(props) {
  const data = props.data;
  console.log(data);
  const [expand, setExpand] = React.useState(true);
  const imageInput = React.useRef();
  const [change, setChange] = React.useState(data);
  
  const onCickImageUpload = () => {
    imageInput.current.click();
  };

  const ImageChange = async() => {
    let imageremove = [];
    for (let i = 0; i < data.images.length; i++) {
      imageremove.push(data.images[i].split("/")[3]);
    }
    const getData3 = async () => {
      for (let i = 0; i < imageremove.length; i++) {
        const infoBody = await Api.getImageRemovePost(imageremove[i]);
      }
    };
    getData3();
    const imageLists = imageInput.current.files;
    let imageUrlLists = [];
    let formData = new FormData();
    for (let i = 0; i < imageLists.length; i++) {
      formData.append('file',imageLists[i]);
    }
    const getData2 = async () => {
      const infoBody = await Api.getImagePost(formData);
      for (let i = 0; i < infoBody.data.data.length; i++) {
        imageUrlLists.push(infoBody.data.data[i].url);
      }
    };
    getData2();
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
