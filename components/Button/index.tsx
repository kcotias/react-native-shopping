import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps {
  iconName?: string;
  title?: string;
  titleColor?: string;
  iconColor?: string;
  onPress: () => void;
  style?: any;
  textStyle?: any;
}

const Button: React.FC<ButtonProps> = ({
  iconName,
  iconColor,
  title,
  titleColor,
  onPress,
  style,
  textStyle,
}: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={
          style || {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: !iconName ? 20 : 0,
          }
        }>
        {iconName && <Ionicons name={iconName} size={28} color={iconColor || 'white'} />}
        {title && (
          <Text
            style={
              textStyle || {
                color: titleColor || 'white',
                fontSize: 16,
                fontWeight: '500',
              }
            }>
            {title}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default Button;
