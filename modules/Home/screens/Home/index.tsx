import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import { gql, useLazyQuery } from '@apollo/client';
import { GOOGLE_API_KEY } from '@env';
import { Button, Header, CustomInput } from '../../../../components';
import { Colors } from '../../../../constants';
import Logo from '../../components/Logo';
import styles from './styles';

interface HomeProps {
  navigation: any;
}

const POC_QUERY = gql`
  query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
    }
  }
`;

const Home: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
  const [typedAdress, setTypedAdress] = useState('');

  useEffect(() => {
    Location.setGoogleApiKey(GOOGLE_API_KEY.toString());
  }, []);

  const algorithm = 'NEAREST';
  const [getPoc, { loading, data }] = useLazyQuery(POC_QUERY);

  // Avoided using inline arrow functions or binding on jsx to improve performance
  // Whenever a function is created, the previous function is garbage collected.
  // Rerendering many elements might create jank in animations.
  // Using an inline arrow function will cause PureComponents, and memo
  // to rerender anyway.
  async function onConfirm() {
    const now = new Date().toISOString();
    let location;
    try {
      const response = await Location.geocodeAsync(typedAdress, { useGoogleMaps: true });
      location = response[0];
    } catch (e) {
      console.log(e);
      Alert.alert('Oops', 'Something went wrong, make you sure the adress is correct');
    }
    getPoc({
      variables: location && {
        now,
        algorithm,
        lat: JSON.stringify(location.latitude),
        long: JSON.stringify(location.longitude),
      },
    });
    // navigation.navigate('ProductsList', {id: data.pocSearch.})
  }

  function handleChangeText(text: string) {
    setTypedAdress(text);
  }

  return (
    <LinearGradient style={styles.gradient} colors={['#fe6277', '#ffbf6f']}>
      <Header />
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.appTitle}>
          TASTY<Text style={{ color: Colors.pallete.tertiary }}>DRINKS</Text>
        </Text>
      </View>
      <CustomInput
        onChangeText={handleChangeText}
        placeholder="Where do you wish to receive your deliver?"
      />
      <Button
        onPress={onConfirm}
        title="Confirm"
        style={styles.confirmButton}
        textStyle={styles.buttonText}
        isLoading={loading}
      />
    </LinearGradient>
  );
};

// Since the component will always be created with the same props, memoizing it is
// the best to avoid unecessary rerender.
export default React.memo(Home);
