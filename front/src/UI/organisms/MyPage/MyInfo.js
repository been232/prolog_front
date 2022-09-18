import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ProfileImage from '../../molecules/MyPage/ProfileImage';
import Api from '../../../api/Api';

const MyInfo = (props) => {
    const [info, setInfo] = useState({
        Email: '',
        Nickname: '',
        Image: '',
        Introduction: '',
    });

    const resBaseInfo = async () => await Api.getReadMyInfo();

    useEffect(() => {
        const getData = async () => {
            const infoBody = await resBaseInfo();
            console.log(infoBody);
            setInfo({
                Email: infoBody.data.data.email,
                Nickname: infoBody.data.data.nickname,
                Image: infoBody.data.data.image,
                Introduction: infoBody.data.data.introduce,
            });
        }
        getData();
    }, []);

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <ProfileImage Image={info.Image}></ProfileImage>
                </Grid>
                <Grid item xs={7}>
                    <Box sx={{ marginTop: 2 }}>
                        <Typography style={{ fontFamily: "SUIT-Regular" }}>{info.Nickname}</Typography>
                        <Typography style={{ fontFamily: "SUIT-Regular" }}>{info.Introduction}</Typography>
                        <Typography style={{ fontFamily: "SUIT-Regular" }}>이메일: {info.Email}</Typography>
                        <Link to="/AllStatistics">
                            전체 통계
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
export default MyInfo