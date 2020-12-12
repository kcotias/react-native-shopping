import React, { useEffect, useState } from 'react';
import { View, Text, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import { useLazyQuery } from '@apollo/client';
import { GOOGLE_API_KEY } from '@env';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Header, CustomInput } from '../../../../components';
import { Colors } from '../../../../constants';
import Logo from '../../components/Logo';
import styles from './styles';
import { POC_QUERY } from '../../queries';
import { RootStackParamList } from '../../../../types';

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const Home: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
  const [typedAdress, setTypedAdress] = useState('');

  useEffect(() => {
    Location.setGoogleApiKey(GOOGLE_API_KEY.toString());
  }, []);

  const algorithm = 'NEAREST';
  const [getPoc, { loading, data }] = useLazyQuery(POC_QUERY, {
    onCompleted: (): any => navigation.navigate('ProductsList', { pocId: data.pocSearch[0].id }),
  });

  // Avoided using inline arrow functions or binding on jsx to improve performance
  // Whenever a function is created, the previous function is garbage collected.
  // Rerendering many elements might create jank in animations.
  // Using an inline arrow function will cause PureComponents, and memo
  // to rerender anyway.
  async function onConfirm() {
    if (typedAdress && typedAdress === 'Rua Américo Brasiliense, São Paulo') {
      const now = new Date().toISOString();
      let location;
      try {
        const response = await Location.geocodeAsync(typedAdress, { useGoogleMaps: true });
        location = response[0];
      } catch (e) {
        Alert.alert('Oops', 'Algo deu errado, verifique o endereço digitado.');
      }
      getPoc({
        variables: location && {
          now,
          algorithm,
          lat: JSON.stringify(location.latitude),
          long: JSON.stringify(location.longitude),
        },
      });
    } else {
      Alert.alert(
        'Oops',
        'Verifique o endereço digitado, lembre que temos que usar um endereço especifico! :)',
      );
    }
  }

  function handleChangeText(text: string) {
    setTypedAdress(text);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <LinearGradient style={styles.gradient} colors={['#fe6277', '#ffbf6f']}>
        <Header />
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.welcomeText}>Bem vindo a</Text>
          <Text style={styles.appTitle}>
            TASTY<Text style={{ color: Colors.pallete.tertiary }}>DRINKS</Text>
          </Text>
        </View>
        <CustomInput
          onChangeText={handleChangeText}
          placeholder="Digite: Rua Américo Brasiliense, São Paulo"
        />
        <Button
          onPress={onConfirm}
          title="Confirmar"
          style={styles.confirmButton}
          textStyle={styles.buttonText}
          isLoading={loading}
        />
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

// Since the component will always be created with the same props, memoizing it is
// the best to avoid unecessary rerender.
export default React.memo(Home);
