import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  Platform,
} from 'react-native';
import {fetchPostNewUser} from '../Apis/apiAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext, LOGIN_USER} from '../Store/contextAuth';
import {HOME_SCREEN} from '../Config/ScreenNames';
import {ScreenStyles} from '../Styles/ScreeStyles';

const RegisterScreen = ({route, navigation}) => {
  const {email, loginType} = route.params;
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');
  const [pwConf, setPwConf] = useState('');
  const {authDispatch} = useContext(AuthContext);

  const onSubmitRegister = async () => {
    const newUserData = {
      email,
      login_type: loginType,
      name: name,
      pw: pw,
      platform: Platform.OS,
    };
    const registeredData = await fetchPostNewUser(newUserData);
    if (registeredData.code === 201) {
      await AsyncStorage.setItem(
        'accessToken',
        registeredData.data.accessToken,
      );
      await AsyncStorage.setItem(
        'refreshToken',
        registeredData.data.refreshToken,
      );
      authDispatch({
        type: LOGIN_USER,
        payload: {
          ...registeredData.userInfo,
          accessToken: registeredData.data.accessToken,
          refreshToken: registeredData.data.refreshToken,
        },
      });
      navigation.navigate(HOME_SCREEN);
    }
  };
  return (
    <SafeAreaView style={ScreenStyles.container}>
      <View>
        <TextInput value={email} />
        <TextInput
          placeholder="What do you want to be called?"
          value={name}
          onChangeText={text => {
            setName(text);
          }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={pw}
          onChangeText={text => {
            setPw(text);
          }}
        />
        <TextInput
          value={pwConf}
          secureTextEntry={true}
          onChangeText={text => {
            setPwConf(text);
          }}
        />
        <Button title="Register" onPress={onSubmitRegister} />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
