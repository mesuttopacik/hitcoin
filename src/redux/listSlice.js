import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit'

import { fetchCoins } from '../services/coinProvider'

const coinListAdapter = createEntityAdapter()

const initialState = coinListAdapter.getInitialState({
  status: 'idle'
})

export const fetchCoins = createAsyncThunk('coinList/fetchCoins', async (fetchedCoinsCount) => 
  (await fetchCoins(fetchedCoinsCount,30)).coins
)

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCoins.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        coinListAdapter.addMany(state, action.payload)
        state.status = 'idle'
      })
  }
})

export default listSlice.reducer