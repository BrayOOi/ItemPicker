import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemListScreen: {
    flex: 1,
  },
  contentContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    padding: 40,
    justifyContent: 'space-between',
  },
  listItemContainer: {
    width: '100%',
    backgroundColor: '#888',
    marginBottom: 20,
  },
  listTitleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listDetailsContainer: {
    flex: 1,
    backgroundColor: '#aaa',
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
    height: 200,
    backgroundColor: '#666',
  },
});

export default styles;
