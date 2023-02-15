import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { privateApi } from "http/http";
import { toast } from "react-toastify";

export const joinUser =createAsyncThunk('auth/register', async(credentials, thunkApi)=>{
    try {
        const {data} = await privateApi.post('/users/signup', credentials);
        
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }

})