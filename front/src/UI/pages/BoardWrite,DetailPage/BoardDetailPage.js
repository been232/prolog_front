import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import UnderButtons from '../../molecules/BoardWrite,DetailPage/UnderButtons';
import Content from '../../organisms/BoardWrite,DetailPage/Content';

/* Gird Item 들은 기능 연동 후 map 으로 처리하던가 해야할듯 */
function BoardDetailPage() {
  return (
    <Box sx={{ mx: "2rem" }}>
      <h2 style={{ marginLeft: '5%' }}>{data.data.post.title}</h2>
      <Content layout={data}/>
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
        id: 1,
        type: 1,
        coordinateX: -50.555,
        coordinateY: 110.555,
        width: 200,
        height: 400,
        content: '글 내용 히히히히히히ㅎㅎㅎㅎ',
      },
      {
        id: 2,
        type: 2,
        coordinateX: 60.555,
        coordinateY: 600.555,
        width: 400,
        height: 400,
        images:  [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
          },
          {
            url: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
          },
          {
            url: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
          },
          {
            url: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
          },
          {
            url: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
          },
          {
            url: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
          },
          {
            url: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
          },
          {
            url: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
          }
        ],
        explanation: 'ㅎㅇㅎㅇㅎㅇ\nㅎㅎㅎㅎ'
      },
      {
        id: 3,
        type: 3,
        coordinateX: 300.555,
        coordinateY: 0.555,
        width: 750,
        height: 505,
        content: ['int main() {\r\n    int a = b;\r\n    print(b)\r\n}','메인 문\r\n\r\n프린트문','c'],
        explanation: 'ㅎㅎㅎㅎㅎ'
      },
      {
        id: 4,
        type: 4,
        coordinateX: -50.555,
        coordinateY: -500,
        width: 500,
        height: 300,
        content: 'https://www.google.com/search?q=mui+accordion+custom&oq=&aqs=chrome.5.69i59i450l8.694643353j0j15&sourceid=chrome&ie=UTF-8',
        explanation: '하이이이퍼링ㅋ으응'
      },
      {
        id: 5,
        type: 5,
        coordinateX: 500.555,
        coordinateY: 600.555,
        width: 400,
        height: 400,
        content: 'x = \\frac{ -b \\pm \\sqrt{ b^2-4ac } }{ 2a }',
        explanation: '수학 설며여영'
      },
      {
        id: 6,
        type: 6,
        coordinateX: 0.555,
        coordinateY: 1100.555,
        width: 1300,
        height: 200,
        content: 'videoURL',
        explanation: ''
      },
      {
        id: 7,
        type: 7,
        coordinateX: 1100.555,
        coordinateY: 1.555,
        width: 210,
        height: 900,
        content: 'pptURL',
        explanation: ''
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
    tag : ["gg","Zz"],
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
