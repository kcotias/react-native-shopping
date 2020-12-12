import React from 'react';
import { ScrollView, Text, Pressable } from 'react-native';
import { Colors } from '../../../../constants';

const CategoriesList = ({ activeButton, onButtonPress, categories }) => {
  return (
    <ScrollView
      style={{ flexGrow: 0, marginBottom: 20, height: 45 }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {categories?.map((item, index) => {
        const isActive = item.id === activeButton;

        return (
          <Pressable
            key={item.id}
            style={{
              backgroundColor: isActive ? Colors.pallete.secondary : '#fff',
              height: 40,
              width: 100,
              marginRight: 10,
              borderRadius: 15,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: index === 0 ? 16 : 0,
            }}
            onPress={() => onButtonPress(item.id)}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '800',
                color: isActive ? '#fff' : Colors.pallete.secondary,
              }}>
              {item.title}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default CategoriesList;
