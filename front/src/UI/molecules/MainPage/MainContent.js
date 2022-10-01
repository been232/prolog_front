import Box from '@mui/material/Box';
import { useEffect, useRef, useState, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
} from 'react-flow-renderer';
import UnderButtons from '../../molecules/BoardWrite,DetailPage/UnderButtons';
import LayoutNode from '../../molecules/LayoutPage/LayoutNode';
import Text from '../../atoms/BoardWrite,DetailPage/ContentText';
import Image from '../../molecules/BoardWrite,DetailPage/ImageListAccordion';
import Math from '../../molecules/BoardWrite,DetailPage/MathAccordion';
import Link from '../../molecules/BoardWrite,DetailPage/HyperLinkAccordion';
import Code from '../../molecules/BoardWrite,DetailPage/CodeAccordion';
import ChipList from '../../molecules/BoardWrite,DetailPage/ChipList';
import Viewer from '../../molecules/BoardWrite,DetailPage/FileViewerMolecules';

export default function MainContent(props) {
  const { layout } = props;
  console.log(layout);
  const initialNodes = [];
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const nodeTypes = {
    LayoutNode: LayoutNode,
    Text: Text,
    Image: Image,
    Math: Math,
    Link: Link,
    Code: Code,
    Viewer: Viewer,
  };

  {
    list();
  }
  function list() {
    console.log(layout.type);
    switch (layout.type) {
      case 1:
        const TextNode = {
          type: 'Text',
          data: {
            x: layout.coordinateX,
            y: layout.coordinateY,
            type: layout.type,
            width: layout.width,
            height: layout.height,
            content: layout.content,
            leader: layout.leader,
          },
          position: { x: layout.coordinateX, y: layout.coordinateY },
        };
        initialNodes.push(TextNode);
        break;
      case 2:
        const ImageNode = {
          type: 'Image',
          data: {
            x: layout.coordinateX,
            y: layout.coordinateY,
            type: layout.type,
            width: layout.width,
            height: layout.height,
            images: layout.images,
            explanation: layout.explanation,
            board: true,
            leader: layout.leader,
          },
          position: { x: layout.coordinateX, y: layout.coordinateY },
        };
        initialNodes.push(ImageNode);
        break;
      case 3:
        const CodeNode = {
          type: 'Code',
          data: {
            x: layout.coordinateX,
            y: layout.coordinateY,
            type: layout.type,
            width: layout.width,
            height: layout.height,
            content: layout.codes,
            explanation: layout.explanation,
            board: true,
            leader: layout.leader,
          },
          position: { x: layout.coordinateX, y: layout.coordinateY },
        };
        initialNodes.push(CodeNode);
        break;
      case 4:
        const LinkNode = {
          type: 'Link',
          data: {
            x: layout.coordinateX,
            y: layout.coordinateY,
            type: layout.type,
            width: layout.width,
            height: layout.height,
            content: layout.content,
            explanation: layout.explanation,
            board: true,
            leader: layout.leader,
          },
          position: { x: layout.coordinateX, y: layout.coordinateY },
        };
        initialNodes.push(LinkNode);
        break;
      case 5:
        const MathNode = {
          type: 'Math',
          data: {
            x: layout.coordinateX,
            y: layout.coordinateY,
            type: layout.type,
            width: layout.width,
            height: layout.height,
            content: layout.content,
            explanation: layout.explanation,
            board: true,
            leader: layout.leader,
          },
          position: { x: layout.coordinateX, y: layout.coordinateY },
        };
        initialNodes.push(MathNode);
        break;
      case 6:
        const ViewerNode = {
          type: 'Viewer',
          data: {
            x: layout.coordinateX,
            y: layout.coordinateY,
            type: layout.type,
            width: layout.width,
            height: layout.height,
            content: layout.content,
            board: true,
            leader: layout.leader,
          },
          position: { x: layout.coordinateX, y: layout.coordinateY },
        };
        initialNodes.push(ViewerNode);
        break;
      default:
        const newNode = {
          type: 'LayoutNode',
          data: {
            x: layout.coordinateX,
            y: layout.coordinateY,
            type: layout.type,
            width: layout.width,
            height: layout.height,
            content: '',
            leader: layout.leader,
          },
          position: { x: layout.coordinateX, y: layout.coordinateY },
        };
        initialNodes.push(newNode);
        break;
    }
  }

  useEffect(() => {}, [reactFlowInstance]);

  return (
    <Box>
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
              style={{ width: '100%', height: 800 }}
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
    </Box>
  );
}
