import { configureStore } from '@reduxjs/toolkit'

import coinListReducer from './coinListSlice'
import coinDetailsReducer from './coinDetailsSlice'

const store = configureStore({
  reducer: {
    coinList: coinListReducer,
    coinDetails: coinDetailsReducer
  }
})

export default store