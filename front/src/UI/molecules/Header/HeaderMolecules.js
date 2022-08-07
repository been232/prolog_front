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

  const Logout = () => {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('memberId')
    window.location.href = '/';
    alert('로그아웃되었습니다.');
    setIsLogin(false);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            '& > :not(style)': {
              m: 1,
            },
            float: 'right',
            marginTop: 2.1,
          }}
        >
          <Link to="/search">
            <SearchIcons />
          </Link>
          {(isLogin) ?
            (<>
              <Link to="/mypage">
                <AccountCircleIcons />
              </Link>
              <ContainedButton content="로그아웃" fontSize="11px" handleClick={Logout}></ContainedButton>
            </>) : (
              <LoginModal isLogin={isLogin} setIsLogin={setIsLogin} />
            )}
        </Box>
      </ThemeProvider>
    </>
  );
}
export default HeaderMolecules;
