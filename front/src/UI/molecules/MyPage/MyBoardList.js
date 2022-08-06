import { Box, Grid } from '@mui/material';
import React from 'react';
import MainPageOrganism from '../../atoms/MyPage/MainPageOrganism';

/* Gird Item 들은 기능 연동 후 map 으로 처리하던가 해야할듯 */

const datas = {
    success: true,
    data: [
        {
            id: 'postId',
            title: 'title',
            written: '2022-06-07',
            member: 'memberName',
            memberImage: 'http://~',
            likes: '8',
            mainLayout: {
                type: '1',
                width: '12',
                height: '35',
                content: '어쩌구 저쩌구',
            },
        },
        {
            id: 'postId',
            title: 'title',
            content: '어쩌구 저쩌구',
            written: '2022-06-07',
            member: 'memberName',
            memberImage: 'http://~',
            likes: '8',
            mainLayout: {
                type: '1',
                width: '12',
                height: '35',
                content: '어쩌구 저쩌구',
            },
        },
    ],
};

const MyBoardList = () => {
    return (
        <>
            <Grid container spacing={3}>
                {datas.data.map((data, i) => (
                    <Grid item xl={4} lg={6} sm={6} id={data.id} key={i}>
                        <MainPageOrganism data={data}></MainPageOrganism>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
export default MyBoardList