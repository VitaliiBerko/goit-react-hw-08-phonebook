import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi, setAuthHeader } from "http/http";
// import { toast } from "react-toastify";



export const joinUser =createAsyncThunk('auth/register', async(credentials, thunkApi)=>{
    try {
        const {data} = await privateApi.post('/users/signup', credentials);
        setAuthHeader(data.token)
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }

});

export const logIn =createAsyncThunk('auth/login',  async(credentials, thunkApi)=>{
  try {
    const {data}= await privateApi.post('/users/login', credentials);
    setAuthHeader(data.token)
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
})

