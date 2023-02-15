import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { publicApi } from 'http/http';

// axios.defaults.baseURL = 'https://63e61ee87eef5b22337f4289.mockapi.io';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await publicApi.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const response = await publicApi.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const response = await publicApi.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
