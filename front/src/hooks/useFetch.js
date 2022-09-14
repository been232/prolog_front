import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Api from '../api/Api';
import { red } from '@mui/material/colors';

function useFetch(page, type) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [last, setLast] = useState(0);
  const fetchData = useCallback((type, last) => {
    switch (type) {
      case 'all':
        console.log('all post loading');
        return Api.getAllPost(last);
      case 'like':
        console.log('like post loading');
        return Api.getLikePost(last);
      case 'my':
        console.log('my post loading');
        return Api.getMyPost(last);
    }
  });
  const sendQuery = useCallback(async () => {
    console.log(`last=${last}`);
    console.log(`type=${type}`);
    try {
      setLoading(true);
      setError(false);
      const res = await fetchData(type, last);
      setList([...list, ...res.data.data]);
      setLast(res.data.data[res.data.data.length - 1].id);
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
  return { list };
}

export default useFetch;
