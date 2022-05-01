import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  fetchData = async () => {
    try {
      const {data: responceData} = await axios.get(url);
      setData(responceData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {error, loading, data};
};

export default useFetch;