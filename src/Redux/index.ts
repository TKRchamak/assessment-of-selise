import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "./AppointmentSlice";

export const serverUrl = "http://localhost:5000";

const rootReducers = combineReducers({
    appointment: appointmentReducer,
})

const store = configureStore({
    reducer: rootReducers,
    // devTools: false
})

export default store;