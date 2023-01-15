import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const EmologBtn = ({style, onPress, title}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default EmologBtn;
