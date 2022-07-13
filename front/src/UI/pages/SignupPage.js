
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignUp from '../organisms/SignUpPage/SignUp';

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

const SignUpPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <SignUp>

            </SignUp>
        </ThemeProvider>
    );
}
export default SignUpPage