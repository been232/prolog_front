import { createTheme, ThemeProvider } from '@mui/material/styles';
// import theme from '../../../theme/Theme'
import { Box, Container, Hidden } from '@mui/material';
import MyInfo from '../../organisms/MyPage/MyInfo';
import MyTabs from '../../organisms/MyPage/MyTabs';

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

const MyPage = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Hidden smDown>
                    <Box sx={{ marginLeft: 20, marginRight: 20 }}>
                        <Box sx={{ marginBottom: 5 }}>
                            <MyInfo />
                        </Box>
                        <MyTabs />
                    </Box>
                </Hidden>
                <Hidden smUp>
                    <Container component="main" maxWidth="xs">
                        <Box sx={{ marginBottom: 5 }}>
                            <MyInfo />
                        </Box>
                        <MyTabs />
                    </Container>
                </Hidden>
            </ThemeProvider>
        </>
    );
}
export default MyPage