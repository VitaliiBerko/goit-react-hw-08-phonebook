import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://63e61ee87eef5b22337f4289.mockapi.io',
});

export const privateApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// export const token = {
//   set: (data) => {
//     privateApi.defaults.headers.Authorization = `${data.token_type} ${data.access_token}`;
//   },

//   remove: () => {
//     privateApi.defaults.headers.Authorization = null;
//   },
// };

export const setAuthHeader = token=>{
  privateApi.defaults.headers.common.Authorization= `Bearer ${token}`;
}