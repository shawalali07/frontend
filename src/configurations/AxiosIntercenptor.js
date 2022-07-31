import axios from 'axios';
import { BASE_URL } from './config';
import { store } from '../redux-toolkit';
import {
  setLoadingTrue,
  setLoadingFalse,
} from '../redux-toolkit/slices/loadingSlice';
const AuthApi = axios.create({
  baseURL: BASE_URL,
});

const Api = axios.create({
  baseURL: BASE_URL,
});

const Axios = axios.create({
  baseURL: BASE_URL,
});

Api.interceptors.request.use(function (config) {
  const token = store.getState().authSlice.token;
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

Axios.interceptors.request.use(function (config) {
  const token = store.getState().authSlice.token;
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  store.dispatch(setLoadingTrue());
  return config;
});

Axios.interceptors.response.use(
  (res) => {
    store.dispatch(setLoadingFalse());
    return res;
  },
  (err) => {
    store.dispatch(setLoadingFalse());
    return Promise.reject(err);
  }
);

export { AuthApi, Api, Axios };
