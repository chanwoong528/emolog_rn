import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import IconsEmotion from '../../assets/IconsEmotion';
import {useNavigation} from '@react-navigation/native';
import {DIARY_ADD_SCREEN, DIARY_LIST} from '../../Config/ScreenNames';

const CalendarDateItem = ({emotion, date, diaryId}) => {
  const navigation = useNavigation();

  const onPressDiaryDate = () => {
    if (!diaryId) {
      // go to add page
      navigation.navigate(DIARY_ADD_SCREEN, {
        calendar_date: date,
      });
    } else {
      // goto diarylist
      navigation.navigate(DIARY_LIST, {
        diary_id: diaryId,
        calendar_date: date,
      });
    }
  };
  if (!!emotion) {
    return (
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 44,
          height: 44,
        }}>
        <TouchableOpacity
          onPress={() => {
            onPressDiaryDate();
          }}>
          <SvgXml width={30} height={30} xml={IconsEmotion[emotion].src} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 44,
          height: 44,
        }}>
        <TouchableOpacity
          onPress={() => {
            onPressDiaryDate();
          }}>
          <Text style={{color: 'red', textAlign: 'center'}}>{date.day}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default CalendarDateItem;
