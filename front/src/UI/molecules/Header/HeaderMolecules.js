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
  const user = localStorage.getItem('token'); // 토큰 받아오기

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
          {(!(user === null)) ?
            (<>
              <Box sx={{ float: 'right' }}>
                <Link to="/layoutWrite" >
                  <ContainedButton content="레이아웃 작성" fontSize="11px"></ContainedButton>
                </Link>
              </Box>
              <Box sx={{ float: 'right' }}>
                <Link to="/logout" >
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
                <LoginModal />
              </Box>
            )}

          <Box sx={{ float: 'right' }}>
            <Link to="/search">
              <SearchIcons id="icon" />
            </Link>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
export default HeaderMolecules;
