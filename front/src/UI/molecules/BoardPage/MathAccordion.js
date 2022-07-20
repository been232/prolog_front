import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AccordionListText from '../../atoms/BoardPage/AccordionListText';
import Box from '@mui/material/Box';
import CalculateIcon from '@mui/icons-material/Calculate';
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div>
      {value === index && (
        <Box sx={{ p: 3, height: 800 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const style = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MathAccordion(props) {
  const data = props.data;
  const [math, setMath] = React.useState(false);
  const [expand, setExpand] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };
  const highFunction = (text) => {
    data.content = text;
  };
  return (
    <div style={{ width: data.width, height: data.height - 70 }}>
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
          {math == false ? (
            <Box>
              <CalculateIcon
                onClick={handleOpen}
                style={{ width: data.width - 50, height: data.height - 170 }}
              />
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Tabs value={value} onChange={handleChange}>
                    <Tab
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      icon={<TeX math="\pi" />}
                      value={0}
                    />
                    <Tab icon={<TeX math="\pm" />} value={1} />
                    <Tab icon={<TeX math="\alpha" />} value={2} />
                    <Tab icon={<TeX math="\ne" />} value={3} />
                    <Tab icon={<TeX math="\to" />} value={4} />
                    <Tab icon={<TeX math="{ x }/{ y }" />} value={5} />
                    <Tab icon={<TeX math="e^{x}" />} value={6} />
                    <Tab icon={<TeX math="\sqrt[n]{x}" />} value={7} />
                    <Tab icon={<TeX math="\int_{-x}^{x}" />} value={8} />
                    <Tab icon={<TeX math="\sum_{ i=0 }^{ n }" />} value={9} />
                    <Tab
                      icon={<TeX math="\Big\{\Big(\Big)\Big\}" />}
                      value={10}
                    />
                    <Tab icon={<TeX math="\sin{\theta }" />} value={11} />
                    <Tab icon={<TeX math="\ddot{a}" />} value={12} />
                    <Tab
                      icon={<TeX math="\lim\limits_{n \to \infty}" />}
                      value={13}
                    />
                    <Tab
                      icon={<TeX math="\overset{ \Delta}{=}" />}
                      value={14}
                    />
                    <Tab
                      icon={
                        <TeX math="\begin{bmatrix} {1}&{2} \\ {3}&{4} \end{bmatrix}" />
                      }
                      value={15}
                    />
                  </Tabs>
                </Box>
              </Modal>
            </Box>
          ) : (
            'hh'
          )}
        </AccordionSummary>
        <AccordionDetails>
          <AccordionListText propFunction={highFunction} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
