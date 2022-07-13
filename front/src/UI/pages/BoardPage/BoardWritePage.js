import { Box } from '@mui/material';
import React from 'react';
import BasicTextFields from '../../atoms/BoardPage/BasicTextFields';
import WriteContent from '../../organisms/BoardPage/WriteContent';

function BoardWritePage() {
  return (
    <Box sx={{ marginLeft: 20, marginRight: 20 }}>
      <BasicTextFields />
      <WriteContent />
    </Box>
  );
}

export default BoardWritePage;

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
        coordinateX: 0.555,
        coordinateY: 0.555,
        width: 90,
        height: 90,
        content: '글 내용 히히히히히히ㅎㅎㅎㅎ',
      },
      {
        id: 2,
        type: 2,
        coordinateX: 60.555,
        coordinateY: 600.555,
        width: 600,
        height: 400,
        images:  [
          {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
          },
          {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
          },
          {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
          },
          {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
          },
          {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
          },
          {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
          },
          {
            image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
          },
          {
            image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
          },
          {
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
          }
        ],
        content: 'gdgd'
      },
      {
        id: 3,
        type: 3,
        coordinateX: 150.555,
        coordinateY: 100.555,
        width: 180,
        height: 400,
        content: '코드 text',
      },
      {
        id: 4,
        type: 4,
        coordinateX: 500.555,
        coordinateY: 0.555,
        width: 850,
        height: 50,
        content: 'https://www.google.com/search?q=mui+accordion+custom&oq=&aqs=chrome.5.69i59i450l8.694643353j0j15&sourceid=chrome&ie=UTF-8',
      },
      {
        id: 5,
        type: 5,
        coordinateX: 0.555,
        coordinateY: 1100.555,
        width: 1300,
        height: 200,
        content: '수학 text',
      },
      {
        id: 6,
        type: 6,
        coordinateX: 700.555,
        coordinateY: 600.555,
        width: 180,
        height: 180,
        content: 'videoURL',
      },
      {
        id: 7,
        type: 7,
        coordinateX: 1100.555,
        coordinateY: 150.555,
        width: 210,
        height: 900,
        content: 'pptURL',
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
    // tag : [tag1,tag2],
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
