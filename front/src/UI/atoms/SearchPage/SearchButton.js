import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export const SearchButton = (props) => {
  const { onClick } = props;
  return <SearchIcon fontSize="large" onClick={onClick} />;
};
