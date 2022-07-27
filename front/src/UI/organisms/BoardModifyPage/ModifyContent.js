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

export default function ModifyContent(props) {
  const layout = props.layout.data;
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
            },
            position: { x: dataitem.coordinateX, y: dataitem.coordinateY },
          };
          initialNodes.push(TextNode);
          break;
        case 2:
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
              image: dataitem.images,
              explanation: dataitem.explanation,
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
              content: dataitem.content,
              explanation: dataitem.explanation,
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
            },
            position: { x: dataitem.coordinateX, y: dataitem.coordinateY },
          };
          initialNodes.push(MathNode);
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
            },
            position: { x: dataitem.coordinateX, y: dataitem.coordinateY },
          };
          initialNodes.push(newNode);
          break;
      }
    });
  }

  useEffect(() => {}, [reactFlowInstance]);

  return (
    <Box
      sx={{
        width: '90%',
        marginLeft: '5%',
        border: 2,
        marginTop: 5,
      }}
    >
      <Box style={{ width: '100%', height: 1500 }}>
        <ReactFlowProvider>
          <div
            className="reactflow-wrapper"
            ref={reactFlowWrapper}
            style={{ width: '100%', height: 1500 }}
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
      <UnderButton id={layout.layoutId} data={nodes} />
    </Box>
  );
}
