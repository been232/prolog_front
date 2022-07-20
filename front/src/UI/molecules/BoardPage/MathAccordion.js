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
import MathOne from '../../atoms/BoardPage/MathOne';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
                  <Box>
                    <Tabs
                      variant="fullWidth"
                      value={value}
                      onChange={handleChange}
                    >
                      <Tab icon={<TeX math="\pi" />} {...a11yProps(0)} />
                      <Tab icon={<TeX math="\pm" />} {...a11yProps(1)} />
                      <Tab icon={<TeX math="\alpha" />} {...a11yProps(2)} />
                      <Tab icon={<TeX math="\ne" />} {...a11yProps(3)} />
                      <Tab icon={<TeX math="\to" />} {...a11yProps(4)} />
                      <Tab
                        icon={<TeX math="{ x }/{ y }" />}
                        {...a11yProps(5)}
                      />
                      <Tab icon={<TeX math="e^{x}" />} {...a11yProps(6)} />
                      <Tab
                        icon={<TeX math="\sqrt[n]{x}" />}
                        {...a11yProps(7)}
                      />
                      <Tab
                        icon={<TeX math="\int_{-x}^{x}" />}
                        {...a11yProps(8)}
                      />
                      <Tab
                        icon={<TeX math="\sum_{ i=10 }^{ n }" />}
                        {...a11yProps(9)}
                      />
                      <Tab
                        icon={<TeX math="\Big\{\Big(\Big)\Big\}" />}
                        {...a11yProps(10)}
                      />
                      <Tab
                        icon={<TeX math="\sin{\theta }" />}
                        {...a11yProps(11)}
                      />
                      <Tab icon={<TeX math="\ddot{a}" />} {...a11yProps(12)} />
                      <Tab
                        icon={<TeX math="\lim\limits_{n \to \infty}" />}
                        {...a11yProps(13)}
                      />
                      <Tab
                        icon={<TeX math="\overset{ \Delta}{=}" />}
                        {...a11yProps(14)}
                      />
                      <Tab
                        icon={
                          <TeX math="\begin{bmatrix} {1}&{2} \\ {3}&{4} \end{bmatrix}" />
                        }
                        {...a11yProps(15)}
                      />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <MathOne />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    2
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    3
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    4
                  </TabPanel>
                  <TabPanel value={value} index={4}>
                    5
                  </TabPanel>
                  <TabPanel value={value} index={5}>
                    6
                  </TabPanel>
                  <TabPanel value={value} index={6}>
                    7
                  </TabPanel>
                  <TabPanel value={value} index={7}>
                    8
                  </TabPanel>
                  <TabPanel value={value} index={8}>
                    9
                  </TabPanel>
                  <TabPanel value={value} index={9}>
                    10
                  </TabPanel>
                  <TabPanel value={value} index={10}>
                    11
                  </TabPanel>
                  <TabPanel value={value} index={11}>
                    12
                  </TabPanel>
                  <TabPanel value={value} index={12}>
                    13
                  </TabPanel>
                  <TabPanel value={value} index={13}>
                    14
                  </TabPanel>
                  <TabPanel value={value} index={14}>
                    15
                  </TabPanel>
                  <TabPanel value={value} index={15}>
                    16
                  </TabPanel>
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
