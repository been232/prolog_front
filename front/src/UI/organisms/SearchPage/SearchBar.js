import { Box } from '@mui/material';
import React from 'react';
<<<<<<< HEAD
// import { SearchTextField } from '../../atoms/Commons/TextField';
import SearchButton from '../../atoms/SearchPage/SearchButton';
=======
import { SearchTextField } from '../../atoms/Commons/TextField';
import { SearchButton } from '../../atoms/SearchPage/SearchButton';
>>>>>>> 94677d9971af7e87c81492ae1a9d04353ea7955e

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
      {/* <SearchTextField
        style={{ width: '500px', marginRight: '10px' }}
<<<<<<< HEAD
      ></SearchTextField> */}
      <SearchButton></SearchButton>
=======
      ></SearchTextField>
      <SearchButton onClick={getSearch}></SearchButton>
>>>>>>> 94677d9971af7e87c81492ae1a9d04353ea7955e
    </Box>
  );
}

export default SearchBar;
