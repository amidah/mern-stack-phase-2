import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const customerState = {
    updateState: false,
    loading: false,
    customerList: [],
    error: "",
    response: ""
};

export const customerSignUp = createAsyncThunk(
    "customer/signUp", 
    async (customer) => {
        console.log(customer);
        const response = await axios.post("http://localhost:3000/customers", customer);
        return response.data;
    }
);

export const findCustomer = createAsyncThunk(
    "customer/findById", 
    async (id) => {
        
        const response = await axios.get(`http://localhost:3000/customers/${id}`);
        console.log(response.data);
        return response.data;
    }
);

export default customerSlice;