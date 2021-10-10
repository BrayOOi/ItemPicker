import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

import { ItemType } from '../../store/items/types';
import { RootState } from '../../store';

interface SelectedItemProps {
  isShow: boolean;
}

const SelectedItem: React.FC<SelectedItemProps> = ({
  isShow,
}) => {
  const { page } = useSelector((state: RootState) => state.system);
  const items = useSelector((state: RootState) => state.items);
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);

  useEffect(() => {
    if (page === 'select') {
      const selectedItems = items.filter(item => item.isSelected);
      const randomNum = Math.floor(Math.random() * selectedItems.length);
      setSelectedItem(selectedItems[randomNum]);
    }
  }, [page]);

  return (
    <View
      style={[
        styles.selectedItemContainer,
        {
          width: isShow ? '48%' : 0,
          padding: isShow ? 20 : 0,
        }
      ]}>
      {selectedItem && (
        <View>
          <Text ellipsizeMode="tail" numberOfLines={1}>
            {selectedItem.title}
          </Text>
          <Text>{selectedItem.details}</Text>
        </View>
      )}
  </View>
  );
};

export default SelectedItem;
