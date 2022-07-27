
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReadMemberInfo from '../../organisms/ReadMemberInfoPage/ReadMemberInfo';

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

const ReadMemberInfoPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <SignUp>

            </SignUp>
        </ThemeProvider>
    );
}
export default ReadMemberInfoPage