import React from 'react';
import { ScrollView, Text, Pressable } from 'react-native';
import { Colors } from '../../../../constants';
import styles from './styles';

interface CategoriesListProps {
  activeButton: any;
  onButtonPress: () => void;
  categories: any;
}

const CategoriesList: React.FC<CategoriesListProps> = ({
  activeButton,
  onButtonPress,
  categories,
}: CategoriesListProps) => {
  return (
    <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
      {categories?.map((item: Object, index: number) => {
        const isActive = item.id === activeButton;

        return (
          <Pressable
            key={item.id}
            style={[
              styles.buttonContainer,
              {
                backgroundColor: isActive ? Colors.pallete.secondary : '#fff',
                marginLeft: index === 0 ? 16 : 0,
              },
            ]}
            onPress={() => onButtonPress(item.id)}>
            <Text style={[styles.title, { color: isActive ? '#fff' : Colors.pallete.secondary }]}>
              {item.title}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default CategoriesList;
