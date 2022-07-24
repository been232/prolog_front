import * as React from 'react';
import { Container, Box, Divider, Button } from '@mui/material';
import { AuthTextField } from '../../atoms/Commons/TextField';
import ModalButton from '../../atoms/LoginPopup/ModalButton';
import TitleText from '../../atoms/LoginPopup/Title';

const ModalContent = (props) => {
  const handleClose = props.handleClose;

  function handleLogin() {
    // handleClose() 호출하기
    handleClose();
  }

  function handleSignUp() {
    // handleClose() 호출하기
    handleClose();
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 2,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TitleText title="로그인"></TitleText>
        <AuthTextField label="아이디"></AuthTextField>
        <AuthTextField label="비밀번호"></AuthTextField>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 1, mb: 1 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 1, mb: 3 }}
          onClick={handleSignUp}
        >
          Sign up
        </Button>
        <Divider />
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          소셜로그인
        </Box>
      </Box>
    </Container>
  );
};

export default ModalContent;
