import axios from 'axios';
import {BASE_URI} from './customAxios';

export const fetchPostNewDiary = async (
  calDate,
  diaryTitle,
  diaryContent,
  userId,
  emotionId,
) => {
  try {
    let body = {
      calendar_date: calDate.toISOString().split('T')[0],
      diary_title: diaryTitle,
      diary_content: diaryContent,
      author_id: userId,
      diary_emotion: emotionId,
    };

    const fetchPostNewDiary = await axios.post(`${BASE_URI}/diary`, {
      ...body,
    });
    const data = await fetchPostNewDiary.data;

    return data;
  } catch (error) {
    console.log('fetchPostNewDiary[error]: ', error);
  }
};

export const fetchGetAllDiaries = async accessToken => {
  try {
    const fetchGetAllDiaries = await axios.get(`${BASE_URI}/diary/all`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await fetchGetAllDiaries.data;

    return data;
  } catch (error) {
    console.log('fetchPostNewDiary[error]: ', error);
  }
};

export const fetchGetOneDiary = async (id, accessToken) => {
  try {
    const fetchGetOneDiary = await axios.get(`${BASE_URI}/diary/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await fetchGetOneDiary.data;
    return data;
  } catch (error) {
    console.log('fetchPostNewDiary[error]: ', error);
  }
};
export const fetchGetLimitedDiaries = dateString => {
  //get 31 as maximum
};
