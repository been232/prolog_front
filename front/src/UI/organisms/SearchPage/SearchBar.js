import { Box } from '@mui/material';
import React, { useState } from 'react';
import { SearchTextField } from '../../atoms/Commons/TextField';
import { SearchButton } from '../../atoms/SearchPage/SearchButton';

function SearchBar(props) {
  const { onChangeSearchKeyWord, getSearch } = props;
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
        onChange={onChangeSearchKeyWord}
        name={'searchKeyWord'}
      ></SearchTextField>
      <SearchButton onClick={getSearch}></SearchButton>
    </Box>
  );
}

export default SearchBar;
