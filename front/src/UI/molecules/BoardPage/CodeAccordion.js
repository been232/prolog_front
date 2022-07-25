import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AccordionListText from '../../atoms/BoardPage/AccordionListText';
import Editor from '@monaco-editor/react';
import Box from '@mui/material/Box';
import { MenuItem, Select, FormControl,InputLabel } from '@mui/material';

export default function CodeAccordion(props) {
  const data = props.data;
  const [expand, setExpand] = React.useState(true);
  const [Code, setCode] = React.useState(false);
  const [Type, setType] = React.useState('');

  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };

  const highFunctionText = (text) => {
    data.content = text;
  };

  const handleChange = (event) => {
    setType(event.target.value);
    setCode(true);
  };

  React.useEffect(() => {}, []);

  return (
    <div
      style={{
        width: data.width,
        height: data.height,
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
          {Code == false ? (
            <Box sx={{ minWidth: data.width - 50 }}>
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">코드 언어 선택</InputLabel>
                <Select label="코드 언어 선택" value={Type} onChange={handleChange}>
                  <MenuItem value={'TypeScript'}>TypeScript</MenuItem>
                  <MenuItem value={'JavaScript'}>JavaScript</MenuItem>
                  <MenuItem value={'CSS'}>CSS</MenuItem>
                  <MenuItem value={'LESS'}>LESS</MenuItem>
                  <MenuItem value={'SCSS'}>SCSS</MenuItem>
                  <MenuItem value={'JSON'}>JSON</MenuItem>
                  <MenuItem value={'HTML'}>HTML</MenuItem>
                  <MenuItem value={'XML'}>XML</MenuItem>
                  <MenuItem value={'PHP'}>PHP</MenuItem>
                  <MenuItem value={'C#'}>C#</MenuItem>
                  <MenuItem value={'C++'}>C++</MenuItem>
                  <MenuItem value={'Razor'}>Razor</MenuItem>
                  <MenuItem value={'Markdown'}>Markdown</MenuItem>
                  <MenuItem value={'Diff'}>Diff</MenuItem>
                  <MenuItem value={'Java'}>Java</MenuItem>
                  <MenuItem value={'VB'}>VB</MenuItem>
                  <MenuItem value={'CoffeeScript'}>CoffeeScript</MenuItem>
                  <MenuItem value={'Handlebars'}>Handlebars</MenuItem>
                  <MenuItem value={'Batch'}>Batch</MenuItem>
                  <MenuItem value={'Pug'}>Pug</MenuItem>
                  <MenuItem value={'F#'}>F#</MenuItem>
                  <MenuItem value={'Lua'}>Lua</MenuItem>
                  <MenuItem value={'Powershell'}>Powershell</MenuItem>
                  <MenuItem value={'Python'}>Python</MenuItem>
                  <MenuItem value={'Ruby'}>Ruby</MenuItem>
                  <MenuItem value={'SASS'}>SASS</MenuItem>
                </Select>
              </FormControl>
            </Box>
          ) : (
            <>
              <Editor
                style={{ display: 'inlineblock' }}
                width={(data.width - 50) / 2}
                height={data.height - 170}
                defaultLanguage={Type}
                defaultValue="코드"
                options={{
                  minimap: { enabled: false },
                }}
              />
              <Editor
                width={(data.width - 50) / 2}
                style={{ display: 'inlineblock' }}
                height={data.height - 170}
                defaultLanguage="text"
                defaultValue="설명"
                options={{
                  minimap: { enabled: false },
                }}
              />
            </>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <AccordionListText propFunction={highFunctionText} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
