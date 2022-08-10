import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AccordionListText from '../../atoms/BoardModifyPage/AccordionListText';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Maths from '../../atoms/BoardWrite,DetailPage/Maths';
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent } from '@mui/material';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
  top: '50%',
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
  const [math, setMath] = React.useState(true);
  const [expand, setExpand] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState(0);
  const [textValue, settextValue] = useState(data.content);

  const handleOpen = () => {
    setOpen(true);
    setMath(false);
  };
  const handleClose = () => {
    setOpen(false);
    setMath(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handletextChange = (event) => {
    settextValue(event.target.value);
    data.content = event.target.value;
  };

  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };

  const highFunction = (text) => {
    data.explanation = text;
  };

  const highFunctions = (text) => {
    settextValue(textValue.concat(text));
    data.content = textValue.concat(text);
  };

  React.useEffect(() => {
   
  }, [textValue]);

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
                        <Tab
                          icon={<TeX math="\ddot{a}" />}
                          {...a11yProps(12)}
                        />
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
                      <Maths propFunction={highFunctions} Type={1} rows={4} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <Maths propFunction={highFunctions} Type={2} rows={0.8} />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      <Maths propFunction={highFunctions} Type={3} rows={0.8} />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                      <Maths propFunction={highFunctions} Type={4} rows={0.8} />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                      <Maths propFunction={highFunctions} Type={5} rows={0.8} />
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                      <Maths propFunction={highFunctions} Type={6} rows={3} />
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                      <Maths propFunction={highFunctions} Type={7} rows={3} />
                    </TabPanel>
                    <TabPanel value={value} index={7}>
                      <Maths propFunction={highFunctions} Type={8} rows={3} />
                    </TabPanel>
                    <TabPanel value={value} index={8}>
                      <Maths propFunction={highFunctions} Type={9} rows={3} />
                    </TabPanel>
                    <TabPanel value={value} index={9}>
                      <Maths propFunction={highFunctions} Type={10} rows={3} />
                    </TabPanel>
                    <TabPanel value={value} index={10}>
                      <Maths propFunction={highFunctions} Type={11} rows={3} />
                    </TabPanel>
                    <TabPanel value={value} index={11}>
                      <Maths propFunction={highFunctions} Type={12} rows={3} />
                    </TabPanel>
                    <TabPanel value={value} index={12}>
                      <Maths propFunction={highFunctions} Type={13} rows={3} />
                    </TabPanel>
                    <TabPanel value={value} index={13}>
                      <Maths propFunction={highFunctions} Type={14} rows={3} />
                    </TabPanel>
                    <TabPanel value={value} index={14}>
                      <Maths propFunction={highFunctions} Type={15} rows={3} />
                    </TabPanel>
                    <TabPanel value={value} index={15}>
                      <Maths propFunction={highFunctions} Type={16} rows={3} />
                    </TabPanel>
                    <Box>
                      <TextField
                        fullWidth
                        value={textValue}
                        onChange={handletextChange}
                        placeholder="위의 박스를 클릭하거나 직접 마크다운으로 입력하세요"
                        inputProps={{style: {fontFamily: "SUIT-Regular"}}}
                      />
                    </Box>
                    <Box style={{ marginTop: 20 }}>
                      <Card>
                        <CardContent style={{ height: 100 }}>
                          <TeX math={textValue} />
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                </Modal>
              </Box>
            ) : (
              <Card
                onClick={handleOpen}
                style={{ width: data.width - 50, height: data.height - 170 }}
              >
                <CardContent>
                  <TeX math={textValue} />
                </CardContent>
              </Card>
            )
            }
        </AccordionSummary>
        <AccordionDetails>
            <AccordionListText propFunction={highFunction} data={data}/>
            ID: {data.id}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
