import { useState } from 'react';
import { Container, Box, Divider, Button, IconButton, TextField } from '@mui/material';
import { AuthTextField, NonFocusTextField } from '../../atoms/Commons/TextField';
import ModalButton from '../../atoms/LoginPopup/ModalButton';
import TitleText from '../../atoms/LoginPopup/Title';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { KAKAO_AUTH_URL } from "../../atoms/KakaoSocialLogin/OAuth";
import { GITHUB_AUTH_URL } from "../../atoms/GithubSocialLogin/OAuth";
import Api from '../../../api/Api';

const ModalContent = (props) => {
  const handleClose = props.handleClose;

  const [info, setInfo] = useState({
    account: '',
    password: '',
  });

  const handleIdChange = (event) => {
    setInfo((prev) => ({
      ...prev,
      account: event.target.value,
    }));
  };

  const handlePwChange = (event) => {
    setInfo((prev) => ({
      ...prev,
      password: event.target.value,
    }));
  };

  const emptyCheck = () => {
    if (info.account === '' || info.password === '') {
      return false;
    }
  };

  const pwCheck = () => {
    // 패스워드 형식의 정규표현식
    const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&=^])[A-Za-z\d@$!%*#?&=^]{8,20}$/;

    if (pwRegex.test(info.password) === true) {
      return true;
    }
    else {
      return false; // 패스워드 형식이 아닙니다.
    }
  }

  async function handleLogin() {

    const isEmpty = emptyCheck();
    if (isEmpty === false) {
      alert('아이디 또는 비밀번호를 입력하세요');
      return false;
    }

    let response = await Api.postLogin(info);
    console.log(response);
    if (response.data.success === true) {
      const target = '/';

      localStorage.setItem('token', JSON.stringify(response.headers, ['accesstoken', 'refreshtoken']))
      localStorage.setItem('userId', parseInt(response.headers.userid))
      localStorage.setItem('account', info.account)

      const resBaseInfo = async () => await Api.getReadMyInfo();
      const infoBody = await resBaseInfo();
      localStorage.setItem('profile', infoBody.data.data.image)

      window.location.href = target;
    }
    else if (response.data.success === false) {
      alert('로그인 실패: 아이디나 비밀번호를 다시 확인해주세요!');
    } else {
      alert('로그인 실패: 아이디나 비밀번호를 다시 확인해주세요!');
    }

    // LoginPopUp : handleClose() 호출하기
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
        <IconButton
          sx={{ position: 'fixed', top: 0, right: 0 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <TitleText title="로그인" direction="center" size="h5"></TitleText>
        <AuthTextField label="아이디" onChange={handleIdChange} ></AuthTextField>
        <NonFocusTextField label="비밀번호" onChange={handlePwChange} type='password'></NonFocusTextField>
        <Box sx={{ display: 'inline-block' }}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 1, mb: 1 }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Link to="/auth">
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 1, mb: 1 }}
            >
              Sign up
            </Button>
          </Link>
          <Box sx={{ textDecoration: "underline", mt: 0, mb: 2, float: 'right', display: 'inline-block' }}>
            <Link to={{ pathname: `/findID` }}
              state={{
                id: info.account,
                email: info.email,
                name: info.name
              }} >
              아이디 찾기
            </Link>
          </Box>
        </Box>


        <Divider />

        <Box sx={{ alignItems: "center", mt: 2, display: "flex" }} >
          <Box sx={{ marginLeft: 5, marginRight: 3 }}>
            <a id="custom-login-btn" href={KAKAO_AUTH_URL}>
              <img
                src={process.env.PUBLIC_URL + '/카카오 로그인.png'}
                alt="Logo"
                width='55px'
                height='55px'
              />
            </a>
          </Box>
          <Box sx={{ marginLeft: 2 }}>
            <a id="custom-login-btn" href={GITHUB_AUTH_URL}>
              <img
                src={process.env.PUBLIC_URL + '/깃허브 로그인.png'}
                alt="Logo"
                width='50px'
                height='50px'
              />
            </a>
          </Box>
        </Box>

      </Box>
    </Container>
  );
};

export default ModalContent;
