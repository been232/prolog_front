import AccountCircleIcons from '../../atoms/Header/AccountCircleIcons';
import SearchIcons from '../../atoms/Header/SearchIcons';
import LoginModal from '../../organisms/LoginPopup/LoginModal';
import ContainedButton from '../../atoms/Commons/ContainedButton';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#12465A',
    },
    secondary: {
      main: '#BADBF3',
    },
    // 팝업창 배경 색 : #9F9F9F, 바탕 배경 색 : #BADBF3
  },
});

theme.typography.h1 = {
  fontSize: '1.7rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
};

theme.typography.p = {
  fontSize: '16px',
  [theme.breakpoints.up('sm')]: {
    fontSize: '18px',
  },
};

function HeaderMolecules(props) {
  const [isLogin, setIsLogin] = useState(false);
  const user = sessionStorage.getItem('user'); // 토큰 받아오기

  const Logout = () => {
    window.location.href = '/';
    alert('로그아웃되었습니다.');
    setIsLogin(false);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            '& > :not(style)': { m: 1 },
            float: 'right',
            marginTop: 2,
          }}
        >
          {(isLogin) ?
            (<>
              <Box sx={{ float: 'right' }}>
                  <ContainedButton content="로그아웃" fontSize="11px" handleClick={Logout}></ContainedButton>
              </Box>
              <Box sx={{ float: 'right' }}>
                <Link to="/mypage">
                  <AccountCircleIcons id="icon" />
                </Link>
              </Box>
            </>
            ) : (
              <Box sx={{ float: 'right' }}>
                <LoginModal isLogin={isLogin} setIsLogin={setIsLogin} />
              </Box>
            )}

          <Box sx={{ float: 'right' }}>
            <Link to="/search">
              <SearchIcons id="icon" />
            </Link>
          </Box>
          {/* 이게 찐 sessionStorage 사용해서 로그인, 로그아웃 되는 코드
          {(!(user === null)) ?
            (<>
              <Box sx={{ float: 'right' }}>
                <Link to="/logout" state={{ setIsLogin: setIsLogin() }}>
                  <ContainedButton content="로그아웃" fontSize="11px"></ContainedButton>
                </Link>
              </Box>
              <Box sx={{ float: 'right' }}>
                <Link to="/mypage">
                  <AccountCircleIcons id="icon" />
                </Link>
              </Box>
            </>
            ) : (
              <Box sx={{ float: 'right' }}>
                <LoginModal isLogin={isLogin} setIsLogin={setIsLogin} />
              </Box>
            )}

          <Box sx={{ float: 'right' }}>
            <Link to="/search">
              <SearchIcons id="icon" />
            </Link>
          </Box> */}
        </Box>
      </ThemeProvider>
    </>
  );
}
export default HeaderMolecules;
