import { StyleSheet } from 'react-native';

import { Palette } from '../../config/colors';

const stylesFn = (theme: Palette, isHome: boolean) =>
  StyleSheet.create({
    itemListScreen: {
      flex: 1,
      backgroundColor: theme.light_tint,
    },
    contentContainer: {
      width: '100%',
      flex: 1,
      flexDirection: 'row',
      padding: 40,
      justifyContent: 'space-between',
    },
    listContainer: {
      width: isHome ? '100%' : '48%',
      marginRight: isHome ? 0 : 10,
    },
    listItemContainer: {
      width: '100%',
      backgroundColor: theme.dark_tint,
      marginBottom: 20,
    },
    listTitleContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    listTitle: {
      width: '90%',
    },
    listTitleColor: {
      color: theme.dark_shadow2,
    },
    formTitle: {
      width: '75%',
    },
    listTitleIconContainer: {
      flexDirection: 'row',
      gap: 5,
    },
    listDetailsContainer: {
      flex: 1,
      backgroundColor: theme.dark,
      paddingLeft: 8,
      paddingRight: 8,
    },
    addIconContainer: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    minusIconContainer: {
      paddingTop: 8,
    },
    formContainer: {
      padding: 10,
      paddingTop: 0,
      height: 200,
    },

    selectedItemContainer: {
      height: 160,
      backgroundColor: theme.dark,
      width: isHome ? 0 : '48%',
      padding: isHome ? 0 : 20,
    },
    selectedItem: {
      alignItems: 'center',
    },
    selectedItemHeading: {
      marginBottom: 20,
    },
    selectedItemTitle: {
      fontSize: 20,
    },
    lastItemContainer: {
      marginBottom: 0,
    },
  }
);

export default stylesFn;
