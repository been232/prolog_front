import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AccordionListText from '../../atoms/BoardWrite,DetailPage/AccordionListText';
import HyperLink from '../../atoms/BoardWrite,DetailPage/HyperLink';
import ContentText from '../../atoms/BoardWrite,DetailPage/ContentText';
import { Box } from '@mui/material';

export default function HyperLinkAccordion(props) {
  const data = props.data;
  const board = data.board;
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
    <Box
      style={{
        width: data.width,
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
          {board == true ? (
            <ContentText data={data} level={1} />
          ) : (
            <Box>
              ID : {data.id}
              <HyperLink data={data} propFunction={highFunctionText} />
            </Box>
          )}
        </AccordionSummary>
        <AccordionDetails>
          {board == true ? (
            <ContentText data={data} level={2} />
          ) : (
            <AccordionListText propFunction={highFunction} />
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
