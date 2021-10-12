import { StyleSheet } from 'react-native';
import { Palette } from '../../config/colors';

const stylesFn = (theme: Palette, isHome: boolean) => StyleSheet.create({
  footer: {
    height: 130,
    padding: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: isHome ? 'flex-end' : 'flex-start'
  },
  footerText: {
    fontSize: 20,
    color: theme.light_shadow,
  },
});

export default stylesFn;
