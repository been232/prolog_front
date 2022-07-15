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
  useNodesState,
} from 'react-flow-renderer';

const initialNodes = [
  {
    id: '0',
    type: 'group',
    data: {
      id: '0',
      x: 250,
      y: 5,
      context: '',
      width: 200,
      height: 100,
      type: 1,
    },
    position: { x: 250, y: 5 },
  },
];

let id = 1;
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
  const [value, setValue] = useState(0);
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {}, []);

  const onDragStart = (event, newValue) => {
    event.dataTransfer.setData('application/reactflow', newValue);
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

      const id = getId();
      const newNode = {
        id: id,
        type: 'group',
        data: {
          type: type,
          id: id,
          x: position.x,
          y: position.y,
          width: 200,
          height: 100,
        },
        position: { x: position.x, y: position.y },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

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
        <Tabs value={value} variant="fullWidth" onChange={handleChange}>
          <Tab
            onDragStart={(event) => onDragStart(event, 1)}
            draggable
            icon={<ArticleOutlinedIcon />}
            aria-label="ArticleOutlinedIcon"
            index="1"
          />
          <Tab
            label="Item Two"
            onDragStart={(event) => onDragStart(event, 2)}
            draggable
            index="2"
          />
          <Tab label="Item Three" index="3" />
          <Tab label="Item One" index="4" />
          <Tab label="Item Two" index="5" />
        </Tabs>
      </Box>
      <Box style={{ width: '100%', height: 700, cursor: 'grap' }}>
        <ReactFlowProvider>
          <div
            className="reactflow-wrapper"
            ref={reactFlowWrapper}
            style={{ width: '100%', height: 700 }}
          >
            <ReactFlow
              fitView
              onDragOver={onDragOver}
              onDrop={onDrop}
              onInit={setReactFlowInstance}
              nodes={nodes}
              onNodesChange={onNodesChange}
            ></ReactFlow>
          </div>
        </ReactFlowProvider>
      </Box>
    </Box>
  );
}
