import axios from 'axios';
import {BASE_URI} from './customAxios';

export const fetchGetUserByEmail = async (email, loginType) => {
  try {
    const fetchUserByEmail = await axios.get(`${BASE_URI}/user`, {
      params: {
        email: email,
        login_type: loginType,
      },
    });
    const data = await fetchUserByEmail.data;
    return data;
  } catch (error) {
    console.warn('fetchUserByEmail[Error]', error);
  }
};

export const fetchPostNewUser = async newUserData => {
  try {
    const fetchPostNewUser = await axios.post(`${BASE_URI}/user`, {
      ...newUserData,
    });
    const data = await fetchPostNewUser.data;
    return data;
  } catch (error) {
    console.warn('fetchPostNewUser[Error]', error);
  }
};
