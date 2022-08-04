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
        id: 1,
        coordinateX: 397.8150939941406,
        coordinateY: 771.0062866210938,
        height: 100,
        type: 1,
        width: 594,
        content: '글 내용 히히히히히히ㅎㅎㅎㅎ',
        leader: false
      },
      {
        id: 2,
        coordinateX: 399.7236253605954,
        coordinateY: 198.21993199098233,
        height: 400,
        type: 2,
        width: 594,
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
        explanation: 'ㅎㅇㅎㅇㅎㅇ\nㅎㅎㅎㅎ',
        leader: true
      },
      {
        id: 3,
        coordinateX: 1019.7236253605956,
        coordinateY: 200.21993199098233,
        height: 600,
        type: 3,
        width: 594,
        content: ['int main() {\r\n    int a = b;\r\n    print(b)\r\n}','메인 문\r\n\r\n프린트문','c'],
        explanation: 'ㅎㅎㅎㅎㅎ',
        leader: false
      },
      {
        id: 4,
        coordinateX: 397.72362536059563,
        coordinateY: 608.2199319909823,
        height: 150,
        type: 4,
        width: 594,
        content: 'https://www.google.com/search?q=mui+accordion+custom&oq=&aqs=chrome.5.69i59i450l8.694643353j0j15&sourceid=chrome&ie=UTF-8',
        explanation: '하이이이퍼링ㅋ으응',
        leader: false
      },
      {
        id: 5,
        coordinateX: 1019.7236253605956,
        coordinateY: 814.2199319909823,
        height: 300,
        type: 5,
        width: 594,
        content: 'x = \\frac{ -b \\pm \\sqrt{ b^2-4ac } }{ 2a }',
        explanation: '수학 설며여영',
        leader: false
      },
      {
        id: 6,
        coordinateX: 1019.7236253605954,
        coordinateY: 1126.2199319909823,
        height: 600,
        type: 6,
        width: 594,
        content: 'videoURL',
        explanation: '',
        leader: false
      },
      // {
      //   id: 7,
      //   type: 7,
      //   coordinateX: 1100.555,
      //   coordinateY: 1.555,
      //   width: 210,
      //   height: 900,
      //   content: 'pptURL',
      //   explanation: ''
      // },
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
  
export default BoardModifyPage;
