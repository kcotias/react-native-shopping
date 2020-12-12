import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../Button';
import styles from './styles';

interface HeaderProps {
  hasBackButton?: boolean;
  onBackPress?: () => void;
  hasTitle?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hasBackButton, hasTitle, onBackPress }: HeaderProps) => (
  <View style={styles.container}>
    <View>{hasBackButton && <Button onPress={onBackPress} iconName="chevron-back-outline" />}</View>
    {hasTitle && <Text style={styles.title}>Tasty Drinks</Text>}
  </View>
);

export default React.memo(Header);
