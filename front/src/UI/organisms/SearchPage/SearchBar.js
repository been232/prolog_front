import { Box } from '@mui/material';
import React, { useState } from 'react';
import Api from '../../../api/Api';
import { SearchTextField } from '../../atoms/Commons/TextField';
import { SearchButton } from '../../atoms/SearchPage/SearchButton';

function SearchBar(props) {
  const setDatas = props.setDatas;
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const onChangeSearchKeyWord = (e) => {
    const keyWord = e.target.value;
    setSearchKeyWord(keyWord);
  };
  const getSearch = async () => {
    const resultBody = await Api.getSearchResult(searchKeyWord);
    console.log(resultBody.data.data);
    if (resultBody.data.data.length === 0) {
      alert(`검색 결과가 없습니다.`);
    } else setDatas(resultBody.data.data);
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
        onChange={onChangeSearchKeyWord}
        name={'searchKeyWord'}
      ></SearchTextField>
      <SearchButton onClick={getSearch}></SearchButton>
    </Box>
  );
}

export default SearchBar;
