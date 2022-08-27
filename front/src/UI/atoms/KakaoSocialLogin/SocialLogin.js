// 리다이렉트될 화면
import React, { useEffect, useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Link, Avatar, Button, Grid, Box, CssBaseline,
  Typography, Container, Divider
} from '@mui/material';
import { AuthTextField } from '../../atoms/Commons/TextField';
import Api from '../../../api/Api';

const KakaoOAuthRedirectHandler = (props) => {
  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [info, setInfo] = useState({
    name: '',
    account: '',
    email: '',
    password: password,
    code: code,
  });

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

  const handleSignup = async () => {
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
    let response = await Api.postKakaoLogin(info);
    console.log(response);

    if (response.data.success === true) {
      const target = '/';
      alert('회원가입 성공');
      // window.location.href = target;
    }
    else if (response.data.success === false) {
      alert(response.data);
    }
    else {
      alert('회원가입 실패');
    }
  };

  return (
  <>
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
        <Typography component="h1" variant="h5">소셜 회원가입</Typography>
        <Box noValidate sx={{ mt: 3 }}>
          <Divider sx={{ marginBottom: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <AuthTextField label="아이디" name="account" onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <AuthTextField
                label="이메일"
                name="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <AuthTextField
                label="비밀번호"
                name="password"
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
            <Grid item xs={12}>
              <AuthTextField
                label="이름"
                name="name"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  </>
  );
};

export default KakaoOAuthRedirectHandler;
