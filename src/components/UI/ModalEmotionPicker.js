import {
  View,
  Text,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import Svg, {SvgXml} from 'react-native-svg';
import IconsEmotion from '../../assets/IconsEmotion';
import {ModalStyles} from '../../Styles/ComponentsStyle';
import Icons from '../../assets/Icons';

const emotionWidth = 44;
const emotionHeight = 44;

const ModalEmotionPicker = ({setEmoOpen, setDailyEmo}) => {
  const onPressEmoticon = icon => {
    setEmoOpen(false);
    setDailyEmo(icon);
  };

  return (
    <Modal animationType="fade" transparent={true}>
      <Pressable style={ModalStyles.dimmed}>
        <SafeAreaView style={ModalStyles.modalContainer}>
          <View style={ModalStyles.modalHeader}>
            <Text>How did you feel today?</Text>
            <TouchableOpacity
              onPress={() => {
                setEmoOpen(false);
              }}>
              <SvgXml width={44} height={44} xml={Icons.closeIcon} />
            </TouchableOpacity>
          </View>
          <View style={ModalStyles.btnContainer}>
            <TouchableOpacity
              style={ModalStyles.emotionBtn}
              onPress={() => {
                onPressEmoticon(IconsEmotion.angry);
              }}>
              <SvgXml
                width={emotionWidth}
                height={emotionHeight}
                xml={IconsEmotion.angry.src}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={ModalStyles.emotionBtn}
              onPress={() => {
                onPressEmoticon(IconsEmotion.happy);
              }}>
              <SvgXml
                width={emotionWidth}
                height={emotionHeight}
                xml={IconsEmotion.happy.src}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={ModalStyles.emotionBtn}
              onPress={() => {
                onPressEmoticon(IconsEmotion.depressed);
              }}>
              <SvgXml
                width={emotionWidth}
                height={emotionHeight}
                xml={IconsEmotion.depressed.src}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={ModalStyles.emotionBtn}
              onPress={() => {
                onPressEmoticon(IconsEmotion.confused);
              }}>
              <SvgXml
                width={emotionWidth}
                height={emotionHeight}
                xml={IconsEmotion.confused.src}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={ModalStyles.emotionBtn}
              onPress={() => {
                onPressEmoticon(IconsEmotion.sad);
              }}>
              <SvgXml
                width={emotionWidth}
                height={emotionHeight}
                xml={IconsEmotion.sad.src}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Pressable>
    </Modal>
  );
};

export default ModalEmotionPicker;
