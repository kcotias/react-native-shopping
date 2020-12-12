import React from 'react';
import { ScrollView, Text, Pressable } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';
import { Colors } from '../../../../constants';
import styles from './styles';

type Category = {
  id: number;
  title: string;
};
interface CategoriesListProps {
  activeButton: number;
  onButtonPress: (id: number) => void;
  categories: Category[];
  isLoading: boolean;
}

const CategoriesList: React.FC<CategoriesListProps> = ({
  activeButton,
  onButtonPress,
  categories,
  isLoading,
}: CategoriesListProps) => {
  return (
    <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
      {!isLoading &&
        categories?.map((item: Category, index: number) => {
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
      {isLoading && (
        <SkeletonContent
          containerStyle={{ flexDirection: 'row' }}
          layout={[{}, {}, {}, {}].map((item, index) => {
            return {
              key: index,
              ...styles.buttonContainer,
              marginLeft: index === 0 ? 16 : 0,
            };
          })}
          isLoading
        />
      )}
    </ScrollView>
  );
};

export default React.memo(CategoriesList);
