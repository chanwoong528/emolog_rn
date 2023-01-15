import React, {useEffect, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GOOGLE_WEBCLIENT_ID} from './src/Config/_commonKeys';

import {AuthProvider} from './src/Store/contextAuth';
import Navbar from './src/components/Navbar/Navbar';

import RootRoutes from './src/Routes/RootRoutes';
import {DiariesProvider} from './src/Store/contextDiary';

const App = () => {
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
      <DiariesProvider>
        <StatusBar />
        <SafeAreaView style={{flex: 1}}>
          <RootRoutes />
        </SafeAreaView>
      </DiariesProvider>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
