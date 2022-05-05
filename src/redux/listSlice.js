import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit'

import { fetchCoins } from '../services/coinProvider'

const listAdapter = createEntityAdapter()

const initialState = listAdapter.getInitialState({
  status: 'idle'
})

export const fetchCoins = createAsyncThunk('list/fetchCoins', async (fetchedCoinsCount) => 
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
        listAdapter.addMany(state, action.payload)
        state.status = 'idle'
      })
  }
})

export default listSlice.reducer