import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { persistCache } from 'apollo3-cache-persist';
import AppLoading from 'expo-app-loading';
import { API_URL } from '@env';
import Navigation from './navigation';
import { Colors } from './constants';

export default function App() {
  const cache = new InMemoryCache();
  const [loadingCache, setLoadingCache] = useState(true);

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false));
  }, []);

  const client = new ApolloClient({
    uri: API_URL,
    cache,
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
  });

  if (loadingCache) {
    return <AppLoading />;
  }
  return (
    <>
      <ApolloProvider client={client}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{ flex: 0, backgroundColor: Colors.pallete.primary }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.pallete.secondary }}>
          <Navigation />
        </SafeAreaView>
      </ApolloProvider>
    </>
  );
}
