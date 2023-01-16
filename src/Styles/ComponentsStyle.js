import {StyleSheet} from 'react-native';
import styleVar from './_variables';

export const BtnStyles = StyleSheet.create({
  btnSNSLogin: {
    padding: 10,
    marginBottom: 20,

    borderRadius: 6,
    borderWidth: 1,
    borderColor: styleVar.border_text_primary_color,
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerText: {marginLeft: 10, fontSize: 16, fontWeight: '600'},
});
export const NavStyles = StyleSheet.create({
  NavView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFF',
  },
  NavLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const ModalStyles = StyleSheet.create({
  dimmed: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    position: 'relative',
    zIndex: 0,
  },
  modalContainer: {
    display: 'flex',
    zIndex: 1,
    position: 'relative',

    backgroundColor: '#FFF',
  },
  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  emotionBtn: {
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
