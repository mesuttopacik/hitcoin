import { configureStore } from '@reduxjs/toolkit'

import listReducer from './listSlice'
import detailsReducer from './detailsSlice'

const store = configureStore({
  reducer: {
    list: listReducer,
    details: detailsReducer
  }
})

export default store