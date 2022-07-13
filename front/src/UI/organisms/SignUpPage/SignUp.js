import React, { useState } from 'react'
import { useLocation } from "react-router";
import { Link, Avatar, Button, FormControl, Grid, Box, CssBaseline, Typography, Container, FormControlLabel, Switch } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SignUpTextField from '../../atoms/SignUpPage/TextField';
import ProfileImage from '../../molecules/SignUpPage/ProfileImage';
// import Api from 'api/Api';

const SignUp = () => {

  const { state } = useLocation();

  const [postBody, setPostBody] = useState({
    email: state,
    password: '',
    name: '',
    nickname: '',
    phone: '',
    address: ''
  });

  const handleIdChange = (event) => {
    console.log("success");
    setPostBody((prev) => ({
      ...prev,
      email: event.target.value
    }));
  };

  const handlePasswordChange = (event) => {
    setPostBody((prev) => ({
      ...prev,
      password: event.target.value
    }));
  };
  const handleNameChange = (event) => {
    setPostBody((prev) => ({
      ...prev,
      name: event.target.value
    }));
  };
  const handleNickNameChange = (event) => {
    setPostBody((prev) => ({
      ...prev,
      nickname: event.target.value
    }));
  };
  const handlePhoneChange = (event) => {
    setPostBody((prev) => ({
      ...prev,
      phone: event.target.value
    }));
  };
  const handleAddressChange = (event) => {
    setPostBody((prev) => ({
      ...prev,
      address: event.target.value
    }));
  };

  const handleSignup = async () => {
    const isEmpty = emptyCheck();
    if (isEmpty === false) {
      alert('필수 항목을 채워주세요.');
      return false;
    }

    // let response = await Api.postSignup(postBody);

    // if (response.data.result === "success") {
    //   alert('회원가입 성공');
    //   const target = '/';
    //   window.location.href = target;
    // } 
    // else if (response.data.result === "fail") {
    //   alert(response.data.message);
    // }
    // else {
    //   alert('회원가입 실패');
    // }
  };
  const emptyCheck = () => {
    if (postBody.email === '' || postBody.password === '' || postBody.name === '' || postBody.nickname === '') {
      return false;
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
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <Box noValidate sx={{ mt: 3 }}>
          <ProfileImage></ProfileImage>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SignUpTextField label="아이디" onChange={handleIdChange} />
            </Grid>
            <Grid item xs={12}>
              <SignUpTextField label="이메일" onChange={handleIdChange} />
            </Grid>
            <Grid item xs={12}>
              <SignUpTextField label="비밀번호" onChange={handleIdChange} />
            </Grid>
            <Grid item xs={12}>
              <SignUpTextField label="비밀번호 확인" onChange={handleIdChange} />
            </Grid>
            <Grid item xs={12}>
              <SignUpTextField label="닉네임" onChange={handleIdChange} />
            </Grid>
            <Grid item xs={12}>
              <SignUpTextField label="한줄소개" onChange={handleIdChange} />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" />}
                  label="알림 수신 여부"
                  labelPlacement="start"
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
}

export default SignUp