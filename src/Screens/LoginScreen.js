import React from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import {ScreenStyles} from '../Styles/ScreeStyles';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {SvgXml} from 'react-native-svg';

import {fetchGetUserByEmail} from '../Apis/apiAuth';
import {REGISTER_SCREEN} from '../Config/ScreenNames';
import Icons from '../assets/Icons';
import SNSLoginBtn from '../components/Button/SNSLoginBtn';

const LoginScreen = ({navigation}) => {
  const onPressGoogleSignIn = async () => {
    try {
      const userInfo = await GoogleSignin.signIn();

      const checkUser = await fetchGetUserByEmail(
        userInfo.user.email,
        'google',
      );

      if (checkUser.code === 404) {
        console.log('user does not exist, make them register');
        navigation.navigate(REGISTER_SCREEN, {
          email: userInfo.user.email,
          loginType: 'google',
        });
        return;
      } else {
        console.log('user exist make them login!');
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView style={ScreenStyles.wrap}>
      <View style={ScreenStyles.container}>
        <View style={ScreenStyles.screenHeader}>
          <Text style={ScreenStyles.headerText}>Login Page</Text>
        </View>
        <View>
          <TextInput style={ScreenStyles.loginInput} />
          <TextInput style={ScreenStyles.loginInput} />
        </View>
        <SNSLoginBtn
          svg={<SvgXml width={30} height={30} xml={Icons.googleIcon} />}
          onPress={onPressGoogleSignIn}
          title="Login With Google"
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
