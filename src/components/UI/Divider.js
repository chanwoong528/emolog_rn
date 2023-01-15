import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import styleVar from '../../Styles/_variables';

const styles = StyleSheet.create({
  divider: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',
    marginVertical: 30,

    borderBottomWidth: 2,
    borderColor: styleVar.border_text_secondary_color,
  },
  divider_text: {
    position: 'absolute',
    paddingHorizontal: 10,

    backgroundColor: styleVar.bg_primary_color,

    fontSize: 18,
    color: styleVar.border_text_secondary_color,
  },
});
const Divider = ({text}) => {
  return (
    <View style={styles.divider}>
      {!text ? null : <Text style={styles.divider_text}>or</Text>}
    </View>
  );
};

export default Divider;
