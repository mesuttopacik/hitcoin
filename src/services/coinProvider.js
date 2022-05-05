import axios from "axios";

export const fetchCoinsFromApi = async (skip, limit) => 
{
  return (await axios.get(`https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=${limit}`)).data;
};

export const fetchHistoricalDataFromApi = async (period, coinName) => 
{
  return (await axios.get(`https://api.coinstats.app/public/v1/charts?${period}=6m&coinId=${coinName}`)).data;
};

export const fetchNewsFromApi = async (skip, limit) => 
{
  return (await axios.get(`https://api.coinstats.app/public/v1/news/trending?skip=${skip}&limit=${limit}`)).data;
};

