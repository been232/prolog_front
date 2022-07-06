import AccountCircleIcons from '../../atoms/Header/AccountCircleIcons';
import SearchIcons from '../../atoms/Header/SearchIcons';
import Box from '@mui/material/Box';

function HeaderMolecules(props) {
  return (
    <>
      <Box
        sx={{
          '& > :not(style)': {
            m: 1,
          },
          float: 'right',
          marginTop: 1.5,
        }}
      >
        <SearchIcons />
        <AccountCircleIcons />
      </Box>
    </>
  );
}
export default HeaderMolecules;
