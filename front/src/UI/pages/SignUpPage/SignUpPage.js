
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignUp from '../../organisms/SignUpPage/SignUp';

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

const SignUpPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <SignUp>

            </SignUp>
        </ThemeProvider>
    );
}
export default SignUpPage