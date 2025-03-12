import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentusers: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        signinstart : (state) =>{
            state.loading = true;
            state.error = null;
        },
        signinsuccess : (state) =>{
            state.loading = false;
            state.currentusers = action.payload;
            state .loading = false;
        },
        signinfail : (state, action) =>{
      state.loading = false;
      state.error = action.payload;
        }
    }
});

export const { signinstart, signinsuccess, signinfail } = userSlice.actions;

export default userSlice.reducer;