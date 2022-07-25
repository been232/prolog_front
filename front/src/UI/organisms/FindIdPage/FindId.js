import React, { useEffect, useState } from 'react';
import { Link, Avatar, Button, Grid, Box, CssBaseline, 
  Typography, Container, Divider } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AuthTextField from '../../atoms/Commons/TextField';

const FindId = () => {
  const [account, setAccount] = useState('');
  const [info, setInfo] = useState({
    Email: '',
  });

  // 똑같은 기능 하는 코드 하나로 합침
  const handleChange = (event) => {
    setInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFindId = async () => {

    console.log(info);
    // let response = await Api.postSignup(postBody);

    // if (response.success === true) {
    //   setAccount(response.account);
    // }
    // else if (response.success === false) {
    //   alert(response.success);
    // }
    // else {
    //   alert('회원가입 실패');
    // }
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
        <Typography component="h1" variant="h5">아이디 찾기</Typography>
        <Box noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <AuthTextField
                label="이메일"
                name="Email"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleFindId}
          >
            아이디 찾기
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                돌아가기
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default FindId;
