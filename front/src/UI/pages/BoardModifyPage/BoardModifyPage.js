import { Box, StepContext } from '@mui/material';
import React, { useEffect } from 'react';
import BasicTextFields from '../../atoms/BoardModifyPage/BasicTextFields';
import ModifyContent from '../../organisms/BoardModifyPage/ModifyContent';

function BoardModifyPage() {
  const [texts, setText] = React.useState('');

  const highFunction = (text) => {
    setText(text);
  };

  useEffect(() => {}, [texts,data]);

  return (
    <Box sx={{ marginLeft: 20, marginRight: 20 }}>
      <BasicTextFields propFunction={highFunction} data={data}/>
      <ModifyContent title={texts} layout={data} />
    </Box>
  );
}

const data = {
  success: true,
  data: {
    layoutId: 1,
    user: {
      name: 'username',
      // image: ''
    },
    post: {
      id: 1,
      title: 'gg',
      written: '2022-06-06 22:00:00',
    },
    layouts: [
      {
        coordinateX: 468.6634070692694,
        coordinateY: 281.61806881723965,
        explanation: '22',
        height: 479,
        id: 2,
        images: [
          {
            url: "blob:http://localhost:3000/6555f544-92bc-4f9b-9cde-235d921c8cc6",
          },
          {
            url: "blob:http://localhost:3000/1125303c-149b-41ac-afcb-83a7c3eccd64",
          },
        ],
        length: 2,
        leader: true,
        type: 2,
        width: 794,
      },
      {
        content: '33',
        coordinateX: 469.93284332031544,
        coordinateY: 778.4286011610775,
        height: 149,
        id: 3,
        leader: false,
        type: 1,
        width: 794,
      },
      {
        content: ['코드44', '설명44', 'c'],
        coordinateX: 469.5513725236415,
        coordinateY: 944.1029916903926,
        explanation: '44',
        height: 600,
        id: 4,
        leader: false,
        type: 3,
        width: 794,
      },
      {
        content: 'A = \\pi r^2A = \\pi r^2',
        coordinateX: 467.5513725236415,
        coordinateY: 1566.1029916903926,
        explanation: '55',
        height: 600,
        id: 5,
        leader: false,
        type: 5,
        width: 794,
      },
      {
        content: 'https://www.postman.com/galactic-water-517231/workspace/prolog/example/18419399-3d762dc1-a884-4c76-aac4-01758061136b',
        coordinateX: 465.5513725236415,
        coordinateY: 2188.1029916903926,
        explanation: '66',
        height: 150,
        id: 6,
        leader: false,
        type: 4,
        width: 594,
      },
      {
        content: '77',
        coordinateX: 465.5513725236415,
        coordinateY: 2354.1029916903926,
        height: 600,
        id: 7,
        leader: false,
        type: 1,
        width: 794,
      },
      {
        content: '11',
        coordinateX: 467.5513725236415,
        coordinateY: -35.8970083096074,
        height: 300,
        id: 8,
        leader: false,
        type: 1,
        width: 794,
      },
    ],
    // category : {
    //     id : categoryId,
    //     name : categoryName
    // },
    // attachment : [
    //     {
    //         id : attachmentId,
    //         name : name,
    //         url : http::/~
    //     },{
    //         id : attachmentId,
    //         name : name,
    //         url : http::/~
    //     }
    // ],
    tag: ['gggg'],
    hits: 123,
    likes: { count: 11, exist: false }, // exist : 내가 좋아요를 눌렀는지
    // comments : [
    //     {
    //         id : commentId,
    //         context : 글 내용,
    //         written : 2022-06-07 22:00:00,
    //         upper : upperCommentId,
    //         isBlocked : true
    //     },
    //     {
    //         id : commentId,
    //         context : 글 내용,
    //         written : 2022-06-07 22:00:00,
    //         upper : upperCommentId,
    //         isBlocked : false
    //     },
    //     {
    //         id : commentId,
    //         context : 글 내용,
    //         written : 2022-06-07 22:00:00,
    //         upper : upperCommentId,
    //         isBlocked : true
    //     }
    // ]
  },
};

  
export default BoardModifyPage;
