import * as React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Layout } from '../../constants';
import Button from '../Button';

interface HeaderProps {
  hasBackButton?: boolean;
  hasTitle?: boolean;
}

const Home: React.FC<HeaderProps> = ({ hasBackButton, hasTitle }: HeaderProps) => {
  return (
    <View
      style={{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Layout.spacing.paddingX,
      }}>
      <View>
        {hasBackButton && <Button onPress={() => alert('back')} iconName="chevron-back-outline" />}
      </View>
      {hasTitle && (
        <Text style={{ fontWeight: '700', fontSize: 20, color: 'white' }}>Ká Delivery</Text>
      )}
      <Button onPress={() => alert('modal')} iconName="information-circle-outline" />
    </View>
  );
};

export default Home;
