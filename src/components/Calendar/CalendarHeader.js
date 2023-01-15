import {View, Text} from 'react-native';
import React from 'react';

const CalendarHeader = ({date}) => {
  return (
    <View>
      <Text>{date.getFullYear()}</Text>
      <Text>{date.getMonth() + 1}</Text>
    </View>
  );
};

export default CalendarHeader;
