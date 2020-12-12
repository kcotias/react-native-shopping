import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const Logo: React.FC = () => (
  <>
    <View style={styles.smallOpaqueCircle} />
    <View style={styles.largeOpaqueCircle} />
    <View style={styles.logoOuterCircle}>
      <View style={styles.logoInnerCircle}>
        <Ionicons name="beer-outline" color="#ffe135" size={50} />
      </View>
    </View>
  </>
);

export default React.memo(Logo);
