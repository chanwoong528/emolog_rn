import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BtnStyles} from '../../Styles/ComponentsStyle';

const SNSLoginBtn = ({onPress, title, svg}) => {
  return (
    <TouchableOpacity style={BtnStyles.btnSNSLogin} onPress={onPress}>
      <View style={BtnStyles.inner}>
        {svg}
        <Text style={BtnStyles.innerText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SNSLoginBtn;
