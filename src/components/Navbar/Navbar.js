import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {NavStyles} from '../../Styles/ComponentsStyle';
import {SvgXml} from 'react-native-svg';
import Icons from '../../assets/Icons';
import {useNavigation} from '@react-navigation/native';
import {HOME_SCREEN} from '../../Config/ScreenNames';

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <View style={NavStyles.NavView}>
        <View style={NavStyles.NavLeft}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(HOME_SCREEN);
            }}>
            <SvgXml width={44} height={44} xml={Icons.emologIcon} />
          </TouchableOpacity>
          <Text>Emolog</Text>
        </View>
        <View style={NavStyles.NavRight}>
          {/* <TouchableOpacity
            onPress={() => {
              setExpand(!expand);
            }}>
            <SvgXml width={30} height={30} xml={Icons.hamburgerIcon} />
          </TouchableOpacity> */}
        </View>
      </View>
    </>
  );
};

export default Navbar;
