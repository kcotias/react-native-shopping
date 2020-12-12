import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

interface CustomInputProps {
  onChangeText: (text: string) => void;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  onChangeText,
  placeholder,
}: CustomInputProps) => (
  <TextInput onChangeText={onChangeText} placeholder={placeholder} style={styles.textInput} />
);

export default CustomInput;
