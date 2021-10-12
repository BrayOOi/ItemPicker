import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import stylesFn from './styles';

import { ItemType } from '../../store/items/types';
import { RootState } from '../../store';
import useTheme from '../../hooks/useTheme';

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

  const theme = useTheme();
  const styles = stylesFn(theme, !isShow);

  return (
    <View style={styles.selectedItemContainer}>
      {selectedItem && (
        <View>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={styles.listTitleColor}>
            {selectedItem.title}
          </Text>
          <Text style={styles.listTitleColor}>{selectedItem.details}</Text>
        </View>
      )}
  </View>
  );
};

export default SelectedItem;
