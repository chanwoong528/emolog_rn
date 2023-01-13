import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GOOGLE_WEBCLIENT_ID} from './src/Config/_commonKeys';

import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import {
  HOME_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
} from './src/Config/ScreenNames';
import {AuthProvider} from './src/Store/contextAuth';

const App = () => {
  const rootStack = createNativeStackNavigator();

  useEffect(() => {
    googleSignInConf();
  }, []);

  const googleSignInConf = () => {
    GoogleSignin.configure({
      webClientId: GOOGLE_WEBCLIENT_ID,
      offlineAccess: true,
    });
  };

  return (
    <AuthProvider>
      <StatusBar />
      <NavigationContainer>
        <rootStack.Navigator
          initialRouteName={LOGIN_SCREEN}
          screenOptions={{
            headerShown: false,
          }}>
          <rootStack.Group>
            <rootStack.Screen name={HOME_SCREEN} component={HomeScreen} />
            <rootStack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
            <rootStack.Screen
              name={REGISTER_SCREEN}
              component={RegisterScreen}
            />
          </rootStack.Group>
        </rootStack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
