import Box from '@mui/material/Box';
import { useEffect, useRef, useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
} from 'react-flow-renderer';
import UnderButtons from '../../molecules/LayoutPage/UnderButtons';
import LayoutNode from '../../molecules/LayoutPage/LayoutNode';

const nodeTypes = {
  LayoutNode: LayoutNode,
};

export default function Content(props) {
  const layout = props.layout[0];
  const initialNodes = [];
  const reactFlowWrapper = useRef(null);
  const nodeitem = [];
  const [nodes, setNodes] = useNodesState(initialNodes);

  useEffect(() => {
    layout.layouts.map((dataitem) => {
      const newNode = {
        id: (dataitem.id).toString(),
        type: 'LayoutNode',
        data: {
          id: dataitem.id,
          x: dataitem.coordinateX,
          y: dataitem.coordinateY,
          type: dataitem.type,
          width: dataitem.width,
          height: dataitem.height,
        },
        position: { x: dataitem.coordinateX, y: dataitem.coordinateY }
      };
      nodeitem.push(newNode);
    });
    setNodes((nds) => nds.concat(nodeitem));
  }, []);

  return (
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
      <UnderButtons id={layout.layoutId} />
    </Box>
  );
}
