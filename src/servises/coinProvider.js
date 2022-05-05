import axios from "axios";

export const fetchCoins = async (skip, limit) => 
{
  return axios.get(`https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=${limit}`);
};

export const fetchHistoricalData = async (period, coinName) => 
{
  return axios.get(`https://api.coinstats.app/public/v1/charts?${period}=6m&coinId=${coinName}`);
};

export const fetchNews = async (skip, limit) => 
{
  return axios.get(`https://api.coinstats.app/public/v1/news/trending?skip=${skip}&limit=${limit}`);
};

