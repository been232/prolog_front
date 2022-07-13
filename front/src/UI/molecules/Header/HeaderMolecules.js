import AccountCircleIcons from '../../atoms/Header/AccountCircleIcons';
import SearchIcons from '../../atoms/Header/SearchIcons';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
function HeaderMolecules(props) {
  return (
    <>
      <Box
        sx={{
          '& > :not(style)': {
            m: 1,
          },
          float: 'right',
          marginTop: 2.1,
        }}
      >
        <Link to="/search">
          <SearchIcons />
        </Link>
        <Link to="/">
          <AccountCircleIcons />
        </Link>
      </Box>
    </>
  );
}
export default HeaderMolecules;
