import { Box } from '@mui/material';
import React from 'react';
import { SearchTextField } from '../../atoms/Commons/TextField';
import { SearchButton } from '../../atoms/SearchPage/SearchButton';

function SearchBar(props) {
  const setDatas = props.setDatas;
  const getSearch = () => {
    //검색하는 통신
    console.log('test');
    setDatas({
      success: true,
      data: [
        {
          id: 'postId',
          title: 'title',
          written: '2022-06-07',
          member: 'memberName',
          memberImage: 'http://~',
          likes: '8',
          mainLayout: {
            type: '1',
            width: '12',
            height: '35',
            content: '어쩌구 저쩌구',
          },
        },
        {
          id: 'postId',
          title: 'title',
          content: '어쩌구 저쩌구',
          written: '2022-06-07',
          member: 'memberName',
          memberImage: 'http://~',
          likes: '8',
          mainLayout: {
            type: '1',
            width: '12',
            height: '35',
            content: '어쩌구 저쩌구',
          },
        },
      ],
    });
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
