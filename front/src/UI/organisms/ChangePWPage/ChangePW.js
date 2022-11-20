import React, { useState } from 'react';
import {
    Link, Avatar, Button, Grid, Box, CssBaseline,
    Typography, Container, Divider
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { AuthTextField } from '../../atoms/Commons/TextField';
import { useLocation } from 'react-router-dom';
import Api from '../../../api/Api';

const ChangePW = (props) => {
    const location = useLocation();
    const name = location.state.name;
    const id = location.state.id;
    const email = location.state.email;
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [info, setInfo] = useState({
        account: id,
        email: email,
        password: password,
    });

    // 똑같은 기능 하는 코드 하나로 합침
    const handleChange = (event) => {
        setInfo((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handlePWChange = (event) => {
        setPassword(event.target.value);
        handleChange(event);
    };

    const handlePWConfirmChange = (event) => {
        setPasswordConfirm(event.target.value);
    };

    const emptyCheck = () => {
        if (info.name === '' || info.account === '' || info.email === ''
            || info.password === '') {
            return false;
        }
    };

    const pwCoincideCheck = () => { // 패스워드와 패스워드 확인 데이터 일치 체크
        if (password === passwordConfirm) {
            return true;
        } else {
            return false;
        }
    }

    const pwCheck = () => {
        // 패스워드 형식의 정규표현식 : 최소 8 자 및 최대 20 자, 하나 이상의 대문자, 하나의 소문자, 하나의 숫자 및 하나의 특수 문자 정규식
        const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&=^])[A-Za-z\d@$!%*#?&=^]{8,20}$/;

        if (pwRegex.test(password) === true) {
            return true;
        }
        else {
            return false; // 패스워드 형식이 아닙니다.
        }
    }

    const handleUpdatePW = async () => {

        const isEmpty = emptyCheck();
        if (isEmpty === false) {
            alert('이름, 아이디, 이메일, 비밀번호를 입력하세요');
            return false;
        }

        const isPassword = pwCheck();
        if (isPassword === false) {
            alert('비밀번호를 다시 입력하세요');
            return false;
        }

        const isCoincide = pwCoincideCheck();
        if (isCoincide === false) {
            alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
            return false;
        }

        console.log(info);
        let response = await Api.postChangePW(info);
        console.log(response);

        if (response.data.success === true) {
            // const target = '/';
            alert('비밀번호 변경 완료');
            // window.location.href = target;
        }
        else if (response.data.success === false) {
            alert('비밀번호 변경 실패');
        }
        else {
            alert('비밀번호 변경 실패');
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
                style={{ fontFamily: "SUIT-Regular" }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">비밀번호 변경</Typography>
                <Box noValidate sx={{ mt: 3 }}>
                    <Divider sx={{ marginBottom: 2 }} />
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <AuthTextField label="아이디" name="account" value={id} />
                        </Grid>
                        <Grid item xs={12}>
                            <AuthTextField
                                label="이메일"
                                name="email"
                                value={email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <AuthTextField
                                label="비밀번호"
                                name="password"
                                type='password'
                                onChange={handlePWChange}
                            />
                            <Typography sx={{ color: "grey", fontSize: "12px" }}>
                                최소 8자 ~ 최대 20자, 하나 이상의 대문자, 하나의 소문자/숫자/특수 문자
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <AuthTextField
                                label="비밀번호 확인"
                                name="passwordConfirm"
                                type='password'
                                onChange={handlePWConfirmChange}
                            />
                            {(password === passwordConfirm) ? "" :
                                <Typography sx={{ color: "red" }}>
                                    비밀번호 불일치: 다시 입력해주세요.
                                </Typography>
                            }
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleUpdatePW}
                    >
                        변경하기
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                메인페이지
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default ChangePW;
