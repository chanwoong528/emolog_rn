import {StyleSheet} from 'react-native';
import styleVar from './_variables';
export const ScreenStyles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: styleVar.bg_primary_color,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  screenHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 6,
    marginBottom: 10,
  },
  headerText: {
    color: styleVar.border_text_primary_color,
    fontSize: 20,
    fontWeight: '900',
  },
  loginInput: {
    marginBottom: 10,
    borderRadius: 6,
    padding: 0,

    fontSize: 20,

    borderBottomWidth: 2,
    borderColor: styleVar.border_text_primary_color,
  },
});
export const LoginStyles = StyleSheet.create({
  loginBtnContainer: {
    paddingVertical: 30,
  },
});
export const HomeStyles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
  },
});
export const DiaryAddStyles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 20,
  },
  headerDate: {
    padding: 10,
    fontSize: 20,
    fontWeight: '900',
    alignSelf: 'center',
    color: styleVar.border_text_primary_color,
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
  },
});
