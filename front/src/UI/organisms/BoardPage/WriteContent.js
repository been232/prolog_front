import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dropdown from '../../molecules/BoardPage/FontDropdown';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useEffect, useState, useCallback, useRef } from 'react';
import Content from '../../molecules/BoardPage/TextArea';
import ReactFlow, {
  ReactFlowProvider,
} from 'react-flow-renderer';

let id = 0;
const getId = () => `${id++}`;

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

export default function WriteContent() {
  const [value, setValue] = useState('content');
  const [arr, setArr] = useState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const reactFlowWrapper = useRef(null);
  const nodeTypes = { group : Content };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {}, [arr]);

  const onDragStart = (event, newValue) => {
    event.dataTransfer.setData('application/reactflow', newValue.type);
    event.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }
    
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = 
      {
        id: getId(),
        type: 'group',
        data: { id: this,id, x: position.x, y: position.y },
        position: { x: position.x, y: position.y },
      }

      setArr([...arr, newNode]);
    }
    ,
    [reactFlowInstance, arr]
  );

  const defaultEdges = [];
  return (
    <Box
      sx={{
        width: '90%',
        marginLeft: '5%',
        border: 2,
        marginTop: 5,
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab
            onDragStart={(event) =>
              onDragStart(event, 'default')
            }
            draggable
            icon={<ArticleOutlinedIcon />}
            aria-label="ArticleOutlinedIcon"
            value="content"
          />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
          <Tab label="Item One" value="4" />
          <Tab label="Item Two" value="5" />
          <Tab icon={<Dropdown />} aria-label="phone" value="6" />
        </Tabs>
      </Box>
      <Box style={{ width: '100%', height : 500 }}>
        <ReactFlowProvider>
          <div className="reactflow-wrapper" ref={reactFlowWrapper} style={{ width: '100%', height : 500}}>
          <ReactFlow
            fitView
            onDragOver={onDragOver}
            onDrop={onDrop}
            onInit={setReactFlowInstance}
            nodes={arr} 
            defaultEdges={defaultEdges}
            nodeTypes={nodeTypes}
          >
          </ReactFlow>
          </div>
        </ReactFlowProvider>
      </Box>
    </Box>
  );
}
