import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import WebView from 'react-native-webview';
import EmotionIconSVG from '../UI/EmotionIconSVG';

const DiaryListItem = ({diary}) => {
  return (
    <TouchableOpacity>
      <View>
        <View>
          <Text>{diary.diary_title}</Text>
          <Text>{diary.calendar_date}</Text>
          <EmotionIconSVG emotionId={diary.diary_emotion} />
        </View>
        <View style={{borderWidth: 1, height: 50}}>
          <WebView
            originWhitelist={['*']}
            style={{backgroundColor: 'transparent'}}
            source={{
              html: `<html>
                      <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      </head>
                        <body>${diary.diary_content}</body>
                    </html>`,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DiaryListItem;
