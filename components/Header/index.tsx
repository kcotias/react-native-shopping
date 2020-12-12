import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../Button';
import styles from './styles';

interface HeaderProps {
  hasBackButton?: boolean;
  hasTitle?: boolean;
}

const Home: React.FC<HeaderProps> = ({ hasBackButton, hasTitle }: HeaderProps) => (
  <View style={styles.container}>
    <View>
      {hasBackButton && <Button onPress={() => alert('back')} iconName="chevron-back-outline" />}
    </View>
    {hasTitle && <Text style={styles.title}>Tasty Drinks</Text>}
    <Button onPress={() => alert('modal')} iconName="information-circle-outline" />
  </View>
);

export default Home;
