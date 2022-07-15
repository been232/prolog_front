import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useEffect, useState, useCallback, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
} from 'react-flow-renderer';
import resizeNode from '../../molecules/LayoutPage/Moveable';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AddLinkOutlinedIcon from '@mui/icons-material/AddLinkOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';

const nodeTypes = {
  resizeNode: resizeNode,
};
const initialNodes = [
  {
    id: '0',
    type: 'resizeNode',
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
    dragHandle: '.custom-drag-handle',
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
        type: 'resizeNode',
        data: {
          type: parseInt(type),
          id: id,
          x: position.x,
          y: position.y,
          width: 200,
          height: 100,
        },
        position: { x: position.x, y: position.y },
        dragHandle: '.custom-drag-handle',
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
            index="1"
            label="Text"
          />
          <Tab
            label="Image"
            icon={<ImageOutlinedIcon />}
            onDragStart={(event) => onDragStart(event, 2)}
            draggable
            index="2"
          />
          <Tab
            label="Code"
            icon={<KeyboardAltOutlinedIcon />}
            onDragStart={(event) => onDragStart(event, 3)}
            draggable
            index="3"
          />
          <Tab
            label="HyperLink"
            icon={<AddLinkOutlinedIcon />}
            onDragStart={(event) => onDragStart(event, 4)}
            draggable
            index="4"
          />
          <Tab
            label="Math"
            icon={<CalculateOutlinedIcon />}
            onDragStart={(event) => onDragStart(event, 5)}
            draggable
            index="5"
          />
          <Tab
            label="Video"
            icon={<VideoLibraryOutlinedIcon />}
            onDragStart={(event) => onDragStart(event, 6)}
            draggable
            index="6"
          />
          <Tab
            label="FILE"
            icon={<TopicOutlinedIcon />}
            onDragStart={(event) => onDragStart(event, 7)}
            draggable
            index="7"
          />
        </Tabs>
      </Box>
      <Box style={{ width: '100%', height: 1500, cursor: 'grap' }}>
        <ReactFlowProvider>
          <div
            className="reactflow-wrapper"
            ref={reactFlowWrapper}
            style={{ width: '100%', height: 1500 }}
          >
            <ReactFlow
              fitView
              onDragOver={onDragOver}
              onDrop={onDrop}
              onInit={setReactFlowInstance}
              nodes={nodes}
              onNodesChange={onNodesChange}
              nodeTypes={nodeTypes}
            ></ReactFlow>
          </div>
        </ReactFlowProvider>
      </Box>
    </Box>
  );
}
