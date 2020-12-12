import * as React from 'react';
import { Pressable, Text, View, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

interface ButtonProps {
  iconName?: string;
  title?: string;
  titleColor?: string;
  iconColor?: string;
  onPress: () => void;
  style?: any;
  textStyle?: any;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  iconName,
  iconColor,
  title,
  titleColor,
  onPress,
  style,
  textStyle,
  isLoading,
}: ButtonProps) => (
  <Pressable onPress={onPress}>
    <View style={style || { ...styles.container, paddingHorizontal: !iconName ? 20 : 0 }}>
      {iconName && <Ionicons name={iconName} size={28} color={iconColor || 'white'} />}
      {title && !isLoading && (
        <Text style={textStyle || { ...styles.title, color: titleColor || 'white' }}>{title}</Text>
      )}
      {isLoading && <ActivityIndicator color="#fff" />}
    </View>
  </Pressable>
);

export default Button;
