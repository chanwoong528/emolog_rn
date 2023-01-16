import React, {useContext, useEffect} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../Store/contextAuth';
import {DiariesContext, GET_DIARIES} from '../Store/contextDiary';
import {SvgXml} from 'react-native-svg';
import Icons from '../assets/Icons';
import {HomeStyles} from '../Styles/ScreeStyles';
import {Calendar} from 'react-native-calendars';
import CalendarHeader from '../components/Calendar/CalendarHeader';
import {DIARY_ADD_SCREEN} from '../Config/ScreenNames';
import {fetchGetAllDiaries} from '../Apis/apiDiary';
import CalendarDateItem from '../components/Calendar/CalendarDateItem';

const HomeScreen = ({navigation}) => {
  const {email, name, accessToken} = useContext(AuthContext);
  const {diaries, diariesDispatch} = useContext(DiariesContext);

  useEffect(() => {
    getAllDiaryByAccToken();
  }, []);

  const getAllDiaryByAccToken = async () => {
    const data = await fetchGetAllDiaries(accessToken);
    diariesDispatch({
      type: GET_DIARIES,
      payload: {
        diaries: data.data,
      },
    });
  };

  return (
    <SafeAreaView style={{marginHorizontal: 10}}>
      <View style={HomeStyles.header}>
        <Text>{name}, How is your day going?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(DIARY_ADD_SCREEN);
          }}>
          <SvgXml width={30} height={30} xml={Icons.addDiaryIcon} />
        </TouchableOpacity>
      </View>
      <View style={{height: 350}}>
        <Text>Weeks </Text>
        <Calendar
          // Initially visible month. Default = now
          initialDate={new Date().toISOString().split('T')[0]}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          // minDate={'2021-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          // maxDate={'2023-01-30'}
          // Handler which gets executed on day press. Default = undefined
          markedDates={
            {
              // ...diaries.reduce((obj, item) => {
              //   return Object.assign(obj, {
              //     [item.calendar_date]: [
              //       {diary_id: item.diary_id, diary_emotion: item.diary_emotion},
              //     ],
              //   });
              // }, {}),
            }
          }
          pagingEnabled={true}
          monthFormat={'yyyy MM'}
          hideArrows={false}
          renderArrow={direction => {
            if (direction === 'left') {
              return (
                <View>
                  <Text>aa</Text>
                </View>
              );
            } else {
              return (
                <View>
                  <Text>bb</Text>
                </View>
              );
            }
          }}
          hideExtraDays={true}
          displayLoadingIndicator={true}
          dayComponent={({date, state}) => {
            let diaryObj = diaries.find(
              item => item.calendar_date === date.dateString,
            );

            if (!diaryObj) {
              return (
                <CalendarDateItem emotion={null} date={date} diaryId={null} />
              );
            } else {
              return (
                <CalendarDateItem
                  emotion={diaryObj.diary_emotion}
                  diaryId={diaryObj.diary_id}
                  date={date}
                />
              );
            }
          }}
          firstDay={1}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          disableAllTouchEventsForDisabledDays={true}
          renderHeader={date => {
            /*Return JSX*/
            return <CalendarHeader date={date} />;
          }}
          horizonta={true}
          enableSwipeMonths={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
