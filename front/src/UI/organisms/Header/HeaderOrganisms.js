import Box from '@mui/material/Box';
import HeaderMolecules from '../../molecules/Header/HeaderMolecules';
import { Link } from 'react-router-dom';

function HeaderOrganisms(props) {
  return (
    <>
      <Box
        sx={{
          borderBottom: 2,
          height: 70,
          marginLeft: 20,
          marginRight: 20,
          '&::after': {
            content: 'none',
            display: 'none',
            clear: 'both',
          },
        }}
      >
        <Box
          sx={{
            float: 'left',
          }}
        >
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + '/Logo.png'}
              alt="Logo"
              width="17%"
            />
          </Link>
        </Box>
        <HeaderMolecules />
      </Box>
    </>
  );
}

export default HeaderOrganisms;
