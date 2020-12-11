import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import { gql, useLazyQuery } from '@apollo/client';
import { Button, Header } from '../../../../components';
import { Colors, Layout } from '../../../../constants';
import Logo from '../../components/Logo';

interface HomeProps {}

const POC_QUERY = gql`
  query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
    }
  }
`;

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [location, setLocation] = useState([]);
  const [typedAdress, setTypedAdress] = useState('');

  const now = new Date().toLocaleDateString();
  const algorithm = 'NEAREST';

  const [getPoc, { loading, data }] = useLazyQuery(POC_QUERY, {
    variables: location.length > 0 && {
      now: '2017-08-01T20:00:00.000Z',
      algorithm,
      lat: JSON.stringify(location[0].latitude),
      long: JSON.stringify(location[0].longitude),
    },
  });

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#fe6277', '#ffbf6f']}>
      <Header />
      <View style={{ height: Layout.window.height / 3.5 }}>
        <Logo />
      </View>
      <View
        style={{
          paddingHorizontal: Layout.spacing.paddingX,
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 30,
        }}>
        <Text
          style={{
            fontWeight: '800',
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
          }}>
          Welcome to
        </Text>
        <Text
          style={{
            fontWeight: '800',
            color: 'white',
            fontSize: 28,
            textAlign: 'center',
          }}>
          TASTY<Text style={{ color: Colors.pallete.tertiary }}>DRINKS</Text>
        </Text>
      </View>
      <TextInput
        onChangeText={(text) => setTypedAdress(text)}
        placeholder="Where do you wish to receive your deliver?"
        style={{
          backgroundColor: 'white',
          height: 60,
          margin: Layout.spacing.paddingX,
          borderRadius: 50,
          paddingLeft: 20,
          fontSize: 16,
          marginBottom: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      />
      <Button
        onPress={async () => {
          Location.setGoogleApiKey('AIzaSyA4Vt_tRWA6f3WHfhxjyLtEZ80A4SaKTBs');
          const response = await Location.geocodeAsync(typedAdress, { useGoogleMaps: true });
          setLocation(response);
          getPoc();
          // navigation.navigate('ProductsList', {id: data.pocSearch.})
        }}
        title="Confirm"
        style={{
          backgroundColor: Colors.pallete.primaryDark,
          marginHorizontal: Layout.spacing.paddingX + 40,
          borderRadius: 50,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        textStyle={{ fontSize: 20, fontWeight: '700', color: 'white' }}
      />
    </LinearGradient>
  );
};

export default Home;
