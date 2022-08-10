import { useState } from 'react';
import { Container, Box, Divider, Button } from '@mui/material';
import { AuthTextField } from '../../atoms/Commons/TextField';
import ModalButton from '../../atoms/LoginPopup/ModalButton';
import TitleText from '../../atoms/LoginPopup/Title';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const ModalContent = (props) => {
  const handleClose = props.handleClose;
  const isLogin = props.isLogin;
  const setIsLogin = props.setIsLogin;

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

  const emptyCheck = () => {
    if (info.id === '' || info.password === '') {
      return false;
    }
  };

  function handleLogin() {

    const isEmpty = emptyCheck();
    if (isEmpty === false) {
      alert('아이디 또는 비밀번호를 입력하세요');
      return false;
    }

    // info 보내서 로그인 성공 여부 확인 코드 작성
    console.log(info);

    // -----------------------  response 예시 데이터 -----------------------
    // let response = await Api.postLogin(info);
    let response = {
      data: {
        result: "success",
        accessToken: "dfsgdfegsd",
        refreshToken: "dfsgsdfsdg",
        memberId: 2,
      }
    }

    if (response.data.result === "success") {
      // const target = '/';
      sessionStorage.setItem('user', JSON.stringify(response.data, ['accessToken', 'refreshToken']))
      sessionStorage.setItem('userId', JSON.stringify(response.data.memberId))
      setIsLogin(true);
      // window.location.href = target;
    }
    else if (response.data.result === "fail") {
      alert('로그인 실패');
    }

    // LoginPopUp : handleClose() 호출하기
    handleClose();
  }

  // 회원가입 페이지 요청 시에 LoginPopUp을 close하는 코드를 실행하려고 우선 작성함.
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
        style={{ fontFamily: "SUIT-Regular" }}
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
        <Box sx={{ textAlign: 'center', mt: 3 }}>
            <a id="custom-login-btn">
              <img
                src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                width="242"
              />
            </a>
        </Box>
      </Box>
    </Container>
  );
};

export default ModalContent;
