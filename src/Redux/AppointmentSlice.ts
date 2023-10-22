import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";


// export const getAppointment = createAsyncThunk('appointment/getAppointmentList', async (payload: null, { rejectWithValue }) => {
//     try {
//         const response = await axios.get(`${serverUrl}/events`);
//         return response.data;
//     } catch (error) {
//         console.log('createProjectRequest error', error);
//         alert("task not create");
//         return rejectWithValue(error);
//     }
// })


const initialState = {
    status: 'idle',
    error: '',
    appointmentList: [],
    monthList: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"],
    yearList: ["2019", "2020", "2021", "2022", "2023"],
    successMessage: ""
}

const appointment = createSlice({
    name: 'appointment',
    initialState: initialState,
    reducers: {
        // clearSuccessMessage: (state, action) => {
        //     state.successMessage = "";
        // }

        // clearSuccessMessage: (state) => {
        //     state.successMessage = "";
        // },

        storeAppointmentData: (state, action) => {
            state.appointmentList = action?.payload;
        }
    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(getAppointment.pending, (state) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(getAppointment.fulfilled, (state, action) => {
    //             console.log(action.payload);
    //             state.appointmentList = action.payload;
    //             state.successMessage = 'Task Created Successfully';
    //         })
    //         .addCase(getAppointment.rejected, (state) => {
    //             state.status = 'failed';
    //         })

    // }
});

export const { storeAppointmentData } = appointment.actions;
// export const getMonthList = (state: any) => (state.appointment.monthList)

export default appointment.reducer;