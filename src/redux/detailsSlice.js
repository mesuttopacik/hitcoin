import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'

import { fetchNews, fetchHistoricalData } from '../services/coinProvider'

export const fetchNews = createAsyncThunk('coinDetails/fetchNews', async () =>
  (await fetchNews(0,5)).news
);

export const fetchHistoricalData = createAsyncThunk('coinDetails/fetchHistoricalData', async (period, coinName) =>
  (await fetchHistoricalData(period,coinName)).news
);

const detailsSlice = createSlice({
  name: 'details',
  initialState: {},
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
      .addCase(fetchHistoricalData.fulfilled, (state, action) => {
        state.historicalData = action.payload
      })
  }
});

export const {
  coinSelected,
  chartPeriodChanged
} = detailsSlice.actions;

export default detailsSlice.reducer;