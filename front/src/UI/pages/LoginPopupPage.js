import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginModal from '../organisms/LoginPopup/LoginModal';

const theme = createTheme({
    palette: {
        primary: {
            main: '#12465A',
        },
        secondary: {
            main: '#12465A',
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

const LoginPopupPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <LoginModal>
                
            </LoginModal>
        </ThemeProvider>
    );
}
export default LoginPopupPage