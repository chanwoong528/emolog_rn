import {View, Text} from 'react-native';
import React from 'react';

import WebView from 'react-native-webview';

const DiaryListItem = () => {
  return (
    <View>
      <Text>DiaryListItem</Text>
      <View>
        <WebView />
      </View>
    </View>
  );
};

export default DiaryListItem;
