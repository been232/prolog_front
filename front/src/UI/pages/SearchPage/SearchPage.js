import { Box, Grid } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Api from '../../../api/Api';
import useFetch from '../../../hooks/useFetch';
import TextBar from '../../atoms/SearchPage/TextBar';
import MainPageOrganism from '../../organisms/MainPage/MainPageOrganism';
import SearchBar from '../../organisms/SearchPage/SearchBar';
function SearchPage() {
  const [datas, setDatas] = useState();
  const [page, setPage] = useState(0);
  const [type, setType] = useState('search');
  const [keyword, setKeyword] = useState('');
  const [loaded, setLoaded] = useState(false);
  const { loading, error, list, setList, setLast } = useFetch(
    page,
    type,
    keyword,
    loaded
  );
  useEffect(() => setList([]), []);
  const loader = useRef(null);
  const handleObserver = useCallback(async (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);
  const option = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  const onChangeSearchKeyWord = useCallback((e) => {
    const keyWord = e.target.value;
    setKeyword(keyWord);
  }, []);
  const getSearch = async () => {
    const resultBody = await Api.getSearchResult(keyword, 0);
    console.log(resultBody);
    if (resultBody.data.data.length === 0) {
      alert(`검색 결과가 없습니다.`);
      setList([]);
      setLoaded(false);
    } else {
      setList(resultBody.data.data);
      setLoaded(true);
      setLast(resultBody.data.data[resultBody.data.data.length - 1].id);
    }
  };

  return (
    <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>
      <SearchBar
        setDatas={setDatas}
        onChangeSearchKeyWord={onChangeSearchKeyWord}
        getSearch={getSearch}
      ></SearchBar>
      <Grid container spacing={3} sx={{ marginTop: '3%' }}>
        {list &&
          list.map((data) => (
            <Grid item xl={3} lg={4} sm={6} key={data.id}>
              <MainPageOrganism data={data}></MainPageOrganism>
            </Grid>
          ))}
      </Grid>
      <div ref={loader} />
    </Box>
  );
}

export default SearchPage;
