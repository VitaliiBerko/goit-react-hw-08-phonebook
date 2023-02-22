import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi, setAuthHeader } from "http/http";
// import { selectAuthToken } from "./auth.selector";
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

export const refreshUser =createAsyncThunk('auth/refresh', 
async(_, thunkApi)=> {
  const state= thunkApi.getState();
  const persistToken = state.auth.token;

  if(persistToken===null) {
    return thunkApi.rejectWithValue('Unable to fetch user');
  }
  try {
    setAuthHeader(persistToken);
    const {data}=await privateApi.get('/users/current')
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)    
  }
})

// export const refreshUser =createAsyncThunk('auth/refresh', 
// async(_, thunkApi)=>{
//   const stateToken = selectAuthToken(thunkApi.getState());
//   if(!stateToken) {
//     return thunkApi.rejectWithValue("Unable to fetch user")
//   }

//   setAuthHeader(stateToken);
//   const {data} = await privateApi.get('/users/current')
//       return data;

// }
// )