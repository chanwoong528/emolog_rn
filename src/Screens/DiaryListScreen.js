import {View, SafeAreaView, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {fetchGetLimitedDiaries} from '../Apis/apiDiary';

const DiaryListScreen = ({route}) => {
  useEffect(() => {}, []);
  const getLimitedDiary = async () => {
    const limitedDiaries = await fetchGetLimitedDiaries();
  };
  return (
    <SafeAreaView>
      <FlatList />
    </SafeAreaView>
  );
};

export default DiaryListScreen;
