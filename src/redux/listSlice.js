import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'

import { fetchCoinsFromApi } from '../services/coinProvider'

const initialState = {
  status: 'idle',
  coins: []
};

export const fetchCoins = createAsyncThunk('list/fetchCoins', async (fetchedCoinsCount) => 
  {
    return (await fetchCoinsFromApi(fetchedCoinsCount,30)).coins;
  }
);

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCoins.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.coins.push(...action.payload);
        state.status = 'idle';
      })
  }
});

export default listSlice.reducer;