import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Api from '../../../api/Api';
import useFetch from '../../../hooks/useFetch';
import MainPageOrganism from '../../organisms/MainPage/MainPageOrganism';

/* Gird Item 들은 기능 연동 후 map 으로 처리하던가 해야할듯 */
function MainPage() {
  const [page, setPage] = useState(0);
  const [type, setType] = useState('like');
  const [last, setLast] = useState(0);
  const { loading, error, list } = useFetch(page, type);
  const loader = useRef(null);
  console.log(list);
  // const [list, setList] = useState([]);
  // useEffect(() => {
  //   fetchData();
  // }, [page]);

  // const fetchData = useCallback(async () => {
  //   try {
  //     const res = await Api.getLikePost(last);
  //     setList([...list, ...res.data.data]);
  //     setLast(res.data.data[res.data.data.length - 1].id);
  //   } catch (err) {}
  // }, [last, list]);

  // console.log(`last=${last}`);
  const handleType = useCallback((e) => {
    setType(e.target.value);
  });

  const handleObserver = useCallback(async (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);
  const option = {
    root: null,
    rootMargin: '10px',
    threshold: 0,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>
      <FormControl sx={{ minWidth: 120 }}>
        <Select value={type} onChange={handleType} displayEmpty>
          <MenuItem value="">
            <em>분류 선택</em>
          </MenuItem>
          <MenuItem value="all">전체 게시글</MenuItem>
          <MenuItem value="like">좋아요 한 게시글</MenuItem>
          <MenuItem value="my">내가 쓴 게시글</MenuItem>
          <MenuItem value="recent">최근 쓴 게시글</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {list.map((data) => (
          <Grid item xl={3} lg={4} sm={6} key={data.id}>
            <MainPageOrganism data={data}></MainPageOrganism>
          </Grid>
        ))}
      </Grid>
      <div ref={loader} />
    </Box>
  );
}

export default MainPage;
