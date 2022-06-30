import Box from '@mui/material/Box';
import HeaderMolecules from "../../molecules/Header/HeaderMolecules";

function HeaderOrganisms(props) {
	return (
		<>
		<Box
			sx={{ 
				borderBottom : 2,
				height: 70
			}}
		>
			<Box
				sx={{
					marginLeft: 5,
					float: 'left'
				}}
			>
				<img src={process.env.PUBLIC_URL + '/Logo.png'} alt="Logo" width="15%" />
			</Box>
			<HeaderMolecules />
		</Box>
		</>
	);
}

export default HeaderOrganisms;
