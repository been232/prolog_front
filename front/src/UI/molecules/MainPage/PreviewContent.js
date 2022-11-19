import React from "react";
import ContentText from "../../atoms/BoardWrite,DetailPage/ContentText";
import CodeAccordion from "../BoardWrite,DetailPage/CodeAccordion";
import FileViewerMolecule from "../BoardWrite,DetailPage/FileViewerMolecules";
import ImageListAccordion from "../BoardWrite,DetailPage/ImageListAccordion";
import MathAccordion from "../BoardWrite,DetailPage/MathAccordion";
import Text from "../BoardWrite,DetailPage/Text";
export default function PreviewContent(props) {
    const { layout } = props;
    console.log(layout);
    switch (layout.type) {
        case 1:
            const TextData = {
                x: layout.coordinateX,
                y: layout.coordinateY,
                type: layout.type,
                width: layout.width,
                height: layout.height,
                content: layout.content,
                explanation: layout.explanation,
            };
            return <ContentText data={TextData}></ContentText>;
        case 2:
            const ImageData = {
                x: layout.coordinateX,
                y: layout.coordinateY,
                type: layout.type,
                width: layout.width,
                height: layout.height,
                images: layout.images,
                explanation: layout.explanation,
            };
            return <ImageListAccordion data={ImageData}></ImageListAccordion>;
        case 3:
            const CodeData = {
                x: layout.coordinateX,
                y: layout.coordinateY,
                type: layout.type,
                width: layout.width,
                height: layout.height,
                content: layout.codes,
                explanation: layout.explanation,
            };
            return <CodeAccordion data={CodeData}></CodeAccordion>;
        case 4:
            const LinkData = {};
            break;
        case 5:
            const MathData = {
                x: layout.coordinateX,
                y: layout.coordinateY,
                type: layout.type,
                width: layout.width,
                height: layout.height,
                content: layout.content,
                explanation: layout.explanation,
            };
            return <MathAccordion data={MathData}></MathAccordion>;
        case 7:
            const ViwerData = {
                x: layout.coordinateX,
                y: layout.coordinateY,
                type: layout.type,
                width: layout.width,
                height: layout.height,
                content: layout.content,
                explanation: layout.explanation,
                board: true,
            };
            return <FileViewerMolecule data={ViwerData}></FileViewerMolecule>;
        default:
            break;
    }
}
