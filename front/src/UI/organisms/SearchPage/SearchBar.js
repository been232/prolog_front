import { Box } from '@mui/material';
import React from 'react';
// import { SearchTextField } from '../../atoms/Commons/TextField';
import SearchButton from '../../atoms/SearchPage/SearchButton';

function SearchBar() {
  return (
    <Box
      sx={{
        marginTop: '5%',
        marginLeft: '10%',
        marginRight: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <SearchTextField
        style={{ width: '500px', marginRight: '10px' }}
      ></SearchTextField> */}
      <SearchButton></SearchButton>
    </Box>
  );
}

export default SearchBar;
