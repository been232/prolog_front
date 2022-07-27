import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AccordionListText from '../../atoms/BoardWrite,DetailPage/AccordionListText';
import Editor from '@monaco-editor/react';
import Box from '@mui/material/Box';
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';
import ContentText from '../../atoms/BoardWrite,DetailPage/ContentText';

export default function CodeAccordion(props) {
  const data = props.data;
  const board = data.board;
  const [expand, setExpand] = React.useState(true);
  const [Code, setCode] = React.useState(false);
  const [Type, setType] = React.useState('');
  const [codes, setcodes] = React.useState('코드');
  const [explain, setexplaincodes] = React.useState('설명');
  const [postdata, setpostdata] = React.useState([codes, explain, Type]);
  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };

  const highFunctionText = (text) => {
    data.explanation = text;
  };

  const handleChange = (event) => {
    setType(event.target.value);
    setCode(true);
    data.content = [codes, explain, event.target.value];
  };

  React.useEffect(() => {}, [codes, explain, Type]);

  const ChangeType = () => {
    setCode(false);
  }

  function onChange(newValue, e) {
    setcodes(newValue);
    setpostdata([newValue, explain, Type]);
    data.content = [newValue, explain, Type];
  }

  function onexplainChange(newValue, e) {
    setexplaincodes(newValue);
    setpostdata([codes, newValue, Type]);
    data.content = [codes, newValue, Type];
  }

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
          {board == false ? (
            Code == false ? (
              <Box sx={{ minWidth: data.width - 50 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    코드 언어 선택
                  </InputLabel>
                  <Select
                    label="코드 언어 선택"
                    value={Type}
                    onChange={handleChange}
                  >
                    <MenuItem value={'abap'}>abap</MenuItem>
                    <MenuItem value={'aes'}>aes</MenuItem>
                    <MenuItem value={'apex'}>apex</MenuItem>
                    <MenuItem value={'azcli'}>azcli</MenuItem>
                    <MenuItem value={'bat'}>bat</MenuItem>
                    <MenuItem value={'bicep'}>bicep</MenuItem>
                    <MenuItem value={'c'}>c</MenuItem>
                    <MenuItem value={'cameligo'}>cameligo</MenuItem>
                    <MenuItem value={'clojure'}>clojure</MenuItem>
                    <MenuItem value={'coffeescript'}>coffeescript</MenuItem>
                    <MenuItem value={'cpp'}>cpp</MenuItem>
                    <MenuItem value={'csharp'}>csharp</MenuItem>
                    <MenuItem value={'csp'}>csp</MenuItem>
                    <MenuItem value={'css'}>css</MenuItem>
                    <MenuItem value={'dart'}>dart</MenuItem>
                    <MenuItem value={'dockerfile'}>dockerfile</MenuItem>
                    <MenuItem value={'ecl'}>ecl</MenuItem>
                    <MenuItem value={'elixir'}>elixir</MenuItem>
                    <MenuItem value={'flow9'}>flow9</MenuItem>
                    <MenuItem value={'freemarker2'}>freemarker2</MenuItem>
                    <MenuItem value={'fsharp'}>fsharp</MenuItem>
                    <MenuItem value={'go'}>go</MenuItem>
                    <MenuItem value={'graphql'}>graphql</MenuItem>
                    <MenuItem value={'handlebars'}>handlebars</MenuItem>
                    <MenuItem value={'hcl'}>hcl</MenuItem>
                    <MenuItem value={'html'}>html</MenuItem>
                    <MenuItem value={'ini'}>ini</MenuItem>
                    <MenuItem value={'java'}>java</MenuItem>
                    <MenuItem value={'javascript'}>javascript</MenuItem>
                    <MenuItem value={'json'}>json</MenuItem>
                    <MenuItem value={'julia'}>julia</MenuItem>
                    <MenuItem value={'kotlin'}>kotlin</MenuItem>
                    <MenuItem value={'less'}>less</MenuItem>
                    <MenuItem value={'lexon'}>lexon</MenuItem>
                    <MenuItem value={'liquid'}>liquid</MenuItem>
                    <MenuItem value={'lua'}>lua</MenuItem>
                    <MenuItem value={'m3'}>m3</MenuItem>
                    <MenuItem value={'markdown'}>markdown</MenuItem>
                    <MenuItem value={'mips'}>mips</MenuItem>
                    <MenuItem value={'msdax'}>msdax</MenuItem>
                    <MenuItem value={'mysql'}>mysql</MenuItem>
                    <MenuItem value={'objective-c'}>objective-c</MenuItem>
                    <MenuItem value={'pascal'}>pascal</MenuItem>
                    <MenuItem value={'pascaligo'}>pascaligo</MenuItem>
                    <MenuItem value={'perl'}>perl</MenuItem>
                    <MenuItem value={'pgsql'}>pgsql</MenuItem>
                    <MenuItem value={'php'}>php</MenuItem>
                    <MenuItem value={'pla'}>pla</MenuItem>
                    <MenuItem value={'plaintext'}>plaintext</MenuItem>
                    <MenuItem value={'postiats'}>postiats</MenuItem>
                    <MenuItem value={'powerquery'}>powerquery</MenuItem>
                    <MenuItem value={'powershell'}>powershell</MenuItem>
                    <MenuItem value={'proto'}>proto</MenuItem>
                    <MenuItem value={'pug'}>pug</MenuItem>
                    <MenuItem value={'python'}>python</MenuItem>
                    <MenuItem value={'qsharp'}>qsharp</MenuItem>
                    <MenuItem value={'r'}>r</MenuItem>
                    <MenuItem value={'razor'}>razor</MenuItem>
                    <MenuItem value={'redis'}>redis</MenuItem>
                    <MenuItem value={'redshift'}>redshift</MenuItem>
                    <MenuItem value={'restructuredtext'}>
                      restructuredtext
                    </MenuItem>
                    <MenuItem value={'ruby'}>ruby</MenuItem>
                    <MenuItem value={'rust'}>rust</MenuItem>
                    <MenuItem value={'sb'}>sb</MenuItem>
                    <MenuItem value={'scala'}>scala</MenuItem>
                    <MenuItem value={'scheme'}>scheme</MenuItem>
                    <MenuItem value={'scss'}>scss</MenuItem>
                    <MenuItem value={'shell'}>shell</MenuItem>
                    <MenuItem value={'sol'}>sol</MenuItem>
                    <MenuItem value={'sparql'}>sparql</MenuItem>
                    <MenuItem value={'sql'}>sql</MenuItem>
                    <MenuItem value={'st'}>st</MenuItem>
                    <MenuItem value={'swift'}>swift</MenuItem>
                    <MenuItem value={'systemverilog'}>systemverilog</MenuItem>
                    <MenuItem value={'tcl'}>tcl</MenuItem>
                    <MenuItem value={'twig'}>twig</MenuItem>
                    <MenuItem value={'typescript'}>typescript</MenuItem>
                    <MenuItem value={'vb'}>vb</MenuItem>
                    <MenuItem value={'verilog'}>verilog</MenuItem>
                    <MenuItem value={'xml'}>xml</MenuItem>
                    <MenuItem value={'yaml'}>yaml</MenuItem>
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
                  options={{
                    minimap: { enabled: false },
                  }}
                  value={codes}
                  onChange={onChange}
                />
                <Editor
                  width={(data.width - 50) / 2}
                  style={{ display: 'inlineblock' }}
                  height={data.height - 170}
                  defaultLanguage="text"
                  value={explain}
                  onChange={onexplainChange}
                  options={{
                    minimap: { enabled: false },
                  }}
                />
              </>
            )
          ) : (
            <>
              <Editor
                style={{ display: 'inlineblock' }}
                width={(data.width - 50) / 2}
                height={data.height - 170}
                defaultLanguage={data.content[2]}
                options={{
                  minimap: { enabled: false },
                  readOnly: true,
                }}
                value={data.content[0]}
              />
              <Editor
                width={(data.width - 50) / 2}
                style={{ display: 'inlineblock' }}
                height={data.height - 170}
                defaultLanguage="text"
                value={data.content[1]}
                options={{
                  minimap: { enabled: false },
                  readOnly: true,
                }}
              />
            </>
          )}
        </AccordionSummary>
        <AccordionDetails>
          {board == true ? (
            <ContentText data={data} />
          ) : (
            <Box>
              <AccordionListText propFunction={highFunctionText} />
              <Button onClick={ChangeType} style={{float:'right'}}>언어 다시 선택</Button>
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
