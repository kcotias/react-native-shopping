import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Layout, Colors } from '../../../../constants';

const Logo = () => (
  <>
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        opacity: 0.2,
        height: 200,
        width: 200,
        borderRadius: 100,
        marginTop: 30,
        right: Layout.window.width / 1.8,
      }}
    />
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        opacity: 0.2,
        height: 350,
        width: 350,
        borderRadius: 200,
        marginTop: 90,
        right: Layout.window.width / 1.8,
      }}
    />
    <View
      style={{
        position: 'absolute',
        left: Layout.window.width / 2.8,
        height: 130,
        width: 130,
        borderRadius: 100,
        backgroundColor: 'white',
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        top: Layout.window.height / 8.5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <View
        style={{
          height: 105,
          width: 105,
          borderRadius: 100,
          backgroundColor: 'white',
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
        }}>
        <Ionicons name="beer-outline" color="#ffe135" size={50} />
      </View>
    </View>
  </>
);

export default Logo;
