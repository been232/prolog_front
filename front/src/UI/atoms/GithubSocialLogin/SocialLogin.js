import React, { useEffect, useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Link, Avatar, Button, Grid, Box, CssBaseline,
  Typography, Container, Divider
} from '@mui/material';
import { AuthTextField } from '../../atoms/Commons/TextField';
import Api from '../../../api/Api';

const GithubOAuthRedirectHandler = (props) => {
  // 인가코드 추출 및 전송
  let code = new URL(window.location.href).searchParams.get('code');
  const data = {
    code: code
  }
  const resBaseInfo = async () => await Api.postGithubCode(data);

  const [require, setRequire] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [socialKey, setSocialKey] = useState('');

  const [info, setInfo] = useState({
    social_key: socialKey,
    name: '',
    account: '',
    email: '',
    password: password,
  });

  const handleChange = (event) => {
    setInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeekey = (key) => {
    setInfo((prev) => ({
      ...prev,
      social_key: key,
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
    let response = await Api.postGithubLogin(info);
    console.log(response);

    if (response.data.success === true) {
      const target = '/';
      sessionStorage.setItem('token', JSON.stringify(response.headers, ['accesstoken', 'refreshtoken']))
      sessionStorage.setItem('userId', parseInt(response.headers.userid))
      alert('소셜 로그인되었습니다.');
      window.location.href = target;
    }
    else if (response.data.success === false) {
      alert('소셜 로그인 실패');
    }
    else {
      alert('소셜 로그인 실패');
    }
  };

  async function handleLogin() {

    const isEmpty = emptyCheck();
    if (isEmpty === false) {
      alert('아이디 또는 비밀번호를 입력하세요');
      return false;
    }

    // info 보내서 로그인 성공 여부 확인 코드 작성
    console.log(info);

    let response = await Api.postLogin(info);
    console.log(response);
    if (response.data.success === true) {
      const target = '/';
      sessionStorage.setItem('token', JSON.stringify(response.headers, ['accesstoken', 'refreshtoken']))
      sessionStorage.setItem('userId', parseInt(response.headers.userid))
      window.location.href = target;
    }
    else if (response.data.success === false) {
      alert('로그인 실패: 아이디나 비밀번호를 다시 확인해주세요!');
    }

    // LoginPopUp : handleClose() 호출하기
    handleClose();
  }

  useEffect(() => {
    console.log(code);

    const getData = async () => {
      const response = await resBaseInfo();
      console.log(response);
      // 인가코드 전송 후 회원가입이 필요한 유저인지 확인한다.
      // 회원가입이 필요하다면, 정보 입력 절차를 통해 정보를 전송하고
      // 그렇지 않으면, 그냥 로그인 완료 버튼을 띄운다.
      if (response.data.success === true) {
        const key = response.data.data;
        handleChangeekey(key);
        setRequire(true);
        console.log(info);
        alert("회원가입이 필요합니다! 회원가입을 진행해주세요.");
      }
      else if (response.data.success === false) {
        setRequire(false);
        const target = '/';
        sessionStorage.setItem('token', JSON.stringify(response.headers, ['accesstoken', 'refreshtoken']))
        sessionStorage.setItem('userId', parseInt(response.headers.userid))
        window.location.href = target;
      }
    }
    getData();
  }, []);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {(require) ?
          (<Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
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
              </Grid>
              <Button
                fullWidth
                variant="contained"
                // color="primary.main"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSignup}
              >
                Sign Up
              </Button>
            </Box>
          </Box>) : (
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">소셜 로그인</Typography>
              <Box noValidate sx={{ mt: 3 }}>
                <Divider sx={{ marginBottom: 2 }} />
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      // color="primary.main"
                      sx={{ mt: 1, mb: 1 }}
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          )}
      </Container>
    </>
  );
};

export default GithubOAuthRedirectHandler;
