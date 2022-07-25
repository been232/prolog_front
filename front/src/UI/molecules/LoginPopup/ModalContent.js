import { useState } from 'react';
import { Container, Box, Divider, Button } from '@mui/material';
import AuthTextField from '../../atoms/Commons/TextField';
import ModalButton from '../../atoms/LoginPopup/ModalButton';
import TitleText from '../../atoms/LoginPopup/Title';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const ModalContent = (props) => {
  const handleClose = props.handleClose;

  const [info, setInfo] = useState({
    id: '',
    password: '',
  });

  const handleIdChange = (event) => {
    setInfo((prev) => ({
      ...prev,
      id: event.target.value,
    }));
  };

  const handlePwChange = (event) => {
    setInfo((prev) => ({
      ...prev,
      password: event.target.value,
    }));
  };

  function handleLogin() {
    // info 보내서 로그인 성공 여부 확인 코드 작성
    console.log(info);
    alert("로그인");

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
        <TitleText title="로그인" direction="center" size="h5"></TitleText>
        <AuthTextField label="아이디" onChange={handleIdChange}></AuthTextField>
        <AuthTextField label="비밀번호" onChange={handlePwChange}></AuthTextField>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 1, mb: 1 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Link to="/sign">
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 1, mb: 3 }}
          >
            Sign up
          </Button>
        </Link>
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
