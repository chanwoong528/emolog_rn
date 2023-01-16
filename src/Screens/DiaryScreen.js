import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {fetchGetOneDiary} from '../Apis/apiDiary';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DiaryScreen = ({route}) => {
  useEffect(() => {
    getOneDiary();
  }, []);
  const getOneDiary = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!!accessToken) {
      const diary = await fetchGetOneDiary(route.params.diary_id, accessToken);
      console.log(diary);
    } else {
      //go to login page
    }
  };

  return (
    <View>
      <Text>DiaryScreen</Text>
    </View>
  );
};

export default DiaryScreen;
