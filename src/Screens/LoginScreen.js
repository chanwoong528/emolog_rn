import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {fetchUserByEmail} from '../Apis/apiAuth';

const LoginScreen = () => {
  const onPressGoogleSignIn = async () => {
    try {
      const userInfo = await GoogleSignin.signIn();
      console.log('onPressGoogleSignIn : ', userInfo.user.email);

      const checkUser = await fetchUserByEmail(userInfo.user.email, 'google');
      if (checkUser.code === 404) {
        console.log('user does not exist, make them register');
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
    <SafeAreaView style={{backgroundColor: 'red'}}>
      <View>
        <Text>aaa</Text>
        <GoogleSigninButton onPress={onPressGoogleSignIn} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
