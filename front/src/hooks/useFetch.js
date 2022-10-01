import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Api from '../api/Api';
import { red } from '@mui/material/colors';

function useFetch(page, type, searchKeyword, loaded) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [last, setLast] = useState(0);
  const fetchData = useCallback((type, last, searchKeyword) => {
    switch (type) {
      case 'all':
        // console.log('all post loading');
        return Api.getAllPost(last);
      case 'recent':
        // console.log('recent post loading');
        return Api.getRecentPost(last);
      case 'search':
        if (loaded) return Api.getSearchResult(searchKeyword, last);
    }
  });

  const sendQuery = useCallback(async () => {
    // console.log(`last=${last}`);
    // console.log(`type=${type}`);
    try {
      setLoading(true);
      setError(false);
      const res = await fetchData(type, last, searchKeyword);
      if (res != null) {
        setList([...list, ...res.data.data]);
        setLast(res.data.data[res.data.data.length - 1].id);
      } else {
        alert('검색결과 없음.');
      }
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [page, type, last]);

  useEffect(() => {
    sendQuery();
  }, [page]);
  useEffect(() => {
    setList([]);
    setLast(0);
  }, [type]);
  return { list, setList, setLast };
}

export default useFetch;
