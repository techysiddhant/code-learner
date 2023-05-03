import { configureStore } from '@reduxjs/toolkit'
import courseReducer from './courseSlice'
import coursePageReducer from './coursePageSlice'
// import { courseReducer } from './reducers/courseReducer'

export const store = configureStore({
    reducer: {
        course: courseReducer,
        coursePage: coursePageReducer,
    },
})