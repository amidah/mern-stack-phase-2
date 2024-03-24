import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userState = {
    updateState: false,
    loading: false,
    userList: [],
    error: "",
    response: ""
};

export const loginSignIn = createAsyncThunk(
    "login/signIn", 
    async () => {
        const response = await axios.get("http://localhost:3000/login");
        return response.data;
    }
);

const userSlice = createSlice({
    name: "bank",
    initialState: userState,
    reducers: {
        changeStateTrue: (state) => {
            state.updateState = true;
        }
    }
})

export default userSlice;
