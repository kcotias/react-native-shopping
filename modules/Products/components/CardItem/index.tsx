import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '../../../../components';
import { Colors } from '../../../../constants';
import { Product } from '../../../../types';
import styles from './styles';

interface CardItemProps {
  item: Product;
}

const CardItem: React.FC<CardItemProps> = ({ item }: CardItemProps) => {
  const [counter, setCounter] = useState(0);

  function onCounterPress(operation: string) {
    if (operation === 'increase') {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.textArea}>
        <Text ellipsizeMode="tail" numberOfLines={2} style={styles.itemTitle}>
          {item.title}
        </Text>
        <Text style={styles.itemPrice}>R$ {item.productVariants[0].price}</Text>
        <View style={styles.counterArea}>
          {counter > 0 && (
            <>
              <Button
                testID="decrease"
                onPress={() => onCounterPress('decrease')}
                iconName="remove-outline"
                iconColor={Colors.pallete.primaryDark}
              />
              <Text testID="counter" style={{ marginHorizontal: 3 }}>
                {counter}
              </Text>
            </>
          )}
          <Button
            testID="increase"
            onPress={() => onCounterPress('increase')}
            iconName="add-outline"
            iconColor={Colors.pallete.primaryDark}
          />
        </View>
      </View>
      <View style={styles.imgArea}>
        <Image resizeMode="contain" source={{ uri: item.images[0].url }} style={styles.img} />
      </View>
    </View>
  );
};

export default CardItem;
