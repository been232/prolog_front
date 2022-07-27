import React, { useState } from 'react';
import {
    Link, Avatar, Button, Grid, Box, CssBaseline,
    Typography, Container, Divider
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { AuthTextField } from '../../atoms/Commons/TextField';
import { useLocation } from 'react-router-dom';

const ChangePW = (props) => {
    const location = useLocation();
    const name = location.state.name;
    const id = location.state.id;
    const email = location.state.email;
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [info, setInfo] = useState({
        name: name,
        account: id,
        Email: email,
        password: password,
    });

    // const memberPk = sessionStorage.getItem('memberId');
    // const resBaseInfo = async () => await Api.getChangePW(memberPk);

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
        if (info.name === '' || info.account === '' || info.Email === ''
            || info.password === '') {
            return false;
        }
    };

    const handleUpdatePW = async () => {
        if (password !== passwordConfirm) {
            alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
            return;
        }

        const isEmpty = emptyCheck();
        if (isEmpty === false) {
          alert('이름, 아이디, 이메일, 비밀번호를 입력하세요');
          return false;
        }

        console.log(info);

        // -----------------------  response 예시 데이터 -----------------------
        // let response = await Api.postSignup(info);
        let response = {
            data: {
                result: "success",
            }
        }

        if (response.data.result === "success") {
            // const target = '/';
            alert('비밀번호 변경 완료');
            // window.location.href = target;
        }
        else if (response.data.result === "fail") {
            alert(response.data.message);
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
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">비밀번호 변경</Typography>
                <Box noValidate sx={{ mt: 3 }}>
                    <Divider sx={{ marginBottom: 2 }} />
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <AuthTextField label="아이디" name="account" onChange={handleChange} value={id} />
                        </Grid>
                        <Grid item xs={12}>
                            <AuthTextField
                                label="이메일"
                                name="Email"
                                value={email}
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
                                label="비밀번호"
                                name="password"
                                value={info.password}
                                onChange={handlePWChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <AuthTextField
                                label="비밀번호 확인"
                                name="passwordConfirm"
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
