import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './features/user/userslice'

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})

export default store