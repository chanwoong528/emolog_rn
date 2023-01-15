import React, {useContext, useEffect} from 'react';
import {SafeAreaView, View, Text, Alert} from 'react-native';
import {LoginStyles, ScreenStyles} from '../Styles/ScreeStyles';
import {HOME_SCREEN, LOGIN_SCREEN} from '../Config/ScreenNames';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {SvgXml} from 'react-native-svg';

import {AuthContext, LOGIN_USER} from '../Store/contextAuth';

import {fetchGetUserByEmail, fetchPostLoginByAcc} from '../Apis/apiAuth';
import {REGISTER_SCREEN} from '../Config/ScreenNames';
import Icons from '../assets/Icons';
import SNSLoginBtn from '../components/Button/SNSLoginBtn';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Divider from '../components/UI/Divider';

const LoginScreen = ({navigation, params}) => {
  const {authDispatch} = useContext(AuthContext);

  useEffect(() => {
    checkLoggedInUser();
  }, []);
  const checkLoggedInUser = async () => {
    //Initial Screen is Login -> check if accessToken Exist, then make them go to home page again
    const accesssToken = await AsyncStorage.getItem('accessToken');
    const refreshToken = await AsyncStorage.getItem('refreshToken');

    try {
      if (accesssToken) {
        const getUserInfo = await fetchPostLoginByAcc(
          accesssToken,
          refreshToken,
        );
        if (getUserInfo.code === 200) {
          await AsyncStorage.setItem(
            'accessToken',
            getUserInfo.data.accessToken,
          );
          await AsyncStorage.setItem(
            'refreshToken',
            getUserInfo.data.refreshToken,
          );
          authDispatch({
            type: LOGIN_USER,
            payload: {
              ...getUserInfo.userInfo,
              accessToken: getUserInfo.data.accessToken,
              refreshToken: getUserInfo.data.refreshToken,
            },
          });

          navigation.navigate(HOME_SCREEN);
        }
      }
    } catch (error) {
      Alert.alert('Please Login again. ');
    }
  };
  const onPressAppleSignIn = async () => {};

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
        await AsyncStorage.setItem('accessToken', checkUser.data.accessToken);
        await AsyncStorage.setItem('refreshToken', checkUser.data.refreshToken);
        authDispatch({
          type: LOGIN_USER,
          payload: {
            ...checkUser.userInfo,
            accessToken: checkUser.data.accessToken,
            refreshToken: checkUser.data.refreshToken,
          },
        });
        navigation.navigate(HOME_SCREEN);
        return;
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
      navigation.navigate(LOGIN_SCREEN);
    }
  };

  return (
    <SafeAreaView style={ScreenStyles.wrap}>
      <View style={ScreenStyles.container}>
        <View style={ScreenStyles.screenHeader}>
          {/* <SvgXml width={40} height={40} xml={Icons.emologIcon} /> */}
          <Text style={ScreenStyles.headerText}>{`Emolog, Login Page`}</Text>
        </View>
        <View style={LoginStyles.loginBtnContainer}>
          <SNSLoginBtn
            svg={<SvgXml width={30} height={30} xml={Icons.googleIcon} />}
            onPress={onPressGoogleSignIn}
            title="Login With Google"
          />
          <SNSLoginBtn
            svg={<SvgXml width={30} height={30} xml={Icons.appleIcon} />}
            onPress={onPressAppleSignIn}
            title="Login With Apple"
          />
        </View>
        <Divider />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
