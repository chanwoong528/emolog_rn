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

const App = () => {
  const rootStack = createNativeStackNavigator();

  useEffect(() => {
    googleSignInConf();
  }, []);

  const googleSignInConf = () => {
    GoogleSignin.configure({
      webClientId: GOOGLE_WEBCLIENT_ID,
      offlineAccess: true,
      hostedDomain: '',
    });
  };

  return (
    <NavigationContainer>
      <rootStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <rootStack.Group>
          <rootStack.Screen
            name="Home"
            component={HomeScreen}
            // initialParams={{codepushFlag: codepushFlag}}
          />
          <rootStack.Screen
            name="Login"
            component={LoginScreen}
            // initialParams={{codepushFlag: codepushFlag}}
          />
        </rootStack.Group>
      </rootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
