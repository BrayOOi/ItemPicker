import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Swipeable } from 'react-native-gesture-handler';

import Header from '../../presentation/Header';
import Footer from '../../presentation/Footer';
import SelectedItem from './SelectedItem';
import AddItemForm from './AddItemForm';

import {
  selectItem,
  deselectItem,
  removeItem,
} from '../../store/items/actions';
import { loadColorScheme } from '../../store/system/actions';

import stylesFn from './styles';
import useTheme from '../../hooks/useTheme';

import { RootState } from '../../store';

const ItemListScreen: React.FC<{}> = () => {
  const items = useSelector((state: RootState) => state.items);
  const { page } = useSelector((state: RootState) => state.system);
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const theme = useTheme();
  const scrollViewRef = useRef();

  useEffect(() => {
    dispatch(loadColorScheme(colorScheme));
  }, [colorScheme]);

  // display every item in home screen, only show selected items in 'select' screen
  const isHome = page === 'home';

  const onItemPress = (selected: boolean, id: string) => {
    if (isHome) {
      if (selected) {
        dispatch(deselectItem(id));
      } else {
        dispatch(selectItem(id));
      }
    }
  };

  const styles = stylesFn(theme, isHome);

  const scrolltoBottom = () => scrollViewRef.current.scrollToEnd({ animated: true });

  return (
    <View style={styles.itemListScreen}>
      <Header />
      <View style={styles.contentContainer}>
        <ScrollView style={styles.listContainer} ref={scrollViewRef}>
          {items
            .filter(item => isHome || item.isSelected)
            .map(item => (
              <Swipeable
                key={item.id}
                renderRightActions={() => isHome
                  ? (
                    <View
                      style={[
                        styles.listTitleContainer,
                        styles.addIconContainer,
                        { justifyContent: 'space-evenly' },
                      ]}>
                      <Text style={styles.listTitleColor}>
                        Continue to remove item
                      </Text>
                      <Icon
                        name="trash-2"
                        size={30}
                        color={theme.dark_shadow}
                      />
                    </View>
                  ) : (
                    <></>
                  )
                }
                onSwipeableRightOpen={() =>
                  isHome ? dispatch(removeItem(item.id)) : {}
                }>
                <TouchableOpacity
                  style={[
                    styles.listItemContainer,
                    styles.addIconContainer,
                    styles.listTitleContainer,
                    { padding: 10 },
                  ]}
                  activeOpacity={isHome ? 0.2 : 1}
                  onPress={() => onItemPress(item.isSelected, item.id)}>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={[styles.listTitle, styles.listTitleColor]}>
                    {item.title}
                  </Text>
                  {isHome && (
                    <Icon
                      name="check"
                      size={30}
                      color={theme.dark_shadow}
                      style={{ opacity: item.isSelected ? 1 : 0.5 }}
                    />
                  )}
                </TouchableOpacity>
              </Swipeable>
            ))}
          {isHome && <AddItemForm />}
        </ScrollView>

        <SelectedItem isShow={!isHome} />
      </View>
      <Footer />
    </View>
  );
};

export default ItemListScreen;
