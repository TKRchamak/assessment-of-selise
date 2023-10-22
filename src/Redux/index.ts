import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "./AppointmentSlice";

export const serverUrl = "https://server-assessment-of-selise.onrender.com";

const rootReducers = combineReducers({
    appointment: appointmentReducer,
})

const store = configureStore({
    reducer: rootReducers,
    // devTools: false
})

export default store;