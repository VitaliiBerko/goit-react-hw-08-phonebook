import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { joinUser, logIn } from './auth.operation';
import Notiflix from 'notiflix';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {logOut: ()=> initialState },

  extraReducers: builder => {
    builder
      .addCase(joinUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(joinUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        Notiflix.Notify.success('You are joined to us!')
      })
      .addCase(joinUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        Notiflix.Notify.failure(payload);
      })
      .addCase(logIn.pending, state=> {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, {payload})=>{
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        Notiflix.Notify.success('You are success logged in!')
      })
      .addCase(logIn.rejected, (state, {payload }) => {
        state.isLoading = false;
        state.error = payload;
        Notiflix.Notify.failure(payload);
      } );
  },
});

export const {logOut} = authSlice.actions;

export const authReducer = persistReducer(
  {
    key: 'auth',
    storage,
    whitelist: ['token']
  },
  authSlice.reducer
);
