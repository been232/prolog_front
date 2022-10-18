import Box from '@mui/material/Box';
import { useEffect, useRef, useState, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
} from 'react-flow-renderer';
import UnderButton from '../../molecules/BoardModityPage/UnderButton';
import LayoutNode from '../../molecules/LayoutPage/LayoutNode';
import Text from '../../molecules/BoardModityPage/Text';
import Image from '../../molecules/BoardModityPage/ImageListAccordion';
import Math from '../../molecules/BoardModityPage/MathAccordion';
import Link from '../../molecules/BoardModityPage/HyperLinkAccordion';
import Code from '../../molecules/BoardModityPage/CodeAccordion';
import ChipInput from '../../molecules/BoardModityPage/ChipInput';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Viewer from '../../molecules/BoardWrite,DetailPage/FileViewerMolecules';

const nodeTypes = {
  LayoutNode: LayoutNode,
  Text: Text,
  Image: Image,
  Math: Math,
  Link: Link,
  Code: Code,
  Viewer: Viewer,
};

export default function ModifyContent(props) {
  const title = props.title;
  const layout = props.layout;
  const initialNodes = [];
  const postid = layout.post.id;
  const category = props.category;
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [tag, setTag] = useState(layout.tag);
  const [anchorEl, setAnchorEl] = useState(null);
  const [leader, setLeader] = useState(0);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.target);
    nodes.map((option) => {
      if (option.data.leader == true) {
        setLeader(option.data.id);
      }
    });
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    nodes.map((option) => {
      if (option.data.id == leader) {
        option.data.leader = false;
      }
    });
    setLeader(event.target.value);
  };

  const highComponent = (text) => {
    setTag(text);
  };

  {
    list();
  }
  function list() {
    layout.layouts.map((dataitem) => {
      switch (dataitem.type) {
        case 1:
          const TextNode = {
            id: dataitem.id.toString(),
            type: 'Text',
            data: {
              id: dataitem.id,
              x: dataitem.coordinateX,
              y: dataitem.coordinateY,
              type: dataitem.type,
              width: dataitem.width,
              height: dataitem.height,
              content: dataitem.content,
              leader: dataitem.leader,
            },
            position: { x: dataitem.coordinateX, y: dataitem.coordinateY },
          };
          initialNodes.push(TextNode);
          break;
        case 2:
          const i = [];
          dataitem.images.map((images) => {
            i.push(images.url);
          });
          const ImageNode = {
            id: dataitem.id.toString(),
            type: 'Image',
            data: {
              id: dataitem.id,
              x: dataitem.coordinateX,
              y: dataitem.coordinateY,
              type: dataitem.type,
              width: dataitem.width,
              height: dataitem.height,
              images: i,
              explanation: dataitem.explanation,
              leader: dataitem.leader,
            },
            position: { x: dataitem.coordinateX, y: dataitem.coordinateY },
          };
          initialNodes.push(ImageNode);
          break;
        case 3:
          const CodeNode = {
            id: dataitem.id.toString(),
            type: 'Code',
            data: {
              id: dataitem.id,
              x: dataitem.coordinateX,
              y: dataitem.coordinateY,
              type: dataitem.type,
              width: dataitem.width,
              height: dataitem.height,
              content: dataitem.codes,
              explanation: dataitem.explanation,
              leader: dataitem.leader,
            },
            position: { x: dataitem.coordinateX, y: dataitem.coordinateY },
          };
          initialNodes.push(CodeNode);
          break;
        case 4:
          const LinkNode = {
            id: dataitem.id.toString(),
            type: 'Link',
            data: {
              id: dataitem.id,
              x: dataitem.coordinateX,
              y: dataitem.coordinateY,
              type: dataitem.type,
              width: dataitem.width,
              height: dataitem.height,
              content: dataitem.content,
              explanation: dataitem.explanation,
              leader: dataitem.leader,
            },
            position: { x: dataitem.coordinateX, y: dataitem.coordinateY },
          };
          initialNodes.push(LinkNode);
          break;
        case 5:
          const MathNode = {
            id: dataitem.id.toString(),
            type: 'Math',
            data: {
              id: dataitem.id,
              x: dataitem.coordinateX,
              y: dataitem.coordinateY,
              type: dataitem.type,
              width: dataitem.width,
              height: dataitem.height,
              content: dataitem.content,
              explanation: dataitem.explanation,
              leader: dataitem.leader,
            },
            position: { x: dataitem.coordinateX, y: dataitem.coordinateY },
          };
          initialNodes.push(MathNode);
          break;
        case 6:
          const ViewerNode = {
            id: dataitem.id.toString(),
            type: 'Viewer',
            data: {
              id: dataitem.id,
              x: dataitem.coordinateX,
              y: dataitem.coordinateY,
              type: dataitem.type,
              width: dataitem.width,
              height: dataitem.height,
              content: dataitem.content,
              leader: dataitem.leader,
            },
            position: { x: dataitem.coordinateX, y: dataitem.coordinateY },
          };
          initialNodes.push(ViewerNode);
          break;
          case 7:
            const ViewerNode2 = {
              id: dataitem.id.toString(),
              type: 'Viewer',
              data: {
                id: dataitem.id,
                x: dataitem.coordinateX,
                y: dataitem.coordinateY,
                type: dataitem.type,
                width: dataitem.width,
                height: dataitem.height,
                content: dataitem.content,
                leader: dataitem.leader,
              },
              position: { x: dataitem.coordinateX, y: dataitem.coordinateY },
            };
            initialNodes.push(ViewerNode2);
            break;
        default:
          const newNode = {
            id: dataitem.id.toString(),
            type: 'LayoutNode',
            data: {
              id: dataitem.id,
              x: dataitem.coordinateX,
              y: dataitem.coordinateY,
              type: dataitem.type,
              width: dataitem.width,
              height: dataitem.height,
              content: '',
              leader: dataitem.leader,
            },
            position: { x: dataitem.coordinateX, y: dataitem.coordinateY },
          };
          initialNodes.push(newNode);
          break;
      }
    });
  }

  useEffect(() => {
    nodes.map((option) => {
      if (option.data.id == leader) {
        option.data.leader = true;
      }
    });
  }, [reactFlowInstance, leader]);

  return (
    <Box>
      <div>
        <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          style={{
            float: 'right',
            fontFamily: 'SUIT-Regular',
            marginRight: '5%',
          }}
        >
          대표 설정
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {nodes.map((option) => (
            <MenuItem
              key={option.data.id}
              value={option.data.id}
              onClick={handleClose}
            >
              ID : {option.data.id}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <Box
        sx={{
          width: '90%',
          marginLeft: '5%',
          border: 2,
          marginTop: 5,
        }}
      >
        <Box style={{ width: '100%', height: 800 }}>
          <ReactFlowProvider>
            <div
              className="reactflow-wrapper"
              ref={reactFlowWrapper}
              style={{ width: '100%', height: 750 }}
            >
              <ReactFlow
                fitView
                nodes={nodes}
                nodesDraggable={false}
                nodeTypes={nodeTypes}
              ></ReactFlow>
            </div>
          </ReactFlowProvider>
        </Box>
      </Box>
      <ChipInput propfunction={highComponent} tag={tag} />
      <UnderButton category={category} id={postid} layoutId={layout.layoutId} data={nodes} tags={tag} title={title} />
    </Box>
  );
}
