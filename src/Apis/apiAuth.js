import axios from 'axios';
import {BASE_URI} from './customAxios';

export const fetchUserByEmail = async (email, loginType) => {
  try {
    console.log('!!!', email, loginType);
    const fetchUserByEmail = await axios.get(`${BASE_URI}/user`, {
      params: {
        email: email,
        login_type: loginType,
      },
    });
    const data = fetchUserByEmail.data;
    return data;
  } catch (error) {
    console.warn('fetchUserByEmail[Error]', error);
  }
};
