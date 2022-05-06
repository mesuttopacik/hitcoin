import axios from "axios";

export const fetchCoinsFromApi = async (skip, limit) => 
{
  return (await axios.get(`https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=${limit}`)).data;
};

export const fetchHistoricalDataFromApi = async (period, coinId) => 
{
  return (await axios.get(`https://api.coinstats.app/public/v1/charts?period=${period}&coinId=${coinId}`)).data;
};

export const fetchNewsFromApi = async (skip, limit) => 
{
  return (await axios.get(`https://api.coinstats.app/public/v1/news/trending?skip=${skip}&limit=${limit}`)).data;
};

