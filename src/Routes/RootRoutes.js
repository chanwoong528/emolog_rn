import {View, Text} from 'react-native';
import React, {useEffect, useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchPostLoginByAcc} from '../Apis/apiAuth';

import {AuthContext} from '../Store/contextAuth';

import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

import {
  DIARY_ADD_SCREEN,
  DIARY_LIST,
  DIARY_SCREEN,
  HOME_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
} from '../Config/ScreenNames';
import DiaryAddScreen from '../Screens/DiaryAddScreen';
import Navbar from '../components/Navbar/Navbar';
import DiaryScreen from '../Screens/DiaryScreen';
import DiaryListScreen from '../Screens/DiaryListScreen';

const RootRoutes = () => {
  const rootStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navbar />
      <rootStack.Navigator
        initialRouteName={LoginScreen}
        screenOptions={{
          headerShown: false,
        }}>
        <rootStack.Group>
          <rootStack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
          <rootStack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
          <rootStack.Screen name={HOME_SCREEN} component={HomeScreen} />
          <rootStack.Screen
            name={DIARY_ADD_SCREEN}
            component={DiaryAddScreen}
          />
          <rootStack.Screen name={DIARY_SCREEN} component={DiaryScreen} />
          <rootStack.Screen name={DIARY_LIST} component={DiaryListScreen} />
        </rootStack.Group>
      </rootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootRoutes;
