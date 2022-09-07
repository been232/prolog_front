import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Link, Avatar, Button, FormControl, Grid, Box, CssBaseline,
  Typography, Container, FormControlLabel, Switch, Divider
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ProfileImage from '../../molecules/SignUpPage/ProfileImage';
import { AuthTextField } from '../../atoms/Commons/TextField';
import { FixTextField } from '../../atoms/Commons/FixTextField';
import Api from '../../../api/Api';

const SignUp = () => {
  const location = useLocation();
  const email = location.state;
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [alarm, setAlarm] = useState(true);

  const [info, setInfo] = useState({
    name: '',
    account: '',
    email: "esj5029@gmail.com",
    // Email: email,
    password: password,
    nickname: '',
    image: '',
    introduce: '',
    alarm: alarm,
  });

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

  const handlePWChange = (event) => {
    setPassword(event.target.value);
    handleChange(event);
  };

  const handlePWConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const emptyCheck = () => {
    console.log(info);
    if (info.name === '' || info.account === '' || info.email === '' 
    || info.password === '' || info.nickname === '' || info.introduce === '') {
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
      alert('이름, 아이디, 이메일, 비밀번호, 닉네임, 한줄소개를 입력하세요');
      return false;
    }
    console.log(info);

    let response = await Api.postSignup(info);
    console.log(response);

    if (response.data.success === true) {
      const target = '/';
      alert('회원가입 성공');
      window.location.href = target;
    }
    else if (response.data.success === false) {
      alert(response.data);
    }
    else {
      alert('회원가입 실패');
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
        <Typography component="h1" variant="h5">회원가입</Typography>
        <Box noValidate sx={{ mt: 3 }}>
          <Divider sx={{ marginBottom: 2 }} />
          <ProfileImage setInfo={setInfo} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <AuthTextField label="아이디" name="account" onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <FixTextField
                label="이메일"
                name="email"
                defaultValue={email}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <AuthTextField
                label="비밀번호"
                name="password"
                type='password'
                onChange={handlePWChange}
              />
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
            <Grid item xs={12}>
              <AuthTextField
                label="이름"
                name="name"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <AuthTextField
                label="닉네임"
                name="nickname"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <AuthTextField label="한줄소개" name="introduce" onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormControlLabel
                  value='start'
                  control={<Switch checked={alarm} onChange={handleCheckChange} color="primary" />}
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
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/findID" variant="body2">
                아이디 찾기
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
