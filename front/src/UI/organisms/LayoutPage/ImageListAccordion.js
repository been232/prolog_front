import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageListItem from '../../molecules/LayoutPage/ImageListItem';

export default function ImageListAccordion() {
  const [expand, setExpand] = React.useState(false);
  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };
  return (
    <div style={{ marginTop: 10, width: 350, height: 200 }}>
      <Accordion expanded={expand}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              onClick={() => {
                toggleAcordion()
              }}
              sx={{
                marginBottom: 30,
                marginRight: -1,
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ImageListItem />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
