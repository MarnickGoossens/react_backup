import { View, StyleSheet } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import configData from "@/gql/config.json";

const client = new ApolloClient({
  uri: configData.qlendpoint,
  headers: {
    'x-hasura-admin-secret': configData.qlkey
  },
  cache: new InMemoryCache()
});

import ListContinents from '@/components/ListContinents';

export default function Index() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <ListContinents />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  }
});