import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import IconsEmotion from '../../assets/IconsEmotion';
import {useNavigation} from '@react-navigation/native';
import {
  DIARY_ADD_SCREEN,
  DIARY_LIST,
  DIARY_SCREEN,
} from '../../Config/ScreenNames';

const CalendarDateItem = ({emotion, date, diaryId}) => {
  const navigation = useNavigation();

  const onPressDiaryDate = () => {
    if (!diaryId) {
      // go to add page
      navigation.navigate(DIARY_ADD_SCREEN, {
        calendar_date: date,
      });
    } else {
      // goto detail page
      navigation.navigate(DIARY_LIST, {
        diary_id: diaryId,
        calendar_date: date,
      });
    }
  };

  switch (emotion) {
    case 'happy':
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
            <SvgXml width={30} height={30} xml={IconsEmotion.happy.src} />
          </TouchableOpacity>
        </View>
      );
    case 'sad':
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
            <SvgXml width={30} height={30} xml={IconsEmotion.sad.src} />
          </TouchableOpacity>
        </View>
      );

    case 'depressed':
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
            <SvgXml width={30} height={30} xml={IconsEmotion.depressed.src} />
          </TouchableOpacity>
        </View>
      );

    case 'confused':
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
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 44,
              height: 44,
            }}
            onPress={() => {
              onPressDiaryDate();
            }}>
            <SvgXml width={30} height={30} xml={IconsEmotion.confused.src} />
          </TouchableOpacity>
        </View>
      );

    case 'anger':
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
            <SvgXml width={30} height={30} xml={IconsEmotion.angry.src} />
          </TouchableOpacity>
        </View>
      );
    default:
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
