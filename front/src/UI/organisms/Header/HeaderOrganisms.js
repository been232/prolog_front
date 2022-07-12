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
          marginLeft: '5%',
          marginRight: '5%',
          marginBottom: '2%',
          '&::after': {
            content: 'none',
            display: 'none',
            clear: 'both',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ width: '75px', height: '75px' }}>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + '/Logo.png'}
                alt="Logo"
                width="100%"
                float="left"
              />
            </Link>
          </Box>
          <HeaderMolecules />
        </Box>
      </Box>
    </>
  );
}

export default HeaderOrganisms;
