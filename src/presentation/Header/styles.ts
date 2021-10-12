import { StyleSheet } from 'react-native';
import { Palette } from '../../config/colors';

const stylesFn = (theme: Palette) => StyleSheet.create({
  headerContainer: {
    height: 180,
    padding: 40,
  },
  header: {
    fontSize: 30,
    color: theme.light_shadow,
  },
});

export default stylesFn;
