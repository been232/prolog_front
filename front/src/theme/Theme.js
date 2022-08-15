import { createTheme, colors } from '@mui/material';

const theme = createTheme({
	palette: {
		background: {
			default: '#ffffff',
			paper: colors.common.white
		},
		primary: {
			main: '#BADBF3',
			green: '#2e6411',
			contrastText: '#000000',
			smoothgreen: '#F0F7EC',
			darkgreen: '#006400'
		},
		text: {
			primary: '#172b4d',
			secondary: '#6b778c',
		}
	},
	TreeItem: {
		fontFamily: "SUIT-Regular",
	}
	// shadows,
	// typography
});

export default theme;

/*        secondary: {
            main: '#BADBF3',
        },*/ 
