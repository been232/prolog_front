import Box from "@mui/material/Box";
import { useEffect, useRef, useState, useCallback } from "react";
import ReactFlow, {
    ReactFlowProvider,
    useNodesState,
} from "react-flow-renderer";
import UnderButtons from "../../molecules/BoardWrite,DetailPage/UnderButtons";
import LayoutNode from "../../molecules/LayoutPage/LayoutNode";
import Text from "../../atoms/BoardWrite,DetailPage/ContentText";
import Image from "../../molecules/BoardWrite,DetailPage/ImageListAccordion";
import Math from "../../molecules/BoardWrite,DetailPage/MathAccordion";
import Link from "../../molecules/BoardWrite,DetailPage/HyperLinkAccordion";
import Code from "../../molecules/BoardWrite,DetailPage/CodeAccordion";
import ChipList from "../../molecules/BoardWrite,DetailPage/ChipList";
import Viewer from "../../molecules/BoardWrite,DetailPage/FileViewerMolecules";
// import Viewer from '../../atoms/BoardWrite,DetailPage/MultiViewer'
import Comment from "./Comment";

export default function Content(props) {
    const layout = props.layout;
    const tag = layout.tag;
    const postid = layout.post.id;
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
        layout.layouts.map((dataitem) => {
            switch (dataitem.type) {
                case 1:
                    const TextNode = {
                        id: dataitem.id.toString(),
                        type: "Text",
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
                        position: {
                            x: dataitem.coordinateX,
                            y: dataitem.coordinateY,
                        },
                    };
                    initialNodes.push(TextNode);
                    break;
                case 2:
                    const ImageNode = {
                        id: dataitem.id.toString(),
                        type: "Image",
                        data: {
                            id: dataitem.id,
                            x: dataitem.coordinateX,
                            y: dataitem.coordinateY,
                            type: dataitem.type,
                            width: dataitem.width,
                            height: dataitem.height,
                            images: dataitem.images,
                            explanation: dataitem.explanation,
                            board: true,
                            leader: dataitem.leader,
                        },
                        position: {
                            x: dataitem.coordinateX,
                            y: dataitem.coordinateY,
                        },
                    };
                    initialNodes.push(ImageNode);
                    break;
                case 3:
                    const CodeNode = {
                        id: dataitem.id.toString(),
                        type: "Code",
                        data: {
                            id: dataitem.id,
                            x: dataitem.coordinateX,
                            y: dataitem.coordinateY,
                            type: dataitem.type,
                            width: dataitem.width,
                            height: dataitem.height,
                            content: dataitem.codes,
                            explanation: dataitem.explanation,
                            board: true,
                            leader: dataitem.leader,
                        },
                        position: {
                            x: dataitem.coordinateX,
                            y: dataitem.coordinateY,
                        },
                    };
                    initialNodes.push(CodeNode);
                    break;
                case 4:
                    const LinkNode = {
                        id: dataitem.id.toString(),
                        type: "Link",
                        data: {
                            id: dataitem.id,
                            x: dataitem.coordinateX,
                            y: dataitem.coordinateY,
                            type: dataitem.type,
                            width: dataitem.width,
                            height: dataitem.height,
                            content: dataitem.content,
                            explanation: dataitem.explanation,
                            board: true,
                            leader: dataitem.leader,
                        },
                        position: {
                            x: dataitem.coordinateX,
                            y: dataitem.coordinateY,
                        },
                    };
                    initialNodes.push(LinkNode);
                    break;
                case 5:
                    const MathNode = {
                        id: dataitem.id.toString(),
                        type: "Math",
                        data: {
                            id: dataitem.id,
                            x: dataitem.coordinateX,
                            y: dataitem.coordinateY,
                            type: dataitem.type,
                            width: dataitem.width,
                            height: dataitem.height,
                            content: dataitem.content,
                            explanation: dataitem.explanation,
                            board: true,
                            leader: dataitem.leader,
                        },
                        position: {
                            x: dataitem.coordinateX,
                            y: dataitem.coordinateY,
                        },
                    };
                    initialNodes.push(MathNode);
                    break;
                case 7:
                    const ViewerNode = {
                        id: dataitem.id.toString(),
                        type: "Viewer",
                        data: {
                            id: dataitem.id,
                            x: dataitem.coordinateX,
                            y: dataitem.coordinateY,
                            type: dataitem.type,
                            width: dataitem.width,
                            height: dataitem.height,
                            content: dataitem.images[0].url,
                            board: true,
                            leader: dataitem.leader,
                        },
                        position: {
                            x: dataitem.coordinateX,
                            y: dataitem.coordinateY,
                        },
                    };
                    initialNodes.push(ViewerNode);
                    break;
                default:
                    const newNode = {
                        id: dataitem.id.toString(),
                        type: "LayoutNode",
                        data: {
                            id: dataitem.id,
                            x: dataitem.coordinateX,
                            y: dataitem.coordinateY,
                            type: dataitem.type,
                            width: dataitem.width,
                            height: dataitem.height,
                            content: "",
                            leader: dataitem.leader,
                        },
                        position: {
                            x: dataitem.coordinateX,
                            y: dataitem.coordinateY,
                        },
                    };
                    initialNodes.push(newNode);
                    break;
            }
        });
    }

    useEffect(() => {}, [reactFlowInstance]);

    return (
        <Box>
            <Box
                sx={{
                    width: "90%",
                    marginLeft: "5%",
                    border: 2,
                    marginTop: 5,
                }}
            >
                <Box style={{ width: "100%", height: 800 }}>
                    <ReactFlowProvider>
                        <div
                            className="reactflow-wrapper"
                            ref={reactFlowWrapper}
                            style={{ width: "100%", height: 800 }}
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
            {/* <Comment comment={comment} postid={postid}></Comment> */}
            <ChipList tag={tag} />
            <UnderButtons id={postid} />
        </Box>
    );
}
