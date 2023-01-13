import React, {useContext} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {AuthContext} from '../Store/contextAuth';
const HomeScreen = () => {
  const {email, accessToken} = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text>HomeScreen {email}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
