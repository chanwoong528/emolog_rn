import {View, SafeAreaView, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchGetLimitedDiaries} from '../Apis/apiDiary';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DiaryListItem from '../components/Diary/DiaryListItem';
import ActivityIndicatorViewNativeComponent from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent';

const DiaryListScreen = ({route}) => {
  const [diaryList, setDiaryList] = useState([]);

  useEffect(() => {
    getLimitedDiary();
  }, []);

  const getLimitedDiary = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const limitedDiaries = await fetchGetLimitedDiaries(
      route.params.calendar_date.dateString,
      accessToken,
    );
    setDiaryList(limitedDiaries.data);
  };
  return (
    <SafeAreaView>
      <Text>diary list</Text>
      <FlatList
        data={diaryList}
        renderItem={diary => {
          return <DiaryListItem diary={diary.item} />;
        }}
        keyExtractor={diary => diary.diary_id}
      />
    </SafeAreaView>
  );
};

export default DiaryListScreen;
