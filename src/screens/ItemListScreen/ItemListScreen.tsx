import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Header from '../../presentation/Header';
import Footer from '../../presentation/Footer';
import SelectedItem from './SelectedItem';
import AddItemForm from './AddItemForm';

import { selectItem, deselectItem } from '../../store/items/actions';

import styles from './styles';

import { RootState } from '../../store';

const ItemListScreen: React.FC<{}> = () => {
  const items = useSelector((state: RootState) => state.items);
  const { page } = useSelector((state: RootState) => state.system);
  const dispatch = useDispatch();

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

  return (
    <View style={styles.itemListScreen}>
      <Header />
      <View style={styles.contentContainer}>
        <ScrollView
          style={{
            width: isHome ? '100%' : '48%',
            marginRight: isHome ? 0 : 10,
          }}>
          {items
            .filter(item => isHome || item.isSelected)
            .map(item => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.listItemContainer,
                  styles.addIconContainer,
                  styles.listTitleContainer,
                  { padding: 10 }
                ]}
                onPress={() => onItemPress(item.isSelected, item.id)}>
                <Text ellipsizeMode="tail" numberOfLines={1}>
                  {item.title}
                </Text>
                {isHome && (
                  <Icon
                    name="check"
                    size={30}
                    color="#fff"
                    style={{ opacity: item.isSelected ? 1 : 0.5 }}
                  />
                )}
              </TouchableOpacity>
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
