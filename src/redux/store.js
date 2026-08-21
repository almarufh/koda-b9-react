import { configureStore } from "@reduxjs/toolkit";

import surveyReducer from './slice/Survey.js'


const store = configureStore({
    reducer: {
        survey: surveyReducer
    },
    devTools: true // true agar bisa di cek di redux dev tols
})

export default store