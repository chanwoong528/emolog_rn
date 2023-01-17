import React from 'react';
import {SvgXml} from 'react-native-svg';
import IconsEmotion from '../../assets/IconsEmotion';

const EmotionIconSVG = ({emotionId}) => {
  return <SvgXml width={30} height={30} xml={IconsEmotion[emotionId].src} />;
};

export default EmotionIconSVG;
