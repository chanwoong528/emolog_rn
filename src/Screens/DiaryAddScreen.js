import {
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState, useContext, useEffect} from 'react';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';

import {AuthContext} from '../Store/contextAuth';
import {fetchPostNewDiary} from '../Apis/apiDiary';
import {SvgXml} from 'react-native-svg';
import IconsEmotion from '../assets/IconsEmotion';
import DatePicker from 'react-native-date-picker';
import Icons from '../assets/Icons';
import ModalEmotionPicker from '../components/UI/ModalEmotionPicker';
import {DiaryAddStyles} from '../Styles/ScreeStyles';
import {HOME_SCREEN} from '../Config/ScreenNames';
import {ADD_DIARY, DiariesContext} from '../Store/contextDiary';

const DiaryAddScreen = ({navigation, route}) => {
  const {userId} = useContext(AuthContext);
  const {diariesDispatch} = useContext(DiariesContext);
  const richText = useRef();
  const [title, setTitle] = useState('');
  const [contentHtml, setContentHtml] = useState('');
  const [calenderDate, setCalenderDate] = useState(new Date());
  const [dateOpen, setDateOpen] = useState(false);
  const [emoOpen, setEmoOpen] = useState(false);
  const [dailyEmo, setDailyEmo] = useState(IconsEmotion.choose);

  useEffect(() => {
    if (!!route.params) {
      setCalenderDate(new Date(route.params.calendar_date.dateString));
    }
  }, []);

  const onPressSubmitDiary = async () => {
    const addNewDiary = await fetchPostNewDiary(
      calenderDate,
      title,
      contentHtml,
      userId,
      dailyEmo.id,
    );
    console.log(addNewDiary.data);
    if (addNewDiary.code === 201) {
      diariesDispatch({
        type: ADD_DIARY,
        payload: {
          diary: addNewDiary.data,
        },
      });
    }

    navigation.navigate(HOME_SCREEN);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <Text style={DiaryAddStyles.headerDate}>
          {calenderDate.toISOString().split('T')[0]}
        </Text>
        <TouchableOpacity onPress={onPressSubmitDiary}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={DiaryAddStyles.header}>
        <View style={DiaryAddStyles.headerLeft}>
          <TextInput
            placeholder="Title for Today?"
            style={{
              borderBottomWidth: 1,
              flex: 1,
              marginHorizontal: 10,
              paddingVertical: 10,
            }}
            onChangeText={text => {
              setTitle(text);
            }}
          />
        </View>
        <View style={DiaryAddStyles.headerRight}>
          <TouchableOpacity
            style={{
              height: 44,
              width: 44,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setDateOpen(!dateOpen)}>
            <SvgXml width={30} height={30} xml={Icons.addDateIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 44,
              width: 44,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              //onpen Modal to choose emotion
              setEmoOpen(true);
            }}>
            <SvgXml width={30} height={30} xml={dailyEmo.src} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={{
          backgroundColor: '#FFF',
        }}
        onTouchEnd={e => {
          richText.current?.focusContentEditor();
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{backgroundColor: '#FFF'}}>
          <RichEditor
            placeholder="Organize your thoughts"
            style={{flex: 1}}
            ref={richText}
            onChange={descriptionText => {
              setContentHtml(descriptionText);
            }}
          />
        </KeyboardAvoidingView>
      </ScrollView>
      <RichToolbar
        editor={richText}
        onPressAddImage={() => {}}
        actions={[
          actions.setBold,
          actions.setItalic,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.insertImage,
          actions.insertLink,
        ]}
        iconMap={{
          [actions.heading1]: ({tintColor}) => (
            <Text style={[{color: tintColor}]}>H1</Text>
          ),
        }}
      />
      <DatePicker
        modal
        mode="date"
        open={dateOpen}
        date={calenderDate}
        onConfirm={date => {
          setDateOpen(false);
          setCalenderDate(date);
        }}
        onCancel={() => {
          setDateOpen(false);
        }}
      />
      {emoOpen ? (
        <ModalEmotionPicker setEmoOpen={setEmoOpen} setDailyEmo={setDailyEmo} />
      ) : null}
    </SafeAreaView>
  );
};

export default DiaryAddScreen;
