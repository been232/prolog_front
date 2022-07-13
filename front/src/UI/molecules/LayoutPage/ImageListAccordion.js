import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageLists from '../../atoms/LayoutPage/ImageLists';

export default function ImageListAccordion(props) {
  const data = props.data;
  const [expand, setExpand] = React.useState(true);
  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };
  return (
    <div style={{ marginTop: 10, width: data.width, height: data.height, top: data.coordinateY, left: data.coordinateX, position: 'absolute'}}>
      <Accordion expanded={expand}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              onClick={() => {
                toggleAcordion()
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ImageLists data={data}/>
        </AccordionSummary>
        <AccordionDetails>
          {data.content}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
