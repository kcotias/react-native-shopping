import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

interface CustomInputProps {
  onChangeText: (text: string) => void;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = (props: CustomInputProps) => (
  <TextInput
    {...props}
    onChangeText={props.onChangeText}
    placeholder={props.placeholder}
    style={styles.textInput}
    placeholderTextColor="gray"
  />
);

export default CustomInput;
