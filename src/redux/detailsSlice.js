import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'

import { fetchNewsFromApi, fetchHistoricalDataFromApi } from '../services/coinProvider'

export const fetchNews = createAsyncThunk('details/fetchNews', async () =>
  (await fetchNewsFromApi(0,5)).news
);

export const fetchHistoricalData = createAsyncThunk('details/fetchHistoricalData', async (period, { getState }) =>
  {
    const state = getState();
    return (await fetchHistoricalDataFromApi(period,state.details.selectedCoin.id)).chart;
  }
);

const initialState = { news: [], chartPeriod: "24h"};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    coinSelected(state, action) {
      state.selectedCoin = action.payload
    },
    chartPeriodChanged(state, action) {
      state.chartPeriod = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload
      })
      .addCase(fetchHistoricalData.pending, (state, action) => {
        state.historicalData = action.payload
        
      })
      .addCase(fetchHistoricalData.fulfilled, (state, action) => {
        state.historicalData = action.payload.map((item)=> ({timestamp:item[0], value:item[1]}));
      })
  }
});

export const {
  coinSelected,
  chartPeriodChanged
} = detailsSlice.actions;

export default detailsSlice.reducer;