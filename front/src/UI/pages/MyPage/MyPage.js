import { createTheme, ThemeProvider } from '@mui/material/styles';
// import theme from '../../../theme/Theme'
import { Box, Container, Hidden } from '@mui/material';
import MyInfo from '../../organisms/MyPage/MyInfo';
import MyTabs from '../../organisms/MyPage/MyTabs';
import TreeList from '../../organisms/MyPage/TreeList';

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
                    <Box >
                        <Box
                            sx={{
                                height: 250,
                                transform: 'translateZ(0px)',
                                flexGrow: 1,
                                position: 'fixed',
                                top: 120,
                                left: 20,
                                border: "solid #BADBF3",
                                padding: "8px 4px"
                            }}>
                            <TreeList />
                        </Box>
                        <Box sx={{ marginLeft: 40, marginRight: 30 }}>
                            <Box sx={{ marginBottom: 5 }}>
                                <MyInfo />
                            </Box>
                            <MyTabs />
                        </Box>
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