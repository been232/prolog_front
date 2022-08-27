import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Avatar, Button, FormControl, Grid, Box, CssBaseline,
    Typography, Container, FormControlLabel, Switch, Divider
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { AuthTextField } from '../../atoms/Commons/TextField';
import ProfileImage from '../../molecules/ReadMemberInfoPage/ProfileImage';
import Api from '../../../api/Api';

const ReadMemberInfo = () => {
    const [alarm, setAlarm] = useState(true);

    const [info, setInfo] = useState({
        name: '',
        account: '',
        email: '',
        nickname: '',
        image: '',
        introduce: '',
        alarm: alarm,
    });

    const resBaseInfo = async () => await Api.getReadMyInfo();

    useEffect(() => {
        const getData = async () => {
            // ---------------- response 예시 데이터 ----------------
            const infoBody = await resBaseInfo();
            console.log(infoBody);
            setInfo({
                name: infoBody.data.data.name,
                account: infoBody.data.data.account,
                email: infoBody.data.data.email,
                nickname: infoBody.data.data.nickname,
                image: infoBody.data.data.image,
                introduce: infoBody.data.data.introduce,
                alarm: infoBody.data.data.alarm,
            });
            setAlarm(infoBody.data.data.alarm);
        }
        getData();
    }, []);

    // 똑같은 기능 하는 코드 하나로 합침
    const handleChange = (event) => {
        setInfo((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleCheckChange = (event) => {
        setAlarm(event.target.checked);
        setInfo((prev) => ({
            ...prev,
            alarm: event.target.checked,
        }));
    };

    const emptyCheck = () => {
        if (info.name === '' || info.account === '' || info.email === ''
            || info.nickname === '' || info.introduce === '') {
            return false;
        }
    };

    const handleUpdateInfo = async () => {
        // if (password !== passwordConfirm) {
        //     alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
        //     return false;
        // }

        const isEmpty = emptyCheck();
        if (isEmpty === false) {
            alert('이름, 아이디, 이메일, 닉네임, 한줄소개를 입력하세요');
            return false;
        }

        console.log(info);

        // -----------------------  response 예시 데이터 -----------------------
        let response = await Api.putUpdateMyInfo(info);

        if (response.data.success === true) {
            // const target = '/';
            alert('회원정보 수정 완료');
            // window.location.href = target;
        }
        else if (response.data.success === false) {
            alert('회원정보 수정 실패');
        }
        else {
            alert('');
        }
    };

    const handleWithdraw = async () => {
        let response = await Api.getWithdrawal();

        if (response.data.success === true) {
            const target = '/';
            alert('탈퇴 완료');
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('userId')
            window.location.href = target;
        }
        else if (response.data.success === false) {
            alert('탈퇴 실패');
        }
        else {
            alert('');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">회원정보 조회/수정</Typography>
                <Box noValidate sx={{ mt: 3 }}>
                    <Divider sx={{ marginBottom: 2 }} />
                    <ProfileImage setInfo={setInfo} Image={info.image} />
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <AuthTextField label="아이디" name="account" onChange={handleChange} value={info.account} />
                        </Grid>
                        <Grid item xs={12}>
                            <AuthTextField
                                label="이메일"
                                name="email"
                                value={info.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <AuthTextField
                                label="이름"
                                name="name"
                                value={info.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <AuthTextField
                                label="닉네임"
                                name="nickname"
                                value={info.nickname}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <AuthTextField label="한줄소개" name="introduce" value={info.introduce} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormControlLabel
                                    value='start'
                                    control={<Switch checked={info.alarm} onChange={handleCheckChange} color="primary" />}
                                    label="알림 수신 여부"
                                    name='alarm'
                                    labelPlacement='start'
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleUpdateInfo}
                    >
                        수정하기
                    </Button>
                    <Grid container justifyContent="center">
                        <Grid item sx={{ textDecoration: "underline" }}>
                            <Link to={{ pathname: `/` }} >
                                메인페이지
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item sx={{ textDecoration: "underline" }}>
                            <Link to={{ pathname: `/changePW` }}
                                state={{
                                    id: info.account,
                                    email: info.email,
                                    name: info.name
                                }} >
                                비밀번호 변경
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item sx={{ textDecoration: "underline" }}>
                            <Typography component="h1" variant="h6" onClick={handleWithdraw}>회원탈퇴</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default ReadMemberInfo;
