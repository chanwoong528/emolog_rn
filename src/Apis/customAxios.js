import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export const BASE_URI = 'http://172.25.17.78:5000';
// export const BASE_URI = 'http://192.168.219.100:5000';

const customAxios = axios.create({
  baseURL: BASE_URI,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

customAxios.interceptors.request.use(async config => {
  let accessToken = await AsyncStorage.getItem('accessToken');
  console.log(accessToken);
  config.headers['Authorization'] = 'Bearer ' + accessToken;
  return config;
});

customAxios.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    const originalReq = error.config;
    if (error.response.status === 401) {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      console.log('refreshToken : ', refreshToken);
      const res = await axios.post(`${BASE_URI}/user/access-token`, {
        refreshToken,
      });
      console.log(res.data, '@@@@@@@@@@@@@@@@@');
      await AsyncStorage.setItem('accessToken', res.data.accessToken);
      await AsyncStorage.setItem('refreshToken', res.data.refreshToken);
      originalReq.headers['Authorization'] = 'Bearer ' + res.data.accessToken;
      return axios(originalReq);
    }
    return Promise.reject(error);
  },
);
export default customAxios;
