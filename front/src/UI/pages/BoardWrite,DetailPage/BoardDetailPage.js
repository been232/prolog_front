import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import UnderButtons from '../../molecules/BoardWrite,DetailPage/UnderButtons';
import Content from '../../organisms/BoardWrite,DetailPage/Content';

/* Gird Item 들은 기능 연동 후 map 으로 처리하던가 해야할듯 */
function BoardDetailPage() {
  return (
    <Box sx={{ mx: '2rem' }}>
      <h2 style={{ marginLeft: '5%' }}>{data.data.post.title}</h2>
      <Content layout={data} />
    </Box>
  );
}

export default BoardDetailPage;

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
            url: 'blob:http://localhost:3000/9a2bbe9c-5855-4e48-afe7-b85cddde179a',
          },
          {
            url: 'blob:http://localhost:3000/ddb04dbd-f613-4319-8e57-c05933b17d75',
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
        content:
          'https://www.postman.com/galactic-water-517231/workspace/prolog/example/18419399-3d762dc1-a884-4c76-aac4-01758061136b',
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
    comments: [
      {
        id: '1',
        context: '글 내용',
        writter: 'abc',
        written: '2022-06-07 22:00:00',
        upper: '0',
        isBlocked: true,
      },
      {
        id: '3',
        context:
          '글 내용 asdf asdf asdf asdf asdf aasdf asdf safaadfasdfasdf asf \n asdfa aasdfasdf s sdf asdfa sdf asdfa sdf ',
        writter: 'qwr',
        written: '2022-06-07 22:00:00',
        upper: '0',
        isBlocked: true,
      },
      {
        id: '2',
        context: '글 내용',
        writter: 'efg',
        written: '2022-06-07 22:00:00',
        upper: '1',
        isBlocked: false,
      },
      {
        id: '4',
        context: '글 내용2',
        writter: 'efg',
        written: '2022-06-07 22:00:00',
        upper: '1',
        isBlocked: false,
      },
      {
        id: '5',
        context: '글 내용3',
        writter: 'eassfg',
        written: '2022-06-07 22:00:00',
        upper: '3',
        isBlocked: false,
      },
      {
        id: '6',
        context: '글 내용4',
        writter: 'eferqerg',
        written: '2022-06-07 22:00:00',
        upper: '0',
        isBlocked: true,
      },
    ],
  },
};
