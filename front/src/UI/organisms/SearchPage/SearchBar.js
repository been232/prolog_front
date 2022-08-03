import { Box } from '@mui/material';
import React from 'react';
import { SearchTextField } from '../../atoms/Commons/TextField';
import { SearchButton } from '../../atoms/SearchPage/SearchButton';

function SearchBar() {
  const getSearch = () => {
    //검색하는 통신
    console.log('test');
  };
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
      <SearchTextField
        style={{ width: '500px', marginRight: '10px' }}
      ></SearchTextField>
      <SearchButton onClick={getSearch}></SearchButton>
    </Box>
  );
}

export default SearchBar;
