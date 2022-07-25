import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AccordionListText from '../../atoms/BoardPage/AccordionListText';
import HyperLink from '../../atoms/BoardPage/HyperLink';

export default function HyperLinkAccordion(props) {
  const data = props.data;
  const [expand, setExpand] = React.useState(true);

  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };

  const highFunction = (text) => {
    data.explanation = text;
  };

  const highFunctionText = (text) => {
    data.content = text;
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
            <HyperLink propFunction={highFunction}/>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionListText propFunction={highFunctionText} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
